---
slug: installation-on-windows
title: Installation on Windows
---

# Installation on Windows

The following chapter will guide you through the CHESTER SDK installation on Ubuntu. It has been tested on **Windows versions 10 and 11**.

:::caution

Before you begin, make sure you comply with the chapter [Requirements](requirements).

:::

## Installation Steps

1. Install the latest stable Python release from the [official Python site](https://www.python.org/downloads/windows/).

1. Install Chocolatey package manager software:

   1. Start PowerShell.

   1. Run `Get-ExecutionPolicy`. If it returns `Restricted`, then run `Set-ExecutionPolicy AllSigned`.

   1. Execute the following command:

      ```
      Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
      ```
   1. Wait a few seconds for the command to complete.

   1. You are ready to use Chocolatey if you don't see any errors.

1. Disable global confirmation to avoid having to confirm the installation of individual programs:

   ```
   choco feature enable -n allowGlobalConfirmation
   ```

1. Use `choco` to install the required dependencies:

   ```
   choco install cmake --installargs 'ADD_CMAKE_TO_PATH=System'
   choco install ninja gperf python git dtc-msys2 wget unzip
   ```

1. Go to your home directory:

   ```
   cd %HOMEPATH%
   ```

1. Download the toolchain:

   ```
   wget https://github.com/zephyrproject-rtos/sdk-ng/releases/download/v0.14.1/zephyr-sdk-0.14.1_windows-x86_64.zip
   ```

1. Unzip the toolchain:

   ```
   unzip zephyr-sdk-0.14.1_windows-x86_64.zip
   ```

1. Go to the toolchain director:

   ```
   cd zephyr-sdk-0.14.1
   ```

1. Run the Zephyr SDK bundle setup script:

   ```
   setup.cmd
   ```

1. Create the directory for your application and switch to it:

   ```
   mkdir chester-app && cd chestep-app
   ```

   :::tip

   Change the parameter `chester-app` to any desired name for your project directory.

   :::

1. Initialize the Python virtual environment:

   ```
   python3 -m venv venv
   ```

1. Activate the Python virtual environment:

   ```
   source venv/bin/activate
   ```

   :::caution

   When you close the shell (or your text editor with the integrated terminal), you will need to reactivate the virtual Python environment. Just call this command (used in the procedure above): `source venv/bin/activate`. This is a small penalty for great flexibility. In the future, you may have various West workspaces with different versions of the tools, and thanks to the virtual environment, these will not be in version conflict.

   :::

1. Install the West tool:

   ```
   pip install west
   ```

1. Initialize the West workspace where you want to start your project:

   ```
   west init -m git@gitlab.hardwario.com:chester/skeleton.git --manifest-rev main
   ```

1. Set the default board to CHESTER:

   ```
   west config build.board chester_nrf52840
   ```

1. Synchronize the West workspace:

   ```
   west update
   ```

1. Export Zephyr environment:

   ```
   west zephyr-export
   ```

1. Install the Python dependencies:

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

# Install nRF Connect for Desktop

Go to this link:
https://www.nordicsemi.com/Products/Development-tools/nRF-Connect-for-desktop

On Ubuntu, download the AppImage file and give it executable rights.
