---
slug: /hardwario-manager
title: HARDWARIO Manager
---
import Image from '@theme/IdealImage';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# HARDWARIO Manager

This article will provide information on how to manage **CHESTER** devices with **HARDWARIO Manager** application.

## App Installation

<Tabs groupId="mobile-platform">

<TabItem value="android" label="Android" default>

Download the Android [HARDWARIO Manager](https://play.google.com/store/apps/details?id=com.hardwario.manager) app.

</TabItem>

<TabItem value="ios" label="iOS">

Download the iOS [HARDWARIO Manager](https://apps.apple.com/cz/app/hardwario-manager/id6444803082) app.

</TabItem>

</Tabs>

When you open **HARDWARIO Manager**, you will see the **SCAN LIST** page. Here you will see nearby devices, which use Bluetooth-enabled applications.

<div class="container">
  <div class="row">
    <div class="col col--5">
      <div><Image img={require('./manager_scan_list.png')} /></div>
    </div>
    <div class="col col--8">
    </div>
  </div>
</div>
<br />

## Device Pairing

To manage your **CHESTER** device, you have to connect to it via Bluetooth. Every device has a **unique** pairing passkey, which you can obtain if you scan the QR on the back side of your device.

:::caution
You can't use the built-in QR code reader in **HARDWARIO Manager** app.
:::


## General Information

<div class="container">
  <div class="row">
    <div class="col col--5">
      <div><Image img={require('./manager_general_info.png')} /></div>
    </div>
    <div class="col col--8">
    </div>
  </div>
</div>
<br />

:::tip

If the firmware application is supported by **HARDWARIO MANAGER**, the **OPEN APPLICATiON** button appears at the bottom of the information page.

:::

## Command Terminal

The purpose of the **Command Terminal** is to easily make changes in the settings of your app or find out what setting is applied.

- You have to type a command (for example here it is **info** command) and send it by black arrow **(1)**
- The console will return this command to confirm what was sent **(2)**
- The console will return wanted information or it will set a certain value **(3)**.
- You can select an already used command in **Command history (4)**.

<div class="container">
  <div class="row">
    <div class="col col--6">
      <div><Image img={require('./manager_console.png')} /></div>
    </div>
    <div class="col col--10">
    </div>
  </div>
</div>
<br />

:::tip

Anytime when you feel lost, just type the **help** command.

:::

## Firmware Update

You can update your **CHESTER** device via this page. You can find pre-built apps for catalog applications [here](./catalog-applications#application-firmware) or you will receive a link to your custom build firmware via e-mail.

Click on **SCAN QR CODE** to get the link to firmware **(1)**. When you do so and scan a valid QR code, you get information about firmware **(2)**. If this information is OK, you can start flashing by pressing **UPDATE FIRMWARE (3)**. You can click at **START OVER**, if you want to update to different firmware **(4)**.

<div class="container">
  <div class="row">
    <div class="col col--8">
      <div><Image img={require('./manager_firmware_update.png')} /></div>
    </div>
    <div class="col col--12">
    </div>
  </div>
</div>

## Device Reboot

This screen will let you remotely restart your device.

<div class="container">
  <div class="row">
    <div class="col col--4">
      <div><Image img={require('./manager_restart_device.png')} /></div>
    </div>
    <div class="col col--8">
    </div>
  </div>
</div>
