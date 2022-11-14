---
slug: chester-push
title: CHESTER Push
---
import Image from '@theme/IdealImage';

# CHESTER Push

This chapter describes the core functionality, hardware description and example JSON message of the catalog application CHESTER Push.

:::caution

Some of the basics are not provided, as they are common for all CHESTER catalog applications. For example, see the chapter [**Platform Management**](../platform-management/index.md) on how to work with the interactive console.

:::

## Application Overview

CHESTER Push has push buttons on the enclosure that immediately sends the packet when pressed. The number of buttons is configurable from a single button placed in the middle of the enclosure to 4 buttons placed above each other near the left border of the enclosure. So there can be placed different texts or symbols next to each button.

CHESTER can differentiate between short and long presses of the buttons. In each packet, there is an event to distinguish which button triggered the message's sending. Every message also contains counters of each button for short and long presses.

Each button is also equipped with a LED indicator so the operator can see that the press was recognized. Optionally the beep sound can be played for audible confirmation of the button press.

CHESTER Push contains a CHESTER-Z board with a rechargeable Li-Po battery and power supply (6-26 V DC) for charging and powering the CHESTER. Information about external power presence, external voltage, and battery voltage is also reported. With that information, CHESTER Push could be used to monitor, for example, utility power outages.

CHESTER Push also has a temperature sensor and accelerometer. All these values are reported periodically.

## Hardware Description

The catalog **CHESTER Push** hardware consists of the following ordering codes:

* `CHESTER-M-CGLS`
* `CHESTER-Z-F` - (see [ordering codes](../ordering-codes.md#chester-z) for more variants)
* TODO cables, enclosure milling, front panel outline template?

## Specific Commands

:::info

You can easily explore the whole command tree structure - start with the `help` command.

:::

:::caution

To apply new configuration, you need to call `config save` which applies new configuration parameters and reboots the device.

:::

Command to set **measurement interval** in seconds:

```
app config measurement-interval <5-3600>
```

Command to set **report interval** in seconds:

```
app config report-interval <30-86400>
```

## Example JSON Message

```json
{
  "frame": {
    "protocol": 1,
    "sequence": 15,
    "timestamp": 1668090990
  },
  "attribute": {
    "vendor_name": "HARDWARIO",
    "product_name": "CHESTER-M",
    "hw_variant": "CGLS",
    "hw_revision": "R3.2",
    "fw_version": "v1.1.0",
    "serial_number": "2159018995"
  },
  "state": {
    "uptime": 14687
  },
  "battery": {
    "voltage_rest": 4.59,
    "voltage_load": 4.57,
    "current_load": 45
  },
  "backup": {
    "voltage": 3.17
  },
  "line": {
    "present": true,
    "voltage": 19.47
  },
  "network": {
    "imei": 351358815180036,
    "imsi": 901288910018805,
    "parameter": {
      "eest": 8,
      "ecl": 0,
      "rsrp": -72,
      "rsrq": -7,
      "snr": 14,
      "plmn": 23003,
      "cid": 1467937,
      "band": 20,
      "earfcn": 6447
    }
  },
  "thermometer": {
    "temperature": 21.56
  },
  "accelerometer": {
    "acceleration_x": -9.35,
    "acceleration_y": -0.23,
    "acceleration_z": -0.16,
    "orientation": 1
  },
  "button": {
    "button_x_click_event": false,
    "button_1_click_event": false,
    "button_2_click_event": false,
    "button_3_click_event": false,
    "button_4_click_event": false,
    "button_x_hold_event": false,
    "button_1_hold_event": false,
    "button_2_hold_event": false,
    "button_3_hold_event": false,
    "button_4_hold_event": false,
    "button_x_click_count": 0,
    "button_1_click_count": 1,
    "button_2_click_count": 2,
    "button_3_click_count": 1,
    "button_4_click_count": 1,
    "button_x_hold_count": 0,
    "button_1_hold_count": 0,
    "button_2_hold_count": 0,
    "button_3_hold_count": 0,
    "button_4_hold_count": 0
  }
}
```
