---
slug: tts-end-devices
title: End Devices
---
import Image from '@theme/IdealImage';

# End Devices Configuration Guide

This tutorial guides you through the process of creating device profiles and adding end devices in The Things Stack.

---

## Creating an Application

1. On the **Home** tab, click **Create application**.  
   - If you are on a different tab, click the blue **+ Add** button in the top right and choose **Add application**.

![](tts-end-device-0.png)

2. You will be taken to the application creation page. Fill in the following fields:
   - **Application ID (app id)**
   - **Application Name (app name)**
   - (Optional) **Description**
   - (Optional) **Label** — It is recommended to use the same label for the application, end devices, and gateways.

3. Click the blue **Create application** button.

![](tts-end-device-1.png)

---

## Registering End Devices

1. Inside the application, click the blue **+ Register end device** button.  
   - Alternatively, click **+ Add** and choose **Register end device in an application**.

![](tts-end-device-2.png)

2. Choose one of the available methods:
   - Search for a device already known in TTS, or  
   - Enter the device manually.  
   *(Using a predefined device is usually easier if available.)*

:::info
You can also add some devices by **scanning a QR code**, which automatically fills in identifiers.  
This feature **does not work with Milesight devices**. However, it **does work with Nexelec devices**, which provide all required identifiers in the QR code.
:::

![](tts-end-device-3.png)

1. Fill in the required identifiers:
   - **JoinEUI (AppEUI)**  
     - Available in our documentation or in the manufacturer’s documents.
   - **DevEUI**  
     - Unique for each device, printed on the device itself.
   - **AppKey**  
     - Available in our documentation or the manufacturer’s documents.
   - **Device ID**  
     - Your chosen identifier for the device.

2. (Optional) Add the same **label** you used for the application and gateway.

3. Click the blue **Register end device** button.

![](tts-end-device-4.png)

---

## End Device Ready

Your end device is now ready to use.

:::tip
If you need **further assistance** or a visual demonstration of the process described in this guide, consult the [**Video Guide**](https://docs.hardwario.com/apps/videos-apps/tts-end-devices).
:::