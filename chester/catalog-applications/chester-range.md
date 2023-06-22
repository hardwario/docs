---
slug: chester-range
title: CHESTER Range
---
import Image from '@theme/IdealImage';

# CHESTER Range

This article describes the core functionality, hardware description, and example **JSON** message of the catalog application **CHESTER Range**.

:::caution

Some of the basics are not provided, as they are common for all **CHESTER** catalog applications. For example, see the article [**Platform Management**](../category/platform-connectivity) on how to work with the interactive console.

:::

## Application Overview

**CHESTER Range** measures distance using the [MaxBotix MB7066](https://shop.hardwario.com/ultrasonic-sensor/) ultrasonic sensor. It can also measure temperature using the DS18B20 one-wire sensor and humidity using **CHESTER-S2**.

## Application Variants

**CHESTER Range** can be ordered in one of these variants:

### CHESTER Range

The catalog **CHESTER Range** hardware consists of the following ordering codes:

* `CHESTER-M-CGLS` - Standard mainboard

* `CHESTER-X0A:A` - Input module (4 channels)

See [**Ordering Codes**](../ordering-codes.md) for more details.

Firmware build shield options: `ctr_lte ctr_mb7066_a`

### CHESTER Range Z

The catalog **CHESTER Range Z** hardware consists of the following ordering codes:

* `CHESTER-M-CGLS` - Standard mainboard

* `CHESTER-X0A:A` - Input module (4 channels)

* `CHESTER-Z` - Backup module

See [**Ordering Codes**](../ordering-codes.md) for more details.

Firmware build shield options: `ctr_lte ctr_mb7066_a ctr_z`

## Measurement and Behavior

- All sensors are **sampled** with a configurable period (parameter `interval-sample`).
- Samples are then **aggregated** in the configurable interval. Minimum, maximum, average, and median are computed from buffered samples for each sensor (parameter `interval-aggreg`).
- Each aggregated values have its timestamps and are sent in a batch in a report interval period (parameter `interval-report`).

## Default Configuration

This is the default configuration (printed using the `app config show` command):

```
app config interval-sample 60
app config interval-aggreg 300
app config interval-report 1800
```

## Specific Commands

:::info

You can easily explore the whole command tree structure - start with the `help` command.

:::

:::caution

To apply a new configuration, you need to call `config save`, which applies the new configuration parameters and reboots the device.

:::

Command to set **sample interval** in seconds:

```
app config interval-sample <1-86400>
```

Command to set **aggregate interval** in seconds:

```
app config interval-aggreg <1-86400>
```

Command to set **report interval** in seconds:

```
app config interval-report <30-86400>
```

```
aggreg
```

## Firmware

The latest firmware is available in Catalog Applications [Firmware chapter](index.md#application-firmware).

## Example JSON Message

In this example **JSON** you can see data from all three variants

Every available sensor has one aggrevated measurement, which contains the minimum, maximum, average and median value.

```json
{
  "message": {
    "version": 1,
    "sequence": 1,
    "timestamp": 1685093572
  },
  "attribute": {
    "vendor_name": "HARDWARIO",
    "product_name": "CHESTER-M",
    "hw_variant": "CDGLS",
    "hw_revision": "R3.4",
    "fw_name": "(unset)",
    "fw_version": "(unset)",
    "serial_number": "2159019054"
  },
  "system": {
    "uptime": 49,
    "voltage_rest": null,
    "voltage_load": null,
    "current_load": null
  },
  "network": {
    "imei": 351358816140765,
    "imsi": 901288910018953,
    "parameter": {
      "eest": 7,
      "ecl": 0,
      "rsrp": -78,
      "rsrq": -5,
      "snr": 8,
      "plmn": 23003,
      "cid": 1011233,
      "band": 20,
      "earfcn": 6447
    }
  },
  "thermometer": {
    "temperature": 24.93
  },
  "accelerometer": {
    "acceleration_x": 0,
    "acceleration_y": -0.23,
    "acceleration_z": 9.65,
    "orientation": 2
  },
  "ultrasonic_ranger": {
    "distance": {
      "measurements": [
        {
          "timestamp": 1685093569,
          "min": 2.004,
          "max": 2.009,
          "avg": 2.008,
          "mdn": 2.008
        }
      ]
    }
  },
  "hygrometer": {
    "temperature": {
      "events": [],
      "measurements": [
        {
          "timestamp": 1685093569,
          "min": 24.9,
          "max": 25.03,
          "avg": 24.99,
          "mdn": 25.01
        }
      ]
    },
    "humidity": {
      "measurements": [
        {
          "timestamp": 1685093569,
          "min": 35.18,
          "max": 35.81,
          "avg": 35.45,
          "mdn": 35.36
        }
      ]
    }
  },
  "w1_thermometers": [
    {
      "serial_number": 222768959,
      "measurements": [
        {
          "timestamp": 1685093569,
          "min": 24.31,
          "max": 24.31,
          "avg": 24.31,
          "mdn": 24.31
        }
      ]
    },
    {
      "serial_number": 222690915,
      "measurements": [
        {
          "timestamp": 1685093569,
          "min": 27,
          "max": 27.43,
          "avg": 27.22,
          "mdn": 27.25
        }
      ]
    }
  ]
}
```
