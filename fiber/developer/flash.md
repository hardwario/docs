---
slug: flash
title: Flash
---
import Image from '@theme/IdealImage';

# Flash

This article provides instructions on bootstrap and configuration of the Linux system on the **FIBER** device. The platform is based on **Compute Module 4**, an industrial version of the popular **Raspberry Pi 4** platform.

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

1. Connect the USB-B cable to **HOST** and the backside USB connector on the **TARGET**.

## Activate Bootloader

1. Install the **rpiboot** tool - follow the instructions from this GitHub repository:

   **https://github.com/raspberrypi/usbboot**

1. Connect an Ethernet cable between the PoE port of the PoE adapter and the Ethernet (RJ-45) connector of the **TARGET**.

1. Start the `rpiboot` tool.

   :::tip

   This should switch the **TARGET** to the bootloader mode. On the **HOST**, a new USB disk will appear.

   :::

## Flash Raspberry Pi OS

1. Download, install, and launch the [**Raspberry Pi Imager**](https://github.com/raspberrypi/rpi-imager) tool.

1. In the **Device** step, select **Raspberry Pi 4** (this includes Compute Module 4).

   <Image img={require('../images/rpi-imager-select-device.png')} />

1. In the **OS** step, select **Raspberry Pi OS (other)**.

   <Image img={require('../images/rpi-imager-choose-os.png')} />

1. Select **Raspberry Pi OS Lite (64-bit)**.

   <Image img={require('../images/rpi-imager-choose-os-lite.png')} />

1. In the **Storage** step, select the **FIBER** device (shown as **RPi-MSD-0001 Media**).

   <Image img={require('../images/rpi-imager-select-storage.png')} />

1. In the **Customisation** step, enter a hostname for your **FIBER** device (e.g. `fiber`).

   <Image img={require('../images/rpi-imager-hostname.png')} />

1. In the **Localisation** section, select your location, time zone, and keyboard layout.

   <Image img={require('../images/rpi-imager-localisation.png')} />

1. In the **User** section, enter a username and password.

   <Image img={require('../images/rpi-imager-user.png')} />

   :::tip

   You can use `fiber` for username and `hardwario` for password.

   :::

   :::danger

   This is only recommended with public-key SSH authentication, otherwise use a strong passphrase.

   :::

1. Optional: In the **Wi-Fi** section, enter your wireless network's SSID and password.

   <Image img={require('../images/rpi-imager-wifi.png')} />

1. In the **Remote access** section, enable **SSH** and select your preferred authentication method.

   <Image img={require('../images/rpi-imager-ssh.png')} />

1. Optional: In the **Raspberry Pi Connect** section, you can enable remote access via Raspberry Pi Connect. For this guide, we leave it disabled.

   <Image img={require('../images/rpi-imager-connect.png')} />

1. Review the summary and click **WRITE** to start the flashing process.

   <Image img={require('../images/rpi-imager-summary.png')} />

1. Confirm the warning dialog by clicking **I UNDERSTAND, ERASE AND WRITE**.

   <Image img={require('../images/rpi-imager-confirm.png')} />

1. Wait for the writing process to complete.

   <Image img={require('../images/rpi-imager-writing.png')} />

1. When finished, press the **RESET** button on the **TARGET** (located next to the USB connector).

1. Wait for the **TARGET** to boot and connect to the network.

   :::tip

   You may find the IP address of your **TARGET** from your DHCP server's leases.

   :::

---

Next: continue with [Setup](./setup) to configure the FIBER application on the freshly flashed system.
