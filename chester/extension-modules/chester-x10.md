---
slug: chester-x10
title: CHESTER-X10 (Li-Po charger)
---
import Image from '@theme/IdealImage';

# CHESTER-X10
This article describes the CHESTER-10 extension module.

## Module Overview

CHESTER-X10 is a backup power supply module for CHESTER. The primary power input is an external 6-28 VDC line (VIN). The module provides also charging the single cell Li-Pol battery. Charging current is set to 450 mA. The module comes with protected single cell Li-Pol battery 3.7V 2000 mAh. Integrated ADC convertor allows to measure the input voltage (VIN / GND) and the battery voltage (BAT+ / BAT-).

## Electrical Specification

* Input voltage range (VIN): 5-28 V
* Nominal battery voltage: 3.7 V
* Battery charging current: 450 mA
* Minimum recommended battery capacity: 1000 mAh.

## Included Battery Specification
* Model: LP103454-PCM-LD
* 3.7V 2000mAh single cell Li-Po battery
* Integrated protection circuit
* Dimension: 56.0 x 34.5 x 10.3 mm

## CHESTER Pin Configuration Diagram

![](tb-chester-x10.png)

## Pin Configuration and Functions

| Position | Signal Name | Signal Description                    |
| -------- | ----------- | ------------------------------------- |
| 1        | GND         | System ground signal                  |
| 2        | BAT-        | Battery - (*)                         |
| 3        | BAT-        | Battery - (*)                         |
| 4        | BAT+        | Battery + (*)                         |
| 5        | BAT+        | Battery + (*)                         |
| 6        | GND         | System ground signal                  |
| 7        | GND         | System ground signal                  |
| 8        | VIN         | DC power supply voltage input (5-28V) |

*Note: Use only a single cell 3.7V Li-Pol (or Li-Ion) battery with integrated protection circuit. Do not short circuit the battery!

## Module Drawing

![](pc-chester-x10.png)
