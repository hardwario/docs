---
slug: development-platform-setup
title: Development Platform Setup
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

# Manual Setup Guide

Step-by-step commands to set up the FIBER system on a Raspberry Pi 4 CM after a fresh **Raspberry Pi OS (64-bit, Bookworm)** installation.

---


## 1. Update the system

```bash
sudo apt update && sudo apt upgrade -y
```

## 2. Install dependencies

```bash
sudo apt install -y i2c-tools mosquitto mosquitto-clients sqlite3 jq curl git \
                    bluez network-manager rfkill
```

| Package | Why |
|---------|-----|
| `i2c-tools` | Talk to I2C devices (accelerometer, RTC) |
| `mosquitto` | MQTT broker — routes messages between FIBER app and dashboard |
| `mosquitto-clients` | `mosquitto_pub` / `mosquitto_sub` CLI tools for testing |
| `sqlite3` | Inspect the FIBER database from the command line |
| `jq` | Pretty-print JSON (useful for reading MQTT payloads) |
| `curl`, `git` | Download files and clone repositories |
| `bluez` | BLE stack (D-Bus GATT) — required by the in-app BLE WiFi-provisioning server |
| `network-manager` | `nmcli` is what BLE provisioning shells out to in order to scan/connect WiFi |
| `rfkill` | Toggle the Bluetooth radio (Pi OS often boots with it soft-blocked) |

## 3. Enable hardware interfaces

### 3.1 Enable I2C and SPI

```bash
sudo raspi-config nonint do_i2c 0
sudo raspi-config nonint do_spi 0
```

### 3.2 Add device tree overlays

Open the boot config:

```bash
sudo nano /boot/firmware/config.txt
```

Add these lines at the end of the file (inside the `[all]` section, or add `[all]` first):

```
dtoverlay=w1-gpio
dtoverlay=uart3
dtoverlay=uart4
dtoverlay=pwm,pin=13,func=4
dtparam=spi=on
dtoverlay=spi6-1cs
dtoverlay=i2c-rtc,pcf85063a,i2c_csi_dsi
```

| Overlay | What it enables |
|---------|-----------------|
| `w1-gpio` | 1-Wire bus on GPIO4 — DS18B20 temperature sensors |
| `uart3` | Serial port for STM32 communication |
| `uart4` | Serial port for STM32 communication |
| `pwm,pin=13,func=4` | Hardware PWM on GPIO13 — required for display backlight brightness control |
| `spi6-1cs` | SPI6 bus for the ST7920 LCD display (SPI6 avoids pin conflict with UART4) |
| `i2c-rtc,pcf85063a,i2c_csi_dsi` | Real-time clock on I2C bus (via CSI/DSI I2C) |

Save with `Ctrl+O`, `Enter`, `Ctrl+X`.

## 4. Add user to hardware groups

```bash
sudo usermod -aG dialout $USER
sudo usermod -aG i2c $USER
sudo usermod -aG gpio $USER
sudo usermod -aG spi $USER
```

| Group | Access to |
|-------|-----------|
| `dialout` | Serial ports (`/dev/ttyAMA3`, `/dev/ttyAMA4`) |
| `i2c` | I2C bus (`/dev/i2c-10`) |
| `gpio` | GPIO pins (LEDs, buttons, buzzer) |
| `spi` | SPI bus (display) |

> These take effect after logout/login or reboot.

## 5. Create directory structure

Raspberry Pi OS does not have a `/data` directory. We create it here to match the production layout — this is where the FIBER app stores its database, config, and backups.

```bash
sudo mkdir -p /opt/fiber
sudo mkdir -p /data/fiber/config
sudo mkdir -p /data/fiber/backups
sudo touch /data/fiber/config/DEV_MODE_ENABLED
```

| Path | Purpose |
|------|---------|
| `/opt/fiber/` | FIBER application binary |
| `/data/fiber/config/` | YAML configuration files |
| `/data/fiber/config/DEV_MODE_ENABLED` | Required marker — tells the app this is a dev platform (no crypto verification) |
| `/data/fiber/backups/` | Automatic database backups |

> The BLE pairing PIN is now configured in `fiber.config.yaml` under the `[ble]` section (`pin:` field) — no separate file is required.

## 6. Configure Mosquitto MQTT broker

### 6.1 Create the config file

```bash
sudo nano /etc/mosquitto/conf.d/fiber.conf
```

Paste this content:

```
listener 1883
protocol mqtt

allow_anonymous false
password_file /etc/mosquitto/passwd

log_dest syslog
log_type error
log_type warning
log_type notice
log_type information
connection_messages true
```

> Persistence is already configured in the default `/etc/mosquitto/mosquitto.conf` — do not add it again here or Mosquitto will refuse to start.

Save and exit.

### 6.2 Create MQTT user

```bash
sudo touch /etc/mosquitto/passwd
sudo mosquitto_passwd -b /etc/mosquitto/passwd fiber fiber_dev
sudo chown mosquitto:mosquitto /etc/mosquitto/passwd
sudo chmod 0600 /etc/mosquitto/passwd
```

### 6.3 Restart and enable Mosquitto

```bash
sudo systemctl restart mosquitto
sudo systemctl enable mosquitto
```

### 6.4 Test it

Open two terminals (or two SSH sessions).

**Terminal 1** — subscribe:

```bash
mosquitto_sub -h localhost -u fiber -P fiber_dev -t "test/hello" -v
```

**Terminal 2** — publish:

```bash
mosquitto_pub -h localhost -u fiber -P fiber_dev -t "test/hello" -m "it works"
```

You should see `test/hello it works` in Terminal 1. Press `Ctrl+C` to stop.

## 7. Configure Bluetooth (BLE provisioning)

The FIBER app embeds a BLE GATT server that lets a mobile app provision WiFi over Bluetooth. Pi OS needs three things to host it:

1. NetworkManager managing `wlan0` (because BLE provisioning shells out to `nmcli`).
2. `bluetoothd` running with `--experimental` (required by the `bluer` D-Bus GATT API the app uses).
3. The Bluetooth radio not soft-blocked by `rfkill` (Pi OS often boots blocked).

### 7.1 Confirm NetworkManager owns wlan0

```bash
nmcli dev status
```

`wlan0` must show `wifi    connected` or `wifi    disconnected` — never `unmanaged`. On a fresh Bookworm it already does. If it says `unmanaged`:

```bash
sudo systemctl enable --now NetworkManager
sudo systemctl disable --now dhcpcd        # only if dhcpcd was managing wlan0
```

> Switching network managers may briefly drop your SSH if you are connected via WiFi.

### 7.2 Enable bluetoothd `--experimental`

`bluer` (the Rust BLE crate the app uses) needs the experimental D-Bus interfaces of `bluetoothd`. Edit the systemd drop-in:

```bash
sudo systemctl edit bluetooth
```

Paste exactly:

```ini
[Service]
ExecStart=
ExecStart=/usr/libexec/bluetooth/bluetoothd -E
```

Save and exit. Then:

```bash
sudo systemctl daemon-reload
sudo systemctl restart bluetooth
```

Confirm `-E` is in the running command line:

```bash
ps aux | grep bluetoothd | grep -v grep
```

The line should contain `-E` (or `--experimental`).

### 7.3 Unblock the radio (and persist across reboots)

```bash
sudo rfkill list bluetooth
sudo rfkill unblock bluetooth
```

Install a one-shot service that runs on every boot:

```bash
sudo tee /etc/systemd/system/bt-unblock.service > /dev/null <<'EOF'
[Unit]
Description=Unblock Bluetooth at boot
Before=bluetooth.service
After=local-fs.target

[Service]
Type=oneshot
ExecStart=/usr/sbin/rfkill unblock bluetooth
RemainAfterExit=yes

[Install]
WantedBy=multi-user.target
EOF
sudo systemctl daemon-reload
sudo systemctl enable --now bt-unblock.service
```

### 7.4 Verify the adapter

```bash
bluetoothctl show | grep -E 'Powered|PowerState'
```

Expected:

```
Powered: yes
PowerState: on
```

If you see `PowerState: off-blocked`, the radio is still soft-blocked — repeat section 7.3.

### 7.5 Enable BLE in the FIBER app config

The default `fiber.config.yaml` ships with `ble.enabled: false` (production safety). For the dev platform, flip it to `true`:

```bash
sudo sed -i 's/^  enabled: false/  enabled: true/' /data/fiber/config/fiber.config.yaml
```

Verify the `[ble]` block:

```bash
grep -A5 '^ble:' /data/fiber/config/fiber.config.yaml
```

Expected:

```yaml
ble:
  enabled: true
  pin: "123456"
  enable_terminal: true
  advertising_name: null
```

> Set `advertising_name: "FIBER-DEV"` (or any string) if your mobile app filters scans by name. With `null`, the device advertises under the system hostname.

Once the app is running (section 13), the journal should show:

```
[main] Starting BLE monitor (in-app GATT server)...
[BleMonitor] Registering GATT application...
[BleMonitor] BLE advertising started (name=..., mac=...)
```

If you instead see `[BleMonitor] FATAL: GATT server returned error: Failed`, almost always one of: `--experimental` is missing (7.2), the radio is rfkilled (7.3), or NetworkManager is not managing wlan0 (7.1).

---

## 8. Clone the fiber-agent repository

```bash
cd ~
git clone https://github.com/hardwario/fiber-agent.git
```

The repository contains (at its root):

| File | Purpose |
|------|---------|
| `fiber.config.yaml` | Main application configuration |
| `fiber.sensors.config.yaml` | Sensor alarm thresholds |
| `fiber.network.config.yaml` | Network / WiFi configuration |
| `authorized_signers.yaml` | Authorized firmware signers |

> The `fiber_app` binary is **not** built or shipped from this clone — it is published as a release artifact on GitHub and downloaded separately in the next step.

## 9. Install binary and config files

Download the latest `fiber_app` binary from the [fiber-agent](https://github.com/hardwario/fiber-agent) GitHub releases and install it:

```bash
curl -L -o fiber_app https://github.com/hardwario/fiber-agent/releases/latest/download/fiber_app
sudo mv fiber_app /opt/fiber/fiber_app
sudo chmod +x /opt/fiber/fiber_app
```

Copy the configuration files from the cloned repository (they live at the repo root, not in a subdirectory):

```bash
sudo cp ~/fiber-agent/fiber.config.yaml         /data/fiber/config/
sudo cp ~/fiber-agent/fiber.sensors.config.yaml /data/fiber/config/
sudo cp ~/fiber-agent/fiber.network.config.yaml /data/fiber/config/
sudo cp ~/fiber-agent/authorized_signers.yaml   /data/fiber/config/
```

Verify:

```bash
ls -la /opt/fiber/fiber_app
ls /data/fiber/config/
```

## 10. Create the systemd service

```bash
sudo nano /etc/systemd/system/fiber.service
```

Paste:

```ini
[Unit]
Description=FIBER Application (Dev Platform)
After=network.target mosquitto.service
Wants=network.target mosquitto.service

[Service]
Type=simple
User=root
ExecStartPre=/bin/mkdir -p /data/fiber/config /data/fiber/backups
ExecStart=/opt/fiber/fiber_app
WorkingDirectory=/opt/fiber
Restart=on-failure
RestartSec=10
StandardOutput=journal
StandardError=journal

[Install]
WantedBy=multi-user.target
```

Save and exit. Then reload systemd:

```bash
sudo systemctl daemon-reload
sudo systemctl enable fiber.service
```

## 11. Reboot

A reboot is required for the device tree overlays and group changes to take effect.

```bash
sudo reboot
```

Reconnect via SSH after ~60 seconds.

## 12. Install 1-Wire sensor services

The FIBER hardware uses a DS2482 I2C-to-1-Wire bridge to communicate with DS18B20 temperature sensors. Two services are needed: one to initialize the bridge at boot, and a timer to periodically scan for new sensors.

Both scripts and service files are in the repo:

```bash
sudo cp ~/fiber-dev-plat/config/ds2482-init.sh /usr/bin/
sudo cp ~/fiber-dev-plat/config/w1-rescan.sh /usr/bin/
sudo chmod +x /usr/bin/ds2482-init.sh /usr/bin/w1-rescan.sh

sudo cp ~/fiber-dev-plat/config/ds2482-init.service /etc/systemd/system/
sudo cp ~/fiber-dev-plat/config/w1-rescan.service /etc/systemd/system/
sudo cp ~/fiber-dev-plat/config/w1-rescan.timer /etc/systemd/system/

sudo systemctl daemon-reload
sudo systemctl enable --now ds2482-init.service
sudo systemctl enable --now w1-rescan.timer
```

Verify sensors are detected:

```bash
ls /sys/bus/w1/devices/
```

You should see directories starting with `28-` (one per DS18B20 sensor).

## 13. Verify the FIBER application is running

After the reboot, `fiber.service` was started automatically by systemd (because it was enabled in section 10). Confirm:

```bash
sudo systemctl status fiber.service
```

You should see `active (running)`. If there are errors:

```bash
journalctl -u fiber.service -f
```

## 14. Verify sensors

Check that 1-Wire sensors are detected:

```bash
ls /sys/bus/w1/devices/
```

You should see directories starting with `28-` (one per DS18B20). Read a sensor directly:

```bash
cat /sys/bus/w1/devices/28-*/w1_slave
```

The last line contains `t=36500` meaning 36.5 C.

## 15. Verify MQTT data flow

Monitor all messages from the FIBER app:

```bash
mosquitto_sub -h localhost -u fiber -P fiber_dev -t "fiber/#" -v
```

You should see sensor data, system info, and status messages appearing. Press `Ctrl+C` to stop.


## 16. Install Node-RED

```bash
bash <(curl -sL https://raw.githubusercontent.com/node-red/linux-installers/master/deb/update-nodejs-and-nodered) \
  --confirm-install --confirm-pi --no-init
```

This installs Node.js LTS and Node-RED with systemd integration. It takes a few minutes.

## 17. Install Dashboard 2.0

```bash
cd ~/.node-red
npm install @flowfuse/node-red-dashboard
```

## 18. Import FIBER dashboard flows

Copy the flows file from the dev-plat repository:

```bash
cp ~/fiber-dev-plat/node-red/flows.json ~/.node-red/flows.json
```

> Or import via the Node-RED editor: Menu -> Import -> select the file.

The MQTT broker config in `flows.json` references `${MQTT_USER}` and `${MQTT_PASS}` — these are injected via systemd in the next step, so the dashboard connects without manual credential entry.

## 19. Configure Node-RED MQTT credentials

Create a systemd drop-in that exports the MQTT credentials to the Node-RED service:

```bash
sudo mkdir -p /etc/systemd/system/nodered.service.d
sudo tee /etc/systemd/system/nodered.service.d/fiber-mqtt-env.conf >/dev/null <<EOF
[Service]
Environment=MQTT_USER=fiber
Environment=MQTT_PASS=fiber_dev
EOF
sudo systemctl daemon-reload
```

> If you change the MQTT password (section 6.2), update this file too — otherwise the dashboard stops connecting.

## 20. Start Node-RED

```bash
sudo systemctl enable nodered.service
sudo systemctl start nodered.service
```

## 21. Open the dashboard

In your browser, go to:

```
http://<pi-ip>:1880/dashboard
```

You should see the FIBER dashboard with sensor gauges, system info, power status, and alarm log.

The Node-RED flow editor is at:

```
http://<pi-ip>:1880
```

---

## Verification checklist

Run these to confirm everything is working:

```bash
# All services running?
sudo systemctl status mosquitto --no-pager
sudo systemctl status fiber.service --no-pager
sudo systemctl status nodered --no-pager

# Sensors detected?
ls /sys/bus/w1/devices/

# I2C devices?
i2cdetect -y 10

# MQTT flowing?
mosquitto_sub -h localhost -u fiber -P fiber_dev -t "fiber/#" -v

# Your user groups?
groups
```

---

## Useful commands

```bash
# Service management
sudo systemctl start|stop|restart fiber.service
sudo systemctl start|stop|restart mosquitto
sudo systemctl start|stop|restart nodered

# Live logs
journalctl -u fiber.service -f
journalctl -u mosquitto -f

# MQTT shortcuts
HOSTNAME=$(hostname)
MQTT="-h localhost -u fiber -P fiber_dev"

# Monitor all
mosquitto_sub $MQTT -t "fiber/#" -v

# Monitor sensors only
mosquitto_sub $MQTT -t "fiber/+/sensors/aggregated" -v

# Monitor alarms only
mosquitto_sub $MQTT -t "fiber/+/alarms/events" -v

# Request system info
mosquitto_pub $MQTT -t "fiber/$HOSTNAME/commands/system/get_info" -m '{"command":"get_info"}'

# Get sensor config
mosquitto_pub $MQTT -t "fiber/$HOSTNAME/commands/sensor/get_config" -m '{"command":"get_sensor_config"}'

# Set threshold on line 0
mosquitto_pub $MQTT -t "fiber/$HOSTNAME/commands/sensor/set_threshold" \
  -m '{"command":"set_threshold","line":0,"thresholds":{"critical_low":18,"warning_low":27,"warning_high":38.5,"critical_high":41}}'
```

---

## Credentials

| Service | User | Password |
|---------|------|----------|
| MQTT | `fiber` | `fiber_dev` |

## Ports

| Service | Port |
|---------|------|
| Mosquitto MQTT | 1883 |
| Node-RED Editor | 1880 |
| Node-RED Dashboard | 1880/dashboard |
