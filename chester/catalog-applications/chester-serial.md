---
slug: chester-serial
title: CHESTER Serial
---
import Image from '@theme/IdealImage';

# CHESTER Serial

This article describes the core functionality, hardware description, and example **JSON** message of the catalog application **CHESTER Serial**.

:::caution

Some of the basics are not provided, as they are common for all CHESTER catalog applications. Please see:

- [**Getting started**](https://docs.hardwario.com/chester/getting-started/first-step) on how to connect device to Cloud.
- [**Common functionality**](common-functionality.md) to know how LED, button and network configuration works.
- [**Platform Management**](../category/platform-connectivity) on how to work with the interactive console.

:::

## Application Overview

**CHESTER Serial** is a universal application for industrial serial communications developed for the HARDWARIO CHESTER platform. It serves as a flexible gateway for integrating industrial devices (sensors, PLCs, meters) into the cloud.

The application is hardware-aware; it automatically detects the installed extension module and adapts its behavior:
* **RS-232** (with Module [**CHESTER-X12**](../extension-modules/chester-x12.md))
* **RS-485** (with Module [**CHESTER-X2**](../extension-modules/chester-x2.md))

## Key Features

* **Dual Interface Support:** Automatic configuration for RS-232 (Point-to-Point) or RS-485 (Multi-drop) based on the connected hardware.
* **Modbus RTU Master:** Polling of up to 8 slave devices with support for standard Modbus functions.
* **Transparent Mode:** Bidirectional data passthrough (tunneling) without interpretation, ideal for proprietary protocols.
* **Multi-Radio Connectivity:** Data transmission via LTE-M / NB-IoT (CBOR) or LoRaWAN (Optimized Binary).
* **Native Sensor Support:** Built-in drivers for specific industrial sensors like **MicroSENS** (CO2), **SenseCAP** (Meteo), and **Cubic** (Particulate Matter).

## Application Variants

**CHESTER Serial** can be ordered in one of these variants:

### CHESTER Serial RS-485 {#chester-serial-rs485}

The catalog application **CHESTER Serial RS-485** provides RS-485/Modbus RTU connectivity.

The hardware of this application consists of the following ordering codes:

* `CHESTER-M-CGLS` - Standard mainboard
* `CHESTER-X2` - RS-485 interface module
* `CHESTER-X10` - External power input (5-28V DC)
* `CHESTER-E2-LP` - Enclosure with SMA pigtail

See [**Ordering Codes**](../ordering-codes.md) for more details.

### CHESTER Serial RS-232 {#chester-serial-rs232}

The catalog application **CHESTER Serial RS-232** provides RS-232 connectivity for legacy devices.

The hardware of this application consists of the following ordering codes:

* `CHESTER-M-CGLS` - Standard mainboard
* `CHESTER-X12` - RS-232 interface module
* `CHESTER-E2-LP` - Enclosure with SMA pigtail

See [**Ordering Codes**](../ordering-codes.md) for more details.

:::caution

**CHESTER Serial** requires external power supply (5-28V DC) for operation. It cannot run on battery alone.

:::

## Operating Modes

### Modbus RTU Master

In this mode, CHESTER acts as a Master controller that periodically queries connected Slave devices.

* **Capacity:** Up to 8 devices simultaneously.
* **Addressing:** Supports slave addresses 1–247.
* **Functions:** Supports FC01, FC02, FC03, FC04, FC05, FC06, FC0F, and FC10.

### Transparent Mode

CHESTER acts as a bridge. Data received from the serial port is sent to the cloud "as is" and vice versa.

* **Usage:** Debugging, legacy equipment, non-standard protocols.
* **Limitation:** Only one connected device is supported in this mode.

## Technical Specifications

| Feature | Value |
| :--- | :--- |
| **Operating System** | Zephyr RTOS |
| **Physical Interface** | RS-232 (Module X12), RS-485 (Module X2) |
| **Application Protocols** | Transparent (RAW), Modbus RTU |
| **Cloud Formats** | CBOR (LTE), Optimized Binary (LoRaWAN) |
| **Power Supply** | External source (5–28V DC) required |

## Integrated Sensor Drivers

The firmware includes native support for the following devices:

| Device | Interface | Measurements |
| :--- | :--- | :--- |
| **MicroSENS 180-HS** | RS-232 | CO2 (0–100%), Temperature (-40 to +85°C), Pressure (300–1100 mbar) |
| **SenseCAP S1000 / S500** | RS-485 Modbus | Air temperature, humidity, pressure, light intensity, wind speed, wind direction |
| **CUBIC 6303** | RS-485 Modbus | PM1.0, PM2.5, PM10 (in μg/m³) |
| **Generic Modbus** | RS-485 Modbus | Custom register mapping for any Modbus RTU device |

## Default Configuration

This is the default configuration (printed using the `app config show` command):

```
app config mode lte
app config serial-mode modbus
app config interval-sample 60
app config interval-report 900
app config serial-baudrate 9600
app config serial-parity none
app config serial-stop-bits 1
app config serial-data-bits 8
```

## Specific Commands

:::info

You can easily explore the whole command tree structure - start with the `help` command.

:::

:::caution

To apply a new configuration, you need to call `config save`, which applies the new configuration parameters and reboots the device.

:::

### Network Mode

Command to set **communication mode** (lte, lrw, or none):

```
app config mode <lte/lrw/none>
```

### Serial Mode

Command to set **serial operating mode** (modbus or transparent):

```
app config serial-mode <modbus/transparent>
```

### Intervals

Command to set **sample interval** in seconds:

```
app config interval-sample <1-86400>
```

Command to set **report interval** in seconds:

```
app config interval-report <30-86400>
```

### Serial Line Configuration

Command to set **baud rate**:

```
app config serial-baudrate <1200-115200>
```

Command to set **parity** (none, odd, even):

```
app config serial-parity <none/odd/even>
```

Command to set **stop bits** (1 or 2):

```
app config serial-stop-bits <1/2>
```

Command to set **data bits** (7 or 8):

```
app config serial-data-bits <7/8>
```

### Device Configuration

Command to configure a **device slot** (1-8):

```
app config device<n> "<type>,<address>,<timeout>"
```

**Example configurations:**

```
# SenseCAP Weather Station on address 1
app config device1 "sensecap_s1000,1,1"

# MicroSENS CO2 sensor (transparent mode)
app config device1 "microsens_180hs"

# Generic Modbus device on address 5
app config device2 "generic_modbus,5,1"
```

### Diagnostics Commands

Command to **list configured devices**:

```
device list
```

Command to **trigger immediate measurement**:

```
app sample
```

Command to **trigger immediate data transmission**:

```
app send
```

Command to **test Modbus communication** directly:

```
modbus read <address> <count> <type>
```

**Example:** Read 5 input registers from slave address 1:

```
modbus read 1 5 input
```

## Firmware

The latest firmware is available in the Catalog Applications [Firmware chapter](index.md#application-firmware).

## Example JSON Message

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="lte" label="LTE">

```json
{
  "message": {
    "version": 1,
    "sequence": 42,
    "timestamp": 1673272805
  },
  "attribute": {
    "vendor_name": "HARDWARIO",
    "product_name": "CHESTER-M",
    "hw_variant": "CGLS",
    "hw_revision": "R3.4",
    "fw_name": "CHESTER Serial",
    "fw_version": "v3.0.0",
    "serial_number": "2159018267"
  },
  "system": {
    "uptime": 86400,
    "voltage_rest": 3.7,
    "voltage_load": 3.65,
    "current_load": 45
  },
  "network": {
    "imei": 351358815180770,
    "imsi": 901288910018982,
    "parameter": {
      "eest": 7,
      "ecl": 0,
      "rsrp": -85,
      "rsrq": -6,
      "snr": 12,
      "plmn": 23003,
      "cid": 939040,
      "band": 20,
      "earfcn": 6447
    }
  },
  "thermometer": {
    "temperature": 24.5
  },
  "accelerometer": {
    "accel_x": 0.05,
    "accel_y": -0.12,
    "accel_z": 9.78,
    "orientation": 2
  },
  "serial_devices": [
    {
      "slot": 1,
      "type": "sensecap_s1000",
      "address": 1,
      "measurements": {
        "air_temperature": 22.5,
        "air_humidity": 48.2,
        "air_pressure": 101250,
        "light_intensity": 850,
        "wind_speed": 3.2,
        "wind_direction": 225
      }
    },
    {
      "slot": 2,
      "type": "cubic_6303",
      "address": 2,
      "measurements": {
        "pm1_0": 12,
        "pm2_5": 18,
        "pm10": 25
      }
    }
  ]
}
```

  </TabItem>
  <TabItem value="lora" label="LoRaWAN">

```json
{
  "voltage_rest": 3.7,
  "voltage_load": 3.65,
  "current_load": 45,
  "orientation": 2,
  "therm_temperature": 24.5,
  "devices": [
    {
      "slot": 1,
      "type": "sensecap_s1000",
      "air_temperature": 22.5,
      "air_humidity": 48.2,
      "wind_speed": 3.2,
      "wind_direction": 225
    }
  ]
}
```

:::note
Due to the **51-byte LoRaWAN payload limit**, the transmitted data is highly compressed. Not all measurements may be included in a single transmission. The payload structure varies based on configured devices and their data priorities.
:::

  </TabItem>
</Tabs>

