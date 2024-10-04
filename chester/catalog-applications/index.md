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

If your unit was already communicating with Cloud v2, you can upgrade just main [**APP/BLE MCU firmware over BLE**](../platform-connectivity/hardwario-manager.md#firmware-update).

If your unit was previously used with Cloud v1, you have to first upgrade [**LTE modem firmware**](../firmware-sdk/how-to-lte-v2.md#flash-lte-modem-firmware).

| Application name                                              | Version                                                                               |                    Identifier                     | Build date | Remark                |
| :------------------------------------------------------------ | :------------------------------------------------------------------------------------ | :-----------------------------------------------: | :--------: | :-------------------- |
| [**CHESTER Clime**](chester-clime.md#chester-clime)           | [**v3.0.3**](https://firmware.hardwario.com/chester/09bfa3df50e747fea5d9f38fc249ce99) | <small>`09bfa3df50e747fea5d9f38fc249ce99`</small> | 2024-10-04 |                       |
| [**CHESTER Clime Z**](chester-clime.md#chester-clime-z)       | [**v3.0.3**](https://firmware.hardwario.com/chester/84e845819b044eea8e2e1dbb0cf06dd7) | <small>`84e845819b044eea8e2e1dbb0cf06dd7`</small> | 2024-10-04 | Support for CHESTER-Z |
| [**CHESTER Clime IAQ**](chester-clime.md#chester-clime-iaq)   | [**v3.0.3**](https://firmware.hardwario.com/chester/631737ce30a548d09325d730df167128) | <small>`631737ce30a548d09325d730df167128`</small> | 2024-10-04 |                       |
| [**CHESTER Clime RTD**](chester-clime.md#chester-clime-rtd)   | [**v3.0.3**](https://firmware.hardwario.com/chester/2d15a7f5b2c94b709bc20af35e8c3bd7) | <small>`2d15a7f5b2c94b709bc20af35e8c3bd7`</small> | 2024-10-04 |                       |
| [**CHESTER Clime 1W**](chester-clime.md#chester-clime-1w)     | [**v3.0.3**](https://firmware.hardwario.com/chester/7e8080cead004e2c88ff1dcd6b01adb9) | <small>`7e8080cead004e2c88ff1dcd6b01adb9`</small> | 2024-10-04 |                       |
| [**CHESTER Clime TC**](chester-clime.md#chester-clime-tc)     | [**v3.0.3**](https://firmware.hardwario.com/chester/77dbe1ef7c374aafb37757c3f9a2be85) | <small>`77dbe1ef7c374aafb37757c3f9a2be85`</small> | 2024-10-04 |                       |
| [**CHESTER Push**](chester-push.md#chester-push)              | [**v3.0.3**](https://firmware.hardwario.com/chester/161cdd3321c94d5c9ffbb70949099c2e) | <small>`161cdd3321c94d5c9ffbb70949099c2e`</small> | 2024-10-04 |                       |
| [**CHESTER Push FM**](chester-push.md#chester-push-fm)        | [**v3.0.3**](https://firmware.hardwario.com/chester/afb332dc50904c2f9a8f76225a334ada) | <small>`afb332dc50904c2f9a8f76225a334ada`</small> | 2024-10-04 |                       |
| [**CHESTER Control**](chester-control.md#chester-control)     | [**v3.0.3**](https://firmware.hardwario.com/chester/fcf361c38abc4ac5a43349496c56ad3b) | <small>`fcf361c38abc4ac5a43349496c56ad3b`</small> | 2024-10-04 |                       |
| [**CHESTER Current**](chester-current.md#chester-current)     | [**v3.0.3**](https://firmware.hardwario.com/chester/47d2c39ea6f94de0879512574841d8a0) | <small>`47d2c39ea6f94de0879512574841d8a0`</small> | 2024-10-04 |                       |
| [**CHESTER Current Z**](chester-current.md#chester-current-z) | [**v3.0.3**](https://firmware.hardwario.com/chester/fa0884b956684b3f8e72cc71bd615a32) | <small>`fa0884b956684b3f8e72cc71bd615a32`</small> | 2024-10-04 | Support for CHESTER-Z |
| **CHESTER Scale**                                             | [**v3.0.3**](https://firmware.hardwario.com/chester/8ffabf91193d4e1d81840b90eb82f661) | <small>`8ffabf91193d4e1d81840b90eb82f661`</small> | 2024-10-04 |                       |
| **CHESTER Scale Z**                                           | [**v3.0.3**](https://firmware.hardwario.com/chester/e17b5db11046426ba67e56c5fdad6910) | <small>`e17b5db11046426ba67e56c5fdad6910`</small> | 2024-10-04 | Support for CHESTER-Z |
| [**CHESTER Meteo**](chester-meteo.md#chester-meteo)           | [**v3.0.3**](https://firmware.hardwario.com/chester/4c3842a0839d42e89cc4da7939857379) | <small>`4c3842a0839d42e89cc4da7939857379`</small> | 2024-10-04 |                       |
| [**CHESTER Meteo Z**](chester-meteo.md#chester-meteo-z)       | [**v3.0.3**](https://firmware.hardwario.com/chester/cf24e202ae0b443c97c528f086a6a1ea) | <small>`cf24e202ae0b443c97c528f086a6a1ea`</small> | 2024-10-04 | Support for CHESTER-Z |
| [**CHESTER Range**](chester-range.md#chester-range)           | [**v3.0.3**](https://firmware.hardwario.com/chester/2dee673a6b5f4ca8937589caa80dd4b9) | <small>`2dee673a6b5f4ca8937589caa80dd4b9`</small> | 2024-10-04 |                       |
| [**CHESTER Range Z**](chester-range.md#chester-range-z)       | [**v3.0.3**](https://firmware.hardwario.com/chester/26165569fa844c5fa1d6a7d13cab7681) | <small>`26165569fa844c5fa1d6a7d13cab7681`</small> | 2024-10-04 | Support for CHESTER-Z |

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

