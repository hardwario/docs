---
slug: /installation
title: Installation
---

import Image from '@theme/IdealImage';

# TAPPER Client Installation

Basic installation of the TAPPER client application.

## Prepare

:::info[TL;DR]

- Flash RPi
- Update RPi and install client
  ```bash
  # For easy copy
  sudo apt update && sudo apt upgrade
  sudo reboot
  # reconnect
  sudo apt install git pipx python3-dev cmake libdbus-1-dev libglib2.0-dev
  pipx ensurepath
  sudo raspi-config # enable serial port and SPI
  pipx install 'git+ssh://git@github.com/hardwario/tapper.git@main#egg=tapper' # stable
  ```
- Continue at [**Testing**](#testing)

:::

### Flash the Raspberry Pi

1. Open the TAPPER device.

   :::tip

   There are two plastic latches from the bottom of the device. Use a flat head screwdriver.

   :::

1. Insert the MicroSD card to your computer (the size of 16 GB is preferred).

   :::info

   The MicroSD card is already shipped with the TAPPER device.

   :::

1. Download and install the [**Raspberry Pi Imager**](https://github.com/raspberrypi/rpi-imager) tool.

1. Click **CHOOSE DEVICE** and select **Raspberry Pi Zero 2 W**.

1. Click **CHOOSE OS**, select **Raspberry Pi OS (other)**, and then select **Raspberry Pi OS Lite (64-bit)**.

1. Click **CHOOSE STORAGE** and select the target MicroSD card.

1. Click **NEXT** - the tool will ask about the settings customization - click **EDIT SETTINGS**.

1. Click **General** in the top row.

1. Check the **Set hostname** checkbox.

1. Enter a hostname for you TAPPER into the **hostname** field.

1. Check the **Set username and password** checkbox.

1. Enter a username and a password into the **username** and **password** fields respectively.

      ::::tip

   You can use `tapper` for username and `hardwario` for password.

   :::danger

   This is only recommended with public-key SSH authentication, otherwise use a strong passphrase.

   Set up public-key SSH authentication (recommended): [**SSH with public-key authentication**](security#ssh-with-public-key-authentication-only)

   You can use the [**Bitwarden passphrase generator**](https://bitwarden.com/password-generator/#password-generator). 1. Select Passphrase in type. 2. You can click generate a few times for a more memorable Passphrase, however it is recommended to do 6 at most. - You can write the generated passphrases down and then choose the most memorable one.

   :::

   ::::

1. Check the **Configure Wireless LAN** checkbox.

1. Enter your wireless network's SSID and password into the **SSID** and **Password** fields respectively.

1. Select the country code of the country where the TAPPER device will be used in the **Wireless LAN Country** drop-down menu.

1. Check the **Set locale settings** checkbox.

1. Select your time zone in the **Time zone** drop-down menu.

1. Select your preferred keyboard layout in the **Keyboard layout** drop-down menu.

1. Click **Services** in the top row.

1. Check the **Enable SSH** checkbox.

1. Click the preferred login variant, however [**Allow public-key authentication only**](security#ssh-with-public-key-authentication-only) is recommended.

   :::caution[SSH Security]

   It is recommended to set up **SSH with public-key authentication** only.

   To do so, follow this guide: [**SSH with public-key authentication**](security#ssh-with-public-key-authentication-only)

   The **Raspberry Pi Imager** lets you do this within [OS Customization](https://www.raspberrypi.com/documentation/computers/getting-started.html#advanced-options).

   :::

1. Click **Options** in the top row.

1. Check the **Eject media when finished** checkbox.

1. Check the **Enable telemetry** checkbox.

1. Optionally check the **Play sound when finished** checkbox.

1. Click **SAVE** on the bottom.

1. Click **YES**.

### Update Raspberry Pi

:::tip

   The following steps can be done remotely using an Ansible playbook available from [GitHub](https://github.com/hardwario/tapper/blob/dev/ansible/install_playbook.yaml).

:::


1. Connect to your Raspberry Pi through SSH:

   `ssh tapper@[IP ADDRESS OF TAPPER]`

2. Update the system packages:

   `sudo apt update && sudo apt upgrade -y`

3. Reboot the system:

   `sudo reboot`

### Install and set up required packages

1.  We will need the following packages:

    `sudo apt install cmake git libdbus-1-dev libglib2.0-dev pipx python3-dev`

1.  The package **pipx** needs to be added to the **PATH** environmental variable:

        `pipx ensurepath`

    :::info

    This adds an entry into your `~/.bashrc`

    :::

1.  Load the new shell environment:

    `source ~/.bashrc`

### Enable SPI and Serial Port

1. Enable the serial port and SPI interfaces:

   `sudo raspi-config`

1. Both interfaces are under the **Interface** option.

### Install TAPPER Client

Install the TAPPER client Python package:

    `pipx install 'git+https://github.com/hardwario/tapper.git@main#egg=tapper'`

:::danger

If you want to test a bleeding-edge installation instead, you can do:

    `pipx install 'git+https://github.com/hardwario/tapper.git@dev#egg=tapper'`

:::

:::note

The command `pipx` experimentally supports suffixes. If you want a bleeding-edge version with the suffix support, append `--suffix <suffix>` to the command.

Example: `--suffix dev` would result in the command `tapperdev`

:::

### Testing

Run TAPPER in debug mode:

    `tapper run -d -h &lt;your_mqtt_broker_host&gt;`

Parameters:

- `-d` enables DEBUG logging into the CLI
- `-h` specifies the MQTT host
