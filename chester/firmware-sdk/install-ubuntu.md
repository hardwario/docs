---
slug: /installation-on-ubuntu
title: Installation on Ubuntu
---
import Image from '@theme/IdealImage';

# Installation on Ubuntu

The following chapter will guide you through the **CHESTER SDK** installation on **Ubuntu**. It has been tested on versions **Ubuntu 20.04 LTS** and **Ubuntu 22.04 LTS**.

:::caution

Before you begin, make sure you comply with the chapter [Requirements](./requirements.md).

:::

## Installation Steps

The installation steps are split into multiple sections. At the end, you will be able to build the `blinky` sample from the **CHESTER SDK**.

### Set Up Device Rules

1. Open the **Terminal** application.

1. Get the package with the **udev** rules:

   ```
   wget https://github.com/NordicSemiconductor/nrf-udev/releases/download/v1.0.1/nrf-udev_1.0.1-all.deb
   ```

1. Install the package with the **udev** rules:

   ```
   sudo dpkg -i nrf-udev_1.0.1-all.deb
   ```

### Install Packages

1. Remove the package with the **udev** rules:

   ```
   rm nrf-udev_1.0.1-all.deb
   ```

1. Install the following **APT** packages:

   ```
   sudo apt install --no-install-recommends git cmake ninja-build gperf ccache dfu-util device-tree-compiler wget python3-dev python3-pip python3-setuptools python3-tk python3-wheel xz-utils file make gcc gcc-multilib g++-multilib libsdl2-dev
   ```

### Install Toolchain

1. Create a target directory for the toolchain:

   ```
   mkdir -p $HOME/.local/opt
   ```

1. Download and unpack the toolchain:

   ```
   wget -c https://github.com/zephyrproject-rtos/sdk-ng/releases/download/v0.14.1/zephyr-sdk-0.14.1_linux-x86_64.tar.gz -O - | tar -xz --directory $HOME/.local/opt
   ```

1. Run the **Zephyr SDK** bundle setup script:

   ```
   $HOME/.local/opt/zephyr-sdk-0.14.1/setup.sh
   ```

## Create Application

1. Create the directory for your application and switch to it:

   ```
   mkdir chester-app && cd chester-app
   ```

   :::tip

   Change the parameter `chester-app` to any desired name for your project directory.

   :::

1. Initialize the **Python** virtual environment:

   ```
   python3 -m venv venv
   ```

1. Activate the **Python** virtual environment:

   ```
   source venv/bin/activate
   ```

   :::caution

   When you close the shell (or your text editor with the integrated terminal), you must reactivate the virtual Python environment. Call this command (used in the procedure above): `source venv/bin/activate`. In the future, you may have various **West** workspaces with different versions of the **Python** packages, and thanks to the virtual environment concept, these will not suffer from version conflicts.

   :::

1. Upgrade the **pip** package:

   ```
   pip install --upgrade pip
   ```

1. Install the **West** tool:

   ```
   pip install west
   ```

1. Initialize the **West** workspace where you want to start your project:

   ```
   west init -m git@gitlab.hardwario.com:chester/skeleton.git --manifest-rev main
   ```

1. Set the default board to **CHESTER (nRF52840)**:

   ```
   west config build.board chester_nrf52840
   ```

1. Synchronize the **West** workspace:

   ```
   west update
   ```

1. Export **Zephyr** environment:

   ```
   west zephyr-export
   ```

1. Install the **Python** dependencies:

   ```
   pip install -r zephyr/scripts/requirements.txt
   ```

   ```
   pip install -r nrf/scripts/requirements.txt
   ```

   ```
   pip install -r bootloader/mcuboot/scripts/requirements.txt
   ```

   ```
   pip install -r chester/scripts/requirements.txt
   ```

## Test Build

1. Go to the `blinky` sample directory:

   ```
   cd chester/samples/blinky
   ```

1. Check that you can build the sample:

   ```
   west build
   ```

   The final build result should look like this:

   ```
   Memory region         Used Size  Region Size  %age Used
           FLASH:      112320 B         1 MB     10.71%
            SRAM:       60576 B       256 KB     23.11%
        IDT_LIST:          0 GB         2 KB      0.00%
   ```
