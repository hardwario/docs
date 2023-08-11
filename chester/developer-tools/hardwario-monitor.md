---
slug: hardwario-monitor
title: HARDWARIO Monitor
---
import Image from '@theme/IdealImage';

# HARDWARIO Monitor

:::caution

This tool is early alpha. We suggest to use the [HARDWARIO Monitor](../platform-connectivity/hardwario-manager.md) mobile app for CHESTER management.

:::

HARDWARIO Monitor can be downloaded in [GitHub Releases](https://github.com/hardwario/hiomonitor/releases) project page, please click on **Assets** and choose the binary for your platform:

- **Windows**
- **Linux**
- **macOS** (soon to be released)

After you start the application, you have connection options on **the left side** of the application to connect to the CHESTER using:

## Console

You need **J-Link** programmer to use this option. We use **J-Link RTT** (Real Time Transfer) to transfer logs and shell to the **CHESTER**.

Connect **J-Link** to the **CHESTER**, note the correct pin 1 orienation (black dot on the CHESTER APP SWD connector).

## Bluetooth

You can connect to the **CHESTER Shell** over Bluetooth. This is useful to change device configuration.

If you cannot pair the device from the **HARDWARIO Monitor** application, you have to pair it with the system Bluetooth dialog first. Then go back to the **HARDWARIO Monitor** application
and connect to the device again.
