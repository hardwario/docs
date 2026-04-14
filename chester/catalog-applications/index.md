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
| [**CHESTER Clime**](chester-clime.md) | Temperature, humidity, IAQ sensing | <img src="/img/check.png" width="27" data-zoomable="false" /> | <img src="/img/check.png" width="27" data-zoomable="false" /> | <img src="/img/check.png" width="27" data-zoomable="false" /> | <img src="/img/check.png" width="27" data-zoomable="false" /> | <img src="/img/check.png" width="27" data-zoomable="false" /> |
| [**CHESTER Control**](chester-control.md) | 4ch input/output control | <img src="/img/check.png" width="27" data-zoomable="false" /> | <img src="/img/check.png" width="27" data-zoomable="false" /> | <img src="/img/check.png" width="27" data-zoomable="false" /> | <img src="/img/check.png" width="27" data-zoomable="false" /> | <img src="/img/check.png" width="27" data-zoomable="false" /> |
| [**CHESTER Current**](chester-current.md) | AC/DC current sensing (4ch) | <img src="/img/check.png" width="27" data-zoomable="false" /> | <img src="/img/cross.png" width="27" data-zoomable="false" /> | <img src="/img/check.png" width="27" data-zoomable="false" /> | <img src="/img/check.png" width="27" data-zoomable="false" /> | <img src="/img/cross.png" width="27" data-zoomable="false" /> |
| [**CHESTER Meteo**](chester-meteo.md) | Wind, pressure, weather sensing | <img src="/img/check.png" width="27" data-zoomable="false" /> | <img src="/img/check.png" width="27" data-zoomable="false" /> | <img src="/img/check.png" width="27" data-zoomable="false" /> | <img src="/img/check.png" width="27" data-zoomable="false" /> | <img src="/img/cross.png" width="27" data-zoomable="false" /> |
| [**CHESTER Motion**](chester-motion.md) | Dual PIR motion detection | <img src="/img/cross.png" width="27" data-zoomable="false" /> | <img src="/img/cross.png" width="27" data-zoomable="false" /> | <img src="/img/cross.png" width="27" data-zoomable="false" /> | <img src="/img/cross.png" width="27" data-zoomable="false" /> | <img src="/img/cross.png" width="27" data-zoomable="false" /> |
| [**CHESTER Push**](chester-push.md) | Push button alerting | <img src="/img/check.png" width="27" data-zoomable="false" /> | <img src="/img/cross.png" width="27" data-zoomable="false" /> | <img src="/img/check.png" width="27" data-zoomable="false" /> | <img src="/img/cross.png" width="27" data-zoomable="false" /> | <img src="/img/check.png" width="27" data-zoomable="false" /> |
| [**CHESTER Range**](chester-range.md) | Ultrasonic distance measurement | <img src="/img/check.png" width="27" data-zoomable="false" /> | <img src="/img/check.png" width="27" data-zoomable="false" /> | <img src="/img/check.png" width="27" data-zoomable="false" /> | <img src="/img/check.png" width="27" data-zoomable="false" /> | <img src="/img/cross.png" width="27" data-zoomable="false" /> |
| [**CHESTER Scale**](chester-scale.md) | Weight scale monitoring | <img src="/img/check.png" width="27" data-zoomable="false" /> | <img src="/img/check.png" width="27" data-zoomable="false" /> | <img src="/img/check.png" width="27" data-zoomable="false" /> | <img src="/img/cross.png" width="27" data-zoomable="false" /> | <img src="/img/cross.png" width="27" data-zoomable="false" /> |
| [**CHESTER Serial**](chester-serial.md) | RS-232/RS-485 Modbus gateway | <img src="/img/check.png" width="27" data-zoomable="false" /> | <img src="/img/check.png" width="27" data-zoomable="false" /> | <img src="/img/cross.png" width="27" data-zoomable="false" /> | <img src="/img/cross.png" width="27" data-zoomable="false" /> | <img src="/img/check.png" width="27" data-zoomable="false" /> |
| [**CHESTER wM-Bus**](chester-wm-bus.md) | Wireless M-Bus gateway | <img src="/img/cross.png" width="27" data-zoomable="false" /> | <img src="/img/cross.png" width="27" data-zoomable="false" /> | <img src="/img/cross.png" width="27" data-zoomable="false" /> | <img src="/img/cross.png" width="27" data-zoomable="false" /> | <img src="/img/check.png" width="27" data-zoomable="false" /> |



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

| Application name | Version | Identifier | Build date | Remark |
| :--- | :--- | :---: | :---: | :--- |
| [**CHESTER Clime**](chester-clime.md#chester-clime) | [**v3.5.4**](https://firmware.hardwario.com/chester/3e9ba1b864f547319bba909c06b48252) | <small>`3e9ba1b864f547319bba909c06b48252`</small> | 2026-04-14 |  |
| [**CHESTER Clime IAQ**](chester-clime.md#chester-clime-iaq) | [**v3.5.4**](https://firmware.hardwario.com/chester/0178c356f8a2407f80c9a2117b27d635) | <small>`0178c356f8a2407f80c9a2117b27d635`</small> | 2026-04-14 |  |
| [**CHESTER Clime RTD**](chester-clime.md#chester-clime-rtd) | [**v3.5.4**](https://firmware.hardwario.com/chester/240204ab00e44524be562d38919647c6) | <small>`240204ab00e44524be562d38919647c6`</small> | 2026-04-14 |  |
| [**CHESTER Clime TC**](chester-clime.md#chester-clime-tc) | [**v3.5.4**](https://firmware.hardwario.com/chester/1f577327ee0e4b07b7d29dd04b87f10a) | <small>`1f577327ee0e4b07b7d29dd04b87f10a`</small> | 2026-04-14 |  |
| [**CHESTER Clime SPS30**](chester-clime.md#chester-clime-sps30) | [**v3.5.4**](https://firmware.hardwario.com/chester/d9ccc30226c1482c9459f8123f1f2f90) | <small>`d9ccc30226c1482c9459f8123f1f2f90`</small> | 2026-04-14 |  |
| [**CHESTER Clime Radon**](chester-clime.md#chester-clime-radon) | [**v3.5.4**](https://firmware.hardwario.com/chester/9ca5cac5d80f49d0bae41f9b05da9088) | <small>`9ca5cac5d80f49d0bae41f9b05da9088`</small> | 2026-04-14 |  |
| [**CHESTER Control**](chester-control.md#chester-control) | [**v3.5.4**](https://firmware.hardwario.com/chester/74ace93370b5479ba413c64f2e6709b8) | <small>`74ace93370b5479ba413c64f2e6709b8`</small> | 2026-04-14 |  |
| [**CHESTER Control 8Ch Z**](chester-control.md#chester-control-8ch-z) | [**v3.5.4**](https://firmware.hardwario.com/chester/d3f2a48d9fa645b9bdeedaa5d747bd8e) | <small>`d3f2a48d9fa645b9bdeedaa5d747bd8e`</small> | 2026-04-14 | Support for second X0 module in slot B (8 channels) and CHESTER-Z |
| [**CHESTER Control Z**](chester-control.md#chester-control-z) | [**v3.5.4**](https://firmware.hardwario.com/chester/c08663cde44342d19ce018e7f6bc3b48) | <small>`c08663cde44342d19ce018e7f6bc3b48`</small> | 2026-04-14 | Support for CHESTER-Z |
| [**CHESTER Current**](chester-current.md#chester-current) | [**v3.5.4**](https://firmware.hardwario.com/chester/c4eed69c68df4a7eb16d3f1ef3cd39c5) | <small>`c4eed69c68df4a7eb16d3f1ef3cd39c5`</small> | 2026-04-14 |  |
| [**CHESTER Current Z**](chester-current.md#chester-current-z) | [**v3.5.4**](https://firmware.hardwario.com/chester/9c2b59153d1f4ad0b257270e41aeaafd) | <small>`9c2b59153d1f4ad0b257270e41aeaafd`</small> | 2026-04-14 | Support for CHESTER-Z |
| **CHESTER Demo** | [**v3.5.4**](https://firmware.hardwario.com/chester/33576b8f931647b0b9567a98040f44ff) | <small>`33576b8f931647b0b9567a98040f44ff`</small> | 2026-04-14 |  |
| [**CHESTER Meteo**](chester-meteo.md#chester-meteo) | [**v3.5.4**](https://firmware.hardwario.com/chester/8d6b8728f79846188ff10fb7ae643fdc) | <small>`8d6b8728f79846188ff10fb7ae643fdc`</small> | 2026-04-14 |  |
| [**CHESTER Meteo Z**](chester-meteo.md#chester-meteo-z) | [**v3.5.4**](https://firmware.hardwario.com/chester/2f02ccbc525e411cb3cf85474e61e631) | <small>`2f02ccbc525e411cb3cf85474e61e631`</small> | 2026-04-14 | Support for CHESTER-Z |
| [**CHESTER Meteo P**](chester-meteo.md#chester-meteo-p) | [**v3.5.4**](https://firmware.hardwario.com/chester/5684758280f84f1b93a52127e2f63acd) | <small>`5684758280f84f1b93a52127e2f63acd`</small> | 2026-04-14 | Support for pyranometer |
| [**CHESTER Meteo M**](chester-meteo.md#chester-meteo-m) | [**v3.5.4**](https://firmware.hardwario.com/chester/87579934fcb7477f874769c11c38ac96) | <small>`87579934fcb7477f874769c11c38ac96`</small> | 2026-04-14 | Modbus variant supporting Lambrecht and Sensecap/OPM sensors (select via meteo-type) |
| [**CHESTER Motion**](chester-motion.md#chester-motion) | [**v3.5.4**](https://firmware.hardwario.com/chester/37bd47e4191e46cda5ee3bb6b4295f40) | <small>`37bd47e4191e46cda5ee3bb6b4295f40`</small> | 2026-04-14 |  |
| [**CHESTER Push**](chester-push.md#chester-push) | [**v3.5.4**](https://firmware.hardwario.com/chester/b1880c69a13d482697ede37ac1ce337e) | <small>`b1880c69a13d482697ede37ac1ce337e`</small> | 2026-04-14 |  |
| [**CHESTER Push FM**](chester-push.md#chester-push-fm) | [**v3.5.4**](https://firmware.hardwario.com/chester/b870c94e67fb4c5797f004696f76af9f) | <small>`b870c94e67fb4c5797f004696f76af9f`</small> | 2026-04-14 |  |
| [**CHESTER Range**](chester-range.md#chester-range) | [**v3.5.4**](https://firmware.hardwario.com/chester/8f777257f08b401bb3e4ce281903d665) | <small>`8f777257f08b401bb3e4ce281903d665`</small> | 2026-04-14 |  |
| [**CHESTER Range Z**](chester-range.md#chester-range-z) | [**v3.5.4**](https://firmware.hardwario.com/chester/f5965096c0b749798e3c09a55bc6ca9a) | <small>`f5965096c0b749798e3c09a55bc6ca9a`</small> | 2026-04-14 | Support for CHESTER-Z |
| [**CHESTER Scale**](chester-scale.md#chester-scale) | [**v3.5.4**](https://firmware.hardwario.com/chester/08feb54c65164006a992b19b0f78b502) | <small>`08feb54c65164006a992b19b0f78b502`</small> | 2026-04-14 |  |
| [**CHESTER Scale Z**](chester-scale.md#chester-scale-z) | [**v3.5.4**](https://firmware.hardwario.com/chester/d628d86b16124f5f821c83613da31728) | <small>`d628d86b16124f5f821c83613da31728`</small> | 2026-04-14 | Support for CHESTER-Z |
| [**CHESTER Serial RS-485**](chester-serial.md#chester-serial-rs-485) | [**v3.5.4**](https://firmware.hardwario.com/chester/9727f02b7eb548f68cb431ff8d732df2) | <small>`9727f02b7eb548f68cb431ff8d732df2`</small> | 2026-04-14 | RS-485 (multi-drop, max 8 devices) |
| [**CHESTER Serial RS-232**](chester-serial.md#chester-serial-rs-232) | [**v3.5.4**](https://firmware.hardwario.com/chester/909a741426d0450c9df54c8273b5f89c) | <small>`909a741426d0450c9df54c8273b5f89c`</small> | 2026-04-14 | RS-232 (point-to-point, max 1 device) |
| [**CHESTER wM-Bus**](chester-wm-bus.md#chester-wm-bus) | [**v3.5.4**](https://firmware.hardwario.com/chester/c3849faf99924fcbae49982bbfdcd2a0) | <small>`c3849faf99924fcbae49982bbfdcd2a0`</small> | 2026-04-14 |  |


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


| Application name | Version | Identifier | Build date | Remark |
| :--- | :--- | :---: | :---: | :--- |
| [**CHESTER Clime**](chester-clime.md#chester-clime) | [**v2.3.0**](https://firmware.hardwario.com/chester/55e7f6ba38c04b88aa68ad7ec2b3f353) [ℹ️](common-functionality.md#network-mode-configuration "Network Mode Configuration") | <small>`55e7f6ba38c04b88aa68ad7ec2b3f353`</small> | 2023-08-02 |  |
| [**CHESTER Clime Z**](chester-clime.md#chester-clime-z) | [**v2.3.0**](https://firmware.hardwario.com/chester/ed45be6253344349a9b8ddc71a0cc673) [ℹ️](common-functionality.md#network-mode-configuration "Network Mode Configuration") | <small>`ed45be6253344349a9b8ddc71a0cc673`</small> | 2023-08-02 | Support for **CHESTER-Z1** |
| [**CHESTER Clime IAQ**](chester-clime.md#chester-clime-iaq) | [**v2.3.2**](https://firmware.hardwario.com/chester/e0c41bfdc19a421c95bc245642c65813) [ℹ️](common-functionality.md#network-mode-configuration "Network Mode Configuration") | <small>`e0c41bfdc19a421c95bc245642c65813`</small> | 2024-04-16 | Support for **CHESTER-X10** |
| [**CHESTER Clime 1W**](chester-clime.md#chester-clime-1w) | [**v2.3.0**](https://firmware.hardwario.com/chester/5658239a71e34ef8ab6f703e45c1bbc2) [ℹ️](common-functionality.md#network-mode-configuration "Network Mode Configuration") | <small>`5658239a71e34ef8ab6f703e45c1bbc2`</small> | 2023-08-02 |  |
| [**CHESTER Clime 1WH**](chester-clime.md#chester-clime-1wh) | [**v2.3.0**](https://firmware.hardwario.com/chester/86c4d01e7bfc452aa4ecd2bfc3e0f7c1) [ℹ️](common-functionality.md#network-mode-configuration "Network Mode Configuration") | <small>`86c4d01e7bfc452aa4ecd2bfc3e0f7c1`</small> | 2023-08-02 | Support for **CHESTER-S2**, **1-Wire** |
| [**CHESTER Clime RTD**](chester-clime.md#chester-clime-rtd) | [**v2.3.0**](https://firmware.hardwario.com/chester/78014d06151f41e39be6c491dbac696b) [ℹ️](common-functionality.md#network-mode-configuration "Network Mode Configuration") | <small>`78014d06151f41e39be6c491dbac696b`</small> | 2023-08-02 |  |
| [**CHESTER Push**](chester-push.md#chester-push) | [**v2.3.0**](https://firmware.hardwario.com/chester/a2f47dd13c1f4a94ae68af09aa54e089) [ℹ️](common-functionality.md#network-mode-configuration "Network Mode Configuration") | <small>`a2f47dd13c1f4a94ae68af09aa54e089`</small> | 2023-08-02 |  |
| [**CHESTER Push FM**](chester-push.md#chester-push) | [**v2.3.0**](https://firmware.hardwario.com/chester/cfdceffeaac04051a5dbd46a1ece73e5) [ℹ️](common-functionality.md#network-mode-configuration "Network Mode Configuration") | <small>`cfdceffeaac04051a5dbd46a1ece73e5`</small> | 2023-08-02 |  |
| [**CHESTER Counter**](legacy/chester-counter.md#chester-counter) | [**v2.3.0**](https://firmware.hardwario.com/chester/31f2a2b55135499c896e1359373b5152) [ℹ️](common-functionality.md#network-mode-configuration "Network Mode Configuration") | <small>`31f2a2b55135499c896e1359373b5152`</small> | 2023-08-02 |  |
| [**CHESTER Counter Z**](legacy/chester-counter.md#chester-counter-z) | [**v2.3.0**](https://firmware.hardwario.com/chester/b035e5e4b948433fb994634a118e20fb) [ℹ️](common-functionality.md#network-mode-configuration "Network Mode Configuration") | <small>`b035e5e4b948433fb994634a118e20fb`</small> | 2023-08-02 | Support for **CHESTER-Z1** |
| [**CHESTER Input**](legacy/chester-input.md#chester-input) | [**v2.3.2**](https://firmware.hardwario.com/chester/e97898e1678d4dbdb36184d459824f42) [ℹ️](common-functionality.md#network-mode-configuration "Network Mode Configuration") | <small>`e97898e1678d4dbdb36184d459824f42`</small> | 2023-08-28 | Support for **1-Wire** |
| [**CHESTER Input Z**](legacy/chester-input.md#chester-input-z) | [**v2.3.2**](https://firmware.hardwario.com/chester/9f88cb71a28446049a1be89d523447e7) [ℹ️](common-functionality.md#network-mode-configuration "Network Mode Configuration") | <small>`9f88cb71a28446049a1be89d523447e7`</small> | 2023-08-28 | Support for **CHESTER-Z1**, **1-Wire** |
| [**CHESTER Input ZH**](legacy/chester-input.md#chester-input-zh) | [**v2.3.2**](https://firmware.hardwario.com/chester/2e1e0c362223406da9ad70b9da5b23d1) [ℹ️](common-functionality.md#network-mode-configuration "Network Mode Configuration") | <small>`2e1e0c362223406da9ad70b9da5b23d1`</small> | 2023-08-28 | Support for **CHESTER-Z1**, **1-Wire**, **S2** |
| [**CHESTER Current**](chester-current.md#chester-current) | [**v2.3.0**](https://firmware.hardwario.com/chester/52177a80039543d38725d4d9f57590ea) [ℹ️](common-functionality.md#network-mode-configuration "Network Mode Configuration") | <small>`52177a80039543d38725d4d9f57590ea`</small> | 2023-08-02 |  |
| [**CHESTER Current Z**](chester-current.md#chester-current-z) | [**v2.3.0**](https://firmware.hardwario.com/chester/fa2f25c0de5643e6ad77bcc118aad30c) [ℹ️](common-functionality.md#network-mode-configuration "Network Mode Configuration") | <small>`fa2f25c0de5643e6ad77bcc118aad30c`</small> | 2023-08-02 | Support for **CHESTER-Z1** |
| [**CHESTER Current 1W**](chester-current.md#chester-current-1w) | [**v2.3.0**](https://firmware.hardwario.com/chester/80ecf08298914cdb9df632ca749e309e) [ℹ️](common-functionality.md#network-mode-configuration "Network Mode Configuration") | <small>`80ecf08298914cdb9df632ca749e309e`</small> | 2023-08-02 |  |
| [**CHESTER Scale**](chester-scale.md#chester-scale) | [**v2.3.0**](https://firmware.hardwario.com/chester/c37b56df73cf4272b301a8f00eb1486d) [ℹ️](common-functionality.md#network-mode-configuration "Network Mode Configuration") | <small>`c37b56df73cf4272b301a8f00eb1486d`</small> | 2023-08-02 |  |
| [**CHESTER Scale Z**](chester-scale.md#chester-scale-z) | [**v2.3.0**](https://firmware.hardwario.com/chester/489e5fb2b9d943d28d4f1b2aba3ed540) [ℹ️](common-functionality.md#network-mode-configuration "Network Mode Configuration") | <small>`489e5fb2b9d943d28d4f1b2aba3ed540`</small> | 2023-08-02 | Support for **CHESTER-Z1** |
| [**CHESTER Meteo**](chester-meteo.md#chester-meteo) | [**v2.3.0**](https://firmware.hardwario.com/chester/7e886270374f4ebba8712324630c96b7) [ℹ️](common-functionality.md#network-mode-configuration "Network Mode Configuration") | <small>`7e886270374f4ebba8712324630c96b7`</small> | 2023-08-02 |  |
| [**CHESTER Meteo Z**](chester-meteo.md#chester-meteo-z) | [**v2.3.0**](https://firmware.hardwario.com/chester/ef86634d1ad04d06a55c760333aa7a5e) [ℹ️](common-functionality.md#network-mode-configuration "Network Mode Configuration") | <small>`ef86634d1ad04d06a55c760333aa7a5e`</small> | 2023-08-02 | Support for **CHESTER-Z1** |
| [**CHESTER Range**](chester-range.md#chester-range) | [**v2.3.1**](https://firmware.hardwario.com/chester/5c3cc2b6-b263-4f39-90ac-d409771bfaee) [ℹ️](common-functionality.md#network-mode-configuration "Network Mode Configuration") | <small>`5c3cc2b6b2634f3990acd409771bfaee`</small> | 2024-03-20 |  |
| [**CHESTER Range Z**](chester-range.md#chester-range-z) | [**v2.3.1**](https://firmware.hardwario.com/chester/d45a7f55-4db8-469d-a4a4-1f221b14e117) [ℹ️](common-functionality.md#network-mode-configuration "Network Mode Configuration") | <small>`d45a7f554db8469da4a41f221b14e117`</small> | 2024-03-20 | Support for **CHESTER-Z1** |