---
slug: /chester-input
title: CHESTER Input
---
import Image from '@theme/IdealImage';

# CHESTER Input

This chapter describes the core functionality, hardware description, default configuration, and example JSON messages in the catalog application **CHESTER Input**.

:::caution

Some of the basics are not provided, as they are common for all CHESTER catalog applications. For example, see the chapter [**Platform Management**](../platform-management/index.md) on how to work with the interactive console.

:::

## Application Overview

CHESTER Input can be used to measure and send values of various analog and digital signals. Measured values can be preprocessed, buffered, and send in a bigger aggregated packet to save power in battery-operated variants.

**CHESTER Input** has these four inputs:

| Type    | Terminal | Input type      | Input range | Example usage                 |
| :------ | :------- | :-------------- | :---------- | :---------------------------- |
| Trigger | CH1      | Digital NPN/PNP | 0 - 28 V    | Switch, button, relay, etc.   |
| Counter | CH2      | Digital NPN/PNP | 0 - 28 V    | Electricity S0 output counter |
| Voltage | CH3      | Analog voltage  | 0 - 28 V    | Various analog sensors        |
| Current | CH4      | Analog current  | 0 - 20 mA   | Various current loop sensors  |

All these inputs and their options are explained in more detail in a chapter [Input parameters and behavior](#input-parameters-and-behavior),

## Hardware Description

The catalog **CHESTER Input** hardware consists of the following ordering codes:

* `CHESTER-M-CGLS`
* `CHESTER-X0B:A`
* `CHESTER-Z`
<!---* `CHESTER-E2-LP`* - TODO holes for 4 cables?-->

Optionally:

* `CHESTER-S2` with external temperature and hygrometer
<!---* TODO CHESTER-Z here?-->

## Input parameters and behavior

For signal connection to **CHESTER Input** please follow [terminal block pinout](../extension-modules/chester-x0.md).
Chester X0 is placed in a left slot **A** so you have to use terminals **A1 - A8**.

### Trigger

This input can be connected to the button, switch, relay, etc. The behavior of the input is configurable.

- When the input changes, the current timestamp is saved, and this information is buffered to send in the next report.
- Optionally a change of input to an active or inactive state can be reported immediately or with a configurable delay to capture more input changes.
- NPN/PNP input could be configured.
- Minimal signal duration could be configured separately for active and inactive states.
- Maximal number of reports per hour could be configured for data saving and better power consumption when powered by a battery.

### Counter

This input counts a number of pulses.

- Counter value is aggregated in configured period by `counter-interval-aggregate` and then reported in a batch by period set by `interval-report`.
- NPN/PNP input could be configured (`counter-input-type`).
- Minimal signal duration could be configured separately for active and inactive states.
- Maximal number of reports per hour could be configured for data saving and better power consumption when powered by a battery.

### Voltage

This input measures the voltage 0 - 28 V.

- Samples are sampled with a configurable period. (`analog-interval-sample`)
- Samples are then aggregated in the configurable interval. Minimum, maximum, average, and median are computed from buffered samples. (`analog-interval-aggregate`)
- Each aggregated values have its timestamps and are sent in a batch in a report interval period. (`interval-report`)

### Current

This input measures the current loop 0 - 20 mA.
Configuration shares the same parameters with voltage measurement in the previous chapter **Voltage**.

### External hygrometer (optional)

Optional external temperature and humidity sensor.

- Samples are sampled with a configurable period. (`hygro-interval-sample`)
- Samples are then aggregated in the configurable interval. Minimum, maximum, average, and median are computed from buffered samples. (`hygro-interval-aggregate`)
- Each aggregated values have its timestamps and are sent in a batch in a report interval period. (`interval-report`)

## Default Configuration

This is the default configuration (printed using the `app config show` command):

```
app config analog-interval-sample 60
app config analog-interval-aggregate 300
app config interval-report 1800
app config trigger-input-type npn
app config trigger-active-duration 100
app config trigger-inactive-duration 100
app config trigger-cooldown-time 10
app config trigger-report-active false
app config trigger-report-inactive false
app config trigger-report-rate 10
app config trigger-report-delay 5
app config counter-interval-aggregate 300
app config counter-input-type npn
app config counter-active-duration 2
app config counter-inactive-duration 2
app config counter-cooldown-time 10
app config hygro-interval-sample 60
app config hygro-interval-aggregate 300
```

## Specific Commands

:::info

You can easily explore the whole command tree structure - start with the `help` command.

:::



Command to set **report interval** in seconds:

```
app config interval-report <value>
```

Commands to set **sample** and **aggregate** interval for **analog measurements** (voltage measurement and current loop) in seconds:

```
app config analog-interval-sample <value>
app config analog-interval-aggregate <value>
```

Commands to set the input type for **trigger** and **counter** inputs. Valid values are **npn** or **pnp**:

```
app config trigger-input-type <npn/pnp>
app config counter-input-type <npn/pnp>
```

Commands to configure that **trigger** input will immediately report when changed to active or inactive level:

```
app config trigger-report-active <true/false>
app config trigger-report-inactive <true/false>
```

Command to limit the number of asynchronous reports in a one-hour window. This is used to save power in the battery-operated device or save the data plan. Standard periodic reports set by `interval-report` are not counted to this limit:

```
app config trigger-report-rate <value>
```

Command to configure a small delay between trigger event and reporting. This may be useful in the case where you want to wait a few seconds before reporting to sample another change of the trigger input. This parameter sets the time in seconds:
```
app config trigger-report-delay <value>
```

Commands to set the **active** and **inactive** time duration for **trigger** and **counter** digital inputs in milliseconds:

```
app config trigger-active-duration <value>
app config trigger-inactive-duration <value>
app config trigger-cooldown-time <value>

app config counter-active-duration <value>
app config counter-inactive-duration <value>
app config counter-cooldown-time <value>
```

Commands to set **sample** and **aggregate** interval for optional **hygrometer** (CHESTER-S2) in seconds:

```
app config hygro-interval-sample <value>
app config hygro-interval-aggregate <value>
```


## Example JSON Message

```json
{
  "frame": {
    "protocol": 1,
    "sequence": 95,
    "timestamp": 1668769692
  },
  "attribute": {
    "vendor_name": "HARDWARIO",
    "product_name": "CHESTER-M",
    "hw_variant": "CDGLS",
    "hw_revision": "R3.2",
    "fw_version": "(unset)",
    "serial_number": "2159018247"
  },
  "state": {
    "uptime": 172497
  },
  "battery": {
    "voltage_rest": 3.95,
    "voltage_load": 3.84,
    "current_load": 38
  },
  "network": {
    "imei": 351358815178303,
    "imsi": 901288003957939,
    "parameter": {
      "eest": 7,
      "ecl": 0,
      "rsrp": -90,
      "rsrq": -8,
      "snr": 8,
      "plmn": 23003,
      "cid": 939040,
      "band": 20,
      "earfcn": 6447
    }
  },
  "thermometer": {
    "temperature": 22.93
  },
  "accelerometer": {
    "accel_x": 0.07,
    "accel_y": 0,
    "accel_z": 9.8,
    "orientation": 2
  },
  "event": {
    "trigger_active": false,
    "trigger_inactive": false,
    "line_present": false,
    "line_not_present": false
  },
  "trigger": {
    "value": true,
    "measurements": [
      {
        "timestamp": 1668768211,
        "is_active": false
      },
      {
        "timestamp": 1668768215,
        "is_active": true
      },
      {
        "timestamp": 1668768217,
        "is_active": false
      },
      {
        "timestamp": 1668768220,
        "is_active": true
      }
    ]
  },
  "counter": {
    "value": 137,
    "measurements": [
      {
        "timestamp": 1668768211,
        "value": 12
      },
      {
        "timestamp": 1668768511,
        "value": 50
      },
      {
        "timestamp": 1668768811,
        "value": 73
      },
      {
        "timestamp": 1668769111,
        "value": 132
      },
      {
        "timestamp": 1668769411,
        "value": 135
      }
    ]
  },
  "voltage": {
    "measurements": [
      {
        "timestamp": 1668768211,
        "min": 9.75,
        "max": 9.85,
        "avg": 9.82,
        "mdn": 9.84
      },
      {
        "timestamp": 1668768511,
        "min": 9.83,
        "max": 9.84,
        "avg": 9.83,
        "mdn": 9.83
      },
      {
        "timestamp": 1668768811,
        "min": 9.83,
        "max": 9.84,
        "avg": 9.83,
        "mdn": 9.83
      },
      {
        "timestamp": 1668769111,
        "min": 9.76,
        "max": 9.84,
        "avg": 9.81,
        "mdn": 9.82
      },
      {
        "timestamp": 1668769411,
        "min": 9.75,
        "max": 9.85,
        "avg": 9.82,
        "mdn": 9.84
      }
    ]
  },
  "current": {
    "measurements": [
      {
        "timestamp": 1668768211,
        "min": 0,
        "max": 20.89,
        "avg": 6.42,
        "mdn": 8.17
      },
      {
        "timestamp": 1668768511,
        "min": 8.11,
        "max": 8.57,
        "avg": 8.44,
        "mdn": 8.52
      },
      {
        "timestamp": 1668768811,
        "min": 8.43,
        "max": 8.57,
        "avg": 8.49,
        "mdn": 8.48
      },
      {
        "timestamp": 1668769111,
        "min": 8.11,
        "max": 8.48,
        "avg": 8.38,
        "mdn": 8.43
      },
      {
        "timestamp": 1668769411,
        "min": 8.11,
        "max": 8.57,
        "avg": 8.44,
        "mdn": 8.52
      }
    ]
  },
  "hygrometer": {
    "temperature": {
      "measurements": [
        {
          "timestamp": 1668768211,
          "min": 22.03,
          "max": 22.28,
          "avg": 22.14,
          "mdn": 22.1
        },
        {
          "timestamp": 1668768511,
          "min": 22.38,
          "max": 22.5,
          "avg": 22.43,
          "mdn": 22.41
        },
        {
          "timestamp": 1668768811,
          "min": 22.61,
          "max": 22.75,
          "avg": 22.68,
          "mdn": 22.68
        },
        {
          "timestamp": 1668769111,
          "min": 22.78,
          "max": 22.86,
          "avg": 22.82,
          "mdn": 22.82
        },
        {
          "timestamp": 1668769411,
          "min": 22.55,
          "max": 22.74,
          "avg": 22.64,
          "mdn": 22.65
        }
      ]
    },
    "humidity": {
      "measurements": [
        {
          "timestamp": 1668768211,
          "min": 58.82,
          "max": 60.23,
          "avg": 59.73,
          "mdn": 59.99
        },
        {
          "timestamp": 1668768511,
          "min": 58.79,
          "max": 59.41,
          "avg": 59.26,
          "mdn": 59.36
        },
        {
          "timestamp": 1668768811,
          "min": 57.93,
          "max": 58.61,
          "avg": 58.23,
          "mdn": 58.09
        },
        {
          "timestamp": 1668769111,
          "min": 56.91,
          "max": 57.95,
          "avg": 57.53,
          "mdn": 57.63
        },
        {
          "timestamp": 1668769411,
          "min": 56.86,
          "max": 59.33,
          "avg": 57.85,
          "mdn": 57.83
        }
      ]
    }
  },
  "backup": {
    "line_present": true,
    "line_voltage": 12.7,
    "batt_voltage": 3.38
  }
}
```
