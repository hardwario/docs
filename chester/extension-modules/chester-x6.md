---
slug: chester-x6
title: CHESTER-X6 (S-Wire bus)
---
import Image from '@theme/IdealImage';

# CHESTER-X6

This article describes the CHESTER-X6 extension module.

## Module Drawing

<Image img={require('./pc-chester-x6.png')} />

## Module Overview
The CHESTER-X6 provides interface for HARDWARIO S-Wire protocol targeting low-power peripherals using 3 wire connection (+5V, GND, DATA). It implements also 5V boost converter and 5V power supply output.

## CHESTER Pin Configuration Diagram

<Image img={require('./tb-chester-x6.png')} />

## Pin Configuration and Functions

| Position | Signal Name | Signal Description        |
| -------- | ----------- | ------------------------- |
| 1        | +V          | System positive rail (*)  |
| 2        | +5V         | 5.0 V power supply output |
| 3        | GND         | System ground signal      |
| 4        | DATA        | Data                      |
| 5        | DATA        | Data                      |
| 6        | GND         | System ground signal      |
| 7        | +5V         | 5.0 V power supply output |
| 8        | +V          | System positive rail (*)  |

*Note: The system positive rail voltage depends on CHESTER power supply option.