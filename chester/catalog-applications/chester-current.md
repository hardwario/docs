---
slug: chester-current
title: CHESTER Current
---
import Image from '@theme/IdealImage';

# CHESTER Current

This article describes the core functionality, hardware description, default configuration, example JSON message, and channel calibration of the catalog application **CHESTER Current**.

:::caution

Some of the basics are not provided, as they are common for all CHESTER catalog applications. Please see:

- [**Getting started**](https://docs.hardwario.com/chester/getting-started/first-step) on how to connect device to Cloud.
- [**Common functionality**](common-functionality.md) to know how LED, button and network configuration works.
- [**Platform Management**](../category/platform-connectivity) on how to work with the interactive console.

:::

## Application Overview

The application primarily targets non-invasive current measuring using the so-called **DC Current "Transformer"** (DCCT). It can measure up to 4 channels of both AC and DC currents. The current probes are clips around the measured line, which convert the magnetic flux (proportional to the electrical current) to a differential output voltage.

:::tip

The current probes require a 5 V power supply (generated using the boost converter on **CHESTER-K1**) during the measurement cycle. The boost converter and the power rails to each channel are software-controlled, so **CHESTER Current** can operate as a low-power device powered by the battery. Of course, the measurement interval plays a key role in the battery lifespan.

:::

Apart from the current measurements, the device can be configured (on demand) to measure up to 4 voltage channels (in single-ended mode). It can combine both current and voltage measurements (the total number of channels never exceeds number 4).

## Application Variants

**CHESTER Current** can be ordered in one of these variants:

### CHESTER Current {#chester-current}

The catalog **CHESTER Current** hardware consists of the following ordering codes:

* `CHESTER-M-CGLS` - Standard mainboard
* `CHESTER-K1-C1-C2-C3-C4` - 4x Diff. Input + 5 V Boost
* `CHESTER-E2-LP` - Enclosure with SMA pigtail

See [**Ordering Codes**](../ordering-codes.md) for more details.

Firmware build shield options: `ctr_k1 ctr_lte`

### CHESTER Current Z

The catalog **CHESTER Current Z** hardware consists of the following ordering codes:

* `CHESTER-M-CGLS` - Standard mainboard
* `CHESTER-K1-C1-C2-C3-C4` - 4x Diff. Input + 5 V Boost
* `CHESTER-Z1` - Backup module
* `CHESTER-E2-LP` - Enclosure with SMA pigtail

See [**Ordering Codes**](../ordering-codes.md) for more details.

Firmware build shield options: `ctr_k1 ctr_lte ctr_z`

### CHESTER Current 1W

The catalog application **CHESTER Current 1W** supports multiple external DS18B20 1-Wire temperature sensors.

The hardware of this application consists of the following ordering codes:

* `CHESTER-M-CGLS` - Standard mainboard
* `CHESTER-K1-C1-C2-C3-C4` - 4x Diff. Input + 5 V Boost
* `CHESTER-E2-LP` - Enclosure with SMA pigtail

See [**Ordering Codes**](../ordering-codes.md) for more details.

Firmware build shield options: `ctr_ds18b20 ctr_k1 ctr_lte`

### Probes

You can choose up to 4 current probes with the following current ranges:

* Maximum current **10 A**
* Maximum current **100 A**
* Maximum current **300 A**
* Maximum current **1.000 A**
* Maximum current **1.500 A**

:::caution

The current range is specified for the DC. If you design your system for the AC, you have to multiply the maximum expected AC by the coefficient of `1.42` (square root of two) to see if the current probe fits within the limit.

:::

## Application Behavior

For the wiring diagram to **CHESTER Current**, please follow the [**terminal block description**](../extension-modules/chester-k1.md) of the **CHESTER-K1** extension module.
The extension module **CHESTER-K1** use both slots **A** and **B**. So you use the corresponding terminals **A1** to **A8** and **B1** to **B8**.

### Analog

* The analog readings are sampled periodically (parameter `channel-interval-sample`). These readings are stored as a **buffer of samples**.

* The collected samples are **aggregated** periodically (parameter `channel-interval-aggreg`). The minimum, maximum, average, and median aggregates are computed from the buffered samples. These aggregated results are referred to as **measurements**.

* Each **measurement** has an associated timestamp. The buffer **measurements** are transferred as time-series data regularly (parameter `interval-report`).


### Backup

**CHESTER Current Z** (equipped with **CHESTER-Z1**) can also report information on the backup battery and external DC power state.

* The current **battery voltage** and **external DC voltage** are sent in every report.

* When the DC power input changes, the timestamp of the change event is stored altogether with the **connected**/**disconnected** state, this information is buffered, and the buffer of the events is sent (at the latest) with the regular report (parameter `interval-report`).

* Optionally, DC power input changes to the **connected** (parameter `backup-report-connected`) or **disconnected** (parameter `backup-report-disconnected`) states can be reported **immediately** or with a configurable **delay** (parameter `event-report-delay`) to allow capturing multiple consequent input changes.

* The maximum number of reports per hour is configurable (parameter `event-report-rate`). The event throttling limits communication bandwidth and preserves the battery lifespan.

:::caution

The next report interval is calculated at the beginning of the transmission cycle as the `interval-report` parameter (specified in seconds) ±20 % spread. This spread is intentionally random to avoid transmission aliasing for multiple devices operating in the same place (e.g., powered from a local DC line). If such a spread was not implemented, the device transmission could synchronously overlap.

:::

## Default Configuration

This is the default configuration (printed using the `app config show` command):

```
app config interval-report 900
app config event-report-delay 1
app config event-report-rate 30
app config backup-report-connected true
app config backup-report-disconnected true
app config channel-interval-sample 60
app config channel-interval-aggreg 300
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
app config w1-therm-interval-sample 60
app config w1-therm-interval-aggreg 300
```

## Specific Commands

:::info

You can easily explore the whole command tree structure - start with the `help` command.

:::

### Commands

Command to **trigger sample** immediately (and store the result in the sample buffer):

```
sample
```

Command to **send data** immediately (and flush the aggregated measurements):

```
send
```

### Reporting

Use this command to set **report interval** (in seconds):

```
app config interval-report <value>
```

### Backup

Use this command to configure a short delay (in seconds) between the **backup** event and its reporting:

```
app config event-report-delay <value>
```

:::tip

This feature is useful in systems where another change may arrive shortly after the first one.

:::

Use this command to limit the number of asynchronous **backup** event reports in a one-hour window:

```
app config event-report-rate <value>
```

:::tip

This feature helps to conserve power in the battery-operated device and optimizes the amount of transferred data. The regular (periodic) reports set by the parameter `interval-report` are not counted to this limit.

:::

Use these commands to enable/disable reporting of the backup module power input connect/disconnect events:

```
app config backup-report-connected <true/false>
app config backup-report-disconnected <true/false>
```

### Analog Channels

Command to **enable/disable** channel `n` (index 1-4):

```
app config channel-active <n> <true/false>
```

Command to switch between **single-ended/differential** modes on the channel `n` (index 1-4):

```
app config channel-differential <n> <true/false>
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

### 1-Wire Thermometer

Command to set **1-Wire thermometer sample interval** in seconds:

```
app config w1-therm-interval-sample <1-86400>
```

Command to set **1-Wire thermometer aggregate interval** in seconds:

```
app config w1-therm-interval-aggreg <1-86400>
```

## Firmware

The latest firmware is available in Catalog Applications [Firmware chapter](index.md#application-firmware).

## Example JSON Message


```json
{
  "message": {
    "version": 1,
    "sequence": 1,
    "timestamp": 1673272805
  },
  "attribute": {
    "vendor_name": "HARDWARIO",
    "product_name": "CHESTER-M",
    "hw_variant": "CDGLS",
    "hw_revision": "R3.2",
    "fw_name": "CHESTER Current",
    "fw_version": "v1.5.0",
    "serial_number": "2159018247"
  },
  "system": {
    "uptime": 131,
    "voltage_rest": 4.73,
    "voltage_load": 4.67,
    "current_load": 46
  },
  "backup": {
    "line_voltage": 9.51,
    "batt_voltage": 3.45,
    "state": "connected",
    "events": []
  },
  "network": {
    "imei": 351358815178303,
    "imsi": 901288003957939,
    "parameter": {
      "eest": 7,
      "ecl": 0,
      "rsrp": -87,
      "rsrq": -4,
      "snr": 16,
      "plmn": 23003,
      "cid": 939040,
      "band": 20,
      "earfcn": 6447
    }
  },
  "thermometer": {
    "temperature": 22.68
  },
  "accelerometer": {
    "acceleration_x": -0.16,
    "acceleration_y": 0.07,
    "acceleration_z": 9.88,
    "orientation": 2
  },
  "analog_channels": [
    {
      "channel": 1,
      "measurements": [
        {
          "timestamp": 1673272718,
          "mean_min": 1037,
          "mean_max": 1039,
          "mean_avg": 1038,
          "mean_mdn": 1038,
          "rms_min": 1037,
          "rms_max": 1039,
          "rms_avg": 1038,
          "rms_mdn": 1038
        },
        {
          "timestamp": 1673272748,
          "mean_min": 1038,
          "mean_max": 1038,
          "mean_avg": 1038,
          "mean_mdn": 1038,
          "rms_min": 1038,
          "rms_max": 1038,
          "rms_avg": 1038,
          "rms_mdn": 1038
        },
        {
          "timestamp": 1673272778,
          "mean_min": 1038,
          "mean_max": 1038,
          "mean_avg": 1038,
          "mean_mdn": 1038,
          "rms_min": 1038,
          "rms_max": 1038,
          "rms_avg": 1038,
          "rms_mdn": 1038
        }
      ]
    },
    {
      "channel": 2,
      "measurements": [
        {
          "timestamp": 1673272718,
          "mean_min": 0,
          "mean_max": 0,
          "mean_avg": 0,
          "mean_mdn": 0,
          "rms_min": 0,
          "rms_max": 0,
          "rms_avg": 0,
          "rms_mdn": 0
        },
        {
          "timestamp": 1673272748,
          "mean_min": 0,
          "mean_max": 0,
          "mean_avg": 0,
          "mean_mdn": 0,
          "rms_min": 0,
          "rms_max": 0,
          "rms_avg": 0,
          "rms_mdn": 0
        },
        {
          "timestamp": 1673272778,
          "mean_min": 0,
          "mean_max": 0,
          "mean_avg": 0,
          "mean_mdn": 0,
          "rms_min": 0,
          "rms_max": 0,
          "rms_avg": 0,
          "rms_mdn": 0
        }
      ]
    },
    {
      "channel": 3,
      "measurements": [
        {
          "timestamp": 1673272718,
          "mean_min": -8,
          "mean_max": -7,
          "mean_avg": -8,
          "mean_mdn": -8,
          "rms_min": 8,
          "rms_max": 8,
          "rms_avg": 8,
          "rms_mdn": 8
        },
        {
          "timestamp": 1673272748,
          "mean_min": -8,
          "mean_max": -8,
          "mean_avg": -8,
          "mean_mdn": -8,
          "rms_min": 8,
          "rms_max": 9,
          "rms_avg": 8,
          "rms_mdn": 8
        },
        {
          "timestamp": 1673272778,
          "mean_min": -8,
          "mean_max": -8,
          "mean_avg": -8,
          "mean_mdn": -8,
          "rms_min": 9,
          "rms_max": 9,
          "rms_avg": 9,
          "rms_mdn": 9
        }
      ]
    },
    {
      "channel": 4,
      "measurements": [
        {
          "timestamp": 1673272718,
          "mean_min": 4,
          "mean_max": 5,
          "mean_avg": 4,
          "mean_mdn": 4,
          "rms_min": 5,
          "rms_max": 5,
          "rms_avg": 5,
          "rms_mdn": 5
        },
        {
          "timestamp": 1673272748,
          "mean_min": 4,
          "mean_max": 4,
          "mean_avg": 4,
          "mean_mdn": 4,
          "rms_min": 5,
          "rms_max": 5,
          "rms_avg": 5,
          "rms_mdn": 5
        },
        {
          "timestamp": 1673272778,
          "mean_min": 4,
          "mean_max": 4,
          "mean_avg": 4,
          "mean_mdn": 4,
          "rms_min": 5,
          "rms_max": 5,
          "rms_avg": 5,
          "rms_mdn": 5
        }
      ]
    }
  ],
  "w1_thermometers": [
    {
      "serial_number": 170783697,
      "measurements": [
        {
          "timestamp": 1673272718,
          "min": 21.25,
          "max": 21.25,
          "avg": 21.25,
          "mdn": 21.25
        },
        {
          "timestamp": 1673272748,
          "min": 21.25,
          "max": 21.31,
          "avg": 21.27,
          "mdn": 21.25
        },
        {
          "timestamp": 1673272778,
          "min": 21.25,
          "max": 21.25,
          "avg": 21.25,
          "mdn": 21.25
        }
      ]
    },
    {
      "serial_number": 170787196,
      "measurements": [
        {
          "timestamp": 1673272718,
          "min": 21.43,
          "max": 21.43,
          "avg": 21.43,
          "mdn": 21.43
        },
        {
          "timestamp": 1673272748,
          "min": 21.43,
          "max": 21.43,
          "avg": 21.43,
          "mdn": 21.43
        },
        {
          "timestamp": 1673272778,
          "min": 21.43,
          "max": 21.43,
          "avg": 21.43,
          "mdn": 21.43
        }
      ]
    }
  ]
}
```

## Channel Calibration

:::danger

When upgrading firmware from **v1.x.x** to version **v2.0.0 and newer** - it is necessary to [**backup configuration**](common-functionality.md#configuration-backup). In the case of using **CHESTER Current** also calibration data.

:::

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

   Use the `sample` command to trigger the measurement.

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
