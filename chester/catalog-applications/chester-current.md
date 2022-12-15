---
slug: /chester-current
title: CHESTER Current
---
import Image from '@theme/IdealImage';

# CHESTER Current

This article describes the core functionality, hardware description, default configuration, example JSON message, and channel calibration of the catalog application **CHESTER Current**.

:::caution

Some of the basics are not provided, as they are common for all CHESTER catalog applications. For example, see the article [**Platform Management**](../platform-management/index.md) on how to work with the interactive console.

:::

## Application Overview

The application primarily targets non-invasive current measuring using the so-called **DC Current "Transformer"** (DCCT). It can measure up to 4 channels of both AC and DC currents. The current probes are clips around the measured line, which convert the magnetic flux (proportional to the electrical current) to a differential output voltage.

:::tip

The current probes require a 5 V power supply (generated using the boost converter on **CHESTER-K**) during the measurement cycle. The boost converter and the power rails to each channel are software-controlled, so **CHESTER Current** can operate as a low-power device powered by the battery. Of course, the measurement interval plays a key role in the battery lifespan.

:::

Apart from the current measurements, the device can be configured (on demand) to measure up to 4 voltage channels (in single-ended mode). It can combine both current and voltage measurements (the total number of channels never exceeds number 4).

The measurements are taken regularly as specified by the `measurement-interval` parameter. The measurements are stored in the measurement buffer and sent when the report interval expires (set by the `report-interval` parameter).

:::caution

The next report interval is calculated at the beginning of the transmission cycle as the `report-interval` parameter (specified in seconds) ±20 % spread. This spread is intentionally random to avoid transmission aliasing for multiple devices operating in the same place (and e.g. powered from a local DC line). If such a spread was not implemented, the device transmission could synchronously overlap.

:::

## Hardware Description

The catalog **CHESTER Current** hardware consists of the following ordering codes:

* `CHESTER-M-CGLS`
* `CHESTER-K-C1-C2-C3-C4`
* `CHESTER-Z`
* `CHESTER-E2-LP`

You can choose up to 4 current probes with the following current ranges:

* Maximum current **10 A**
* Maximum current **100 A**
* Maximum current **500 A**
* Maximum current **1.000 A**
* Maximum current **1.500 A**

:::caution

The current range is specified for the DC. If you design your system for the AC, you have to multiply the maximum expected AC by the coefficient of `1.42` (square root of two) to see if the current probe fits within the limit.

:::

:::info

Upon request, it is possible to order a **CHESTER Current** variant without the **CHESTER-Z** module, and with the battery holder for the **LiSoCl₂** primary cell on the mainboard. When configured properly, the **CHESTER Current** application can operate from the primary cell for several years.

:::

## Default Configuration

This is the default configuration (printed using the `app config show` command):

```
app config channel-active 1 false
app config channel-active 2 false
app config channel-active 3 false
app config channel-active 4 false
app config channel-differential 1 false
app config channel-differential 2 false
app config channel-differential 3 false
app config channel-differential 4 false
app config channel-calib-x0 1 0
app config channel-calib-x0 2 0
app config channel-calib-x0 3 0
app config channel-calib-x0 4 0
app config channel-calib-y0 1 0
app config channel-calib-y0 2 0
app config channel-calib-y0 3 0
app config channel-calib-y0 4 0
app config channel-calib-x1 1 0
app config channel-calib-x1 2 0
app config channel-calib-x1 3 0
app config channel-calib-x1 4 0
app config channel-calib-y1 1 0
app config channel-calib-y1 2 0
app config channel-calib-y1 3 0
app config channel-calib-y1 4 0
```

## Specific Commands

:::info

You can easily explore the whole command tree structure - start with the `help` command.

:::

Command to **trigger measurement** immediately (and store the result in the buffer of measurements):

```
measure
```

Command to **send data** immediately (and flush the buffer of measurements):

```
send
```

Command to **enable/disable** channel `n` (index 1-4):

```
app config channel-active <n> <{false|true}>
```

Command to switch between **single-ended/differential** modes on the channel `n` (index 1-4):

```
app config channel-differential <n> <{false|true}>
```

Command to set **calibration point X0** (input) on the channel `n` (index 1-4):

```
app config channel-calib-x0 <n> <value>
```

Command to set **calibration point Y0** (output) on the channel `n` (index 1-4):

```
app config channel-calib-y0 <n> <value>
```

Command to set **calibration point X1** (input) on the channel `n` (index 1-4):

```
app config channel-calib-x1 <n> <value>
```

Command to set **calibration point Y1** (output) on the channel `n` (index 1-4):

```
app config channel-calib-y1 <n> <value>
```

## Firmware

The latest firmware is available in Catalog Applications [Firmware chapter](index.md#application-firmware).

## Example JSON Message


```json
{
  "frame": {
    "protocol": 1,
    "sequence": 1,
    "timestamp": 1659967456
  },
  "attribute": {
    "vendor_name": "HARDWARIO",
    "product_name": "CHESTER-M",
    "hw_variant": "CGV",
    "hw_revision": "R3.2",
    "fw_version": "v1.0.0",
    "serial_number": "2159018442"
  },
  "state": {
    "uptime": 276
  },
  "battery": {
    "voltage_rest": 4.7,
    "voltage_load": 4.65,
    "current_load": 46
  },
  "network": {
    "imei": 351358815499600,
    "imsi": 901288910015788,
    "parameter": {
      "eest": 7,
      "ecl": 0,
      "rsrp": -82,
      "rsrq": -5,
      "snr": 11,
      "plmn": 23003,
      "cid": 1011233,
      "band": 20,
      "earfcn": 6447
    }
  },
  "thermometer": {
    "temperature": 27
  },
  "accelerometer": {
    "acceleration_x": 0,
    "acceleration_y": -0.16,
    "acceleration_z": 9.27,
    "orientation": 2
  },
  "measurements": [
    {
      "timestamp": 1659967264,
      "channel_1_avg": -1232,
      "channel_1_rms": 7545,
      "channel_2_avg": 199411,
      "channel_2_rms": 199504,
      "channel_3_avg": 2463,
      "channel_3_rms": 7338,
      "channel_4_avg": null,
      "channel_4_rms": null
    },
    {
      "timestamp": 1659967324,
      "channel_1_avg": -2104,
      "channel_1_rms": 7756,
      "channel_2_avg": 199277,
      "channel_2_rms": 199378,
      "channel_3_avg": 1827,
      "channel_3_rms": 7579,
      "channel_4_avg": null,
      "channel_4_rms": null
    }
  ]
}
```

## Channel Calibration

:::caution

The following section is provided only for reference. Usually, the **CHESTER Current** devices are ordered altogether with the current probes, and **HARDWARIO** does the channel calibration for their customers in such a case.

:::

In the **CHESTER Current** application, each channel can be individually calibrated using two-point calibration (two points specified by the XY coordinates). For these two points together with the input value (from the A/D converter), **CHESTER** performs the so-call linear interpolation.

:::tip

Linear interpolation is defined by this formula for output calculation:

`y = y0 + (x - x0) * (y1 - y0) / (x1 - x0)`

Where `y` is the output value, `x` is the input value (number read from the A/D converter), and the constants `x0` + `y0` + `x1` + `y1` represent the calibration points.

:::

In **HARDWARIO**, we have a calibration kit for **CHESTER Current** made of several air-core coils with 10/50/100 turns.

### Example Current Calibration

1. Measure the **zero-current offsets** and write them for each channel as the `x0` parameter

   :::tip

   Use the `measure` command to trigger the measurement.

   :::

1. Let's assume calibration of **100 A** current probe and pick the **100-turn coil**.

1. Set the laboratory power supply's current limit to **900 mA**, and connect the power supply to the coil.

1. **Clip the current probe** around the calibration coil.

1. Verify the current flowing to the coil using a **multimeter** connected in series.

1. Measure the channel, and write the reading as the `x1` value.

1. Set the `y1` parameter to the value `90000`.

   :::info

   The value represents the multiplication of the number of turns on the coil and the power supply's current limit - in this example `90000`.

   :::

1. Since we assumed a zero-current offset point, we can keep the `x0` parameter set as `0`.

1. Save the configuration data (using the `config save` command) and verify the applied calibrated values.
