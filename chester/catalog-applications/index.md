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

:::danger

When upgrading firmware from **v1.x.x** to version **v2.0.0 and newer** - it is necessary to [**backup configuration**](#configuration-backup). In the case of using **CHESTER Current** also calibration data.

:::

| Application name                                                | Version                                                                                                                                 |                    Identifier                     | Build date | Remark                                   |
| :-------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------- | :-----------------------------------------------: | :--------: | :--------------------------------------- |
| [**CHESTER Clime**](chester-clime.md#chester-clime-1)           | [**v2.0.0**](https://firmware.hardwario.com/chester/d42e6e22645a4d3d810e2c56bee4cf5b) [⚠️](#configuration-backup "Configuration backup") | <small>`d42e6e22645a4d3d810e2c56bee4cf5b`</small> | 2023-01-25 |                                          |
| [**CHESTER Clime Z**](chester-clime.md#chester-clime-z)         | [**v2.0.0**](https://firmware.hardwario.com/chester/2c88782c8dfb4c7e97c9d28cdde089b3) [⚠️](#configuration-backup "Configuration backup") | <small>`2c88782c8dfb4c7e97c9d28cdde089b3`</small> | 2023-01-25 | With support for **CHESTER-Z**           |
| [**CHESTER Clime IAQ**](chester-clime.md#chester-clime-iaq)     | [**v2.0.0**](https://firmware.hardwario.com/chester/00c9b13c5e6e40a0ae9afc4b0ce5a958) [⚠️](#configuration-backup "Configuration backup") | <small>`00c9b13c5e6e40a0ae9afc4b0ce5a958`</small> | 2023-01-25 |                                          |
| [**CHESTER Clime 1W**](chester-clime.md#chester-clime-1w)       | [**v2.0.0**](https://firmware.hardwario.com/chester/bd064ecf0eb34a89bcc9da134e5af6d4) [⚠️](#configuration-backup "Configuration backup") | <small>`bd064ecf0eb34a89bcc9da134e5af6d4`</small> | 2023-01-25 |                                          |
| [**CHESTER Clime 1WH**](chester-clime.md#chester-clime-1wh)     | [**v2.0.0**](https://firmware.hardwario.com/chester/0120ea6eabfa44c88b1362627f1c5a2b) [⚠️](#configuration-backup "Configuration backup") | <small>`0120ea6eabfa44c88b1362627f1c5a2b`</small> | 2023-02-09 | With support for **CHESTER-S2** + 1-Wire |
| [**CHESTER Clime RTD**](chester-clime.md#chester-clime-rtd)     | [**v2.0.0**](https://firmware.hardwario.com/chester/18234052bd6a4782a4daedb9ebe5cd4b) [⚠️](#configuration-backup "Configuration backup") | <small>`18234052bd6a4782a4daedb9ebe5cd4b`</small> | 2023-01-25 |                                          |
| [**CHESTER Push**](chester-push.md#hardware-description)        | [**v2.0.0**](https://firmware.hardwario.com/chester/7083176e06b54d7e9390ee5de9de5443) [⚠️](#configuration-backup "Configuration backup") | <small>`7083176e06b54d7e9390ee5de9de5443`</small> | 2023-01-25 |                                          |
| [**CHESTER Push FM**](chester-push.md#hardware-description)     | [**v2.0.0**](https://firmware.hardwario.com/chester/44ead7674d5f4799a780c2842adafd35) [⚠️](#configuration-backup "Configuration backup") | <small>`44ead7674d5f4799a780c2842adafd35`</small> | 2023-01-25 |                                          |
| **CHESTER Counter**                                             | [**v2.0.0**](https://firmware.hardwario.com/chester/2d3b8fe5de9345edbcc81f680fc7964c) [⚠️](#configuration-backup "Configuration backup") | <small>`2d3b8fe5de9345edbcc81f680fc7964c`</small> | 2023-01-25 |                                          |
| **CHESTER Counter Z**                                           | [**v2.0.0**](https://firmware.hardwario.com/chester/b32607b59e4f4d218a7651f1ef5676b3) [⚠️](#configuration-backup "Configuration backup") | <small>`b32607b59e4f4d218a7651f1ef5676b3`</small> | 2023-01-25 | With support for **CHESTER-Z**           |
| [**CHESTER Input**](chester-input.md#chester-input-1)           | [**v2.0.0**](https://firmware.hardwario.com/chester/32b1e13c245745cf916f2d7910aa5345) [⚠️](#configuration-backup "Configuration backup") | <small>`32b1e13c245745cf916f2d7910aa5345`</small> | 2023-01-25 |                                          |
| [**CHESTER Input Z**](chester-input.md#chester-input-z)         | [**v2.0.0**](https://firmware.hardwario.com/chester/ee926e13543340ec909f3874ceeb46b4) [⚠️](#configuration-backup "Configuration backup") | <small>`ee926e13543340ec909f3874ceeb46b4`</small> | 2023-01-25 | With support for **CHESTER-Z**           |
| [**CHESTER Input ZH**](chester-input.md#chester-input-zh)       | [**v2.0.0**](https://firmware.hardwario.com/chester/ad764d50ec3b407e8007b6dea50d2d37) [⚠️](#configuration-backup "Configuration backup") | <small>`ad764d50ec3b407e8007b6dea50d2d37`</small> | 2023-01-25 | With support for **CHESTER-Z**, **S2**   |
| [**CHESTER Current**](chester-current.md#chester-current-1)     | [**v2.0.0**](https://firmware.hardwario.com/chester/e0cc5050ae5d4a7cb3943b1dc7ce4fe9) [⚠️](#configuration-backup "Configuration backup") | <small>`e0cc5050ae5d4a7cb3943b1dc7ce4fe9`</small> | 2023-01-25 |                                          |
| [**CHESTER Current Z**](chester-current.md#chester-current-z)   | [**v2.0.0**](https://firmware.hardwario.com/chester/81b3a7d960f2405b88d0d6825de6e235) [⚠️](#configuration-backup "Configuration backup") | <small>`81b3a7d960f2405b88d0d6825de6e235`</small> | 2023-01-25 | With support for **CHESTER-Z**           |
| [**CHESTER Current 1W**](chester-current.md#chester-current-1w) | [**v2.0.0**](https://firmware.hardwario.com/chester/4e6bb4f139464c7c89237faefb1b440d) [⚠️](#configuration-backup "Configuration backup") | <small>`4e6bb4f139464c7c89237faefb1b440d`</small> | 2023-01-25 |                                          |
| **CHESTER Scale**                                               | [**v2.0.0**](https://firmware.hardwario.com/chester/07dc674f5fa14f5ebb496cfb620793e6) [⚠️](#configuration-backup "Configuration backup") | <small>`07dc674f5fa14f5ebb496cfb620793e6`</small> | 2023-01-25 |                                          |
| **CHESTER Scale Z**                                             | [**v2.0.0**](https://firmware.hardwario.com/chester/2470ffa39afb42b98bea7c4ca366c63e) [⚠️](#configuration-backup "Configuration backup") | <small>`2470ffa39afb42b98bea7c4ca366c63e`</small> | 2023-01-25 | With support for **CHESTER-Z**           |

## Configuration backup v1.x.x → v2.x.x {#configuration-backup}

When upgrading an older **v1.x.x** firmware to **v2.x.x** - it is necessary to backup application configuration. The most important is this step in **CHESTER Current** application, where in configuration there are the **current transformers calibration coefficients**.

In case you forget to back up the data - they are not lost unless you executed `config save` command in newer firmware. However, you need to temporarily downgrade to [older firmware](https://github.com/hardwario/docs/blob/33661ca486dda9e6883d3a82edf0128ab32173d2/chester/catalog-applications/index.md#application-firmware) that can read the old configuration and apply the same configuration after the firmware is updated.

In the old firmware type `app config show` to the console. Then you need to copy all configuration items. If you use **HARDWARIO Manager** phone app or **HARDWARIO CLI** on your computer, you can highlight and copy current configuration text to your clipboard or text editor.

After updating to a newer firmware, paste the same lines to the console. If you use **HARDWARIO Manager** phone app or **HARDWARIO CLI** on your computer, you can paste all the lines together to the input line and press enter. All commands will be applied one by one. Check that configuration was applied correctly by typing `app config show`. Do not forget to apply changes by typing `config save`.
