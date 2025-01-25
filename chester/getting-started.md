---
slug: getting-started
title: Getting Started
---
import Image from '@theme/IdealImage';

Thank you for choosing our CHESTER device. Here are the steps to get started and see your data in HARDWARIO Cloud.

You might also download the [**CHESTER Manual (EN/CZ)**](https://drive.google.com/drive/folders/1pFwF87Mc1c_9w0otSzTuk2yR6CwalqVB?usp=drive_link), which contains more details in a PDF file.

## Cloud v2

### Create an Account

If you don't have an account:
- Go to [https://hardwario.cloud/](https://hardwario.cloud/)
- Click **SIGN UP**
- Create an account with **email/password**, **Google** or **Microsoft** account
- When using **email/password**, check your inbox for validation email before first log-in

### Create a new Space

- In **SPACES** click the **NEW SPACE** in the top right corner.
- Create a new space for your device. You cannot use

### Add a Device to the Space

- Select the **SPACE** where you would like to add a device
- Click on the **DEVICES** in the left menu and choose [+NEW DEVICE](../cloud/devices) in the top right corner

### Power-up Device

Only after you create a device in the Cloud, it will be able to talk to the Cloud and connect.

If you put batteries before the device was registered in the cloud, it might take 10 minutes or hours to connect because CHESTER has a battery-saving functionality during connection.

You might force CHESTER to connect to the network immediately by using **one of the solutions below**:

- Press the [button four times](catalog-applications/common-functionality.md#button-behaviour) to reboot the device.
- Power reset by removing and inserting batteries. When CHESTER-M has blue supercapacitors, you also need to discharge them by holding the button or pressing the [button five times](catalog-applications/common-functionality.md#button-behaviour) that turns on the white LED on the back-side, which discharges the supercapacitors within 30 seconds.

### Status LED

Watch the CHESTER [LED Behaviour](catalog-applications/common-functionality.md#led-behaviour). When the LED starts blinking green every 5 seconds, it is connected to the Cloud.

### Cloud Messages

Now, when you open **DEVICES** and click on the **chat icon** on your device, you will see messages from your device.

Now, please follow [Cloud v2](../cloud/) documentation to assign your device and a connector a tag, then you can resend the device's data to your cloud/backend, send downlink commands, use a remote shell, FOTA and other functionalities.

In **USERS**, you might also invite your co-workers and assign them a role **user** (read only) or role **admin**, which can change anything.

### Catalog Applications

Now that you have your CHESTER running, you might explore how your [catalog application](catalog-applications/index.md) works and what you can configure. Each catalog application has explained functionality. For example, CHESTER Clime has a single article with chapters: [Measurement and Behavior](catalog-applications/chester-clime.md#measurement-and-behavior), [Default Configuration](catalog-applications/chester-clime.md#default-configuration), [Specific Commands](catalog-applications/chester-clime.md#specific-commands), and [Example JSON Message](catalog-applications/chester-clime.md#example-json-message) you will see in the cloud.

For configuration, you use `config` commands in the CHESTER shell, which can be accessed either:

- Over **BLE** phone app [HARDWARIO Manager](platform-connectivity/hardwario-manager.md#command-terminal) as a command terminal.
- Over **BLE** or **J-Link USB programmer** from your computer using [HARDWARIO Monitor](platform-connectivity/hardwario-monitor.md)
- Over HARDWARIO Cloud [config commands](../cloud/downlink#config).
- Over HARDWARIO Cloud [remote shell](../cloud/downlink#shell-commands).

### Troubleshooting
If you use our Vodafone SIM card in a country other than the Czech Republic, please reconfigure PLMN [based on your country](platform-connectivity/cellular-networks.md#network-settings).

In the case of using your own SIM card, after changing **PLMN** and **APN** you have also to change the [parameter to public IP](firmware-sdk/how-to-lte-v2.md#ip-and-port) for Cloud v2.

## Cloud v1

In [HARDWARIO Cloud v1](https://legacy.hardwario.cloud/), we need to make accounts manually. So, if you have a CHESTER device and don't already have access to the cloud, please contact your salesperson from HARDWARIO or write to ask@hardwario.com. Please send us the HSN (HARDWARIO Serial Nuber) of the device(s) or HEO (HARDWARIO Order code) together with the email(s) for which we create an account.
