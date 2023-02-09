---
slug: chester-meteo
title: CHESTER Meteo
---
import Image from '@theme/IdealImage';

# CHESTER Meteo

This article describes the core functionality, hardware description, and example **JSON** message of the catalog application **CHESTER Meteo**.

:::caution

Some of the basics are not provided, as they are common for all **CHESTER** catalog applications. For example, see the article [**Platform Management**](../category/platform-management) on how to work with the interactive console.

:::

## Application Overview

**CHESTER Meteo** is a wind and environmental sensor that samples, aggregates, and sends measured variables.

## Application Variants

### CHESTER Meteo

The catalog application **CHESTER Meteo** measures:
- Wind speed (m/s)
- Wind direction (0-360°)
- Rainfall (mm)
- Atmospheric pressure (Pa)
- Temperature (°C)
- Humidity (%RH)

The hardware of this application consists of the following ordering codes:

* `CHESTER-M-BCGLS` - Standard mainboard
* `CHESTER-X0B:A` - Input module (4 channels)
* `CHESTER-S2` - External hygrometer
* External barometer
* `CHESTER-E1-LP` - Enclosure with SMA pigtail

See [**Ordering Codes**](../ordering-codes.md) for more details.

Firmware build shield options: `ctr_lte ctr_barometer_tag ctr_s2 ctr_x0_a`

## Measurement and Behavior

- All sensors are **sampled** with a configurable period (parameter `interval-sample`).
- Samples are then **aggregated** in the configurable interval. Minimum, maximum, average, and median are computed from buffered samples for each sensor (parameter `interval-aggreg`).
- Each aggregated values have its timestamps and are sent in a batch in a report interval period (parameter `interval-report`).

### Wind speed

Wind speed is measured continuously between samples (`interval-sample`). Every wind speed sample is an average wind speed between two samples. On every aggregation (`interval-aggreg`) these samples are aggregated, and minimum, maximum, average, and median are computed from buffered samples.

With this continuous measurement, you can accurately get minimal, maximal, and average wind speed from every aggregation.

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

## Firmware

The latest firmware is available in Catalog Applications [Firmware chapter](index.md#application-firmware).

## Example JSON Message

In each structure with the current configuration, there are six aggregated values. Each aggregated value has its timestamp and is computed from multiple samples, and `min`, `max`, `avg`, and `mdn` values are calculated.

Wind speed is in **meters per second**.

Pressure is in **pascals**.

```json
{
  "message": {
    "version": 1,
    "sequence": 1,
    "timestamp": 1675784614
  },
  "attribute": {
    "vendor_name": "HARDWARIO",
    "product_name": "CHESTER-M",
    "hw_variant": "CDGLS",
    "hw_revision": "R3.2",
    "fw_name": "CHESTER Meteo",
    "fw_version": "v2.0.0",
    "serial_number": "2159018267"
  },
  "system": {
    "uptime": 361,
    "voltage_rest": 3.6,
    "voltage_load": 3.56,
    "current_load": 35
  },
  "network": {
    "imei": 351358815180770,
    "imsi": 901288910018982,
    "parameter": {
      "eest": 7,
      "ecl": 0,
      "rsrp": -83,
      "rsrq": -4,
      "snr": 14,
      "plmn": 23003,
      "cid": 939040,
      "band": 20,
      "earfcn": 6447
    }
  },
  "thermometer": {
    "temperature": 21.37
  },
  "accelerometer": {
    "acceleration_x": -0.23,
    "acceleration_y": 0.07,
    "acceleration_z": 9.49,
    "orientation": 2
  },
  "weather_station": {
    "wind_speed": {
      "measurements": [
        {
          "timestamp": 1675784338,
          "min": 0,
          "max": 4,
          "avg": 2.78,
          "mdn": 2.8
        },
        {
          "timestamp": 1675784398,
          "min": 3.91,
          "max": 4.13,
          "avg": 4,
          "mdn": 4
        },
        {
          "timestamp": 1675784458,
          "min": 3.86,
          "max": 4.13,
          "avg": 4.03,
          "mdn": 4
        },
        {
          "timestamp": 1675784518,
          "min": 3.86,
          "max": 4.13,
          "avg": 4.03,
          "mdn": 4
        },
        {
          "timestamp": 1675784578,
          "min": 4,
          "max": 4.26,
          "avg": 4.13,
          "mdn": 4.13
        }
      ]
    },
    "wind_direction": {
      "measurements": [
        {
          "timestamp": 1675784338,
          "value": 0
        },
        {
          "timestamp": 1675784398,
          "value": 0
        },
        {
          "timestamp": 1675784458,
          "value": 0
        },
        {
          "timestamp": 1675784518,
          "value": 7
        },
        {
          "timestamp": 1675784578,
          "value": 45
        }
      ]
    },
    "rainfall": {
      "measurements": [
        {
          "timestamp": 1675784338,
          "value": 0
        },
        {
          "timestamp": 1675784398,
          "value": 0
        },
        {
          "timestamp": 1675784458,
          "value": 0
        },
        {
          "timestamp": 1675784518,
          "value": 2.79
        },
        {
          "timestamp": 1675784578,
          "value": 2.79
        }
      ]
    }
  },
  "barometer":
  {
    "pressure": {
      "measurements": [
        {
          "timestamp": 1675784338,
          "min": 98070,
          "max": 98075,
          "avg": 98072,
          "mdn": 98073
        },
        {
          "timestamp": 1675784398,
          "min": 98071,
          "max": 98078,
          "avg": 98072,
          "mdn": 98074
        },
        {
          "timestamp": 1675784458,
          "min": 98070,
          "max": 98070,
          "avg": 98070,
          "mdn": 98070
        },
        {
          "timestamp": 1675784518,
          "min": 98071,
          "max": 98078,
          "avg": 98072,
          "mdn": 98074
        },
        {
          "timestamp": 1675784578,
          "min": 98070,
          "max": 98075,
          "avg": 98072,
          "mdn": 98073
        }
      ]
    },
  },

  "hygrometer": {
    "temperature": {
      "measurements": [
        {
          "timestamp": 1675784338,
          "min": 21.53,
          "max": 21.67,
          "avg": 21.59,
          "mdn": 21.6
        },
        {
          "timestamp": 1675784398,
          "min": 21.44,
          "max": 21.56,
          "avg": 21.51,
          "mdn": 21.53
        },
        {
          "timestamp": 1675784458,
          "min": 21.47,
          "max": 21.67,
          "avg": 21.53,
          "mdn": 21.52
        },
        {
          "timestamp": 1675784518,
          "min": 21.43,
          "max": 21.58,
          "avg": 21.49,
          "mdn": 21.5
        },
        {
          "timestamp": 1675784578,
          "min": 21.39,
          "max": 21.57,
          "avg": 21.47,
          "mdn": 21.44
        }
      ]
    },
    "humidity": {
      "measurements": [
        {
          "timestamp": 1675784338,
          "min": 38.86,
          "max": 39.04,
          "avg": 38.95,
          "mdn": 38.95
        },
        {
          "timestamp": 1675784398,
          "min": 38.93,
          "max": 39.14,
          "avg": 39.04,
          "mdn": 39.07
        },
        {
          "timestamp": 1675784458,
          "min": 38.85,
          "max": 39.15,
          "avg": 39.02,
          "mdn": 39.02
        },
        {
          "timestamp": 1675784518,
          "min": 38.89,
          "max": 39.15,
          "avg": 39.08,
          "mdn": 39.08
        },
        {
          "timestamp": 1675784578,
          "min": 38.88,
          "max": 39.11,
          "avg": 39.02,
          "mdn": 39.03
        }
      ]
    }
  }
}
```
