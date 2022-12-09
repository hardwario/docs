---
slug: /catalog-applications
title: Catalog Applications
---
import Image from '@theme/IdealImage';

# Catalog Applications

This article provides information on the so-called **catalog application** for the **CHESTER** platform.

**CHESTER** is an extensible low-power IoT gateway with an open SDK built on top of the **Zephyr** operating system. For immediate deployment, **HARDWARIO** provides several applications for particular use cases. Those **catalog applications** are available from **HARDWARIO** with a short lead time. The applications have source codes available as part of the **CHESTER SDK** and are actively improved, maintained, and supported.

The **catalog applications** also serve as a great starting point for your own firmware application.

## Application List

The table below provides an overview of the available **catalog applications**:

| Application name                                                | Application goal                                                      | Low-power | Outdoor |
| :-------------------------------------------------------------- | :-------------------------------------------------------------------- | :-------: | :-----: |
| [**CHESTER Clime**](./chester-clime.md)<br/>✅ LTE ❌ LoRaWAN     | Temperature and humidity sensing, IAQ monitoring, DS18B20 transmitter |     ✅     |    ✅    |
| [**CHESTER Push**](./chester-push.md)<br/>✅ LTE ❌ LoRaWAN       | Event alerting on 4x push button with optical and acoustic feedback   |     ❓     |    ❌    |
| **CHESTER Counter**<br/>✅ LTE ❌ LoRaWAN                         | Pulse counting from energy meters using NPN/dry contact (4 channels)  |     ✅     |    ✅    |
| [**CHESTER Input**](./chester-input.md)<br/>✅ LTE ❌ LoRaWAN     | Transmitter for NPN/PNP/dry contact/0-10 V/4-20 mA (4 channels)       |     ❓     |    ❌    |
| [**CHESTER Current**](./chester-current.md)<br/>✅ LTE ❌ LoRaWAN | Non-invasive consumption sensing for AC/DC currents (4 channels)      |     ✅     |    ❌    |
| **CHESTER Scale**<br/>✅ LTE ❌ LoRaWAN                           | Ultra-precise weight scale monitoring using load cells (2 channels)   |     ✅     |    ✅    |

## Application Firmware

The table below provides an overview of the available application firmware builds for **catalog applications**:

:::tip

Notice there are often more firmware variations for many of the **catalog applications**. For details on differences, go to the particular **catalog application** documentation.

:::

| Application name      | Version                                                                               |             Identifier             | Build date | Remark                         |
| :-------------------- | :------------------------------------------------------------------------------------ | :--------------------------------: | :--------: | :----------------------------- |
| **CHESTER Clime**     | [**v1.7.0**](https://firmware.hardwario.com/chester/1d9e49d36e0a4a0188832bd4725efdb9) | `1d9e49d36e0a4a0188832bd4725efdb9` | 2022-11-26 |                                |
| **CHESTER Clime Z**   | [**v1.7.0**](https://firmware.hardwario.com/chester/52574d1e40af4596a8d72e8d61dcd55f) | `52574d1e40af4596a8d72e8d61dcd55f` | 2022-11-26 | With support for **CHESTER-Z** |
| **CHESTER Clime IAQ** | [**v1.7.0**](https://firmware.hardwario.com/chester/753ca1f7e8c844c2bca23fec82957cfb) | `753ca1f7e8c844c2bca23fec82957cfb` | 2022-11-26 |                                |
| **CHESTER Push**      | [**v1.4.0**](https://firmware.hardwario.com/chester/0153468227a7401bb197722059d4343c) | `0153468227a7401bb197722059d4343c` | 2022-11-26 |                                |
| **CHESTER Push FM**   | [**v1.4.0**](https://firmware.hardwario.com/chester/beec735261a149dd8dbeb3bbdae956d4) | `beec735261a149dd8dbeb3bbdae956d4` | 2022-11-26 |                                |
| **CHESTER Counter**   | [**v1.1.0**](https://firmware.hardwario.com/chester/02dad4783b58446988f2391a16cb6820) | `02dad4783b58446988f2391a16cb6820` | 2022-11-26 |                                |
| **CHESTER Counter Z** | [**v1.1.0**](https://firmware.hardwario.com/chester/95d7c986567142d086ecece1e7074d20) | `95d7c986567142d086ecece1e7074d20` | 2022-11-26 | With support for **CHESTER-Z** |
| **CHESTER Input**     | [**v1.0.0**](https://firmware.hardwario.com/chester/0d9d69d80a5e4cc9b56d5e58f5d16b0d) | `0d9d69d80a5e4cc9b56d5e58f5d16b0d` | 2022-12-09 |                                |
| **CHESTER Input Z**   | [**v1.0.0**](https://firmware.hardwario.com/chester/aa3153e943dc4366a619dcc0959e31bc) | `aa3153e943dc4366a619dcc0959e31bc` | 2022-12-09 | With support for **CHESTER-Z** |
| **CHESTER Current**   | [**v1.5.1**](https://firmware.hardwario.com/chester/c964a3294a29474283b9b03e497c752a) | `c964a3294a29474283b9b03e497c752a` | 2022-11-26 |                                |
| **CHESTER Current Z** | [**v1.5.1**](https://firmware.hardwario.com/chester/af84330b396d4048bf4a23041e5ff43f) | `af84330b396d4048bf4a23041e5ff43f` | 2022-11-26 | With support for **CHESTER-Z** |
| **CHESTER Scale**     | [**v1.5.0**](https://firmware.hardwario.com/chester/94b04b019756497280335e99b228fa91) | `94b04b019756497280335e99b228fa91` | 2022-11-26 |                                |
| **CHESTER Scale Z**   | [**v1.5.0**](https://firmware.hardwario.com/chester/f99366c6dd7e4805bbe27efb014161f2) | `f99366c6dd7e4805bbe27efb014161f2` | 2022-11-26 | With support for **CHESTER-Z** |
