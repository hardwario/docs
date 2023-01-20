---
slug: /chester-x0
title: CHESTER-X0 (4-ch input)
---
import Image from '@theme/IdealImage';

# CHESTER-X0

This article describes the CHESTER-X0 extension module. Two variant of the CHESTER-X0 module are available: CHESTER-X0A (including 5.0V boost converter) and CHESTER-X0B (without 5.0V boost converter).

## Module Drawing

<Image img={require('./pc-chester-x0.png')} />

## Module Overview

CHESTER-X0B provides 4 independent GPIO channels, CHESTER-X0A includes also 5V boost converter. Each channel can be used for these applications:

* Digital input and output
* Analog input and output
* Voltage input 0-10 V
* Current loop 4-20 mA
* Dry contact input
* NPN and PNP input

Depending on the application these configuration options are available for each channel:

* Enable pull-up resistor 330 kΩ (PUX)
* Enable pull-down resistor 249 Ω (CLX)
* Enable voltage divider 1:10 100 kΩ x 10 kΩ (PDX)
* Enable 5V boost converter (CHESTER-X0A only) (ONX)

## Channel Block Diagram

This picture show the electric circuit of each channel:

<Image img={require('./sc-chester-x0.png')} />

## Configuration Table

The configuration depends on the applicatioon:

| Application:         | PUx | CLx | PDx |
| -------------------- | --- | --- | --- |
| Analog input 0-10V   | ❌   | ✅   | ❌   |
| Analog output 0-VDD  | ❌   | ❌   | ❌   |
| Digital input        | ❌   | ?   | ❌   |
| Digital output       | ❌   | ❌   | ❌   |
| Current loop 4-20 mA | ❌   | ✅   | ✅   |
| Dry contact          | ✅   | ❌   | ❌   |
| NPN input            | ✅   | ❌   | ❌   |
| PNP input            | ❌   | ❌   | ✅   |

## CHESTER Pin Configuration Diagram

<Image img={require('./tb-chester-x0.png')} />

## Pin Configuration and Functions

| Position | Signal Name | Signal Description       |
| -------- | ----------- | ------------------------ |
| 1        | VDD         | System VDD rail 3.0 V    |
| 2        | CH1         | Channel 1                |
| 3        | GND         | System ground signal     |
| 4        | CH2         | Channel 2                |
| 5        | CH3         | Channel 3                |
| 6        | GND         | System ground signal     |
| 7        | CH4         | Channel 4                |
| 8        | +V          | System positive rail (*) |

*Note: The system positive rail voltage depends on CHESTER power supply option.