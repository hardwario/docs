---
slug: first-step
title: Quick Start Guide
---
import Image from '@theme/IdealImage';

# CHESTER Quick Start Guide

Thank you for choosing the CHESTER device.

Follow these steps to set it up and start viewing your live data in the HARDWARIO Cloud.

For more detailed information, you can also download the [**CHESTER Manual (EN/CZ)**](https://drive.google.com/drive/folders/1pFwF87Mc1c_9w0otSzTuk2yR6CwalqVB?usp=drive_link) in PDF format.


---

## Step 1: Create a HARDWARIO Cloud Account

1. Go to [**https://hardwario.cloud**](https://hardwario.cloud)  
2. Click **SIGN UP**  
3. Create an account using:  
   - **Google** or **Microsoft** account
   - **Email and password** (don’t forget to verify your email)  
4. Once verified, **log in**.

:::info
For improved security, we recommend authenticating via **Google** or **Microsoft**, as these identity providers use verified credentials and **advanced account protection** mechanisms.
:::

---

## Step 2: Create Your Space

1. In the top-right corner, click **SPACES → NEW SPACE**  
2. Name your space (for example: `my-home`, `office-sensors`, `warehouse`)  
3. This is where your **CHESTER devices** will live.

:::caution
Please follow our [**Naming Conventions**](https://docs.hardwario.com/cloud/#naming-conventions) when creating your space.
:::

---

## Step 3: Add a Device

1. Select your **Space**  
2. Go to **DEVICES → +NEW DEVICE**  
3. Enter the information about your **CHESTER** — you can choose one of the following options:

   **Option 1 – Scan the QR Code:**  
   Use the **`⛶ SCAN DEVICE`** feature in the HARDWARIO Cloud to **scan the QR code** on your CHESTER — all the **information** will be **filled in automatically**!  

   **Option 2 – Manually:**  
   You can add a device manually by filling in the following fields:  
   - **Name**  
   - **HARDWARIO Serial Number (HSN)**  
   - **Claim Token**

:::info
The **Claim Token** is unique for each device — you can obtain it by **scanning the QR code** on the device with any QR code reader, or by using the **`info show`** command when the device is connected via **J-Link**.
:::


4. Save it — your CHESTER is now **registered in the Cloud**!

:::tip
**Need more details?**  
You can find more in-depth information about the **HARDWARIO Cloud** here:  
👉 [https://docs.hardwario.com/cloud/](https://docs.hardwario.com/cloud/)

Or check out our **video tutorial** on how to add your CHESTER device to the Cloud:  
👉 [https://docs.hardwario.com/chester/getting-started/videos-chester/chester-cloud](https://docs.hardwario.com/chester/getting-started/videos-chester/chester-cloud)
:::



---

## Step 4: Power Up Your CHESTER

:::caution
> **Important:** Add the device to the Cloud **before powering it up.**  
> Otherwise, it might take longer (up to several hours) to connect.
:::

- Insert the batteries or connect an external power source  
- Wait a few minutes while your device connects to the HARDWARIO Cloud — the device will **blink the green LED** once it’s successfully connected  
  *(See LED behavior explained below in [Step 5: Check the Status LED](#step-5-check-the-status-led))*  
- If you are using an older **CHESTER-M** model with supercapacitors, wait about **30 seconds** after inserting the batteries — the capacitors need to charge before the LED starts blinking.  
- If it doesn’t connect, try one of these quick actions:

   🔹 **Press the button four times** → reboots the device  
   🔹 **Remove and reinsert the batteries**  
   🔹 For **CHESTER-M** (with blue supercapacitors):  
     - Hold the button or press it **five times** until the **white LED** turns on — this discharges the capacitors (takes ≈ 30 s)

---


## Step 5: Check the Status LED

- **Blinking green every 5 seconds** → Connected to HARDWARIO Cloud ✅  
- **No blinking /** [**other colors**](https://docs.hardwario.com/chester/catalog-applications/common-functionality/#led-behaviour) → Still connecting or an error occurred — check SIM, network coverage, or power  

:::info
For details about all LED color states and meanings, see the [**LED Behaviour documentation**](https://docs.hardwario.com/chester/catalog-applications/common-functionality/#led-behaviour).
:::

## Step 6: See Your Data in the Cloud

1. In [**HARDWARIO Cloud**](https://hardwario.cloud), open **DEVICES**  
2. Click the **chat icon** next to your device  
3. You’ll see **messages and live data** sent from CHESTER 🎉  

---

## Step 7: Configure Your Device

Once connected, you can:

- Send [**Config commands**](https://docs.hardwario.com/cloud/downlink#config) directly from the Cloud
- Use [**HARDWARIO Manager**](https://docs.hardwario.com/chester/getting-started/hardwario-manager) (mobile app via BLE)
- Use [**HARDWARIO Monitor**](https://docs.hardwario.com/chester/getting-started/hardwario-monitor) (J-Link or BLE from your PC)
- Use [**HARDWARIO Terminal**](https://docs.hardwario.com/chester/platform-connectivity/hardwario-terminal) (Google Chrome browser via WebSerial/WebBluetooth)
- Access a [**Remote shell**](https://docs.hardwario.com/cloud/downlink/#shell-commands) and even perform [**FOTA updates**](https://docs.hardwario.com/cloud/fota)

---

## Step 8: Check and Update CHESTER Firmware

It’s always a good idea to make sure your CHESTER is running the **latest firmware version**.

### Check Firmware Version
You can check it in three ways:

1. **Using** [**HARDWARIO Manager (mobile app)**](https://docs.hardwario.com/chester/getting-started/hardwario-manager)
   - Open the app and connect to your CHESTER via Bluetooth
   - The firmware version will be displayed automatically

2. **Using** [**HARDWARIO Monitor (desktop app)**](https://docs.hardwario.com/chester/getting-started/hardwario-monitor)
   - Connect CHESTER via J-Link or BLE
   - Run the command:
     ```bash
     info show
     ```
   - You'll see firmware and application details in the console

3. **Using** [**HARDWARIO Terminal (Google Chrome)**](https://docs.hardwario.com/chester/platform-connectivity/hardwario-terminal)
   - Open Chrome and go to [**terminal.hardwario.com**](https://terminal.hardwario.com)
   - Connect CHESTER via J-Link (WebSerial) or BLE (WebBluetooth)
   - Run the command:
     ```bash
     info show
     ```
   - You'll see firmware and application details in the terminal

### Download the Latest Firmware
You can always find the newest firmware builds here:  
👉 [**Available Application Firmware Builds**](https://docs.hardwario.com/chester/catalog-applications/catalog-applications#available-application-firmware-builds)

:::info
 The firmware table is organized by CHESTER type, so make sure to select the correct one for your device.
:::

### Update Firmware
If a newer version is available, you can update it using one of these methods:

1. **Update via [**HARDWARIO Manager  (mobile app)**](https://docs.hardwario.com/chester/getting-started/hardwario-manager)**

   - Follow this step-by-step guide: 👉 [**Firmware update using HARDWARIO Manager**](https://docs.hardwario.com/chester/platform-connectivity/hardwario-manager#firmware-update)

2. **Update Firmware from the Cloud ([**FOTA**](https://docs.hardwario.com/cloud/fota/))**
   - You can also update your CHESTER **remotely** via the cloud.

   - For full technical details, see this guide: 👉 [**FOTA documentation**](https://docs.hardwario.com/cloud/fota/). 

3. **Manual Update via [**J-Link**](https://docs.hardwario.com/chester/firmware-flashing/application-over-j-link)**
   - If you prefer flashing manually, see this guide: 👉 [**Application update over J-Link**](https://docs.hardwario.com/chester/firmware-flashing/application-over-j-link)

---

✅ **That’s it!**  
Your CHESTER is now connected, configured, and up to date — ready to collect and send data to the cloud.

---

## Step 9: Explore Applications and Integrations

Your CHESTER can do much more than just send data!  
You can extend its functionality using [**HARDWARIO Applications**](https://docs.hardwario.com/apps/) — ready-made modules and tools that help you:

- 📊 **Visualize your data** using dashboards and charts  
- 🌐 **Integrate CHESTER** into existing **LoRaWAN networks** or other IoT systems  
- ⚙️ **Build automations and analytics** for your specific use case  

All applications are easy to deploy and can transform your CHESTER into a complete IoT solution.

:::info
👉 Learn more and explore available applications here:  
[**https://docs.hardwario.com/apps/**](https://docs.hardwario.com/apps/)
:::