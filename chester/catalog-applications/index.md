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



| Application | Application Goal | LoRaWAN | BLE Tags | Backup Module (Z1) | 1-Wire (DS18B20) | External Power Supply |
| :--- | :--- | :---: | :---: | :---: | :---: | :---: |
| [**CHESTER Clime**](chester-clime.md) | Temperature, humidity, IAQ sensing | <img src="/img/check.png" width="27" /> | <img src="/img/check.png" width="27" /> | <img src="/img/check.png" width="27" /> | <img src="/img/check.png" width="27" /> | <img src="/img/check.png" width="27" /> |
| [**CHESTER Control**](chester-control.md) | 4ch input/output control | <img src="/img/check.png" width="27" /> | <img src="/img/check.png" width="27" /> | <img src="/img/check.png" width="27" /> | <img src="/img/check.png" width="27" /> | <img src="/img/check.png" width="27" /> |
| [**CHESTER Current**](chester-current.md) | AC/DC current sensing (4ch) | <img src="/img/check.png" width="27" /> | <img src="/img/cross.png" width="27" /> | <img src="/img/check.png" width="27" /> | <img src="/img/check.png" width="27" /> | <img src="/img/cross.png" width="27" /> |
| [**CHESTER Meteo**](chester-meteo.md) | Wind, pressure, weather sensing | <img src="/img/check.png" width="27" /> | <img src="/img/check.png" width="27" /> | <img src="/img/check.png" width="27" /> | <img src="/img/check.png" width="27" /> | <img src="/img/cross.png" width="27" /> |
| [**CHESTER Push**](chester-push.md) | Push button alerting | <img src="/img/check.png" width="27" /> | <img src="/img/cross.png" width="27" /> | <img src="/img/check.png" width="27" /> | <img src="/img/cross.png" width="27" /> | <img src="/img/check.png" width="27" /> |
| [**CHESTER Range**](chester-range.md) | Ultrasonic distance measurement | <img src="/img/check.png" width="27" /> | <img src="/img/check.png" width="27" /> | <img src="/img/check.png" width="27" /> | <img src="/img/check.png" width="27" /> | <img src="/img/cross.png" width="27" /> |
| [**CHESTER Scale**](chester-scale.md) | Weight scale monitoring | <img src="/img/check.png" width="27" /> | <img src="/img/check.png" width="27" /> | <img src="/img/check.png" width="27" /> | <img src="/img/cross.png" width="27" /> | <img src="/img/cross.png" width="27" /> |
| [**CHESTER Serial**](chester-serial.md) | RS-232/RS-485 Modbus gateway | <img src="/img/check.png" width="27" /> | <img src="/img/check.png" width="27" /> | <img src="/img/cross.png" width="27" /> | <img src="/img/cross.png" width="27" /> | <img src="/img/check.png" width="27" /> |
| [**CHESTER wM-Bus**](chester-wm-bus.md) | Wireless M-Bus gateway | <img src="/img/cross.png" width="27" /> | <img src="/img/cross.png" width="27" /> | <img src="/img/cross.png" width="27" /> | <img src="/img/cross.png" width="27" /> | <img src="/img/check.png" width="27" /> |



:::info

- **CHESTER Clime IAQ** variant uses CHESTER-X10 for external power input (6-28V)
- **CHESTER Control** uses CHESTER-X4 module for step-down power supply and digital outputs
- **CHESTER Push** uses CHESTER-Z1-F which combines backup battery with power supply; can also run from battery only
- **CHESTER wM-Bus** is available in battery variant (6x D-cells) or DC variant with external 230V adapter
- **CHESTER Serial** uses CHESTER-X12 (RS-232) or CHESTER-X2 (RS-485) with external power input (5-28V)

:::


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
| [**CHESTER Clime**](chester-clime.md#chester-clime)             | [**v3.3.0**](https://firmware.hardwario.com/chester/a00c1970d7cc43f2a09760af3b06a0c1) | <small>`a00c1970d7cc43f2a09760af3b06a0c1`</small> | 2025-07-14 |                         |
| [**CHESTER Clime Z**](chester-clime.md#chester-clime-z)         | [**v3.3.0**](https://firmware.hardwario.com/chester/377766faf9eb488a92cdece72631553e) | <small>`377766faf9eb488a92cdece72631553e`</small> | 2025-07-14 | Support for CHESTER-Z   |
| [**CHESTER Clime IAQ**](chester-clime.md#chester-clime-iaq)     | [**v3.3.0**](https://firmware.hardwario.com/chester/88346f79ebca4a4899e260e2e00d865c) | <small>`88346f79ebca4a4899e260e2e00d865c`</small> | 2025-07-14 |                         |
| [**CHESTER Clime RTD**](chester-clime.md#chester-clime-rtd)     | [**v3.3.0**](https://firmware.hardwario.com/chester/f93e870a8974432c8f854b8c8f3eaa91) | <small>`f93e870a8974432c8f854b8c8f3eaa91`</small> | 2025-07-14 |                         |
| [**CHESTER Clime 1W**](chester-clime.md#chester-clime-1w)       | [**v3.3.0**](https://firmware.hardwario.com/chester/0dcfcb5597a8437d8a3e73696f92d4a3) | <small>`0dcfcb5597a8437d8a3e73696f92d4a3`</small> | 2025-07-14 | None                    |
| [**CHESTER Clime TC**](chester-clime.md#chester-clime-tc)       | [**v3.3.0**](https://firmware.hardwario.com/chester/f0d368bc1524463b87a540535d2a351f) | <small>`f0d368bc1524463b87a540535d2a351f`</small> | 2025-07-14 |                         |
| [**CHESTER Clime SPS30**](chester-clime.md#chester-clime-sps30) | [**v3.3.0**](https://firmware.hardwario.com/chester/57205703c2e94409b8681d199f19c6e8) | <small>`57205703c2e94409b8681d199f19c6e8`</small> | 2025-07-14 |                         |
| [**CHESTER Push**](chester-push.md#chester-push)                | [**v3.3.0**](https://firmware.hardwario.com/chester/39e50f19ac7742de9a8d58e86b0703e2) | <small>`39e50f19ac7742de9a8d58e86b0703e2`</small> | 2025-07-14 |                         |
| [**CHESTER Push FM**](chester-push.md#chester-push-fm)          | [**v3.3.0**](https://firmware.hardwario.com/chester/7790f9a0daf840e194eddba6c1edbee4) | <small>`7790f9a0daf840e194eddba6c1edbee4`</small> | 2025-07-14 |                         |
| [**CHESTER Control**](chester-control.md#chester-control)       | [**v3.3.0**](https://firmware.hardwario.com/chester/e31b16d59fb84ccdb923aa7c28e9254b) | <small>`e31b16d59fb84ccdb923aa7c28e9254b`</small> | 2025-07-14 |                         |
| [**CHESTER Control Z**](chester-control.md#chester-control-z)   | [**v3.3.0**](/chester/catalog-applications/chester-control#chester-control-z) | <small>`8dd55d5ca15d4e41bd989f0d7118ae4e`</small> | 2025-07-14 | Support for CHESTER-Z   |
| [**CHESTER Current**](chester-current.md#chester-current)       | [**v3.3.0**](https://firmware.hardwario.com/chester/ea947acaf2774bc084de44b66b8aa1b6) | <small>`ea947acaf2774bc084de44b66b8aa1b6`</small> | 2025-07-14 |                         |
| [**CHESTER Current Z**](chester-current.md#chester-current-z)   | [**v3.3.0**](https://firmware.hardwario.com/chester/cf5daced77324499bd66ff751bdb5a21) | <small>`cf5daced77324499bd66ff751bdb5a21`</small> | 2025-07-14 | Support for CHESTER-Z   |
| [**CHESTER Scale**](chester-scale.md#chester-scale)             | [**v3.3.0**](https://firmware.hardwario.com/chester/2644049166354277a72973f8a003c75c) | <small>`2644049166354277a72973f8a003c75c`</small> | 2025-07-14 |                         |
| [**CHESTER Scale Z**](chester-scale.md#chester-scale-z)         | [**v3.3.0**](https://firmware.hardwario.com/chester/6c9888e973f148508b3b468e8df8918b) | <small>`6c9888e973f148508b3b468e8df8918b`</small> | 2025-07-14 | Support for CHESTER-Z   |
| [**CHESTER Meteo**](chester-meteo.md#chester-meteo)             | [**v3.3.0**](https://firmware.hardwario.com/chester/75d1cae16d6543c28879c62e437a1304) | <small>`75d1cae16d6543c28879c62e437a1304`</small> | 2025-07-14 |                         |
| [**CHESTER Meteo Z**](chester-meteo.md#chester-meteo-z)         | [**v3.3.0**](https://firmware.hardwario.com/chester/d93c18b364c741f7adec7a0a5a68e020) | <small>`d93c18b364c741f7adec7a0a5a68e020`</small> | 2025-07-14 | Support for CHESTER-Z   |
| [**CHESTER Meteo P**](chester-meteo.md#chester-meteo-p)         | [**v3.3.0**](https://firmware.hardwario.com/chester/36a8bd985efc4b45827d49ea9dc97732) | <small>`36a8bd985efc4b45827d49ea9dc97732`</small> | 2025-07-14 | Support for pyranometer |
| [**CHESTER Range**](chester-range.md#chester-range)             | [**v3.3.0**](https://firmware.hardwario.com/chester/d38047862971443e8096103930b44d03) | <small>`d38047862971443e8096103930b44d03`</small> | 2025-07-14 |                         |
| [**CHESTER Range Z**](chester-range.md#chester-range-z)         | [**v3.3.0**](https://firmware.hardwario.com/chester/f5ca83a564604ce1a3a6c8f9ae637056) | <small>`f5ca83a564604ce1a3a6c8f9ae637056`</small> | 2025-07-14 | Support for CHESTER-Z   |
| **CHESTER Demo**                                                | [**v3.3.0**](https://firmware.hardwario.com/chester/4811f1457dc44468bb9c015a30e2f66a) | <small>`4811f1457dc44468bb9c015a30e2f66a`</small> | 2025-07-14 |                         |
| [**CHESTER wM-Bus**](chester-wm-bus.md)          | [**v3.4.0**](https://firmware.hardwario.com/chester/d9b464c0d7df4cf09ded65d87438f1a9) | <small>`d9b464c0d7df4cf09ded65d87438f1a9`</small> | 2025-09-30 |                         |




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
| [**CHESTER Scale**](chester-scale.md#chester-scale)             | [**v2.3.0**](https://firmware.hardwario.com/chester/c37b56df73cf4272b301a8f00eb1486d) [ℹ️](common-functionality.md#network-mode-configuration "Network Mode Configuration")     | <small>`c37b56df73cf4272b301a8f00eb1486d`</small> | 2023-08-02 |                                                |
| [**CHESTER Scale Z**](chester-scale.md#chester-scale-z)         | [**v2.3.0**](https://firmware.hardwario.com/chester/489e5fb2b9d943d28d4f1b2aba3ed540) [ℹ️](common-functionality.md#network-mode-configuration "Network Mode Configuration")     | <small>`489e5fb2b9d943d28d4f1b2aba3ed540`</small> | 2023-08-02 | Support for **CHESTER-Z1**                     |
| [**CHESTER Meteo**](chester-meteo.md#chester-meteo)             | [**v2.3.0**](https://firmware.hardwario.com/chester/7e886270374f4ebba8712324630c96b7) [ℹ️](common-functionality.md#network-mode-configuration "Network Mode Configuration")     | <small>`7e886270374f4ebba8712324630c96b7`</small> | 2023-08-02 |                                                |
| [**CHESTER Meteo Z**](chester-meteo.md#chester-meteo-z)         | [**v2.3.0**](https://firmware.hardwario.com/chester/ef86634d1ad04d06a55c760333aa7a5e) [ℹ️](common-functionality.md#network-mode-configuration "Network Mode Configuration")     | <small>`ef86634d1ad04d06a55c760333aa7a5e`</small> | 2023-08-02 | Support for **CHESTER-Z1**                     |
| [**CHESTER Range**](chester-range.md#chester-range)             | [**v2.3.1**](https://firmware.hardwario.com/chester/5c3cc2b6-b263-4f39-90ac-d409771bfaee) [ℹ️](common-functionality.md#network-mode-configuration "Network Mode Configuration") | <small>`5c3cc2b6b2634f3990acd409771bfaee`</small> | 2024-03-20 |                                                |
| [**CHESTER Range Z**](chester-range.md#chester-range-z)         | [**v2.3.1**](https://firmware.hardwario.com/chester/d45a7f55-4db8-469d-a4a4-1f221b14e117) [ℹ️](common-functionality.md#network-mode-configuration "Network Mode Configuration") | <small>`d45a7f554db8469da4a41f221b14e117`</small> | 2024-03-20 | Support for **CHESTER-Z1**                     |

