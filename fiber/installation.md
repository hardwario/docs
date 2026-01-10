---
slug: installation
title: Installation
---
import Image from '@theme/IdealImage';

# Installation

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

   :::

   :::danger

   This is only recommended with public-key SSH authentication, otherwise use a strong passphrase.

   :::

1. Optional: Check **Configure Wireless LAN**.

1. Optional: Enter your wireless network's SSID and password into the **SSID** and **Password** fields respectively.

1. Optional: Set the **Wireless LAN Country** drop-down to the country where the **FIBER** device will be used.

1. Check **Set locale settings**.

1. Select your time zone in the **Time zone** drop-down menu.

1. Select your preferred keyboard layout in the **Keyboard layout** drop-down menu.

1. Write image to the device.

1. When finished, press the **RESET** button on the **TARGET** (located next to the USB connector).

1. Wait for the **TARGET** to boot, and connect to the network.

   :::tip
   
   You may find the IP address of your **TARGET** from your DHCP server's leases.

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

## Configure Hardware

This section configures the I2C bus and real-time clock (RTC) on the **FIBER** device.

1. Install the **I2C tools** package for I2C bus diagnostics:

   ```sh
   sudo apt install -y i2c-tools
   ```

1. Configure the `i2c-dev` kernel module to load automatically at boot:

   ```sh
   echo 'i2c-dev' | sudo tee -a /etc/modules-load.d/i2c.conf > /dev/null
   ```

1. Add hardware configuration to the boot configuration file:

   ```sh
   cat << EOF | sudo tee -a /boot/firmware/config.txt > /dev/null
   dtparam=i2c_arm=on
   dtparam=i2c_vc=on
   disable_poe_fan=1
   force_eeprom_read=0
   camera_auto_detect=0
   dtoverlay=i2c-rtc,pcf85063a,i2c_csi_dsi
   EOF
   ```

   :::tip

   This enables I2C interfaces, disables the PoE fan control, and configures the RTC overlay for the PCF85063A chip.

   :::

1. Reboot the system to apply the hardware configuration:

   ```sh
   sudo reboot
   ```

1. Verify the I2C bus is accessible by scanning for devices:

   ```sh
   sudo i2cdetect -y 10
   ```

   :::tip

   You should see the RTC device listed on the I2C bus.

   :::

1. Install additional utilities for hardware clock access:

   ```sh
   sudo apt install util-linux-extra
   ```

1. Verify the hardware clock is accessible:

   ```sh
   sudo hwclock -v
   ```

## Install ChirpStack

1. Install required packages for **ChirpStack** (MQTT broker and Redis):

   ```sh
   sudo apt install \
       mosquitto \
       mosquitto-clients \
       redis-server \
       redis-tools
   ```

1. Install the **GPG tool** for verifying package signatures:

   ```sh
   sudo apt install gpg
   ```

1. Create the directory for **APT keyrings** if it doesn't exist:

   ```sh
   sudo mkdir -p /etc/apt/keyrings/
   ```

1. Download and add the **ChirpStack** repository GPG key:

   ```sh
   sudo sh -c 'wget -q -O - https://artifacts.chirpstack.io/packages/chirpstack.key | gpg --dearmor > /etc/apt/keyrings/chirpstack.gpg'
   ```

1. Add the **ChirpStack** repository to the APT sources list:

   ```sh
   echo "deb [signed-by=/etc/apt/keyrings/chirpstack.gpg] https://artifacts.chirpstack.io/packages/4.x/deb stable main" | sudo tee /etc/apt/sources.list.d/chirpstack.list
   ```

1. Update the package list to include packages from the **ChirpStack** repository:

   ```sh
   sudo apt update
   ```

1. Install the **ChirpStack** package (SQLite variant):

   ```sh
   sudo apt install chirpstack-sqlite
   ```

1. Generate and set a random secret key in the **ChirpStack** configuration:

   ```sh
   sudo sed -i "s|secret = \"you-must-replace-this\"|secret = \"$(openssl rand -base64 32)\"|" /etc/chirpstack/chirpstack.toml
   ```

1. Enable the **ChirpStack** service to start automatically on boot:

   ```sh
   sudo systemctl enable chirpstack
   ```

1. Start the **ChirpStack** service:

   ```sh
   sudo systemctl start chirpstack
   ```

1. Now, you can access **ChirpStack** at this address: `http://[TARGET IP ADDRESS]:8080/`

## Install ChirpStack Concentratord

This section installs and configures the **ChirpStack Concentratord** for the LoRa concentrator module.

1. Download and install the **ChirpStack Concentratord** binary:

   ```sh
   curl -sL https://artifacts.chirpstack.io/downloads/chirpstack-concentratord/chirpstack-concentratord-sx1302_4.5.3_linux_arm64.tar.gz | sudo tar -xzf - -C /usr/bin --no-same-owner chirpstack-concentratord-sx1302
   ```

1. Create the configuration directory with proper ownership:

   ```sh
   sudo install -o chirpstack -g chirpstack -m 0750 -d /etc/chirpstack-concentratord
   ```

1. Create the configuration file with proper ownership and permissions:

   ```sh
   sudo install -o chirpstack -g chirpstack -m 0640 /dev/null /etc/chirpstack-concentratord/chirpstack-concentratord.toml
   ```

1. Write the **Concentratord** configuration file:

   ```sh
   cat << EOF | sudo tee /etc/chirpstack-concentratord/chirpstack-concentratord.toml > /dev/null
   # Concentratord configuration.
   [concentratord]
     # Log level.
     #
     # Valid options are:
     #   * TRACE
     #   * DEBUG
     #   * INFO
     #   * WARN
     #   * ERROR
     #   * OFF
     log_level="INFO"

     # Log to syslog.
     #
     # When set to true, log messages are being written to syslog instead of stdout.
     log_to_syslog=false

     # Statistics interval.
     stats_interval="30s"

     # Disable CRC status filter.
     #
     # By default, the Concentratord will ignore received frames which do not have
     # a valid CRC. This option makes it possible to disable this filter such that
     # received frames without (valid) CRC can be analyzed.
     disable_crc_filter=false

     # Configuration for the (ZeroMQ based) API.
     [concentratord.api]
       # Event PUB socket bind.
       event_bind="ipc:///tmp/concentratord_event"

       # Command REP socket bind.
       command_bind="ipc:///tmp/concentratord_command"

   # LoRa gateway configuration.
   [gateway]

     # Antenna gain (dB).
     antenna_gain=0

     # Public LoRaWAN network.
     lorawan_public=true

     # Region.
     #
     # The region of the gateway. Options:
     #  EU868, US915, CN779, EU433, AU915, CN470, AS923, AS923_2, AS923_3, AS923_4,
     #  KR923, IN865, RU864
     #
     # Not all gateway models implement all regions.
     region="EU868"

     # Gateway vendor / model.
     #
     # This configures various vendor and model specific settings.
     model="rak_5146"

     # Gateway vendor / model flags.
     #
     # Flag can be used to configure additional vendor / model features. The
     # following flags can be used:
     #
     #   Global flags:
     #     GNSS - Enable GNSS / GPS support
     #     USB  - Use USB for concentrator communication (default is SPI)
     model_flags=["USB"]

     # Time fallback.
     #
     # In case the gateway does not have a GNSS module or is unable to aquire a
     # GNSS fix, use the system-time for setting the 'time' field on RX.
     time_fallback_enabled=true

     # Gateway ID.
     #
     # Only set this if you would like to override the Gateway ID provided by the SX1302/3.
     gateway_id=""


     # LoRa concentrator configuration.
     [gateway.concentrator]

       # Multi spreading-factor channels (LoRa).
       multi_sf_channels=[
         868100000,
         868300000,
         868500000,
         867100000,
         867300000,
         867500000,
         867700000,
         867900000,
       ]

       # LoRa std channel (single spreading-factor).
       [gateway.concentrator.lora_std]
         frequency=868300000
         bandwidth=250000
         spreading_factor=7

       # FSK channel.
       [gateway.concentrator.fsk]
         frequency=868800000
         bandwidth=125000
         datarate=50000


     # Static gateway location.
     [gateway.location]

       # When set to non-zero values, the static gateway location will be reported
       # when the gateway does not have a GNSS module or when no GNSS location fix
       # is available.
       latitude=0.0
       longitude=0.0
       altitude=0
   EOF
   ```

1. Create the **systemd** service file for **Concentratord**:

   ```sh
   cat << EOF | sudo tee /etc/systemd/system/chirpstack-concentratord.service > /dev/null
   [Unit]
   Description=ChirpStack Concentratord
   Documentation=https://www.chirpstack.io/
   Wants=network-online.target
   After=network-online.target

   [Service]
   User=chirpstack
   Group=chirpstack
   ExecStart=/usr/bin/chirpstack-concentratord-sx1302 -c /etc/chirpstack-concentratord/chirpstack-concentratord.toml
   Restart=on-failure

   [Install]
   WantedBy=multi-user.target
   EOF
   ```

1. Add the `chirpstack` user to the `dialout` group for serial port access:

   ```sh
   sudo usermod -aG dialout chirpstack
   ```

1. Reload the **systemd** daemon to recognize the new service:

   ```sh
   sudo systemctl daemon-reload
   ```

1. Enable the **ChirpStack Concentratord** service to start automatically on boot:

   ```sh
   sudo systemctl enable chirpstack-concentratord
   ```

1. Start the **ChirpStack Concentratord** service:

   ```sh
   sudo systemctl start chirpstack-concentratord
   ```

1. Check the service logs to verify successful startup and obtain the gateway ID:

   ```sh
   sudo journalctl -fu chirpstack-concentratord
   ```

   :::tip

   Copy the **Gateway ID** from the log output - you will need it to register the gateway in ChirpStack.

   :::

## Install ChirpStack MQTT Forwarder

This section installs the **ChirpStack MQTT Forwarder** that connects the Concentratord to the MQTT broker.

1. Install the **ChirpStack MQTT Forwarder** package:

   ```sh
   sudo apt install chirpstack-mqtt-forwarder
   ```

1. Write the **MQTT Forwarder** configuration file:

   ```sh
   cat << EOF | sudo tee /etc/chirpstack-mqtt-forwarder/chirpstack-mqtt-forwarder.toml > /dev/null
   [logging]
     level="info"
     log_to_syslog=false

   [backend]
     enabled="concentratord"

     [backend.concentratord]
     event_url = "ipc:///tmp/concentratord_event"
     command_url = "ipc:///tmp/concentratord_command"

   [mqtt]
     topic_prefix="eu868"
     server="tcp://127.0.0.1:1883"
     username=""
     password=""
     ca_cert=""
     tls_cert=""
     tls_key=""
   EOF
   ```

1. Enable the **ChirpStack MQTT Forwarder** service to start automatically on boot:

   ```sh
   sudo systemctl enable chirpstack-mqtt-forwarder
   ```

1. Start the **ChirpStack MQTT Forwarder** service:

   ```sh
   sudo systemctl start chirpstack-mqtt-forwarder
   ```

1. Check the service logs to verify successful startup:

   ```sh
   sudo journalctl -fu chirpstack-mqtt-forwarder
   ```

## Install Node-RED

1. Download and run the **Node-RED** installation script:

   ```sh
   bash <(curl -sL https://github.com/node-red/linux-installers/releases/latest/download/update-nodejs-and-nodered-deb)
   ```

1. Enable the **Node-RED** service to start automatically on boot:

   ```sh
   sudo systemctl enable nodered.service
   ```

1. Reboot the system to complete the installation:

   ```sh
   sudo reboot
   ```

1. Now, you can access **Node-RED** at this address: `http://[TARGET IP ADDRESS]:1880/`
