---
slug: application-over-bluetooth
title: Application over Bluetooth
---
import Image from '@theme/IdealImage';

# Application over Bluetooth

In this chapter, you will find out how to use your smartphone to flash application firmware in CHESTER via Bluetooth.

:::caution

This method requires a functional Bluetooth-enabled application already running on the CHESTER device. If you cannot see CHESTER in the list of Bluetooth devices, you have to use the [J-Link method](./app-j-link.md).

:::

## Requirements

* Smartphone application **nRF Device Manager** (from Nordic Semiconductor):

  * For Android devices, get it from [Google Play](https://play.google.com/store/apps/details?id=no.nordicsemi.android.nrfconnectdevicemanager&hl=en&gl=US).

  * For iOS devices, get it from [App Store](https://apps.apple.com/us/app/nrf-connect-device-manager/id1519423539).

* Application firmware BIN file available on your smartphone.

  :::tip

  On iOS devices, you can share the BIN file to the application **nRF Device Manager** using the "Share" functionality. You can transfer the file into the device via AirDrop, or email attachment.

  :::

## Flashing Procedure

Follow these steps to flash the application firmware in CHESTER using Bluetooth:

<!-- TODO This is a blind shot and needs refactoring - probably when HARDWARIO Manager is out -->

1. On your smartphone, start the application **nRF Device Manager**.

1. You will see the list of scanned devices (pull it down to refresh the list).

1. Search for a device labeled as `CHESTER <serial number>`.

1. Tap on the **CONNECT** button.

1. Go to the firmware download tab (in the bottom toolbar).

1. Tap on **SELECT FILE**.

1. Start the procedure, it will show the pop-up dialog with three options, keep the default one **TEST AND CONFIRM**, and tap on **OK**.

1. The firmware flashing will start, and you should see the download speed progress in the graph.

1. When flashing is finished, you will be notified with a message **Flashing Success**.
