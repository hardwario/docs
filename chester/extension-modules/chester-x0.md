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

* Digital and analog input and output
* 0-10 V voltage input
* 4-20 mA current loop
* Dry contact input
* NPN and PNP input

Depending on the application these configuration options are available for each channel:

* Enable pull-up resistor 330 kΩ
* Enable pull-down resistor 249 Ω
* Enable voltage divider 1:10 (100 kΩ, 10 kΩ)
* Enable 5V boost converter (CHESTER-X0A only)
  
## Pin Configuration Diagram

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

(*)Note: The system positive rail voltage depends on CHESTER power supply option.

## Analog Outpup Configuration

* Disable pull-up resistor 330 kΩ
* Disable pull-down resistor 249 Ω
* Disable voltage divider 1:10 (100 kΩ, 10 kΩ)
* Disable 5V boost converter (CHESTER-X0A only)

## Analog Input Configuration

* Disable pull-up resistor 330 kΩ
* Disable pull-down resistor 249 Ω
* Disable voltage divider 1:10 (100 kΩ, 10 kΩ)
* Disable 5V boost converter (CHESTER-X0A only)

## Current Loop 4-20 mA Configuration

* Disable pull-up resistor 330 kΩ
* Enable pull-down resistor 249 Ω
* Enable voltage divider 1:10 (100 kΩ, 10 kΩ)
* Disable 5V boost converter (CHESTER-X0A only)

## Dry Contact Configuration

* Enable pull-up resistor 330 kΩ
* Disable pull-down resistor 249 Ω
* Disable voltage divider 1:10 (100 kΩ, 10 kΩ)
* Disable 5V boost converter (CHESTER-X0A only)

## NPN Input Configuration

* Enable pull-up resistor 330 kΩ
* Disable pull-down resistor 249 Ω
* Disable voltage divider 1:10 (100 kΩ, 10 kΩ)
* Disable 5V boost converter (CHESTER-X0A only)

## PNP Input Configuration

* Disable pull-up resistor 330 kΩ
* Disable pull-down resistor 249 Ω
* Enable voltage divider 1:10 (100 kΩ, 10 kΩ)
* Disable 5V boost converter (CHESTER-X0A only)