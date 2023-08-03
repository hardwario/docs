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

For details on how each catalog application works, click on the application name in the table below.

Common features are described in the special [**Common Functionality**](common-functionality.md) article.

Firmwares are located in the [**Application Firmware**](#application-firmware) chapter.

| Application name                          | Application goal                                                      | Application features                                                       |
| :---------------------------------------- | :-------------------------------------------------------------------- | :------------------------------------------------------------------------- |
| [**CHESTER Clime**](chester-clime.md)     | Temperature and humidity sensing, IAQ monitoring, DS18B20 transmitter | ✅ Low-power <br />✅ Outdoor<br />✅ LTE-M/NB-IoT<br />LoRaWAN on request    |
| [**CHESTER Push**](chester-push.md)       | Event alerting on 4x push button with optical and acoustic feedback   | ✅ Low-power (*)<br />❌ Outdoor<br />✅ LTE-M/NB-IoT<br />LoRaWAN on request |
| [**CHESTER Counter**](chester-counter.md) | Pulse counting from energy meters using NPN/dry contact (4 channels)  | ✅ Low-power <br />✅ Outdoor<br />✅ LTE-M/NB-IoT<br />LoRaWAN on request    |
| [**CHESTER Input**](chester-input.md)     | Transmitter for NPN/PNP/dry contact/0-10 V/4-20 mA (4 channels)       | ✅ Low-power (*)<br />❌ Outdoor<br />✅ LTE-M/NB-IoT<br />LoRaWAN on request |
| [**CHESTER Current**](chester-current.md) | Non-invasive consumption sensing for AC/DC currents (4 channels)      | ✅ Low-power <br />❌ Outdoor<br />✅ LTE-M/NB-IoT<br />LoRaWAN on request    |
| **CHESTER Scale**                         | Ultra-precise weight scale monitoring using load cells (2 channels)   | ✅ Low-power <br />✅ Outdoor<br />✅ LTE-M/NB-IoT<br />LoRaWAN on request    |
| [**CHESTER Meteo**](chester-meteo.md)     | Wind, pressure, temperature and humidity measurement                  | ✅ Low-power <br />✅ Outdoor<br />✅ LTE-M/NB-IoT<br />LoRaWAN on request    |
| [**CHESTER Range**](chester-range.md)     | Distance measurement                                                  | ✅ Low-power <br />✅ Outdoor<br />✅ LTE-M/NB-IoT<br />LoRaWAN on request    |

\* The specific hardware or firmware variants may need an external power supply.

## Application Firmware

The table below provides an overview of the available application firmware builds for **catalog applications**.

To flash the firmware use [**HARDWARIO Manager**](../platform-connectivity/hardwario-manager.md) app on your phone or follow the steps in the [**Firmware Flashing**](../firmware-flashing/index.md) article.

:::danger

When upgrading firmware from **v1.x.x** to version **v2.0.0 and newer** - it is necessary to [**backup configuration**](#configuration-backup). In the case of using **CHESTER Current** also calibration data.

:::


| Application name                                                | Version                                                                                                                                 |                    Identifier                     | Build date | Remark                                 |
| :-------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------- | :-----------------------------------------------: | :--------: | :------------------------------------- |
| [**CHESTER Clime**](chester-clime.md#chester-clime-1)           | [**v2.3.0**](https://firmware.hardwario.com/chester/55e7f6ba38c04b88aa68ad7ec2b3f353) [⚠️](#configuration-backup "Configuration backup") | <small>`55e7f6ba38c04b88aa68ad7ec2b3f353`</small> | 2023-08-02 |                                        |
| [**CHESTER Clime Z**](chester-clime.md#chester-clime-z)         | [**v2.3.0**](https://firmware.hardwario.com/chester/ed45be6253344349a9b8ddc71a0cc673) [⚠️](#configuration-backup "Configuration backup") | <small>`ed45be6253344349a9b8ddc71a0cc673`</small> | 2023-08-02 | Support for **CHESTER-Z**              |
| [**CHESTER Clime IAQ**](chester-clime.md#chester-clime-iaq)     | [**v2.3.0**](https://firmware.hardwario.com/chester/b263c267ff84435db38451469d9f0f3b) [⚠️](#configuration-backup "Configuration backup") | <small>`b263c267ff84435db38451469d9f0f3b`</small> | 2023-08-02 |                                        |
| [**CHESTER Clime 1W**](chester-clime.md#chester-clime-1w)       | [**v2.3.0**](https://firmware.hardwario.com/chester/5658239a71e34ef8ab6f703e45c1bbc2) [⚠️](#configuration-backup "Configuration backup") | <small>`5658239a71e34ef8ab6f703e45c1bbc2`</small> | 2023-08-02 |                                        |
| [**CHESTER Clime 1WH**](chester-clime.md#chester-clime-1wh)     | [**v2.3.0**](https://firmware.hardwario.com/chester/86c4d01e7bfc452aa4ecd2bfc3e0f7c1) [⚠️](#configuration-backup "Configuration backup") | <small>`86c4d01e7bfc452aa4ecd2bfc3e0f7c1`</small> | 2023-08-02 | Support for **CHESTER-S2**, **1-Wire** |
| [**CHESTER Clime RTD**](chester-clime.md#chester-clime-rtd)     | [**v2.3.0**](https://firmware.hardwario.com/chester/78014d06151f41e39be6c491dbac696b) [⚠️](#configuration-backup "Configuration backup") | <small>`78014d06151f41e39be6c491dbac696b`</small> | 2023-08-02 |                                        | **** |
| [**CHESTER Push**](chester-push.md#hardware-description)        | [**v2.3.0**](https://firmware.hardwario.com/chester/a2f47dd13c1f4a94ae68af09aa54e089) [⚠️](#configuration-backup "Configuration backup") | <small>`a2f47dd13c1f4a94ae68af09aa54e089`</small> | 2023-08-02 |                                        |
| [**CHESTER Push FM**](chester-push.md#hardware-description)     | [**v2.3.0**](https://firmware.hardwario.com/chester/cfdceffeaac04051a5dbd46a1ece73e5) [⚠️](#configuration-backup "Configuration backup") | <small>`cfdceffeaac04051a5dbd46a1ece73e5`</small> | 2023-08-02 |                                        |
| [**CHESTER Counter**](chester-counter.md#chester-counter-1)     | [**v2.3.0**](https://firmware.hardwario.com/chester/31f2a2b55135499c896e1359373b5152) [⚠️](#configuration-backup "Configuration backup") | <small>`31f2a2b55135499c896e1359373b5152`</small> | 2023-08-02 |                                        |
| [**CHESTER Counter Z**](chester-counter.md#chester-counter-z)   | [**v2.3.0**](https://firmware.hardwario.com/chester/b035e5e4b948433fb994634a118e20fb) [⚠️](#configuration-backup "Configuration backup") | <small>`b035e5e4b948433fb994634a118e20fb`</small> | 2023-08-02 | Support for **CHESTER-Z**              |
| [**CHESTER Input**](chester-input.md#chester-input-1)           | [**v2.3.0**](https://firmware.hardwario.com/chester/65cbb4e59d9a4dd0894551704608750d) [⚠️](#configuration-backup "Configuration backup") | <small>`65cbb4e59d9a4dd0894551704608750d`</small> | 2023-08-02 |                                        |
| [**CHESTER Input Z**](chester-input.md#chester-input-z)         | [**v2.3.0**](https://firmware.hardwario.com/chester/4bdb8844e5984c889d05e450085705db) [⚠️](#configuration-backup "Configuration backup") | <small>`4bdb8844e5984c889d05e450085705db`</small> | 2023-08-02 | Support for **CHESTER-Z**              |
| [**CHESTER Input ZH**](chester-input.md#chester-input-zh)       | [**v2.3.0**](https://firmware.hardwario.com/chester/e93720560751470b8d5a5f512a192ad3) [⚠️](#configuration-backup "Configuration backup") | <small>`e93720560751470b8d5a5f512a192ad3`</small> | 2023-08-02 | Support for **CHESTER-Z**, **S2**      |
| [**CHESTER Current**](chester-current.md#chester-current-1)     | [**v2.3.0**](https://firmware.hardwario.com/chester/52177a80039543d38725d4d9f57590ea) [⚠️](#configuration-backup "Configuration backup") | <small>`52177a80039543d38725d4d9f57590ea`</small> | 2023-08-02 |                                        |
| [**CHESTER Current Z**](chester-current.md#chester-current-z)   | [**v2.3.0**](https://firmware.hardwario.com/chester/fa2f25c0de5643e6ad77bcc118aad30c) [⚠️](#configuration-backup "Configuration backup") | <small>`fa2f25c0de5643e6ad77bcc118aad30c`</small> | 2023-08-02 | Support for **CHESTER-Z**              |
| [**CHESTER Current 1W**](chester-current.md#chester-current-1w) | [**v2.3.0**](https://firmware.hardwario.com/chester/80ecf08298914cdb9df632ca749e309e) [⚠️](#configuration-backup "Configuration backup") | <small>`80ecf08298914cdb9df632ca749e309e`</small> | 2023-08-02 |                                        |
| **CHESTER Scale**                                               | [**v2.3.0**](https://firmware.hardwario.com/chester/c37b56df73cf4272b301a8f00eb1486d) [⚠️](#configuration-backup "Configuration backup") | <small>`c37b56df73cf4272b301a8f00eb1486d`</small> | 2023-08-02 |                                        |
| **CHESTER Scale Z**                                             | [**v2.3.0**](https://firmware.hardwario.com/chester/489e5fb2b9d943d28d4f1b2aba3ed540) [⚠️](#configuration-backup "Configuration backup") | <small>`489e5fb2b9d943d28d4f1b2aba3ed540`</small> | 2023-08-02 | Support for **CHESTER-Z**              |
| [**CHESTER Meteo**](chester-meteo.md#chester-meteo-1)           | [**v2.3.0**](https://firmware.hardwario.com/chester/7e886270374f4ebba8712324630c96b7) [⚠️](#configuration-backup "Configuration backup") | <small>`7e886270374f4ebba8712324630c96b7`</small> | 2023-08-02 |                                        |
| [**CHESTER Meteo Z**](chester-meteo.md#chester-meteo-z)         | [**v2.3.0**](https://firmware.hardwario.com/chester/ef86634d1ad04d06a55c760333aa7a5e) [⚠️](#configuration-backup "Configuration backup") | <small>`ef86634d1ad04d06a55c760333aa7a5e`</small> | 2023-08-02 | Support for **CHESTER-Z**              |
| [**CHESTER Range**](chester-range.md#chester-range-1)           | [**v2.3.0**](https://firmware.hardwario.com/chester/6e0d155e01744c8fbc31b7093bb16c77) [⚠️](#configuration-backup "Configuration backup") | <small>`6e0d155e01744c8fbc31b7093bb16c77`</small> | 2023-08-02 |                                        |
| [**CHESTER Range Z**](chester-range.md#chester-range-z)         | [**v2.3.0**](https://firmware.hardwario.com/chester/a35e14cc52df47c98eb829da627f0bfd) [⚠️](#configuration-backup "Configuration backup") | <small>`a35e14cc52df47c98eb829da627f0bfd`</small> | 2023-08-02 | Support for **CHESTER-Z**              |

