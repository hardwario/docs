---
slug: installation-setup
title: Installation
---
import Image from '@theme/IdealImage';

# Installation

This article provides instructions on bootstrap and configuration of the Linux system on the **FIBER** device. The platform is based on **Compute Module 4**, and industrial version of **Raspberry Pi 4**.

In the article, we use two terms:

- **HOST:** Your computer from which you perform the setup.
- **TARGET:** The actual FIBER device you are setting up.



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
