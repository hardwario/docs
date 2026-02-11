---
slug: chester-motion
title: CHESTER Motion
---
import Image from '@theme/IdealImage';

# CHESTER Motion

This article describes the core functionality, hardware description, and example **JSON** message of the catalog application **CHESTER Motion**.

:::caution

Some of the basics are not provided, as they are common for all CHESTER catalog applications. Please see:

- [**Getting started**](https://docs.hardwario.com/chester/getting-started/first-step) on how to connect device to Cloud.
- [**Common functionality**](common-functionality.md) to know how LED, button and network configuration works.
- [**Platform Management**](../category/platform-connectivity) on how to work with the interactive console.

:::

## Application Overview

**CHESTER Motion** is a configurable battery-operated NB-IoT/LTE-M motion sensor that detects and reports human movement using dual PIR sensors.

**CHESTER Motion** is equipped with two PIR sensors to monitor the passage of individuals around the device, making it ideal for tracking foot traffic in factories, train stations, or retail environments. With wireless connectivity and long battery life, the device can be easily installed anywhere, including remote locations for monitoring protected natural areas.

Typical use cases:
- Monitor foot traffic in factory aisles, train stations, or retail spaces
- Track the movement of individuals in protected natural areas
- Enhance security and optimize operations by monitoring human presence in various environments
- Facilitate easy installation in remote or difficult-to-access locations due to its wireless design and battery longevity

## Hardware Description {#chester-motion}

The hardware of this application consists of the following ordering codes:

* `CHESTER-M-BCGLS` - CHESTER mainboard with C battery holder
* `CHESTER-E23-LP` - Enclosure with two PIR sensor holes, SMA antenna pigtail and light pipe
* `CHESTER-S3` - Extension board with two PIR sensors
* `Battery SAFT LS26500`

See [**Ordering Codes**](../ordering-codes.md) for more details.

### Technical Specification

| Parameter | Value |
| :--- | :--- |
| Enclosure material | ASA |
| Dimensions | 130×175×45 mm |
| Operating temperature | -20 to +60 °C |
| Storage temperature | -20 to +60 °C |
| Enclosure protection | IP67 |
| Nominal battery voltage | 3.6 V |
| Nominal battery capacity | 7700 mAh |
| Idle power consumption | < 180 µA |
| Peak power consumption | < 250 mA |

### PIR Sensor (CHESTER-S3)

| Parameter | Value |
| :--- | :--- |
| Detection range | Up to 3 meters |
| Measurement angle | Max 80° |

## Measurement and Behavior

- All sensors are **sampled** with a configurable period (parameter `interval-sample`).
- Each aggregated value has its timestamp and is sent in a batch in a report interval period (parameter `interval-report`).
- The device counts **motion detections** and **detect events** for both **left** and **right** PIR sensors independently.
- Motion detection sensitivity can be configured using preset modes (**low**, **medium**, **high**) or **individual** custom parameters.

### PIR Sensitivity Modes

The application offers three preset sensitivity modes and one custom mode:

**Low** — Provides highest false alarm resistance with slower detection:
- `motion-sens`: 32, `motion-blind`: 3 s, `motion-pulse`: 3, `motion-window`: 4 s

**Medium** (default) — Balanced ratio between detection speed and false alarm resistance:
- `motion-sens`: 64, `motion-blind`: 2 s, `motion-pulse`: 2, `motion-window`: 2 s

**High** — Fastest detection with heightened motion sensitivity but higher false alarm risk:
- `motion-sens`: 32, `motion-blind`: 1 s, `motion-pulse`: 1, `motion-window`: 0 s

**Individual** — Allows manual adjustment of all four parameters for advanced control.

:::tip

For indoor environments, recommended `motion-sens` values are 50–80. For outdoor areas with potential interference, use 70–100 (lower value = higher sensitivity).

:::

## Default Configuration

This is the default configuration (printed using the `app config show` command):

```
app config mode lte
app config interval-sample 60
app config interval-report 1800
app config interval-poll 0
app config sensitivity medium
app config service-mode-enabled false
```

When `sensitivity` is set to `individual`, the following parameters are also available:

```
app config motion-sens 64
app config motion-blind 2
app config motion-pulse 2
app config motion-window 2
```

## Specific Commands

:::info

You can easily explore the whole command tree structure - start with the `help` command.

:::

:::caution

To apply a new configuration, you need to call `config save`, which applies the new configuration parameters and reboots the device.

:::

Command to set the **operating mode**:

```
app config mode <none|lte>
```

Command to set **sample interval** in seconds:

```
app config interval-sample <1-86400>
```

Command to set **report interval** in seconds:

```
app config interval-report <30-86400>
```

Command to set **poll interval** in seconds (0 to disable):

```
app config interval-poll <0-86400>
```

Command to set **PIR sensitivity** preset:

```
app config sensitivity <low|medium|high|individual>
```

:::tip

When set to `individual`, you can fine-tune all four motion detection parameters below. In other modes, these parameters are set automatically by the preset.

:::

Command to set **motion sensor sensitivity** (lower value = higher sensitivity):

```
app config motion-sens <1-255>
```

Command to set **motion blind time** in seconds (time after detection during which further detections are ignored):

```
app config motion-blind <0-10>
```

Command to set **motion pulse count** (minimum number of detection pulses needed to trigger a motion event):

```
app config motion-pulse <1-10>
```

Command to set **motion detection window** in seconds (time window during which required pulse count must be recorded):

```
app config motion-window <0-10>
```

Command to enable/disable **service mode** for real-time motion monitoring:

```
app config service-mode-enabled <true|false>
```

## Firmware

The latest firmware is available in the Catalog Applications [Firmware chapter](index.md#application-firmware).

## Example JSON Message

```json
{
  "message": {
    "version": 1,
    "sequence": 1,
    "timestamp": 1672910024
  },
  "attribute": {
    "vendor_name": "HARDWARIO",
    "product_name": "CHESTER-M",
    "hw_variant": "CGLS",
    "hw_revision": "R3.4",
    "fw_name": "CHESTER Motion",
    "fw_version": "v3.0.0",
    "serial_number": "2159018247"
  },
  "system": {
    "uptime": 173,
    "voltage_rest": 3.52,
    "voltage_load": 3.41,
    "current_load": 38
  },
  "network": {
    "imei": 351358815178303,
    "imsi": 901288003957939,
    "parameter": {
      "eest": 7,
      "ecl": 0,
      "rsrp": -87,
      "rsrq": -6,
      "snr": 13,
      "plmn": 23003,
      "cid": 939040,
      "band": 20,
      "earfcn": 6447
    }
  },
  "thermometer": {
    "temperature": 21.56
  },
  "accelerometer": {
    "accel_x": -0.31,
    "accel_y": 0.15,
    "accel_z": 9.88,
    "orientation": 2
  },
  "motion_count": {
    "totalizer": {
      "detect_left": 42,
      "detect_right": 37,
      "motion_left": 28,
      "motion_right": 24
    },
    "samples": [
      {
        "timestamp": 1672909464,
        "detect_left": 5,
        "detect_right": 3,
        "motion_left": 4,
        "motion_right": 2
      },
      {
        "timestamp": 1672909524,
        "detect_left": 8,
        "detect_right": 6,
        "motion_left": 5,
        "motion_right": 4
      },
      {
        "timestamp": 1672909584,
        "detect_left": 3,
        "detect_right": 4,
        "motion_left": 2,
        "motion_right": 3
      },
      {
        "timestamp": 1672909644,
        "detect_left": 7,
        "detect_right": 5,
        "motion_left": 4,
        "motion_right": 3
      },
      {
        "timestamp": 1672909704,
        "detect_left": 10,
        "detect_right": 9,
        "motion_left": 6,
        "motion_right": 5
      },
      {
        "timestamp": 1672909764,
        "detect_left": 9,
        "detect_right": 10,
        "motion_left": 7,
        "motion_right": 7
      }
    ]
  }
}
```
