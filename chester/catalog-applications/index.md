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

## Application Firmware Cloud v2

These firmwares are for newer [**Cloud v2**](../../cloud/cloud-v2) communication.

| Application name                                                | Version                                                                               |                    Identifier                     | Build date | Remark                         |
| :-------------------------------------------------------------- | :------------------------------------------------------------------------------------ | :-----------------------------------------------: | :--------: | :----------------------------- |
| [**CHESTER Clime**](chester-clime.md#chester-clime)             | [**v3.0.1**](https://firmware.hardwario.com/chester/6b35ff540c72483f9e33f643b7612731) | <small>`6b35ff540c72483f9e33f643b7612731`</small> | 2024-08-23 |                                |
| [**CHESTER Clime Z**](chester-clime.md#chester-clime-z)         | [**v3.0.1**](https://firmware.hardwario.com/chester/15873e1343314bd587c1ddb1d16e9c8c) | <small>`15873e1343314bd587c1ddb1d16e9c8c`</small> | 2024-08-23 | Support for CHESTER-Z          |
| [**CHESTER Clime IAQ**](chester-clime.md#chester-clime-iaq)     | [**v3.0.1**](https://firmware.hardwario.com/chester/77323fd128754a8ca0f6b21c16cf3cd8) | <small>`77323fd128754a8ca0f6b21c16cf3cd8`</small> | 2024-08-23 |                                |
| [**CHESTER Clime 1W**](chester-clime.md#chester-clime-1w)       | [**v3.0.1**](https://firmware.hardwario.com/chester/41234a015b044c138c69767c8a9f91e5) | <small>`41234a015b044c138c69767c8a9f91e5`</small> | 2024-08-23 |                                |
| [**CHESTER Clime 1WH**](chester-clime.md#chester-clime-1wh)     | [**v3.0.1**](https://firmware.hardwario.com/chester/bc074110c0b742609c1f6f6ed9139a75) | <small>`bc074110c0b742609c1f6f6ed9139a75`</small> | 2024-08-23 | Support for CHESTER-S2, 1-Wire |
| [**CHESTER Clime RTD**](chester-clime.md#chester-clime-rtd)     | [**v3.0.1**](https://firmware.hardwario.com/chester/bba8698b52c04e4b8e0ffe601e617296) | <small>`bba8698b52c04e4b8e0ffe601e617296`</small> | 2024-08-23 |                                |
| [**CHESTER Clime TC**](chester-clime.md#chester-clime-tc)       | [**v3.0.1**](https://firmware.hardwario.com/chester/ed732d2ee77e4540b8aafd21b4492209) | <small>`ed732d2ee77e4540b8aafd21b4492209`</small> | 2024-08-23 |                                |
| [**CHESTER Push**](chester-push.md#chester-push)                | [**v3.0.1**](https://firmware.hardwario.com/chester/468354119427411fb8f72a42ba0588bf) | <small>`468354119427411fb8f72a42ba0588bf`</small> | 2024-08-23 |                                |
| [**CHESTER Push FM**](chester-push.md#chester-push-fm)          | [**v3.0.1**](https://firmware.hardwario.com/chester/a945eec574df4c3b88112b08889b7729) | <small>`a945eec574df4c3b88112b08889b7729`</small> | 2024-08-23 |                                |
| [**CHESTER Control**](chester-control.md#chester-control)       | [**v3.0.1**](https://firmware.hardwario.com/chester/c190122105634a9a85a352d7a89dd8b2) | <small>`c190122105634a9a85a352d7a89dd8b2`</small> | 2024-08-23 |                                |
| [**CHESTER Current**](chester-current.md#chester-current)       | [**v3.0.1**](https://firmware.hardwario.com/chester/b6ccdec55cec440eb249a2a8255f4dc0) | <small>`b6ccdec55cec440eb249a2a8255f4dc0`</small> | 2024-08-23 |                                |
| [**CHESTER Current Z**](chester-current.md#chester-current-z)   | [**v3.0.1**](https://firmware.hardwario.com/chester/1b7af405c40048f8bfcd9b6956c927b3) | <small>`1b7af405c40048f8bfcd9b6956c927b3`</small> | 2024-08-23 | Support for CHESTER-Z          |
| [**CHESTER Current 1W**](chester-current.md#chester-current-1w) | [**v3.0.1**](https://firmware.hardwario.com/chester/3b0daa7654464b729e281614d84aa710) | <small>`3b0daa7654464b729e281614d84aa710`</small> | 2024-08-23 | Support for 1-Wire             |
| [**CHESTER Scale**](chester-scale.md#chester-scale)             | [**v3.0.1**](https://firmware.hardwario.com/chester/e29694c140784da1aa9e715b29c25f3a) | <small>`e29694c140784da1aa9e715b29c25f3a`</small> | 2024-08-23 |                                |
| [**CHESTER Scale Z**](chester-scale.md#chester-scale-z)         | [**v3.0.1**](https://firmware.hardwario.com/chester/7c39916a686144f8b8d30663a333668c) | <small>`7c39916a686144f8b8d30663a333668c`</small> | 2024-08-23 | Support for CHESTER-Z          |
| [**CHESTER Meteo**](chester-meteo.md#chester-meteo)             | [**v3.0.1**](https://firmware.hardwario.com/chester/3ad374c4efd04d8389b18253d915944b) | <small>`3ad374c4efd04d8389b18253d915944b`</small> | 2024-08-23 |                                |
| [**CHESTER Meteo Z**](chester-meteo.md#chester-meteo-z)         | [**v3.0.1**](https://firmware.hardwario.com/chester/893665533d1b481087ae123b53708a4c) | <small>`893665533d1b481087ae123b53708a4c`</small> | 2024-08-23 | Support for CHESTER-Z          |

## Application Firmware Cloud v1

These firmwares are for older [**Cloud v1**](../../cloud/overview) communication.

The table below provides an overview of the available application firmware builds for **catalog applications**.

To flash the firmware use [**HARDWARIO Manager**](../platform-connectivity/hardwario-manager.md) app on your phone or follow the steps in the [**Firmware Flashing**](../firmware-flashing/index.md) article.

:::info

Starting from firmware **v2.3.0** the catalog applications are built with NB-IoT/LTE and LoRaWAN functionality in a single firmware. You need to set the mode
not only for new devices but also **when you are upgrading older firmware**.

The default functionality is that a device **does not use any radio** (mode `none`) and you need to set configuration parameter **mode**.

- `app config mode lte` for NB-IoT/LTE network
- `app config mode lrw` for LoRaWAN network

Then apply changes by typing `config save`. The device will reboot and use the correct network.

:::


| Application name                                                | Version                                                                                                                                                                        |                    Identifier                     | Build date | Remark                                         |
| :-------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-----------------------------------------------: | :--------: | :--------------------------------------------- |
| [**CHESTER Clime**](chester-clime.md#chester-clime)             | [**v2.3.0**](https://firmware.hardwario.com/chester/55e7f6ba38c04b88aa68ad7ec2b3f353) [ℹ️](common-functionality.md#network-mode-configuration "Network Mode Configuration")     | <small>`55e7f6ba38c04b88aa68ad7ec2b3f353`</small> | 2023-08-02 |                                                |
| [**CHESTER Clime Z**](chester-clime.md#chester-clime-z)         | [**v2.3.0**](https://firmware.hardwario.com/chester/ed45be6253344349a9b8ddc71a0cc673) [ℹ️](common-functionality.md#network-mode-configuration "Network Mode Configuration")     | <small>`ed45be6253344349a9b8ddc71a0cc673`</small> | 2023-08-02 | Support for **CHESTER-Z1**                     |
| [**CHESTER Clime IAQ**](chester-clime.md#chester-clime-iaq)     | [**v2.3.2**](https://firmware.hardwario.com/chester/e0c41bfdc19a421c95bc245642c65813) [ℹ️](common-functionality.md#network-mode-configuration "Network Mode Configuration")     | <small>`e0c41bfdc19a421c95bc245642c65813`</small> | 2024-04-16 | Support for **CHESTER-X10**                    |
| [**CHESTER Clime 1W**](chester-clime.md#chester-clime-1w)       | [**v2.3.0**](https://firmware.hardwario.com/chester/5658239a71e34ef8ab6f703e45c1bbc2) [ℹ️](common-functionality.md#network-mode-configuration "Network Mode Configuration")     | <small>`5658239a71e34ef8ab6f703e45c1bbc2`</small> | 2023-08-02 |                                                |
| [**CHESTER Clime 1WH**](chester-clime.md#chester-clime-1wh)     | [**v2.3.0**](https://firmware.hardwario.com/chester/86c4d01e7bfc452aa4ecd2bfc3e0f7c1) [ℹ️](common-functionality.md#network-mode-configuration "Network Mode Configuration")     | <small>`86c4d01e7bfc452aa4ecd2bfc3e0f7c1`</small> | 2023-08-02 | Support for **CHESTER-S2**, **1-Wire**         |
| [**CHESTER Clime RTD**](chester-clime.md#chester-clime-rtd)     | [**v2.3.0**](https://firmware.hardwario.com/chester/78014d06151f41e39be6c491dbac696b) [ℹ️](common-functionality.md#network-mode-configuration "Network Mode Configuration")     | <small>`78014d06151f41e39be6c491dbac696b`</small> | 2023-08-02 |                                                |
| [**CHESTER Push**](chester-push.md#chester-push)                | [**v2.3.0**](https://firmware.hardwario.com/chester/a2f47dd13c1f4a94ae68af09aa54e089) [ℹ️](common-functionality.md#network-mode-configuration "Network Mode Configuration")     | <small>`a2f47dd13c1f4a94ae68af09aa54e089`</small> | 2023-08-02 |                                                |
| [**CHESTER Push FM**](chester-push.md#chester-push)             | [**v2.3.0**](https://firmware.hardwario.com/chester/cfdceffeaac04051a5dbd46a1ece73e5) [ℹ️](common-functionality.md#network-mode-configuration "Network Mode Configuration")     | <small>`cfdceffeaac04051a5dbd46a1ece73e5`</small> | 2023-08-02 |                                                |
| [**CHESTER Counter**](chester-counter.md#chester-counter)       | [**v2.3.0**](https://firmware.hardwario.com/chester/31f2a2b55135499c896e1359373b5152) [ℹ️](common-functionality.md#network-mode-configuration "Network Mode Configuration")     | <small>`31f2a2b55135499c896e1359373b5152`</small> | 2023-08-02 |                                                |
| [**CHESTER Counter Z**](chester-counter.md#chester-counter-z)   | [**v2.3.0**](https://firmware.hardwario.com/chester/b035e5e4b948433fb994634a118e20fb) [ℹ️](common-functionality.md#network-mode-configuration "Network Mode Configuration")     | <small>`b035e5e4b948433fb994634a118e20fb`</small> | 2023-08-02 | Support for **CHESTER-Z1**                     |
| [**CHESTER Input**](chester-input.md#chester-input)             | [**v2.3.2**](https://firmware.hardwario.com/chester/e97898e1678d4dbdb36184d459824f42) [ℹ️](common-functionality.md#network-mode-configuration "Network Mode Configuration")     | <small>`e97898e1678d4dbdb36184d459824f42`</small> | 2023-08-28 | Support for **1-Wire**                         |
| [**CHESTER Input Z**](chester-input.md#chester-input-z)         | [**v2.3.2**](https://firmware.hardwario.com/chester/9f88cb71a28446049a1be89d523447e7) [ℹ️](common-functionality.md#network-mode-configuration "Network Mode Configuration")     | <small>`9f88cb71a28446049a1be89d523447e7`</small> | 2023-08-28 | Support for **CHESTER-Z1**, **1-Wire**         |
| [**CHESTER Input ZH**](chester-input.md#chester-input-zh)       | [**v2.3.2**](https://firmware.hardwario.com/chester/2e1e0c362223406da9ad70b9da5b23d1) [ℹ️](common-functionality.md#network-mode-configuration "Network Mode Configuration")     | <small>`2e1e0c362223406da9ad70b9da5b23d1`</small> | 2023-08-28 | Support for **CHESTER-Z1**, **1-Wire**, **S2** |
| [**CHESTER Current**](chester-current.md#chester-current)       | [**v2.3.0**](https://firmware.hardwario.com/chester/52177a80039543d38725d4d9f57590ea) [ℹ️](common-functionality.md#network-mode-configuration "Network Mode Configuration")     | <small>`52177a80039543d38725d4d9f57590ea`</small> | 2023-08-02 |                                                |
| [**CHESTER Current Z**](chester-current.md#chester-current-z)   | [**v2.3.0**](https://firmware.hardwario.com/chester/fa2f25c0de5643e6ad77bcc118aad30c) [ℹ️](common-functionality.md#network-mode-configuration "Network Mode Configuration")     | <small>`fa2f25c0de5643e6ad77bcc118aad30c`</small> | 2023-08-02 | Support for **CHESTER-Z1**                     |
| [**CHESTER Current 1W**](chester-current.md#chester-current-1w) | [**v2.3.0**](https://firmware.hardwario.com/chester/80ecf08298914cdb9df632ca749e309e) [ℹ️](common-functionality.md#network-mode-configuration "Network Mode Configuration")     | <small>`80ecf08298914cdb9df632ca749e309e`</small> | 2023-08-02 |                                                |
| **CHESTER Scale**                                               | [**v2.3.0**](https://firmware.hardwario.com/chester/c37b56df73cf4272b301a8f00eb1486d) [ℹ️](common-functionality.md#network-mode-configuration "Network Mode Configuration")     | <small>`c37b56df73cf4272b301a8f00eb1486d`</small> | 2023-08-02 |                                                |
| **CHESTER Scale Z**                                             | [**v2.3.0**](https://firmware.hardwario.com/chester/489e5fb2b9d943d28d4f1b2aba3ed540) [ℹ️](common-functionality.md#network-mode-configuration "Network Mode Configuration")     | <small>`489e5fb2b9d943d28d4f1b2aba3ed540`</small> | 2023-08-02 | Support for **CHESTER-Z1**                     |
| [**CHESTER Meteo**](chester-meteo.md#chester-meteo)             | [**v2.3.0**](https://firmware.hardwario.com/chester/7e886270374f4ebba8712324630c96b7) [ℹ️](common-functionality.md#network-mode-configuration "Network Mode Configuration")     | <small>`7e886270374f4ebba8712324630c96b7`</small> | 2023-08-02 |                                                |
| [**CHESTER Meteo Z**](chester-meteo.md#chester-meteo-z)         | [**v2.3.0**](https://firmware.hardwario.com/chester/ef86634d1ad04d06a55c760333aa7a5e) [ℹ️](common-functionality.md#network-mode-configuration "Network Mode Configuration")     | <small>`ef86634d1ad04d06a55c760333aa7a5e`</small> | 2023-08-02 | Support for **CHESTER-Z1**                     |
| [**CHESTER Range**](chester-range.md#chester-range)             | [**v2.3.1**](https://firmware.hardwario.com/chester/5c3cc2b6-b263-4f39-90ac-d409771bfaee) [ℹ️](common-functionality.md#network-mode-configuration "Network Mode Configuration") | <small>`5c3cc2b6b2634f3990acd409771bfaee`</small> | 2024-03-20 |                                                |
| [**CHESTER Range Z**](chester-range.md#chester-range-z)         | [**v2.3.1**](https://firmware.hardwario.com/chester/d45a7f55-4db8-469d-a4a4-1f221b14e117) [ℹ️](common-functionality.md#network-mode-configuration "Network Mode Configuration") | <small>`d45a7f554db8469da4a41f221b14e117`</small> | 2024-03-20 | Support for **CHESTER-Z1**                     |

