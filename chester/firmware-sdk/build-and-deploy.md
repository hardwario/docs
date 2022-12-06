---
slug: /build-and-deploy
title: Build and Deploy
---
import Image from '@theme/IdealImage';

# Build and Deploy

This article will explain how to build, deploy and upload an application firmware to the **HARDWARIO Cloud**.

## Build

1. Go to the application folder. It could be:
    - Your `application/` folder of you your project.
    - Catalog application from `chester/applications/` folder.
    - Code samples in the `chester/samples/` folder.

2. Build the application with `west build` command.

   :::tip

   Make sure that the `build.board` is configured with `west config build.board chester_nrf52840`, please see the previous **Installation chapter**

   :::

## Deploy

For the final firmware build, you would like to build a firmware with the name and version in it. The firmware version and name will be visible in the **HADRWARIO Manager** application and the device's shell when you type `info show` command. The firmware version is also sent in the NB-IoT packet.

1. Clean previous build with `rm build/ -rf`.

2. Add environment variables `FW_NAME` and `FW_VERSION` to the build command:
     - Linux and macOS: `FW_NAME=hio-chester-clime FW_VERSION=v1.5.0 west build`.
     - Windows: Call these three commands: `set FW_NAME=hio-chester-clime`, `set FW_VERSION=v1.5.0` then `west build`.

:::tip

HARDWARIO uses [Semantic Versioning](https://semver.org/). Please note that also the letter **v** has to be in the firmware version, for example, `v1.2.0`.

:::

Now you can distribute the binary or ZIP file for **DFU update**. Or you can upload it to the **HARDWARIO Cloud**. Please see the next chapter.

## Firmware upload

You can also use **HARDWARIO CLI** upload function, so the firmware is uploaded to your **HARDWARIO Cloud** account, and you can share firmware with your customers with a **QR Code**, **URL**, or by **e-mail**.

:::tip

You need to have your **HARDWARIO Cloud** secret token in the environment variable `HARDWARIO_CLOUD_TOKEN`, or you must supply your secret token in the `--token` parameter. This parameter needs to be placed exactly between the `fw` and `list` parameters.

:::

When your firmware is deployed, just call from the same project folder:

`hardwario chester app fw upload`

And the tools ask you for the firmware name and version. Please type the same values you filled in the previous **Deploy** chapter.

Then you receive an email containing **links to the firmware** and **QR Code**, which can be scanned in **HADRWARIO Manager** phone application for firmware upgrade.
