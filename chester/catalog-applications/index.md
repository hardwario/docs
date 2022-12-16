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

| Application name                            | Application goal                                                      | Application features                                                       |
| :------------------------------------------ | :-------------------------------------------------------------------- | :------------------------------------------------------------------------- |
| [**CHESTER Clime**](./chester-clime.md)     | Temperature and humidity sensing, IAQ monitoring, DS18B20 transmitter | ✅ Low-power <br />✅ Outdoor<br />✅ LTE-M/NB-IoT<br />LoRaWAN on request    |
| [**CHESTER Push**](./chester-push.md)       | Event alerting on 4x push button with optical and acoustic feedback   | ✅ Low-power (*)<br />❌ Outdoor<br />✅ LTE-M/NB-IoT<br />LoRaWAN on request |
| **CHESTER Counter**                         | Pulse counting from energy meters using NPN/dry contact (4 channels)  | ✅ Low-power <br />✅ Outdoor<br />✅ LTE-M/NB-IoT<br />LoRaWAN on request    |
| [**CHESTER Input**](./chester-input.md)     | Transmitter for NPN/PNP/dry contact/0-10 V/4-20 mA (4 channels)       | ✅ Low-power (*)<br />❌ Outdoor<br />✅ LTE-M/NB-IoT<br />LoRaWAN on request |
| [**CHESTER Current**](./chester-current.md) | Non-invasive consumption sensing for AC/DC currents (4 channels)      | ✅ Low-power <br />❌ Outdoor<br />✅ LTE-M/NB-IoT<br />LoRaWAN on request    |
| **CHESTER Scale**                           | Ultra-precise weight scale monitoring using load cells (2 channels)   | ✅ Low-power <br />✅ Outdoor<br />✅ LTE-M/NB-IoT<br />LoRaWAN on request    |

\* The specific hardware or firmware variants may need an external power supply.

## Application Firmware

The table below provides an overview of the available application firmware builds for **catalog applications**:

:::tip

Notice there are often more firmware variations for many of the **catalog applications**. For details on differences, go to the particular **catalog application** documentation.

:::

| Application name                                              | Version                                                                               |             Identifier             | Build date | Remark                         |
| :------------------------------------------------------------ | :------------------------------------------------------------------------------------ | :--------------------------------: | :--------: | :----------------------------- |
| [**CHESTER Clime**](chester-clime.md#chester-clime)           | [**v1.7.1**](https://firmware.hardwario.com/chester/38bba48a921c47539e3150b3bfe42296) | `38bba48a921c47539e3150b3bfe42296` | 2022-12-14 |                                |
| [**CHESTER Clime Z**](chester-clime.md#chester-clime-z)       | [**v1.7.1**](https://firmware.hardwario.com/chester/fe96eefc1d8a414e8d6511cf09c11c5f) | `fe96eefc1d8a414e8d6511cf09c11c5f` | 2022-12-14 | With support for **CHESTER-Z** |
| [**CHESTER Clime IAQ**](chester-clime.md#chester-clime-iaq)   | [**v1.7.1**](https://firmware.hardwario.com/chester/142e57dd5cf84aed818e46910c484526) | `142e57dd5cf84aed818e46910c484526` | 2022-12-14 |                                |
| [**CHESTER Clime 1W**](chester-clime.md#chester-clime-1w)     | [**v1.7.1**](https://firmware.hardwario.com/chester/6a250db8f48c4286a5ca2e4e53ad56f7) | `6a250db8f48c4286a5ca2e4e53ad56f7` | 2022-12-15 |                                |
| [**CHESTER Push**](chester-push.md#hardware-description)      | [**v1.4.0**](https://firmware.hardwario.com/chester/0153468227a7401bb197722059d4343c) | `0153468227a7401bb197722059d4343c` | 2022-11-26 |                                |
| [**CHESTER Push FM**](chester-push.md#hardware-description)   | [**v1.4.0**](https://firmware.hardwario.com/chester/beec735261a149dd8dbeb3bbdae956d4) | `beec735261a149dd8dbeb3bbdae956d4` | 2022-11-26 |                                |
| **CHESTER Counter**                                           | [**v1.1.0**](https://firmware.hardwario.com/chester/02dad4783b58446988f2391a16cb6820) | `02dad4783b58446988f2391a16cb6820` | 2022-11-26 |                                |
| **CHESTER Counter Z**                                         | [**v1.1.0**](https://firmware.hardwario.com/chester/95d7c986567142d086ecece1e7074d20) | `95d7c986567142d086ecece1e7074d20` | 2022-11-26 | With support for **CHESTER-Z** |
| [**CHESTER Input**](chester-input.md#chester-input-1)         | [**v1.1.0**](https://firmware.hardwario.com/chester/955c3b0d0e094c129f4ddc07e5e7c8ce) | `955c3b0d0e094c129f4ddc07e5e7c8ce` | 2022-12-13 |                                |
| [**CHESTER Input Z**](chester-input.md#chester-input-z)       | [**v1.1.0**](https://firmware.hardwario.com/chester/000a44d94a374b1eba0a0bdeee4d4981) | `000a44d94a374b1eba0a0bdeee4d4981` | 2022-12-13 | With support for **CHESTER-Z** |
| [**CHESTER Current**](chester-current.md#chester-current-1)   | [**v1.5.1**](https://firmware.hardwario.com/chester/c964a3294a29474283b9b03e497c752a) | `c964a3294a29474283b9b03e497c752a` | 2022-11-26 |                                |
| [**CHESTER Current Z**](chester-current.md#chester-current-z) | [**v1.5.1**](https://firmware.hardwario.com/chester/af84330b396d4048bf4a23041e5ff43f) | `af84330b396d4048bf4a23041e5ff43f` | 2022-11-26 | With support for **CHESTER-Z** |
| **CHESTER Scale**                                             | [**v1.5.0**](https://firmware.hardwario.com/chester/94b04b019756497280335e99b228fa91) | `94b04b019756497280335e99b228fa91` | 2022-11-26 |                                |
| **CHESTER Scale Z**                                           | [**v1.5.0**](https://firmware.hardwario.com/chester/f99366c6dd7e4805bbe27efb014161f2) | `f99366c6dd7e4805bbe27efb014161f2` | 2022-11-26 | With support for **CHESTER-Z** |
