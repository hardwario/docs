---
slug: catalog-applications
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

The table below provides an overview of the available application firmware builds for **catalog applications**.

To flash the firmware use [**HARDWARIO Manager**](../platform-management/hardwario-manager.md) app on your phone or follow the steps in the [**Firmware Flashing**](../firmware-flashing/index.md) article.

:::tip

Notice there are often more firmware variations for many of the **catalog applications**. For details on differences, go to the particular **catalog application** documentation.

:::

| Application name                                                | Version                                                                                                                                               |                    Identifier                     | Build date | Remark                                 |
| :-------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------- | :-----------------------------------------------: | :--------: | :------------------------------------- |
| [**CHESTER Clime**](chester-clime.md#chester-clime-1)           | [**v1.8.0**](https://firmware.hardwario.com/chester/34677881d57f4b0eb85507f176627bee)                                                                 | <small>`34677881d57f4b0eb85507f176627bee`</small> | 2023-01-07 |                                        |
| [**CHESTER Clime Z**](chester-clime.md#chester-clime-z)         | [**v1.8.0**](https://firmware.hardwario.com/chester/98f88e85f3154898933f50623e276b21)                                                                 | <small>`98f88e85f3154898933f50623e276b21`</small> | 2023-01-07 | With support for **CHESTER-Z**         |
| [**CHESTER Clime IAQ**](chester-clime.md#chester-clime-iaq)     | [**v1.8.0**](https://firmware.hardwario.com/chester/f6fce379a88442e38eecc9657f950870)                                                                 | <small>`f6fce379a88442e38eecc9657f950870`</small> | 2023-01-07 |                                        |
| [**CHESTER Clime 1W**](chester-clime.md#chester-clime-1w)       | [**v1.8.0**](https://firmware.hardwario.com/chester/54817adbd2694bb8817d39841e96590f)                                                                 | <small>`54817adbd2694bb8817d39841e96590f`</small> | 2023-01-07 |                                        |
| [**CHESTER Clime RTD**](chester-clime.md#chester-clime-rtd)     |                                                                                                                                                       |                                                   |            |                                        |
| [**CHESTER Push**](chester-push.md#hardware-description)        | [**v1.5.0**](https://firmware.hardwario.com/chester/0c9153eadc3d48bbbfea1ecae7460efd)                                                                 | <small>`0c9153eadc3d48bbbfea1ecae7460efd`</small> | 2023-01-07 |                                        |
| [**CHESTER Push FM**](chester-push.md#hardware-description)     | [**v1.5.0**](https://firmware.hardwario.com/chester/31a0278b9ba14739b98d361dd68cd019)                                                                 | <small>`31a0278b9ba14739b98d361dd68cd019`</small> | 2023-01-07 |                                        |
| **CHESTER Counter**                                             | [**v1.1.0**](https://firmware.hardwario.com/chester/02dad4783b58446988f2391a16cb6820)                                                                 | <small>`02dad4783b58446988f2391a16cb6820`</small> | 2022-11-26 |                                        |
| **CHESTER Counter Z**                                           | [**v1.1.0**](https://firmware.hardwario.com/chester/95d7c986567142d086ecece1e7074d20)                                                                 | <small>`95d7c986567142d086ecece1e7074d20`</small> | 2022-11-26 | With support for **CHESTER-Z**         |
| [**CHESTER Input**](chester-input.md#chester-input-1)           | [**v1.1.0**](https://firmware.hardwario.com/chester/955c3b0d0e094c129f4ddc07e5e7c8ce)                                                                 | <small>`955c3b0d0e094c129f4ddc07e5e7c8ce`</small> | 2022-12-13 |                                        |
| [**CHESTER Input Z**](chester-input.md#chester-input-z)         | [**v1.1.0**](https://firmware.hardwario.com/chester/000a44d94a374b1eba0a0bdeee4d4981)                                                                 | <small>`000a44d94a374b1eba0a0bdeee4d4981`</small> | 2022-12-13 | With support for **CHESTER-Z**         |
| [**CHESTER Input ZH**](chester-input.md#chester-input-zh)       | [**v1.1.0**](https://firmware.hardwario.com/chester/20818305ec0c4bf28988e18211382d96)                                                                 | <small>`20818305ec0c4bf28988e18211382d96`</small> | 2022-12-16 | With support for **CHESTER-Z**, **S2** |
| [**CHESTER Current**](chester-current.md#chester-current-1)     | [**v1.6.0**](https://firmware.hardwario.com/chester/e8808f978096455c921b2de7a5da2f1c) [⚠️](chester-current.md#calibration-backup "Calibration backup") | <small>`e8808f978096455c921b2de7a5da2f1c`</small> | 2023-01-11 |                                        |
| [**CHESTER Current Z**](chester-current.md#chester-current-z)   | [**v1.6.0**](https://firmware.hardwario.com/chester/eb77270913c84abcaba5291d1c7c4784) [⚠️](chester-current.md#calibration-backup "Calibration backup") | <small>`eb77270913c84abcaba5291d1c7c4784`</small> | 2023-01-11 | With support for **CHESTER-Z**         |
| [**CHESTER Current 1W**](chester-current.md#chester-current-1w) | [**v1.6.0**](https://firmware.hardwario.com/chester/876b6f87c9a34de89d20dd6d868bf525) [⚠️](chester-current.md#calibration-backup "Calibration backup") | <small>`876b6f87c9a34de89d20dd6d868bf525`</small> | 2023-01-11 |                                        |
| **CHESTER Scale**                                               | [**v1.5.0**](https://firmware.hardwario.com/chester/94b04b019756497280335e99b228fa91)                                                                 | <small>`94b04b019756497280335e99b228fa91`</small> | 2022-11-26 |                                        |
| **CHESTER Scale Z**                                             | [**v1.5.0**](https://firmware.hardwario.com/chester/f99366c6dd7e4805bbe27efb014161f2)                                                                 | <small>`f99366c6dd7e4805bbe27efb014161f2`</small> | 2022-11-26 | With support for **CHESTER-Z**         |
