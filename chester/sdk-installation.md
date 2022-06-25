---
slug: sdk/installation
title: Installation
---

# Installation

:::info

This guide requires access to HARDWARIO GitLab. The account requires received partnership agreement and CHESTER SDK training.

Your public SSH key must be uploaded to your HARDWARIO GitLab account. Your private SSH key must be accessible to the SSH client on the host machine (typically the key is found in the path `$HOME/.ssh/id_rsa`).

You can test your connection with this command: `ssh -T git@gitlab.hardwario.com`

:::

# Guide for macOS

1. Open the Terminal application and make sure the Homebrew package manager is installed:

   ```
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```

1. Install the following Homebrew packages:

   ```
   brew install cmake ninja gperf python3 ccache qemu dtc wget git west
   ```

1. Initialize the West workspace where you want to start your project:

   ```
   west init -m git@gitlab.hardwario.com:chester/skeleton.git --manifest-rev main skeleton
   ```

   > Change the last parameter `skeleton` to any desired name for your project directory.

1. Go to the West workspace directory:

   ```
   cd skeleton
   ```

1. Setup the default board to CHESTER:

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

1. Initialize the Python virtual environment:

   ```
   python3 -m venv venv
   ```

1. Activate the Python virtual environment:

   ```
   source venv/bin/activate
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

1. Create target directory for the toolchain:

   ```
   mkdir -p $HOME/.local/opt
   ```

1. Download the toolchain:

   If you have the **Intel processor**, use this command:

   ```
   wget -P $HOME/.local/opt https://github.com/zephyrproject-rtos/sdk-ng/releases/download/v0.14.1/zephyr-sdk-0.14.1_macos-x86_64.tar.gz
   ```

   If you have the **ARM processor**, use this command:

   ```
   wget -P $HOME/.local/opt https://github.com/zephyrproject-rtos/sdk-ng/releases/download/v0.14.1/zephyr-sdk-0.14.1_macos-aarch64.tar.gz
   ```

1. Run the setup script from the toolchain directory:

   ```
   $HOME/.local/opt/zephyr-sdk-0.14.1/setup.sh
   ```

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

:::caution

When you close the shell (or your text editor with the integrated terminal), you will need to reactivate the virtual Python environment. Just call this command (used in the procedure above): `source venv/bin/activate`. This is a small penalty for a great flexibility. In the future, you may have various West workspaces with different version of the tools and thanks to the virtual environment, these will not be in version conflict.

:::
