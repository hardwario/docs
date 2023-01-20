---
slug: /chester-x7
title: CHESTER-X7 (1-ch diff input)
---
import Image from '@theme/IdealImage';

# CHESTER-X7

This article describes the CHESTER-X7 extension module.

## Module Drawing

<Image img={require('./pc-chester-x7.png')} />

## Module Overview
The CHESTER-X7 provides one diferential input for current probes or other industrial sensors and one single ended voltage input up to 28 V. The module implements also 5V boost converter allows powering the current probes.

## CHESTER Pin Configuration Diagram

<Image img={require('./tb-chester-x7.png')} />

## Pin Configuration and Functions

| Position | Signal Name | Signal Description          |
| -------- | ----------- | --------------------------- |
| 1        | +V          | System positive rail (*)    |
| 2        | GND         | System ground signal        |
| 3        | VDD         | System VDD rail 3.0 V       |
| 4        | VIN         | Voltage input (0 - 28V)     |
| 5        | GND         | System ground signal        |
| 6        | INP         | Positive differencial input |
| 7        | INM         | Negative differencial input |
| 8        | VOUT        | 5.0 V power supply output   |

*Note: The system positive rail voltage depends on CHESTER power supply option.
