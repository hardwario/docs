---
slug: flash-stm32
title: Flash STM32
---
import Image from '@theme/IdealImage';

# Flash STM32 (Fiber Southbridge)

This guide explains how to flash the **Fiber Southbridge** firmware to the STM32 microcontroller using a SEGGER J-Link debug probe over SWD.

**Target:** `STM32C031C6Tx` — Cortex-M0+, 32 KB Flash, 12 KB RAM.

## Prerequisites

- SEGGER J-Link debugger (any model supporting SWD) — install the J-Link Software and Documentation Pack first; see [Developer Tools → SEGGER J-Link](../developer-tools/segger-jlink.md).
- Firmware ELF: `fiber-southbridge.elf`.
- J-Link command file: `flash.jlink`.

## 1. Connect the J-Link

Connect the J-Link probe to the **SWD header** on the FIBER board.

<Image img={require('../images/jlink-southbridge.jpeg')} />

:::tip

Make sure the FIBER device is powered on before connecting the probe.

:::

## 2. Flash with J-Link Commander

With `fiber-southbridge.elf` and `flash.jlink` in the current directory, run:

```bash
JLinkExe -CommandFile flash.jlink
```

J-Link Commander reads `flash.jlink`, connects to the target over SWD, erases the existing firmware, programs `fiber-southbridge.elf`, and resets the MCU.

When the command finishes successfully, the Southbridge starts running the new firmware immediately.
