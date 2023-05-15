---
slug: chester-x4
title: CHESTER-X4 (Step-down)
---
import Image from '@theme/IdealImage';

# CHESTER-X4

This article describes the CHESTER-X4 extension module.

## Module Overview
CHESTER-X4 implements stepdown DC/DC converter providing power from an external 6-28 VDC line (VIN). It allows also the input voltage measurement. This module has also 4 P-MOS switches allowing to supply independent loads from VIN voltage input.

## CHESTER Pin Configuration Diagram

![](tb-chester-x4.png)

## Pin Configuration and Functions

| Position | Signal Name | Signal Description                    |
| -------- | ----------- | ------------------------------------- |
| 1        | GND         | System ground signal                  |
| 2        | CH1         | Channel 1 voltage output switch       |
| 3        | CH2         | Channel 2 voltage output switch       |
| 4        | CH3         | Channel 3 voltage output switch       |
| 5        | CH4         | Channel 3 voltage output switch       |
| 6        | GND         | System ground signal                  |
| 7        | GND         | System ground signal                  |
| 8        | VIN         | DC power supply voltage input (6-28V) |

## Module Drawing

![](pc-chester-x4.png)
