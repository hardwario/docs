---
slug: installation
title: Installation
---
import Image from '@theme/IdealImage';

# Installation

This article provides instructions on bootstrap and configuration of the Linux system on the **FIBER** device. The platform is based on **Compute Module 4**, and industrial version of the popular **Raspberry Pi 4** platform.

In the article, we use two terms:

- **HOST:** The computer from which you will perform the setup.
- **TARGET:** The actual FIBER device you are setting up.

## Connect Target to Host

1. Open the top cover of the **FIBER** device.

   :::tip

   There are four screws under the rubber feet.

   :::

1. Put jumper to the **BOOT** position (it has to be vertically aligned with the `BOOT` label on the PCB).

   :::tip

   This will allow the device to be switched to the bootloader mode.

   :::

1. Connect the PoE adapter (must be 802.3af compliant) to the wall socket.

1. Connect an Ethernet cable between the LAN port of the PoE adapter and your LAN router (unless WiFi connectivity is desired).

1. Connect the USB-B cable to host and the backside USB connector on the target.

## Activate Bootloader

1. Install the **rpiboot** tool - follow the instructions from this GitHub repository:

   **https://github.com/raspberrypi/usbboot**

1. Connect an Ethernet cable between the PoE port of the PoE adapter and the target's Ethernet (RJ-45) connector.

1. Start the `rpiboot` tool.

   :::tip

   This should switch the **target** to the bootloader mode. On the **host**, a new USB disk will appear.

   :::

## Flash Raspberry Pi OS

1. Download, install, and launch the [**Raspberry Pi Imager**](https://github.com/raspberrypi/rpi-imager) tool.

1. Click **CHOOSE DEVICE** and select **Compute Module 4**.

1. Click **CHOOSE OS**, select **Raspberry Pi OS (other)**, and then select **Raspberry Pi OS Lite (64-bit)**.

1. Click **CHOOSE STORAGE** and select the **FIBER** device.

1. Click **NEXT** - the tool will ask about the settings customization - click **EDIT SETTINGS**.

1. Check **Set hostname**.

1. Enter a hostname for your **FIBER** into the **hostname** field (e.g. `fiber`).

1. Check **Set username and password**.

1. Enter a username and a password into the **username** and **password** fields respectively.

   :::tip

   You can use `fiber` for username and `hardwario` for password.

   :::danger

   This is only recommended with public-key SSH authentication, otherwise use a strong passphrase.

   :::    

1. Optional: Check **Configure Wireless LAN**.

1. Optional: Enter your wireless network's SSID and password into the **SSID** and **Password** fields respectively.

1. Optional: Set the **Wireless LAN Country** drop-down to the country where the TAPPER device will be used.

1. Check **Set locale settings**.

1. Select your time zone in the **Time zone** drop-down menu.

1. Select your preferred keyboard layout in the **Keyboard layout** drop-down menu.

---

## Install Image

1. Download image

2. Uncompress the image

3. Install image to **FIBER**

    - Connect the **PoE adapter** to the target.
    
    - Connect the **Mini USB cable** between the host and the target.

    - Use a jumper to short the **BOOT pins** on the mainboard.

    - Shortly press the **RESET tact switch** on the rear side of the mainboard.

    - Now **Compute Module 4** should start in the bootloader mode.

    - Remove the jumper from the **BOOT pins** on the mainboard.

4. Flash the image

5. Set up network connection

## Network Connection Setup

To start **FIBER**, follow the instructions below depending on your preferred connection method:

### Wi-Fi Connection

If you are connecting **FIBER** to your network via **Wi-Fi**, follow these steps:

1. Connect your **FIBER** device to the PoE port of the PoE adapter.

2. Wait for the device to establish a Wi-Fi connection with your network.

3. Determine the IP address.

4. Log in to the target (password *`fiber`*):

    ```bash
    ssh root@[ip address]
    ```

5. Wait for approximately a minute for **FIBER** to establish a connection with your network.

### Ethernet Connection

If you are connecting **FIBER** to your network via **Ethernet**, follow these steps:

1. Connect one Ethernet cable from the PoE adapter's LAN port to your router or switch.

2. Connect another Ethernet cable from the PoE adapter's port to the **FIBER** device.

3. Determine the IP address.

4. Log in to the target (password *`fiber`*):

    ```bash
    ssh root@[ip address]
    ```

5. Wait for approximately a minute for **FIBER** to establish a connection with your network.

### Static IP Address Connection

If you utilize a **static IP** address for **FIBER** connections, follow these steps:

1. Update Configuration File (system section)

    - Set **static_ip** to **True**.
    - Replace the following placeholders with your network details: **address** (your static IP address), **netmask**, **gateway**, **dns**.

2. Depending on the type of [**Ethernet**](#ethernet-connection) or [**Wi-Fi**](#wi-fi-connection) connection, use the instructions for them above.

## Additional information

1. Verifying Network Connectivity:

    Test the connection to the **FIBER** device from the host:

    ```bash
    ping [ip address]
    ```
2. Checking device logs:

    If the **FIBER** device does not function as expected, you can view logs for troubleshooting:

   ```bash
   journalctl -u fiber-core.service
   ```
3. Managing the service:

    Use the following commands to control the **FIBER** service:

   ```bash
   systemctl start fiber-core.service

   systemctl restart fiber-core.service

   systemctl stop fiber-core.service
   ```
4. Restarting the device:

    To restart the **FIBER** device after making changes or for troubleshooting:

    - Using **SSH**:

        ```bash
        reboot
        ```

    - Press the physical reset button on the back of the device.
