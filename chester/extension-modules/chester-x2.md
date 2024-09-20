---
slug: chester-x2
title: CHESTER-X2 (Serial comm)
---
import Image from '@theme/IdealImage';

# CHESTER-X2

This article describes the CHESTER-X2 extension module.

<div class="container">
  <div class="row">
    <div class="col col--4">
      <div><Image img={require('./chester-x2-top.png')} /></div>
    </div>
    <div class="col col--10">
    </div>
  </div>
</div>
<br />

## Module Overview

CHESTER-X2 provides TTL/UART interface and RS-485 interface (e.g., for Modbus communication).

## CHESTER Pin Configuration Diagram

![](tb-chester-x2.png)

## Pin Configuration and Functions

| Position | Signal Name | Signal Description       |
| -------- | ----------- | ------------------------ |
| 1        | GND         | System ground signal     |
| 2        | VDD         | System VDD rail 3.0 V    |
| 3        | RX          | UART receiver input      |
| 4        | TX          | UART transmitter output  |
| 5        | EN          | Enable input             |
| 6        | B           | Bus input/output         |
| 7        | A           | Bus input/output         |
| 8        | +V          | System positive rail (*) |

*Note: The system positive rail voltage depends on CHESTER power supply option.

## Schematic diagram

A schematic diagram is useful if you program low-level hardware-related code or if you're just curious about how the system is designed.

- [Schematic (PDF)](schematics/hio-chester-x2-r3.0.pdf)
- [Interactive PCB connector, part, testpoint and signal browser](pathname:///download/ibom/hio-chester-x2-r3.0.html)

![](schematics/hio-chester-x2-r3.0-1.png)

## Module Drawing

![](pc-chester-x2.png)
