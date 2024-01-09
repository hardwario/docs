---
slug: hardwario-monitor
title: HARDWARIO Monitor
---
import Image from '@theme/IdealImage';

# HARDWARIO Monitor

**HARDWARIO Monitor** is a graphical multiplatform computer program to **configure** and **manage** CHESTER devices.

Download it on the [**GitHub Releases**](https://github.com/hardwario/hiomonitor/releases) project page, please click on **Assets** and choose the binary for your platform.

<div class="container">
  <div class="row">
    <div class="col col--8">
      <div><Image img={require('./hardwario-monitor.png')} /></div>
    </div>
    <div class="col col--12">
    </div>
  </div>
</div>



After you start the application, you have connection options on **the left side** of the application to connect to the CHESTER using:

## Console

You need **J-Link** programmer to use this option. We use **J-Link RTT** (Real Time Transfer) to transfer logs and shell to the **CHESTER**.

Connect **J-Link** to the **CHESTER**, note the correct pin 1 orienation (black dot on the CHESTER APP SWD connector).

Then click on the **Attach** button on the right side of the window.

## Bluetooth

You can connect to the **CHESTER Shell** over Bluetooth. This is useful to change device configuration.

If you cannot pair the device from the **HARDWARIO Monitor** application, you have to pair it with the system Bluetooth dialog first. Then go back to the **HARDWARIO Monitor** application
and connect to the device again.

## Flash

You can flash firmware to the **APP MCU** with the **J-Link**. Just copy the **unique ID** from the released firmware and it will be downloaded and flashed.
