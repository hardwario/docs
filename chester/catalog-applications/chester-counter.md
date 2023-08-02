---
slug: chester-counter
title: CHESTER Counter
---
import Image from '@theme/IdealImage';

# CHESTER Counter

This article describes the core functionality, hardware description, default configuration, and example **JSON** messages for the catalog application **CHESTER Counter**.

:::danger

When upgrading firmware from **v1.x.x** to version **v2.0.0 and newer** - it is necessary to [**backup configuration**](common-functionality.md#configuration-backup).

:::

:::caution

Some basics are not provided, as they are common for all the **CHESTER** catalog applications. For example, see the article [**Platform Management**](../platform-connectivity/index.md) on how to work with the interactive console.

:::

## Application Overview

The application **CHESTER Counter** is used to count pulses on eight digital inputs. They can be connected to a PLC/sensor output (NPN/PNP), push button, switch, relay, etc. The application counts the total number of pulses and also the number of pulses since the last report (configurable using the `interval-report` parameter).

## Application Variants

**CHESTER Counter** can be ordered in one of these variants:

### CHESTER Counter

The catalog **CHESTER Counter** hardware consists of the following ordering codes:

* `CHESTER-M-BCGLS` - Standard mainboard

* `CHESTER-X0B:A` - Input module (4 channels)

See [**Ordering Codes**](../ordering-codes.md) for more details.

Firmware build shield options: `ctr_lte ctr_x0_a`

### CHESTER Counter Z

The catalog **CHESTER Counter Z** hardware consists of the following ordering codes:

* `CHESTER-M-CGLS` - Standard mainboard

* `CHESTER-X0B:A` - Input module (4 channels)

* `CHESTER-Z` - Backup module

See [**Ordering Codes**](../ordering-codes.md) for more details.

Firmware build shield options: `ctr_lte ctr_x0_a ctr_z`

## Backup

**CHESTER Counter Z** (equipped with **CHESTER-Z**) can also report information on the backup battery and external DC power state.

* The current **battery voltage** and **external DC voltage** are sent in every report.

* When the DC power input changes, the timestamp of the change event is stored altogether with the **connected**/**disconnected** state, this information is buffered, and the buffer of the events is sent (at the latest) with the regular report (parameter `interval-report`).

* Optionally, DC power input changes to the **connected** (parameter `backup-report-connected`) or **disconnected** (parameter `backup-report-disconnected`) states can be reported **immediately** or with a configurable **delay** (parameter `event-report-delay`) to allow capturing multiple consequent input changes.

* The maximum number of reports per hour is configurable (parameter `event-report-rate`). The event throttling limits communication bandwidth and preserves the battery lifespan.

## Default Configuration

This is the default configuration (printed using the `app config show` command):

```
app config interval-sample 60
app config interval-report 1800
```

## Firmware

:::danger

When upgrading firmware from **v1.x.x** to version **v2.0.0 and newer** - it is necessary to [**backup configuration**](common-functionality.md#configuration-backup).

:::

The latest firmware is available in Catalog Applications [Firmware chapter](index.md#application-firmware).

## Example JSON Message

This example message was sent by a **CHESTER** with an **X0** module only in the A slot. The message was sent because of a tamper event.

```json
{
  "frame": {
    "protocol": 1,
    "sequence": 2,
    "timestamp": 1688127148
  },
  "attribute": {
    "vendor_name": "HARDWARIO",
    "product_name": "CHESTER-M",
    "hw_variant": "CDGLS",
    "hw_revision": "R3.4",
    "fw_version": "(unset)",
    "serial_number": "2159019054"
  },
  "state": {
    "uptime": 68
  },
  "battery": {
    "voltage_rest": null,
    "voltage_load": null,
    "current_load": null
  },
  "network": {
    "imei": 426556893,
    "imsi": 2907855241,
    "parameter": {
      "eest": 8,
      "ecl": 0,
      "rsrp": -75,
      "rsrq": -7,
      "snr": 16,
      "plmn": 23003,
      "cid": 1011233,
      "band": 20,
      "earfcn": 6447
    }
  },
  "thermometer": {
    "temperature": 24.31
  },
  "accelerometer": {
    "accel_x": -0.77,
    "accel_y": 3.37,
    "accel_z": 9.03,
    "orientation": 2
  },
  "counter": {
    "channel_1_total": 5,
    "channel_1_delta": 2,
    "channel_2_total": 5,
    "channel_2_delta": 3,
    "channel_3_total": 5,
    "channel_3_delta": 0,
    "channel_4_total": 7,
    "channel_4_delta": 0,
    "channel_5_total": null,
    "channel_5_delta": null,
    "channel_6_total": null,
    "channel_6_delta": null,
    "channel_7_total": null,
    "channel_7_delta": null,
    "channel_8_total": null,
    "channel_8_delta": null
  },
  "tamper": {
    "state": "active",
    "events": [
      {
        "timestamp": 1688127147,
        "type": "activated"
      }
    ]
  },
  "backup": {
    "line_voltage": 15,
    "batt_voltage": 2,
    "backup_state": 0,
    "events": []
  }
}
```
