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

CHESTER Push has push buttons on the enclosure that immediately sends packet when pressed. The number of buttons is configurable from a single button placed in the middle of the enclosure to 4 buttons placed above each other near the right border of the enclosure. So there can be placed different texts or symbols next to each button.

CHESTER can differentiate between short and long presses of the buttons. In each packet there is event to know which button triggered the send of the message. Every message also contains counters of each button for shor and long presses.

Each button is also equipped with a LED indicator so the operator can see that the press was reconginized. Optionally the beep sound can be played for audible confirmation of the button press.

CHESTER Push contains CHESTER-Z board that has rechargeable Li-Po battery and power supply (6-24 V DC) for charging and powering the CHESTER. Information about external power presence, external voltage and battery voltage is also reported. With that information CHESTER Push could be used to monitor for example utility power outages.

CHESTER Push also has GPS sensor, temperature sensor and accelerometer. All these values are reported periodically.

## Hardware Description

The catalog **CHESTER Push** hardware consists of the following ordering codes:

* `CHESTER-M-CGLS` TODO is there variant w/o a SAFT battery holder?
* `CHESTER-Z`
* TODO cables, enclosure milling?

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
TODO
```
