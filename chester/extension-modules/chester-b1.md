---
slug: chester-b1
title: CHESTER-B1 (Battery Pack)
---
import Image from '@theme/IdealImage';

# CHESTER-B1
This article describes the **CHESTER-CB** carrier board.

## Module Overview

**CHESTER-B1** is a carrier board for **CHESTER-M** providing extra battery capacity for extend battery lifespan. It can be useful for application that needs long life time 5 - 10 years without battery replacement or for standard application thats requires short period of measuring and communication which is mor power consumption. The following configurations are available:
- up to eight 3.6V lithium C cells (8P) providing 62 Ah (LS26500)
- up to eight 1.5V alkaline C cells (2S4P) providing 31 Ah (C VARTA)
- up to six 3.6V D cell in parallel (6P) providing 102 Ah (LS33600)
- up to six 1.5V alkaline D cells (2S3P) providing 50 Ah (D VARTA)

CHESTER-B1 with fits with the Takachi WP20-28-5Cx enclosure with C cell holders or Takachi WP20-28-57x with D cell holders.


## Technical Specification

* Supported C size 3.6V lithium battery: 1P-8P x **Saft LSH14** or 8P x **Saft LS26500\***
* Supported D size 3.6V lithium battery: 1P-6P x **Saft LSH20** or 6P x **Saft LS33600\****
* Supported C size 1.5V: standard alkaline battery in 2S4P configuration
* Supported D size 1.5V: standard alkaline battery in 2S3P configuration
* Battery idle current consumption **<2 μA** (without **CHESTER-M**)

_\* Single Saft LS26500 cell is not able to deliver hight current peaks, install all 8 cells.
_\* Single Saft LS33600 cell is not able to deliver hight current peaks, install all 6 cells.

For more details see [**Ordering Codes**](../ordering-codes.md#chester-m).

## Module drawing

![](chester-b1.png)

## Inputs and outputs overview

| Position | Name      | Signal Description                      |
| -------- | --------- | --------------------------------------- |
| JP4      | BATTERY   | External battery input JST connector    |
| JP5      | SYSTEM    | CHESTER SYSTEM JST connector            |

_\* CHESTER-X SLOT A is by default occupied with integrated module CHESTER-X1_

_\** Use the BYPASS BUTTON to initiate start from the battery without DC input power supply_

## Pinout Description

### Block A Connectors

![](block-a.png)

### 1-Wire Connectors

![](1-wire.png)

### I2C Connector

![](i2c.png)

### SYSTEM Connector

![](system.png)

### Block B Connectors

![](block-b.png)

## Schematic Diagram

A schematic diagram is useful if you program low-level hardware-related code or if you're just curious about how the system is designed.

- [Schematic (PDF)](schematics/hio-chester-c1-r1.1.pdf)

<!--
- [TODO Interactive PCB connector, part, testpoint and signal browser]
-->

![](schematics/hio-chester-c1-r1.1-1.png)
![](schematics/hio-chester-c1-r1.1-2.png)
![](schematics/hio-chester-c1-r1.1-3.png)


