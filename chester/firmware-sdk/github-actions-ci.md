---
slug: /github-actions-ci
title: Github Actions CI
---
import Image from '@theme/IdealImage';

# Github Actions CI

:::info

This chapter focuses on creating and understanding Github Actions Workflow for your Chester application.

:::

## Requesting Access to Skeleton Application and SDK

You will need access to our **Application Skeleton** and **Chester SDK** and download both of these. For this please [**Contact us**](https://www.hardwario.com/contact/).

## Creating a GitHub Repository

To begin with your application development you will need your own [**Private Repository on GitHub.**](https://github.com/new)

:::warning

Your repository must be **Private**

:::

After you create your repository you will get a set of commands to execute so your repository is correctly set up. It will look something like this: (You just need to replace the URL)

```
git init
git add .
git add -A
git commit -m "first commit"
git branch -M main
git remote add origin {YOUR REPOSITORY URL}
git push -u origin main
```

You will need to do this for **Skeleton App** and for **SDK** too

## Workflow File

In your application folder create a `.github` folder, in it create a `workflows` folder and finally in it, create `main.yml` file.

:::info

We will go over each part of the workflow file. You can find the complete file at the bottom of the page.

:::

### Beginning of the File

First part of the file is just so you can specify when the workflow should run.

This example will run on **Push to the main branch** and on **Published Release**.

```
name: main

on:
  push:
    branches:
      - main
  release:
    types: [ published ]
  workflow_dispatch:
```

### Setup Env

We will use **hardwario console** to upload the final firmware to cloud so it can be send to you via email. Fort this you will need to setup **HARDWARIO Cloud Token**.

To get your Token go to [**HARDWARIO Cloud**](https://hardwario.cloud/#/login), log in and in the side menu select **Profile**. You should see **API token**, click **Copy** next to it and go back to GitHub Repository.

Back in the repository go to **Settings**. In the side menu click on **Secrets** and the **Actions**. Create **New Repository Secret**, name it `HARDWARIO_CLOUD_TOKEN` and paste your **Cloud API Token** as the **Secret**.

```
env:
  HARDWARIO_CLOUD_TOKEN: ${{ secrets.HARDWARIO_CLOUD_TOKEN }}
```

### CI Job

:::info

This part is focusing on the job itself (what will be done in the workflow).

:::

First we will name the job and set the runner to `ubuntu-latest` and container to the `hardwario/nrf-connect-sdk-build:v2.2.0-6`. This setup ensures that you have all the needed tools for the compilation of the firmware.

```
jobs:
  build-chester-app:
    runs-on: ubuntu-latest
    container:
      image: hardwario/nrf-connect-sdk-build:v2.2.0-6
    steps:
```

The checkout step ensures that your repository is cloned onto the runner machine. It will be cloned into the `application` folder, so be mindful of that when working with the application you first have to switch into the folder with `cd application`.

```
    - uses: actions/checkout@v3
      with:
        path: application
```

Next, the runner will install **HARDWARIO** python packages that are needed for the firmware upload to the cloud.

```
    - name: Install hardwario packages
      run: |
        pip install hardwario hardwario-chester hardwario-cloud hardwario-common
```

The next step is to prepare the `west.yml` file for CI by replacing the normal data with GitHub Access Token.

You will need to create a secret the same way as you did with the `HARDWARIO_CLOUD_TOKEN`. This time the secret will have name `CI_TOKEN`.
You will have to [**create the Access Token**](https://docs.github.com/en/enterprise-server@3.4/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token#creating-a-personal-access-token). After you create it, just copy and paste it into the `CI_TOKEN` secret.

The last thing you need to do in this step is to replace the `USERNAME_OR_ORGANIZATION` with the name of the **organization** or **user** that is an **owner of both repositories** (Skeleton and SDK).

```
    - name: Patch west.yml File
      run: |
        sed -r -i'' "s/git@github.com:USERNAME_OR_ORGANIZATION/https:\/\/${{secrets.CI_TOKEN}}@github.com\/USERNAME_OR_ORGANIZATION/g" application/west.yml
        cat application/west.yml
```

Next steps takes care of configuring west as set up in the previous step and setting the development board to **Chester**.

```
    - name: Configure West
      run: |
        cd application
        west init -l --mf west.yml .
        west update
        west config build.board chester_nrf52840
```

Finally, this step will build the application and create the final firmware

```
    - name: Build Application
      run: cd application ; west build
```

The last two steps are almost the same. The first one is executed when the **release of the application is made**. This will add the tag name as the firmware version.

:::warning

The tag name needs to be in the format `vMAJOR.MINOR.PATCH` for example `v1.0.0`.

:::

The second one is executed every time some changes are pushed into the repository. This firmware will always have the version set to `v0.0.1`.

```
    - name: Export Application
      if: ${{ github.event_name == 'release' }}
      run: cd application ; hardwario chester app fw upload --name "${{ github.event.repository.name }}" --version "${{ github.event.release.tag_name }}"

    - name: Export Application
      if: ${{ github.event_name != 'release' }}
      run: cd application ; hardwario chester app fw upload --name "${{ github.event.repository.name }}" --version "v0.0.1"
```

:::info

You can also add some additional steps in between the steps mentioned above.

If you need to install something with `apt install` you need to run `apt update` first.

:::


## Full Workflow File

```
name: main

on:
  push:
    branches:
      - main
  release:
    types: [ published ]
  workflow_dispatch:

env:
  HARDWARIO_CLOUD_TOKEN: ${{ secrets.HARDWARIO_CLOUD_TOKEN }}

jobs:
  build-chester-app:
    runs-on: ubuntu-latest
    container:
      image: hardwario/nrf-connect-sdk-build:v2.2.0-6
    steps:
    - uses: actions/checkout@v3
      with:
        path: application

    - name: Install hardwario packages
      run: |
        pip install hardwario hardwario-chester hardwario-cloud hardwario-common

    - name: Patch west.yml File
      run: |
        sed -r -i'' "s/git@github.com:YOUR_USERNAME/https:\/\/${{secrets.CI_TOKEN}}@github.com\/YOUR_USER/g" application/west.yml
        cat application/west.yml

    - name: Configure West
      run: |
        cd application
        west init -l --mf west.yml .
        west update
        west config build.board chester_nrf52840

    - name: Build Application
      run: cd application ; west build

    - name: Export Application
      if: ${{ github.event_name == 'release' }}
      run: cd application ; hardwario chester app fw upload --name "${{ github.event.repository.name }}" --version "${{ github.event.release.tag_name }}"

    - name: Export Application
      if: ${{ github.event_name != 'release' }}
      run: cd application ; hardwario chester app fw upload --name "${{ github.event.repository.name }}" --version "v0.0.1"

```

