---
slug: lorawan-chirpstack
title: ChirpStack v4
---
import Image from '@theme/IdealImage';

# ChirpStack v4

This page explains how to register **HARDWARIO STICKER** as a LoRaWAN end device in **ChirpStack v4** using **ABP activation**, including the recommended device-profile settings and how to add a payload decoder.

Useful HARDWARIO docs:
- ChirpStack v4 Installation  
  https://docs.hardwario.com/apps/chirpstack/chirpstack-installation
- ChirpStack v4 – End Devices  
  https://docs.hardwario.com/apps/chirpstack/chirpstack-configuration/chirpstack-end-devices
- ChirpStack v4 – Data Decoding (STICKER codec example)  
  https://docs.hardwario.com/apps/chirpstack/chirpstack-configuration/chirpstack-decoding

:::info
Before registering your STICKER, make sure **ChirpStack v4 is installed and running**.

Installation instructions:  
https://docs.hardwario.com/apps/chirpstack/chirpstack-installation
:::

---

## Prerequisites

- A working LoRaWAN gateway connected to ChirpStack v4 and configured for your region / frequency plan.
- A ChirpStack v4 tenant with the gateway visible and online.
- Your STICKER powered and within gateway coverage.

---

## 1) Collect the required LoRaWAN identifiers & keys

:::info
HARDWARIO STICKER uses **ABP (Activation by Personalization)**.  
**OTAA is not supported** and must not be enabled in the device profile.
:::

The required LoRaWAN identifiers and keys are **provided together with the STICKER** (device provisioning).

You will need:

- **DevEUI** (64-bit)
- **DevAddr** (32-bit)
- **NwkSKey** (Network Session Key, 128-bit)
- **AppSKey** (Application Session Key, 128-bit)

:::info
STICKER supports configuration via **NFC**.
A HARDWARIO provisioning and configuration application using NFC is currently under development.
:::


---

## 2) Create a Device Profile for STICKER (recommended)

In ChirpStack v4:
**Device Profiles → Add Device Profile**

Use the following **recommended STICKER settings**:

| Parameter | Value |
|---|---|
| MAC version | LoRaWAN 1.0.4 |
| Regional parameters revision | B |
| ADR algorithm | Default ADR algorithm (LoRa only) |
| Device supports OTAA | OFF |
| Device supports Class-B | OFF |
| Device supports Class-C | OFF |

**Also configure:**
- **Region** to match your network (EU868 / US915 / …)
- **Expected uplink interval** according to your STICKER firmware configuration  
  (helps ChirpStack with device management)

Save the device profile.

---

## 3) Create an Application in ChirpStack

In ChirpStack v4:
**Applications → Add Application**

Fill:
- **Name** (e.g. `sticker-prod` or `sticker-lab`)
- **Region** (must match your gateway and device profile)

Save.

---

## 4) Register the STICKER end device

In your application:
**Application → End Devices → Add End Device**

Fill:
- **Name** (human-readable)
- **Device EUI (DevEUI)**
- **Device Profile** → select the STICKER profile you created

> Note: JoinEUI / AppEUI fields may still appear in the UI, but they are **not used for ABP devices**.

Submit the form.

### Activate the device (ABP)

After creating the device, open:
**End Device → Activation**

Set:
- **Device Address (DevAddr)**
- **Network Session Key (NwkSKey)**
- **Application Session Key (AppSKey)**

Then click:
- **(Re)activate device**

---

## 5) Add a payload decoder (codec)

To decode uplinks into readable values (temperature, humidity, motion, etc.), add a codec.

In ChirpStack v4:
**Device Profiles → (your STICKER profile) → Codec**

- Select **Payload codec: JavaScript functions**
- Paste the decoder code
- Save

STICKER codec example:
- https://docs.hardwario.com/apps/chirpstack/chirpstack-configuration/chirpstack-decoding#example-of-codec-sticker

> Important: The decoder must match the firmware payload format  
> (Clime / Input / Motion / custom).

---

## 6) Verify uplinks

- Go to **Applications → (your application) → Events**
- Check **Up** events
- You should see:
  - raw payload bytes
  - decoded JSON fields (if the codec is correct)

---

## Troubleshooting checklist (quick)

- **No packets at all**
  - Gateway online? Correct region? Antenna connected? Device in range?
- **Packets visible at gateway but not in the application**
  - Wrong DevEUI / DevAddr / session keys
- **Decoded data is empty or incorrect**
  - Wrong or missing payload decoder
- **ABP and reused keys**
  - Frame counters may cause packet drops when reusing old session keys  
    → for production, avoid “lab shortcuts” and re-provision properly
