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

| Application name                          | Application goal                                                      | Application features                                                       |
| :---------------------------------------- | :-------------------------------------------------------------------- | :------------------------------------------------------------------------- |
| [**CHESTER Clime**](chester-clime.md)     | Temperature and humidity sensing, IAQ monitoring, DS18B20 transmitter | ✅ Low-power <br />✅ Outdoor<br />✅ LTE-M/NB-IoT<br />LoRaWAN on request    |
| [**CHESTER Push**](chester-push.md)       | Event alerting on 4x push button with optical and acoustic feedback   | ✅ Low-power (*)<br />❌ Outdoor<br />✅ LTE-M/NB-IoT<br />LoRaWAN on request |
| **CHESTER Counter**                       | Pulse counting from energy meters using NPN/dry contact (4 channels)  | ✅ Low-power <br />✅ Outdoor<br />✅ LTE-M/NB-IoT<br />LoRaWAN on request    |
| [**CHESTER Input**](chester-input.md)     | Transmitter for NPN/PNP/dry contact/0-10 V/4-20 mA (4 channels)       | ✅ Low-power (*)<br />❌ Outdoor<br />✅ LTE-M/NB-IoT<br />LoRaWAN on request |
| [**CHESTER Current**](chester-current.md) | Non-invasive consumption sensing for AC/DC currents (4 channels)      | ✅ Low-power <br />❌ Outdoor<br />✅ LTE-M/NB-IoT<br />LoRaWAN on request    |
| **CHESTER Scale**                         | Ultra-precise weight scale monitoring using load cells (2 channels)   | ✅ Low-power <br />✅ Outdoor<br />✅ LTE-M/NB-IoT<br />LoRaWAN on request    |
| [**CHESTER Meteo**](chester-meteo.md)     | Wind, pressure, temperature and humidity measurement                  | ✅ Low-power <br />✅ Outdoor<br />✅ LTE-M/NB-IoT<br />LoRaWAN on request    |

\* The specific hardware or firmware variants may need an external power supply.

## Application Firmware

The table below provides an overview of the available application firmware builds for **catalog applications**.

To flash the firmware use [**HARDWARIO Manager**](../platform-management/hardwario-manager.md) app on your phone or follow the steps in the [**Firmware Flashing**](../firmware-flashing/index.md) article.

:::danger

When upgrading firmware from **v1.x.x** to version **v2.0.0 and newer** - it is necessary to [**backup configuration**](#configuration-backup). In the case of using **CHESTER Current** also calibration data.

:::


| Application name                                                | Version                                                                                                                                 |                    Identifier                     | Build date | Remark                                 |
| :-------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------- | :-----------------------------------------------: | :--------: | :------------------------------------- |
| [**CHESTER Clime**](chester-clime.md#chester-clime-1)           | [**v2.2.1**](https://firmware.hardwario.com/chester/90f831aa2cf74ebbbb3de3fd86f1ddb7) [⚠️](#configuration-backup "Configuration backup") | <small>`90f831aa2cf74ebbbb3de3fd86f1ddb7`</small> | 2023-05-12 |                                        |
| [**CHESTER Clime Z**](chester-clime.md#chester-clime-z)         | [**v2.2.1**](https://firmware.hardwario.com/chester/10907764a125464f8ced8e82ffb8e0e3) [⚠️](#configuration-backup "Configuration backup") | <small>`10907764a125464f8ced8e82ffb8e0e3`</small> | 2023-05-12 | Support for **CHESTER-Z**              |
| [**CHESTER Clime IAQ**](chester-clime.md#chester-clime-iaq)     | [**v2.2.1**](https://firmware.hardwario.com/chester/6816ca3d4d1347a8b24fa602fc06db24) [⚠️](#configuration-backup "Configuration backup") | <small>`6816ca3d4d1347a8b24fa602fc06db24`</small> | 2023-05-12 |                                        |
| [**CHESTER Clime 1W**](chester-clime.md#chester-clime-1w)       | [**v2.2.1**](https://firmware.hardwario.com/chester/534b88711611444a9521cc90936086a6) [⚠️](#configuration-backup "Configuration backup") | <small>`534b88711611444a9521cc90936086a6`</small> | 2023-05-12 |                                        |
| [**CHESTER Clime 1WH**](chester-clime.md#chester-clime-1wh)     | [**v2.2.1**](https://firmware.hardwario.com/chester/41f15cb536d14bad8aec3c9ada38f170) [⚠️](#configuration-backup "Configuration backup") | <small>`41f15cb536d14bad8aec3c9ada38f170`</small> | 2023-05-12 | Support for **CHESTER-S2**, **1-Wire** |
| [**CHESTER Clime RTD**](chester-clime.md#chester-clime-rtd)     | [**v2.2.1**](https://firmware.hardwario.com/chester/570557ef57ce499193f782929aa9ac6c) [⚠️](#configuration-backup "Configuration backup") | <small>`570557ef57ce499193f782929aa9ac6c`</small> | 2023-05-12 |                                        | **** |
| [**CHESTER Push**](chester-push.md#hardware-description)        | [**v2.2.1**](https://firmware.hardwario.com/chester/ec66dde848f045be8593474e0f1da1fd) [⚠️](#configuration-backup "Configuration backup") | <small>`ec66dde848f045be8593474e0f1da1fd`</small> | 2023-05-12 |                                        |
| [**CHESTER Push FM**](chester-push.md#hardware-description)     | [**v2.2.1**](https://firmware.hardwario.com/chester/eb25dc7c930249cea96104991609fafa) [⚠️](#configuration-backup "Configuration backup") | <small>`eb25dc7c930249cea96104991609fafa`</small> | 2023-05-12 |                                        |
| **CHESTER Counter**                                             | [**v2.2.1**](https://firmware.hardwario.com/chester/11787c837a7d4d489593e3efb0523a6a) [⚠️](#configuration-backup "Configuration backup") | <small>`11787c837a7d4d489593e3efb0523a6a`</small> | 2023-05-12 |                                        |
| **CHESTER Counter Z**                                           | [**v2.2.1**](https://firmware.hardwario.com/chester/5bf648f4487945ed9b143b1ada82166e) [⚠️](#configuration-backup "Configuration backup") | <small>`5bf648f4487945ed9b143b1ada82166e`</small> | 2023-05-12 | Support for **CHESTER-Z**              |
| [**CHESTER Input**](chester-input.md#chester-input-1)           | [**v2.2.1**](https://firmware.hardwario.com/chester/8f564247d25d4d5293be40b38650a6f3) [⚠️](#configuration-backup "Configuration backup") | <small>`8f564247d25d4d5293be40b38650a6f3`</small> | 2023-05-12 |                                        |
| [**CHESTER Input Z**](chester-input.md#chester-input-z)         | [**v2.2.1**](https://firmware.hardwario.com/chester/f6464822dd8947a3a8f57d3709d279f7) [⚠️](#configuration-backup "Configuration backup") | <small>`f6464822dd8947a3a8f57d3709d279f7`</small> | 2023-05-12 | Support for **CHESTER-Z**              |
| [**CHESTER Input ZH**](chester-input.md#chester-input-zh)       | [**v2.2.1**](https://firmware.hardwario.com/chester/2a9195a279244c9594fe9d4c3768b728) [⚠️](#configuration-backup "Configuration backup") | <small>`2a9195a279244c9594fe9d4c3768b728`</small> | 2023-05-12 | Support for **CHESTER-Z**, **S2**      |
| [**CHESTER Current**](chester-current.md#chester-current-1)     | [**v2.2.1**](https://firmware.hardwario.com/chester/ec43c16e97ab4927bc30effd99d764e4) [⚠️](#configuration-backup "Configuration backup") | <small>`ec43c16e97ab4927bc30effd99d764e4`</small> | 2023-05-12 |                                        |
| [**CHESTER Current Z**](chester-current.md#chester-current-z)   | [**v2.2.1**](https://firmware.hardwario.com/chester/cfc0ccd20b2b4749a0687f319106d91a) [⚠️](#configuration-backup "Configuration backup") | <small>`cfc0ccd20b2b4749a0687f319106d91a`</small> | 2023-05-12 | Support for **CHESTER-Z**              |
| [**CHESTER Current 1W**](chester-current.md#chester-current-1w) | [**v2.2.1**](https://firmware.hardwario.com/chester/39020a71459b44f4875caf04a93bb230) [⚠️](#configuration-backup "Configuration backup") | <small>`39020a71459b44f4875caf04a93bb230`</small> | 2023-05-12 |                                        |
| **CHESTER Scale**                                               | [**v2.2.1**](https://firmware.hardwario.com/chester/57a1c131ff9440639a0533ea80d725c8) [⚠️](#configuration-backup "Configuration backup") | <small>`57a1c131ff9440639a0533ea80d725c8`</small> | 2023-05-12 |                                        |
| **CHESTER Scale Z**                                             | [**v2.2.1**](https://firmware.hardwario.com/chester/decfe521ad884a469c08576ffa6eb1f5) [⚠️](#configuration-backup "Configuration backup") | <small>`decfe521ad884a469c08576ffa6eb1f5`</small> | 2023-05-12 | Support for **CHESTER-Z**              |
| [**CHESTER Meteo**](chester-meteo.md#chester-meteo-1)           | [**v2.2.1**](https://firmware.hardwario.com/chester/0bada0931aa84a71bcdca28927b66fff) [⚠️](#configuration-backup "Configuration backup") | <small>`0bada0931aa84a71bcdca28927b66fff`</small> | 2023-05-12 |                                        |
| [**CHESTER Meteo Z**](chester-meteo.md#chester-meteo-z)         | [**v2.2.1**](https://firmware.hardwario.com/chester/707ac04aa61f4efc99570c10bc860ae5) [⚠️](#configuration-backup "Configuration backup") | <small>`707ac04aa61f4efc99570c10bc860ae5`</small> | 2023-05-12 | Support for **CHESTER-Z**              |



## Configuration backup v1.x.x → v2.x.x {#configuration-backup}

When upgrading an older **v1.x.x** firmware to **v2.x.x** - it is necessary to backup application configuration. The most important is this step in **CHESTER Current** application, where in configuration there are the **current transformers calibration coefficients**.

In case you forget to back up the data - they are not lost unless you executed `config save` command in newer firmware. However, you need to temporarily downgrade to [older firmware](https://github.com/hardwario/docs/blob/33661ca486dda9e6883d3a82edf0128ab32173d2/chester/catalog-applications/index.md#application-firmware) that can read the old configuration and apply the same configuration after the firmware is updated.

In the old firmware type `app config show` to the console. Then you need to copy all configuration items. If you use **HARDWARIO Manager** phone app or **HARDWARIO CLI** on your computer, you can highlight and copy current configuration text to your clipboard or text editor.

After updating to a newer firmware, paste the same lines to the console. If you use **HARDWARIO Manager** phone app or **HARDWARIO CLI** on your computer, you can paste all the lines together to the input line and press enter. All commands will be applied one by one. Check that configuration was applied correctly by typing `app config show`. Do not forget to apply changes by typing `config save`.
