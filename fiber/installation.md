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

1. Write image to the the device.

1. When finished, press the **RESET** button on the target (located next to the USB connector).

1. Wait for the target to boot, and connect to the network.

   :::tip
   
   You may find your target's IP address from your DHCP server's leases).

   :::

## Update System

1. Update the package list to get information on the newest versions of packages:

   ```sh
   sudo apt update
   ```

1. Upgrade all installed packages to their latest versions:

   ```sh
   sudo apt upgrade -y
   ```

1. Reboot the system to apply updates:

   ```sh
   sudo reboot
   ```

## Install ChirpStack

1. Install required packages for ChirpStack (MQTT broker, Redis, and PostgreSQL):

   ```sh
   sudo apt install \
       mosquitto \
       mosquitto-clients \
       redis-server \
       redis-tools \
       postgresql
   ```

1. Connect to PostgreSQL as the `postgres` user:

   ```sh
   sudo -u postgres psql
   ```

1. Create a new PostgreSQL role named `chirpstack` with login capability and password:

   ```sh
   create role chirpstack with login password 'chirpstack';
   ```

1. Create a new database named `chirpstack` owned by the `chirpstack` role:

   ```sh
   create database chirpstack with owner chirpstack;
   ```

1. Connect to the `chirpstack` database:

   ```sh
   \c chirpstack
   ```

1. Enable the `pg_trgm` extension for trigram matching:

   ```sh
   create extension pg_trgm;
   ```

1. Quit the PostgreSQL prompt:

   ```sh
   \q
   ```

1. Install the GPG tool for verifying package signatures:

   ```sh
   sudo apt install gpg
   ```

1. Create the directory for APT keyrings if it doesn't exist:

   ```sh
   sudo mkdir -p /etc/apt/keyrings/
   ```

1. Download and add the ChirpStack repository GPG key:

   ```sh
   sudo sh -c 'wget -q -O - https://artifacts.chirpstack.io/packages/chirpstack.key | gpg --dearmor > /etc/apt/keyrings/chirpstack.gpg'
   ```

1. Add the ChirpStack repository to the APT sources list:

   ```sh
   echo "deb [signed-by=/etc/apt/keyrings/chirpstack.gpg] https://artifacts.chirpstack.io/packages/4.x/deb stable main" | sudo tee /etc/apt/sources.list.d/chirpstack.list
   ```

1. Update the package list to include packages from the ChirpStack repository:

   ```sh
   sudo apt update
   ```

1. Install the ChirpStack Gateway Bridge package:

   ```sh
   sudo apt install chirpstack-gateway-bridge
   ```

1. Apply a patch to modify the MQTT topic templates in the configuration file:

   ```sh
   sudo patch /etc/chirpstack-gateway-bridge/chirpstack-gateway-bridge.toml << 'EOF'
   @@ -34,11 +34,8 @@
   
      # MQTT integration configuration.
      [integration.mqtt]
   -  # Event topic template.
   -  event_topic_template="gateway/{{ .GatewayID }}/event/{{ .EventType }}"
   -
   -  # Command topic template.
   -  command_topic_template="gateway/{{ .GatewayID }}/command/#"
   +  event_topic_template="eu868/gateway/{{ .GatewayID }}/event/{{ .EventType }}"
   +  command_topic_template="eu868/gateway/{{ .GatewayID }}/command/#"
   
      # MQTT authentication.
      [integration.mqtt.auth]
   EOF
   ```

1. Start the ChirpStack Gateway Bridge service:

   ```sh
   sudo systemctl start chirpstack-gateway-bridge
   ```

1. Enable the ChirpStack Gateway Bridge service to start automatically on boot:

   ```sh
   sudo systemctl enable chirpstack-gateway-bridge
   ```

1. Install the ChirpStack package:

   ```sh
   sudo apt install chirpstack
   ```

## Install Node-RED

1. Download and run the Node-RED installation script:

   ```sh
   bash <(curl -sL https://github.com/node-red/linux-installers/releases/latest/download/update-nodejs-and-nodered-deb)
   ```

1. Enable the Node-RED service to start automatically on boot:

   ```sh
   sudo systemctl enable nodered.service
   ```

1. Reboot the system to complete the installation:

   ```sh
   sudo reboot
   ```
