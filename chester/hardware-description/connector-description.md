---
slug: connector-description
title: Connector Description
---
import Image from '@theme/IdealImage';

# Connector Description

## Backside Module

This section provides information on signal mapping for the two backside slots (A and B) on the **CHESTER** mainboard.

The backside slots use two rows of signals:

* **Top Row** (closer to the antenna)

  This signal row (with nine 2.54 mm distanced pins) provides power rails + digital signals with the signal definition in the table below.

* **Bottom Row** (closer to the terminal blocks)

  This signal row (with eight 2.54 mm distanced pins) directly connects to the terminal blocks, and their meaning is module-specific.

### Top Row Signals (Slot A)

:::caution

The following table lists the signals in the left-to-right order when you flip the board to the bottom side (the slot A position is on the right side).

:::

| Position | Signal Name | Signal Description     | Connection on nRF52840 |
|:--------:|:-----------:|:-----------------------|:----------------------:|
|    1     |    `+V`     | System positive rail   |           -            |
|    2     |   `GP3A`    | General purpose I/O    |      `P0.31/AIN7`      |
|    3     |   `GP2A`    | General purpose I/O    |      `P0.02/AIN0`      |
|    4     |   `GP1A`    | General purpose I/O    |      `P0.29/AIN5`      |
|    5     |   `GP0A`    | General purpose I/O    |      `P0.03/AIN1`      |
|    6     |    `SDA`    | System I2C bus (data)  |           -            |
|    7     |    `SCL`    | System I2C bus (clock) |           -            |
|    8     |    `VDD`    | System VDD rail        |           -            |
|    9     |    `GND`    | System ground signal   |           -            |

### Top Row Signals (Slot B)

:::caution

The following table lists the signals in the left-to-right order when you flip the board to the bottom side (the slot A position is on the left side).

:::

| Position | Signal Name | Signal Description     | Connection on nRF52840 |
|:--------:|:-----------:|:-----------------------|:----------------------:|
|    1     |    `+V`     | System positive rail   |           -            |
|    2     |   `GP3B`    | General purpose I/O    |      `P0.05/AIN3`      |
|    3     |   `GP2B`    | General purpose I/O    |      `P0.04/AIN2`      |
|    4     |   `GP1B`    | General purpose I/O    |      `P0.30/AIN6`      |
|    5     |   `GP0B`    | General purpose I/O    |      `P0.28/AIN4`      |
|    6     |    `SDA`    | System I2C bus (data)  |           -            |
|    7     |    `SCL`    | System I2C bus (clock) |           -            |
|    8     |    `VDD`    | System VDD rail        |           -            |
|    9     |    `GND`    | System ground signal   |           -            |
