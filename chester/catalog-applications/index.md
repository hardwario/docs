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

| Application name                          | Application goal                                                                                             | Application features                                                       |
| :---------------------------------------- | :----------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------- |
| [**CHESTER Clime**](chester-clime.md)     | Temperature and humidity sensing, IAQ monitoring, DS18B20 transmitter                                        | ✅ Low-power <br />✅ Outdoor<br />✅ LTE-M/NB-IoT<br />LoRaWAN on request    |
| [**CHESTER Control**](chester-control.md) | 4 NPN/PNP/dry contact/0-10 V/4-20 mA/digital output channels                                                 | ✅ Low-power <br />❌ Outdoor<br />✅ LTE-M/NB-IoT<br />LoRaWAN on request    |
| [**CHESTER Push**](chester-push.md)       | Event alerting on 4x push button with optical and acoustic feedback                                          | ✅ Low-power (*)<br />❌ Outdoor<br />✅ LTE-M/NB-IoT<br />LoRaWAN on request |
| [**CHESTER Current**](chester-current.md) | Non-invasive consumption sensing for AC/DC currents (4 channels)                                             | ✅ Low-power <br />❌ Outdoor<br />✅ LTE-M/NB-IoT<br />LoRaWAN on request    |
| **CHESTER Scale**                         | Ultra-precise weight scale monitoring using load cells (2 channels)                                          | ✅ Low-power <br />✅ Outdoor<br />✅ LTE-M/NB-IoT<br />LoRaWAN on request    |
| [**CHESTER Meteo**](chester-meteo.md)     | Wind, pressure, temperature and humidity measurement                                                         | ✅ Low-power <br />✅ Outdoor<br />✅ LTE-M/NB-IoT<br />LoRaWAN on request    |
| [**CHESTER Range**](chester-range.md)     | Distance measurement                                                                                         | ✅ Low-power <br />✅ Outdoor<br />✅ LTE-M/NB-IoT<br />LoRaWAN on request    |
| [**CHESTER wM-Bus**](chester-wm-bus.md)   | Monitoring of wM-Bus devices (electricity meters etc.)                                                       | ✅ Low-power <br />✅ Outdoor<br />✅ LTE-M/NB-IoT<br />LoRaWAN on request    |
| [**CHESTER Counter**](legacy/chester-counter.md) | Pulse counting from energy meters using NPN/dry contact (4 channels). Deprecated in favor of CHESTER Control | ✅ Low-power <br />✅ Outdoor<br />✅ LTE-M/NB-IoT<br />LoRaWAN on request    |
| [**CHESTER Input**](legacy/chester-input.md)     | Transmitter for NPN/PNP/dry contact/0-10 V/4-20 mA (4 channels). Deprecated in favor of CHESTER Control      | ✅ Low-power (*)<br />❌ Outdoor<br />✅ LTE-M/NB-IoT<br />LoRaWAN on request |

\* The specific hardware or firmware variants may need an external power supply.

## Application Firmware Cloud v2 {#application-firmware}

These firmwares are for newer [**Cloud v2**](../../cloud) communication.

If your unit was already communicating with Cloud v2, you can upgrade just main [**APP/BLE MCU firmware over BLE**](../platform-connectivity/hardwario-manager.md#firmware-update).

If your unit was previously used with Cloud v1, you have to first upgrade [**LTE modem firmware**](../firmware-sdk/how-to-lte-v2.md#flash-lte-modem-firmware).


:::info

Some catalog applications are built with NB-IoT/LTE and LoRaWAN functionality in a single firmware. You need to set the communication mode.

The default functionality is that a device **does not use any radio** (mode `none`), it is blinking orange LED and you need to set configuration parameter **mode**.

- `app config mode lte` for NB-IoT/LTE network
- `app config mode lrw` for LoRaWAN network

Then apply changes by typing `config save`. The device will reboot and use the correct network.

:::

#### Available Application Firmware Builds

| Application name                                                | Version                                                                               |                    Identifier                     | Build date | Remark                  |
| :-------------------------------------------------------------- | :------------------------------------------------------------------------------------ | :-----------------------------------------------: | :--------: | :---------------------- |
| [**CHESTER Clime**](chester-clime.md#chester-clime) | [**v3.5.0**](https://firmware.hardwario.com/chester/3db54ddb04bd4fbd8636c540d769a8f4) | <small>`3db54ddb04bd4fbd8636c540d769a8f4`</small> | 2025-12-03 |  |
| [**CHESTER Clime Z**](chester-clime.md#chester-clime-z) | [**v3.5.0**](https://firmware.hardwario.com/chester/56bb7603e67642eeb9f81f926fb11809) | <small>`56bb7603e67642eeb9f81f926fb11809`</small> | 2025-12-03 | Support for CHESTER-Z |
| [**CHESTER Clime IAQ**](chester-clime.md#chester-clime-iaq) | [**v3.5.0**](https://firmware.hardwario.com/chester/4a51419eb16441cf88158835383648d6) | <small>`4a51419eb16441cf88158835383648d6`</small> | 2025-12-03 |  |
| [**CHESTER Clime RTD**](chester-clime.md#chester-clime-rtd) | [**v3.5.0**](https://firmware.hardwario.com/chester/b4df2830bcd44e90bcfaf58268d4aff1) | <small>`b4df2830bcd44e90bcfaf58268d4aff1`</small> | 2025-12-03 |  |
| [**CHESTER Clime 1W**](chester-clime.md#chester-clime-1w) | [**v3.5.0**](https://firmware.hardwario.com/chester/24b9f6a8682143a19dbf521f06883d65) | <small>`24b9f6a8682143a19dbf521f06883d65`</small> | 2025-12-03 | None |
| [**CHESTER Clime TC**](chester-clime.md#chester-clime-tc) | [**v3.5.0**](https://firmware.hardwario.com/chester/22d4c1dfbe1c4d8bb3bd5397f9d659a5) | <small>`22d4c1dfbe1c4d8bb3bd5397f9d659a5`</small> | 2025-12-03 |  |
| [**CHESTER Clime SPS30**](chester-clime.md#chester-clime-sps30) | [**v3.5.0**](https://firmware.hardwario.com/chester/e32b9a499a7c4fcc8aadfae1d555c8d8) | <small>`e32b9a499a7c4fcc8aadfae1d555c8d8`</small> | 2025-12-03 |  |
| [**CHESTER Control**](chester-control.md#chester-control) | [**v3.5.0**](https://firmware.hardwario.com/chester/d73d90f3759a4bc4a8958f882f3b26e2) | <small>`d73d90f3759a4bc4a8958f882f3b26e2`</small> | 2025-12-03 |  |
| [**CHESTER Control Z**](chester-control.md#chester-control-z) | [**v3.5.0**](https://firmware.hardwario.com/chester/b0fb479dc1d9422abed4721c4a5d4e3c) | <small>`b0fb479dc1d9422abed4721c4a5d4e3c`</small> | 2025-12-03 | Support for CHESTER-Z |
| [**CHESTER Current**](chester-current.md#chester-current) | [**v3.5.0**](https://firmware.hardwario.com/chester/d0f8c847743f4ccebdd10d2dcb4bd22b) | <small>`d0f8c847743f4ccebdd10d2dcb4bd22b`</small> | 2025-12-03 |  |
| [**CHESTER Current Z**](chester-current.md#chester-current-z) | [**v3.5.0**](https://firmware.hardwario.com/chester/086308c993164525b5528ff3d263ce79) | <small>`086308c993164525b5528ff3d263ce79`</small> | 2025-12-03 | Support for CHESTER-Z |
| **CHESTER Demo** | [**v3.5.0**](https://firmware.hardwario.com/chester/1503759f3dc14719a2a5a09a3682d280) | <small>`1503759f3dc14719a2a5a09a3682d280`</small> | 2025-12-03 |  |
| [**CHESTER Meteo**](chester-meteo.md#chester-meteo) | [**v3.5.0**](https://firmware.hardwario.com/chester/631d0099060f4aac83bbb10feb0d0016) | <small>`631d0099060f4aac83bbb10feb0d0016`</small> | 2025-12-03 |  |
| [**CHESTER Meteo Z**](chester-meteo.md#chester-meteo-z) | [**v3.5.0**](https://firmware.hardwario.com/chester/f1750cff871641008a8e5f1575e80979) | <small>`f1750cff871641008a8e5f1575e80979`</small> | 2025-12-03 | Support for CHESTER-Z |
| [**CHESTER Meteo P**](chester-meteo.md#chester-meteo-p) | [**v3.5.0**](https://firmware.hardwario.com/chester/1395914f1887484f8c38b0827b2563a7) | <small>`1395914f1887484f8c38b0827b2563a7`</small> | 2025-12-03 | Support for pyranometer |
| [**CHESTER Push**](chester-push.md#chester-push) | [**v3.5.0**](https://firmware.hardwario.com/chester/f740987ee59742d6b8889a3d73f7ff4d) | <small>`f740987ee59742d6b8889a3d73f7ff4d`</small> | 2025-12-03 |  |
| [**CHESTER Push FM**](chester-push.md#chester-push-fm) | [**v3.5.0**](https://firmware.hardwario.com/chester/e04603aa42354544b5e68393be016e92) | <small>`e04603aa42354544b5e68393be016e92`</small> | 2025-12-03 |  |
| **CHESTER Radon** | [**v3.5.0**](https://firmware.hardwario.com/chester/50ea09cc334e48fcb54673de49091a3d) | <small>`50ea09cc334e48fcb54673de49091a3d`</small> | 2025-12-03 |  |
| [**CHESTER Range**](chester-range.md#chester-range) | [**v3.5.0**](https://firmware.hardwario.com/chester/1724da3664f54034a9177ca26bdfd9db) | <small>`1724da3664f54034a9177ca26bdfd9db`</small> | 2025-12-03 |  |
| [**CHESTER Range Z**](chester-range.md#chester-range-z) | [**v3.5.0**](https://firmware.hardwario.com/chester/fe7186e6197e48edbe8eb319fdc0b814) | <small>`fe7186e6197e48edbe8eb319fdc0b814`</small> | 2025-12-03 | Support for CHESTER-Z |
| **CHESTER Scale** | [**v3.5.0**](https://firmware.hardwario.com/chester/ebfe14ec6f074fa494a1f7961bcee258) | <small>`ebfe14ec6f074fa494a1f7961bcee258`</small> | 2025-12-03 |  |
| **CHESTER Scale Z** | [**v3.5.0**](https://firmware.hardwario.com/chester/f046baa2f974460cac8443979a798732) | <small>`f046baa2f974460cac8443979a798732`</small> | 2025-12-03 | Support for CHESTER-Z |
| [**CHESTER wM-Bus**](chester-wm-bus.md#chester-wm-bus) | [**v3.5.0**](https://firmware.hardwario.com/chester/844541b36a18410ab3904a31b862a063) | <small>`844541b36a18410ab3904a31b862a063`</small> | 2025-12-03 |  |





## Application Firmware Cloud v1

These firmwares are for older [**Cloud v1**](../../cloud/category/cloud-v1) communication.

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
| [**CHESTER Counter**](legacy/chester-counter.md#chester-counter)       | [**v2.3.0**](https://firmware.hardwario.com/chester/31f2a2b55135499c896e1359373b5152) [ℹ️](common-functionality.md#network-mode-configuration "Network Mode Configuration")     | <small>`31f2a2b55135499c896e1359373b5152`</small> | 2023-08-02 |                                                |
| [**CHESTER Counter Z**](legacy/chester-counter.md#chester-counter-z)   | [**v2.3.0**](https://firmware.hardwario.com/chester/b035e5e4b948433fb994634a118e20fb) [ℹ️](common-functionality.md#network-mode-configuration "Network Mode Configuration")     | <small>`b035e5e4b948433fb994634a118e20fb`</small> | 2023-08-02 | Support for **CHESTER-Z1**                     |
| [**CHESTER Input**](legacy/chester-input.md#chester-input)             | [**v2.3.2**](https://firmware.hardwario.com/chester/e97898e1678d4dbdb36184d459824f42) [ℹ️](common-functionality.md#network-mode-configuration "Network Mode Configuration")     | <small>`e97898e1678d4dbdb36184d459824f42`</small> | 2023-08-28 | Support for **1-Wire**                         |
| [**CHESTER Input Z**](legacy/chester-input.md#chester-input-z)         | [**v2.3.2**](https://firmware.hardwario.com/chester/9f88cb71a28446049a1be89d523447e7) [ℹ️](common-functionality.md#network-mode-configuration "Network Mode Configuration")     | <small>`9f88cb71a28446049a1be89d523447e7`</small> | 2023-08-28 | Support for **CHESTER-Z1**, **1-Wire**         |
| [**CHESTER Input ZH**](legacy/chester-input.md#chester-input-zh)       | [**v2.3.2**](https://firmware.hardwario.com/chester/2e1e0c362223406da9ad70b9da5b23d1) [ℹ️](common-functionality.md#network-mode-configuration "Network Mode Configuration")     | <small>`2e1e0c362223406da9ad70b9da5b23d1`</small> | 2023-08-28 | Support for **CHESTER-Z1**, **1-Wire**, **S2** |
| [**CHESTER Current**](chester-current.md#chester-current)       | [**v2.3.0**](https://firmware.hardwario.com/chester/52177a80039543d38725d4d9f57590ea) [ℹ️](common-functionality.md#network-mode-configuration "Network Mode Configuration")     | <small>`52177a80039543d38725d4d9f57590ea`</small> | 2023-08-02 |                                                |
| [**CHESTER Current Z**](chester-current.md#chester-current-z)   | [**v2.3.0**](https://firmware.hardwario.com/chester/fa2f25c0de5643e6ad77bcc118aad30c) [ℹ️](common-functionality.md#network-mode-configuration "Network Mode Configuration")     | <small>`fa2f25c0de5643e6ad77bcc118aad30c`</small> | 2023-08-02 | Support for **CHESTER-Z1**                     |
| [**CHESTER Current 1W**](chester-current.md#chester-current-1w) | [**v2.3.0**](https://firmware.hardwario.com/chester/80ecf08298914cdb9df632ca749e309e) [ℹ️](common-functionality.md#network-mode-configuration "Network Mode Configuration")     | <small>`80ecf08298914cdb9df632ca749e309e`</small> | 2023-08-02 |                                                |
| **CHESTER Scale**                                               | [**v2.3.0**](https://firmware.hardwario.com/chester/c37b56df73cf4272b301a8f00eb1486d) [ℹ️](common-functionality.md#network-mode-configuration "Network Mode Configuration")     | <small>`c37b56df73cf4272b301a8f00eb1486d`</small> | 2023-08-02 |                                                |
| **CHESTER Scale Z**                                             | [**v2.3.0**](https://firmware.hardwario.com/chester/489e5fb2b9d943d28d4f1b2aba3ed540) [ℹ️](common-functionality.md#network-mode-configuration "Network Mode Configuration")     | <small>`489e5fb2b9d943d28d4f1b2aba3ed540`</small> | 2023-08-02 | Support for **CHESTER-Z1**                     |
| [**CHESTER Meteo**](chester-meteo.md#chester-meteo)             | [**v2.3.0**](https://firmware.hardwario.com/chester/7e886270374f4ebba8712324630c96b7) [ℹ️](common-functionality.md#network-mode-configuration "Network Mode Configuration")     | <small>`7e886270374f4ebba8712324630c96b7`</small> | 2023-08-02 |                                                |
| [**CHESTER Meteo Z**](chester-meteo.md#chester-meteo-z)         | [**v2.3.0**](https://firmware.hardwario.com/chester/ef86634d1ad04d06a55c760333aa7a5e) [ℹ️](common-functionality.md#network-mode-configuration "Network Mode Configuration")     | <small>`ef86634d1ad04d06a55c760333aa7a5e`</small> | 2023-08-02 | Support for **CHESTER-Z1**                     |
| [**CHESTER Range**](chester-range.md#chester-range)             | [**v2.3.1**](https://firmware.hardwario.com/chester/5c3cc2b6-b263-4f39-90ac-d409771bfaee) [ℹ️](common-functionality.md#network-mode-configuration "Network Mode Configuration") | <small>`5c3cc2b6b2634f3990acd409771bfaee`</small> | 2024-03-20 |                                                |
| [**CHESTER Range Z**](chester-range.md#chester-range-z)         | [**v2.3.1**](https://firmware.hardwario.com/chester/d45a7f55-4db8-469d-a4a4-1f221b14e117) [ℹ️](common-functionality.md#network-mode-configuration "Network Mode Configuration") | <small>`d45a7f554db8469da4a41f221b14e117`</small> | 2024-03-20 | Support for **CHESTER-Z1**                     |

