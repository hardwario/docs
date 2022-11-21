---
slug: chester-push
title: CHESTER Push
---
import Image from '@theme/IdealImage';

# CHESTER Push

This chapter describes the core functionality, hardware description, and example **JSON** message of the catalog application **CHESTER Push**.

:::caution

Some of the basics are not provided, as they are common for all **CHESTER** catalog applications. For example, see the chapter [**Platform Management**](../platform-management/index.md) on how to work with the interactive console.

:::

## Application Overview

**CHESTER Push** has push buttons on the enclosure. The application immediately sends data when any of the push buttons are pressed. For bulk orders, the number of buttons can be configured. An off-the-shelf configuration provides four push buttons on the left side. Alternatively, we can deliver a single push-button version (in the enclosure center). Also, upon a customer's request, we can customize the enclosure printing, and provide various text labels (or symbols) next to each of the push buttons.

The application can differentiate between a short press and a long press. In each message, there is an event distinguishing which of the push buttons triggered the sending. Every message also contains counters of each push button for short and long presses.

Each button is also equipped with an **LED indicator** so the operator can see that the press was recognized. Also, the **beep sound** is played from the integrated acoustic buzzer for audible confirmation of the push button press.

The **CHESTER Push** application integrates a **CHESTER-Z-F** extension module with a rechargeable **Li-Ion** battery and DC/DC power supply (input voltage range of 6 VDC to 26 VDC) that can charge the battery and provide a steady power supply for the application. The reported message also provides information about the external power presence, external DC line voltage, and battery voltage. With that extra information, **CHESTER Push** could also be used to monitor power outages.

**CHESTER Push** also reports temperature and device orientation (using the built-in accelerometer). All these values are provided in every message sent from the device.

### LED Behaviour

The application signals push-button events on LEDs in two different ways and customers can specify which firmware variant better suits their needs.

- Standard **CHESTER Push** implementation:

  The LED on the pressed push button is active for 2 seconds (green for short press, red for long press).

  :::tip

  This variant makes it suitable for low-power operation (months from the integrated **Li-Ion** battery).

  :::

- Alternate **CHESTER Push FM** (stands for **Flip Mode**) implementation:

  The LED on the pressed push button flips (with red color) to the push button that has been pressed (the previous push button is switched off).

  :::caution

  This variant makes is not suitable for low-power operation as the constantly activated LED quickly discharges the battery.

  :::

## Hardware Description

The catalog **CHESTER Push** hardware consists of the following ordering codes:

* `CHESTER-M-CGLS` - CHESTER mainboard
* `CHESTER-Z-F` - Four push buttons (see [**Ordering Codes**](../ordering-codes.md#chester-z) for more variants)
* `CHESTER-E2-LP` - Enclosure with light pipe and SMA antenna pigtail

<!---

## Print Enclosure Template

TODO

-->

## Specific Commands

:::info

You can easily explore the whole command tree structure - start with the `help` command.

:::

:::caution

To apply a new configuration, you need to call `config save`, which applies the new configuration parameters and reboots the device.

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
