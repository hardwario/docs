---
slug: /chester-input
title: CHESTER Input
---
import Image from '@theme/IdealImage';

# CHESTER Input

This article describes the core functionality, hardware description, default configuration, and example **JSON** messages for the catalog application **CHESTER Input**.

:::caution

Some basics are not provided, as they are common for all the **CHESTER** catalog applications. For example, see the article [**Platform Management**](../platform-management/index.md) on how to work with the interactive console.

:::

## Application Overview

The application **CHESTER Input** is used to measure and observe analog and digital inputs. The sampled analog values are aggregated, the aggregate measurements are buffered, and scheduled for later data transfer in the form of buffered data altogether with the timestamp annotations. Also, the changes on digital input (type **trigger**) can be tracked with the type of change and timestamp. The buffering strategy allows a higher number of events to be recorded while conserving data bandwidth and power required for data transfer.

**CHESTER Input** has these four inputs:

| **Type** | **Channel** | **Terminal** | **Input type**    | **Input range** | **Typical use-case**                  |
| :------- | :---------- | :----------- | :---------------- | :-------------- | :------------------------------------ |
| Trigger  | CH1         | A2           | Digital - NPN/PNP | 0 to 28 V       | Switch, button, relay, etc.           |
| Counter  | CH2         | A4           | Digital - NPN/PNP | 0 to 28 V       | Energy meter pulse outputs (e.g., S0) |
| Voltage  | CH3         | A5           | Analog - voltage  | 0 to 28 V       | Various voltage transmitters          |
| Current  | CH4         | A7           | Analog - current  | 0 to 24 mA      | Various current transmitters          |

All these inputs and their options are explained in more detail in the article [**Input Parameters and Behavior**](#input-parameters-and-behavior),

## Hardware Description

The catalog **CHESTER Input** hardware consists of the following ordering codes:

* `CHESTER-M-CGLS`

* `CHESTER-X0B:A`

* `CHESTER-Z`

<!-- * `CHESTER-E2-LP` - TODO holes for 4 cables? -->

### Variant CHESTER Input TH

* `CHESTER-S2` with external temperature and hygrometer

## Input Parameters and Behavior

For the wiring diagram to **CHESTER Input**, please follow the [**terminal block description**](../extension-modules/chester-x0.md) of the **CHESTER-X0** extension module.
The extension module **CHESTER-X0** is installed in the left slot **A**, so you have to use the corresponding terminals **A1** to **A8**.

### Trigger

The **trigger** input can be connected to a PLC/sensor output (NPN/PNP), push button, switch, relay, etc. The behavior of the **trigger** input is configurable.

* When the input changes, the timestamp of the change event is stored altogether with the **active**/**inactive** state, this information is buffered and sent once a configurable delay expires (parameter `trigger-report-delay`).

* Optionally, input changes to the **active** or **inactive** states can be reported **immediately** or with a configurable **delay** to allow capturing multiple consequent input changes.

* Both **NPN** and **PNP** input logic types are supported (parameter `trigger-input-type`).

* The minimum level duration is configured separately for **active** (parameter `trigger-duration-active`) and **inactive** (parameter `trigger-duration-inactive`) states.

* The maximum number of reports per hour is configurable (parameter `trigger-report-rate`). The event throttling limits communication bandwidth and preserves the battery lifespan.

### Counter

The **counter** input can be connected to a PLC/sensor output (NPN/PNP), push button, switch, relay, etc. This input counts total number of pulses in time.

* The counter value is aggregated periodically (parameter `counter-interval-aggreg`), and the buffer of aggregated measurements is reported in a configurable interval (parameter `interval-report`).

* Both **NPN** and **PNP** type of input logic is supported (parameter `counter-input-type`).

* The minimum level duration is configured separately for **active** (parameter `counter-duration-active`) and **inactive** (parameter `counter-duration-inactive`) states.

### Voltage

The **voltage** input measures the voltage in the range from **0-28 V** (overlaps the **0-10 V** standard).

* The voltage readings are sampled periodically (parameter `analog-interval-sample`). These readings are stored as a **buffer of samples**.

* The collected samples are **aggregated** periodically (parameter `analog-interval-aggreg`). The minimum, maximum, average, and median aggregates are computed from the buffered samples. These aggregated results are referred to as **measurements**.

* Each **measurement** has an associated timestamp. The buffer **measurements** are transferred as time-series data regularly (parameter `interval-report`).

### Current

This input measures the analog current in the range from **0-24 mA** (overlaps the **4-20 mA** standard).

* The current readings are sampled periodically (parameter `analog-interval-sample`). These readings are stored as a **buffer of samples**.

* The collected samples are **aggregated** periodically (parameter `analog-interval-aggreg`). The minimum, maximum, average, and median aggregates are computed from the buffered samples. These aggregated results are referred to as **measurements**.

* Each **measurement** has an associated timestamp. The buffer **measurements** are transferred as time-series data regularly (parameter `interval-report`).

### Hygrometer

The optional hygrometer in the **CHESTER Input** application represents an external temperature and humidity sensor.

* The readings are sampled regularly (parameter `hygro-interval-sample`). These readings are stored as a **buffer of samples**.

* The collected samples are **aggregated** periodically (parameter `hygro-interval-aggreg`). The minimum, maximum, average, and median aggregates are computed from the buffered samples. These aggregated results are referred to as **measurements**.

* Each **measurement** has an associated timestamp. The buffer **measurements** are transferred as time-series data regularly (parameter `interval-report`).

## Default Configuration

This is the default configuration (printed using the `app config show` command):

```
app config analog-interval-sample 60
app config analog-interval-aggreg 300
app config interval-report 1800
app config trigger-input-type npn
app config trigger-duration-active 100
app config trigger-duration-inactive 100
app config trigger-cooldown-time 10
app config trigger-report-active false
app config trigger-report-inactive false
app config trigger-report-rate 10
app config trigger-report-delay 5
app config counter-interval-aggreg 300
app config counter-input-type npn
app config counter-active-duration 2
app config counter-inactive-duration 2
app config counter-cooldown-time 10
app config hygro-interval-sample 60
app config hygro-interval-aggreg 300
```

## Specific Commands

:::info

You can easily explore the whole command tree structure - start with the `help` command.

:::

Use this command to set **report interval** (in seconds):

```
app config interval-report <value>
```

Use these commands to set the **sample** and **aggregate** intervals (in seconds) for **voltage** / **current** measurements:

```
app config analog-interval-sample <value>
app config analog-interval-aggreg <value>
```

Use these commands to set the input type for **trigger** and **counter** inputs. The valid values are `npn` or `pnp`:

```
app config trigger-input-type <npn/pnp>
app config counter-input-type <npn/pnp>
```

Use these commands to enable/disable **trigger** input to immediately report a change to **active** or **inactive** levels:

```
app config trigger-report-active <true/false>
app config trigger-report-inactive <true/false>
```

Use this command to limit the number of asynchronous reports in a one-hour window:

```
app config trigger-report-rate <value>
```

:::tip

This feature helps to conserve power in the battery-operated device and optimizes the amount of transferred data. The regular (periodic) reports set by the parameter `interval-report` are not counted to this limit.

:::

Use this command to configure a short delay (in seconds) between the **trigger** event and its reporting:

```
app config trigger-report-delay <value>
```

:::tip

This feature is useful in systems where another change may arrive shortly after the first one.

:::

Use these commands to set the **active** and **inactive** time duration (in milliseconds) for the **trigger** and **counter** digital inputs:

```
app config trigger-active-duration <value>
app config trigger-inactive-duration <value>
app config trigger-cooldown-time <value>

app config counter-active-duration <value>
app config counter-inactive-duration <value>
app config counter-cooldown-time <value>
```

Use these commands to set the **sample** and **aggregate** intervals (in seconds) for the optional **hygrometer** (the accessory **CHESTER-S2**):

```
app config hygro-interval-sample <value>
app config hygro-interval-aggreg <value>
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
