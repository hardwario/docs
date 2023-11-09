---
slug: how-to-lte-v2
title: "How to: LTE v2"
---
import Image from '@theme/IdealImage';

# How to: LTE v2

This article will demonstrate how to upgrade existing CHESTER firmware to the LTE v2 and [Cloud v2](../../cloud/cloud-v2/).

:::info

**LTE v2** is currently in the separate [`lte-v2` branch](https://gitlab.hardwario.com/chester/sdk/-/tree/lte-v2) on GitLab. We are currently working on merging it to the mainline soon.

:::

LTE v2 is using a newer UDP protocol that supports downlink messages and automatically handles fragmentation, confirmation and signing of the packets with SHA-256.

Downlink messages or configuration messages can be sent by API or in the HARDWARIO Cloud v2 user interface.

Configuration messages `app config ...` can be send to any device using LTE v2. There is no need to add anything to your application, the `ctr_cloud` subsystem takes care of all.

## CHESTER LTE v2 Firmware Examples

### Demo

Simple example where you need just a CHESTER-M mainboard and you can uplink data and downlink commands to change LED or change configuration.

After you [flash LTE modem](#flash-lte-modem-firmware) to `v1.6.0` or higer, you can flash APP/BLE MCU with CHESTER Demo with [HARDWARIO CLI](../developer-tools/command-line-tools.md) by typing:

`hardwario chester app flash 42271f60e2234d40988660b5e9b2b3f2`

https://gitlab.hardwario.com/chester/sdk/-/tree/lte-v2/applications/demo

### CHESTER Control

This is an improved [CHESTER Input](../catalog-applications/chester-input.md) application.

After you [flash LTE modem](#flash-lte-modem-firmware) to `v1.6.0` or higer, you can flash APP/BLE MCU with CHESTER Control with [HARDWARIO CLI](../developer-tools/command-line-tools.md) by typing:

`hardwario chester app flash a1201384db424cb394b5e9130293f708`

https://gitlab.hardwario.com/chester/sdk/-/tree/martin/control

- Added reconfigurable inputs - you can reconfigure any of the 4 inputs to measure voltage, current, count pulses or react to logic level change.
- Adds a control option with [CHESTER-X4](../extension-modules/chester-x4.md) in slot B for switching 4 outputs that are powered from the external DC power supply.

The project also contains [example scripts](https://gitlab.hardwario.com/chester/sdk/-/tree/martin/control/applications/control/codec) on how to send downlink configuration and messages with `curl`.

CHESTER Control also contains configuration definitions through macros. So you define config parameters only in `app_config.h` file and settings, shell, and help commands are generated with macros.

## Changes for LTE v2

### Flash LTE Modem Firmware

You need to update the LTE modem to the `v1.6.0` or higher. This firmware is not backward compatible with `v1.3.0` that is only for older LTE v1.

Follow the [LTE Modem over J-Link](../firmware-flashing/lte-modem-over-j-link.md) article and [download firmware v1.6.0](pathname:///download/hio-chester-lte-v1.6.0.zip).

### Use `lte-v2` Branch

Until all is merged in the master. You have to use `lte-v2` branch in the `chester` subfolder. You can also do it by adding `revision` in your `west.yml` file:

```yaml
projects:
  - name: sdk.git
    remote: hardwario-chester
    revision: lte-v2
    path: chester
    import: true
```

### Project Configuration
In file `prj.conf` add `CONFIG_CTR_CLOUD=y`.

In file `CMakeLists.txt` change shield from `ctr_lte` to `ctr_lte_v2`.

### Decoders and Encoders

:::info

Please use [Demo](#demo) and [CHESTER Control](#chester-control) projects as an example of how new codec files look.

:::

In the `codec` folder update `cbor-decoder.yaml`, and optionally create `cbor-encoder.yaml`

Encoder and decoder `.yaml` files now have these changes:
- Added a header.
- It is fully hierarchical now. You have to define the complete tree that will then become JSON.
- [Modificators](how-to-cbor.md#modificators) like `div`, `fpp`, `key`, `tso`,... now have `$` prefix.

YAML files are generated to the C `.h` file by using command `west gen-codec` run from your application folder (where your run `west build`).

Instead of ~~`msg_key.h`~~, now the YAML is generated to the `src/app_codec.h` file.

Update your `app_cbor.c` to the new hierarchival definitions. Each level is divided by double underscores, for example, `CODEC_KEY_E_NETWORK__PARAMETER__EEST`.
Also don't forget to include a new header file `#include "app_codec.h"`.

### Initialization

With LTE v2 we've added another layer `ctr_cloud` that you use instead of ~~`ctr_lte`~~.

In the file `app_init.c` add `#include <chester/ctr_cloud.h>` and use `ctr_cloud_init()` instead of ~~`ctr_lte_start()`~~.

Optionally you can:

- Call `ctr_cloud_set_callback()` to set callback for the downlink messages
- Set polling interval by `ctr_cloud_set_pull_interval()` which defines how often CHESTER automatically asks Cloud for queued downlink messages.
- Use `ctr_cloud_wait_initialized(K_FOREVER)` that will stop the main task until the cloud connection is established and all codecs and configuration is sent.

### Send Data

Instead of ~~`ctr_lte_send()`~~ now call `ctr_cloud_send()`. Include new `#include <chester/ctr_cloud.h>`

In the Demo project, we also removed `app_send.c` file, because it only created a new worker without really needing one. Sending is now in `app_work.c`.

Function `ctr_cloud_send()` now is blocking, so the return code tells you whether the data was sent successfully or not. No callback is needed now, which also added another asynchronous complexity.

### IP and Port

For Vodafone SIM cards, use APN `hardwario`, IP `192.168.192.4` and port `5002`. Don't use the previous ~~`hardwario.com`~~ APN name.

For the other carriers, the data goes through the public internet, you have to set the server's public IP `20.101.123.47` and port is the same `5002`.
