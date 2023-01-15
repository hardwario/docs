---
slug: /github-actions-ci
title: Github Actions CI
---
import Image from '@theme/IdealImage';

# GitHub Actions CI

:::info

This chapter focuses on creating and understanding Github Actions Workflow for your Chester application.

:::

## Requesting Access to Skeleton Application and SDK

You will need access to our **Application Skeleton** and **Chester SDK** and download the **Skeleton**. For this please [**Contact us**](https://www.hardwario.com/contact/).

## Creating a GitHub Repository

To begin with your application development you will need your own [**Repository on GitHub.**](https://github.com/new)


After you create your repository you will get a set of commands to execute so your repository is correctly set up. It will look something like this: (You just need to replace the URL)

```
git init
git add -A
git commit -m "first commit"
git branch -M main
git remote add origin YOUR_REPOSITORY_URL
git push -u origin main
```

## Workflow File

In your application folder create a `.github` folder, in it create a `workflows` folder and finally in it, create `main.yml` file.

:::info

We will go over each part of the workflow file. You can find the complete file at the bottom of the page.

:::

### Beginning of the File

The first part of the file is just so you can specify when the workflow should run.

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

We will use **hardwario console** to upload the final firmware to the cloud so it can be sent to you via email. For this, you will need to set up **HARDWARIO Cloud Token**. You will also need to generate SSH keys and add them to your GitLab and GitHub.

#### HARDWARIO Cloud Token
To get your Token go to [**HARDWARIO Cloud**](https://hardwario.cloud/#/login), log in and in the side menu select **Profile**. You should see **API token**, click **Copy** next to it and go back to GitHub Repository.

Back in the repository go to **Settings**. In the side menu, click on **Secrets and variables** and then **Actions**. Create **New Repository Secret**, name it `HARDWARIO_CLOUD_TOKEN` and paste your **Cloud API Token** as the **Secret**.

Add this to your workflow file

```
env:
  HARDWARIO_CLOUD_TOKEN: ${{ secrets.HARDWARIO_CLOUD_TOKEN }}
```

#### SSH Key

This key will be used to access SDK repository on our GitLab

You need to generate the key by running the following command in your terminal

```
ssh-keygen -t rsa -b 4096 -C "CI_TOKEN"
```

:::important

You will be prompted to select password but leave it empty as CI can't use it later

:::

There should be two files created in the location that you set while creating the key. One should be without a file extension, which is your private key, and the second one should have an extension `.pub`, which is your public key.

Open the file without the extension in your preferred text editor or use `cat` command if you have it (the file should start with `-----BEGIN OPENSSH PRIVATE KEY-----`). Go to the GitHub Actions secrets, same [**as in the previous step with HARDWARIO Cloud Token**](#hardwario-cloud-token) and create a new secret named `SSH_KEY`. Paste the contents of the file as the secret value and click **Add Secret**.

You can also add another secret named `SSH_HOST` with the value of `https://gitlab.hardwario.com`.

Finally, go to [our GitLab](https://gitlab.hardwario.com) and log in. In the top right corner click on your **Profile** and select **Preferneces**. In the **Side Menu** select **SSH Keys** and paste the contents of the second generated file, the one with the extension `.pub` into the **Key field** (the file should start with something like `ssh-rsa`). You can name it however you want, set an expiration date and click **Add key**.

#### SSH Known Hosts

The last secret that you have to add is `KNOWN_HOSTS`.

You will need to run another command in your terminal

```
ssh-keyscan gitlab.hardwario.com
```

Paste everything that you get from that command as the secret value and click **Add Secret**.

### CI Job

:::info

This part is focusing on the job itself (what will be done in the workflow).

:::

First, we will name the job and set the runner to `ubuntu-latest` and the container to the `hardwario/nrf-connect-sdk-build:v2.2.0-6`. This setup ensures that you have all the needed tools for the compilation of the firmware.

```
jobs:
  build-chester-app:
    runs-on: ubuntu-latest
    container:
      image: hardwario/nrf-connect-sdk-build:v2.2.0-6
    steps:
```

The checkout step ensures that your repository is cloned onto the runner machine. It will be cloned into the `vendor` folder, so be mindful that when working with the original folder you first have to switch to the folder `vendor`.

```
    - uses: actions/checkout@v3
      with:
        path: vendor
```

We need to setup SSH key for CI to be able to access the SDK repository on HARDWARIO GitLab. We will use the secrets that you created in the [**Setup Env**](#setup-env) step

```
    - name: Install SSH key
      uses: shimataro/ssh-key-action@v2
      with:
        key: ${{ secrets.SSH_KEY }}
        name: id_rsa
        known_hosts: ${{ secrets.KNOWN_HOSTS }}
```

Next, the runner will install **HARDWARIO** python package that is needed for the firmware upload to the cloud.

```
    - name: Install HARDWARIO package
      run: pip install hardwario
```

The next steps take care of initializing West and updating it to the latest version.

```
    - name: Initialize West workspace
      run: west init -l --mf west.yml vendor

    - name: Synchronize West workspace
      run: west update
```

Finally, this step will build the application and create the final firmware with the firmware name set to the name of repository and version to the release tag name.

```
    - name: Build application
      env:
        FW_NAME: ${{ github.event.repository.name }}
        FW_VERSION: ${{ github.event.release.tag_name }}
      run: west build -b chester_nrf52840 -d vendor/application/build vendor/application
```

The last step is executed when the **release of the application is made**. This will add the tag name as the firmware version.

:::warning

The tag name needs to be in the format `vMAJOR.MINOR.PATCH` for example `v1.0.0`.

:::

```
    - name: Upload application
      if: ${{ github.event_name == 'release' }}
      working-directory: vendor/application
      run: hardwario chester app fw upload --name ${{ github.event.repository.name }} --version ${{ github.event.release.tag_name }}
```

:::info

You can also add some additional steps in between the steps mentioned above.

If you need to install something with `apt install` you need to run `apt update` first.

:::

## Accessing firmware

After you implement the workflow file you will get an email with compiled firmware every time you push something to **main** branch.

In this email, you will find information on how to flash your compiled firmware into your **Chester**.

:::tip

If you need more information on how to flash firmware into **Chester** you can visit [**Firmware Flashing**](../firmware-flashing/index.md) chapter

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
        path: vendor

    - name: Install SSH key
      uses: shimataro/ssh-key-action@v2
      with:
        key: ${{ secrets.SSH_KEY }}
        name: id_rsa
        known_hosts: ${{ secrets.KNOWN_HOSTS }}

    - name: Install HARDWARIO package
      run: pip install hardwario

    - name: Initialize West workspace
      run: west init -l --mf west.yml vendor

    - name: Synchronize West workspace
      run: west update

    - name: Build application
      env:
        FW_NAME: ${{ github.event.repository.name }}
        FW_VERSION: ${{ github.event.release.tag_name }}
      run: west build -b chester_nrf52840 -d vendor/application/build vendor/application

    - name: Upload application
      if: ${{ github.event_name == 'release' }}
      working-directory: vendor/application
      run: hardwario chester app fw upload --name ${{ github.event.repository.name }} --version ${{ github.event.release.tag_name }}
```

