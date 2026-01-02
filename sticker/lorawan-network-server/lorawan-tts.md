---
slug: lorawan-tts
title: The Things Stack
---
import Image from '@theme/IdealImage';

# The Things Stack

This page explains how to register **HARDWARIO STICKER** into **The Things Stack (TTS)** using **ABP activation** and how to add a payload formatter (decoder).

Useful HARDWARIO docs:
- TTS – End Devices (registration flow):  
  https://docs.hardwario.com/apps/the-things-stack/tts-configuration/tts-end-devices
- STICKER codec example (JavaScript payload formatter):  
  https://docs.hardwario.com/apps/chirpstack/chirpstack-configuration/chirpstack-decoding

---

## Prerequisites

- A TTS deployment (Cloud or Enterprise) where you can create applications and devices.
- A gateway connected to TTS (or access to a public TTS network).
- Your STICKER powered and within gateway coverage.

---

## 1) Collect the required identifiers & keys

:::info
HARDWARIO STICKER uses **ABP (Activation by Personalization)**.  
**OTAA is not supported** by the standard STICKER firmware.
:::

The required LoRaWAN identifiers and keys are **provided together with the STICKER** (device provisioning).

You will need:

- **Device ID** (your own readable identifier)
- **DevEUI** (64-bit)
- **DevAddr** (32-bit)
- **NwkSKey** (Network Session Key, 128-bit)
- **AppSKey** (Application Session Key, 128-bit)

These values must match the provisioning used when configuring the STICKER (e.g. via NFC / firmware configuration).

:::info
STICKER supports configuration via **NFC**.
A HARDWARIO provisioning and configuration application using NFC is currently under development.
:::

---

## 2) Create an Application (TTS)

In TTS Console:
- Home → **Create application**
- Fill:
  - **Application ID**
  - **Application name**
  - (Optional) description / labels
- Click **Create application**

Reference:
- https://docs.hardwario.com/apps/the-things-stack/tts-configuration/tts-end-devices

---

## 3) Register the STICKER end device (ABP)

Inside your application:
- Click **+ Register end device**
- Choose:
  - **Enter the device manually**
  - **Activation mode: ABP**

Fill:
- **Device ID**
- **DevEUI**
- **DevAddr**
- **NwkSKey**
- **AppSKey**
- (Optional) labels

Click **Register end device**.

> Note: JoinEUI / AppKey fields are not used for ABP devices and should be left empty if shown in the UI.

---

## 4) LoRaWAN parameters in The Things Stack

In **The Things Stack**, LoRaWAN MAC and regional parameters are handled automatically by the Network Server and do not require manual configuration.

For reference, HARDWARIO STICKER uses:
- **MAC version:** LoRaWAN 1.0.4  
- **Regional parameters revision:** B  
- **Device class:** Class A  
  (Class B and Class C are not supported)

These parameters are applied implicitly.

---

## 5) Add a payload formatter (decoder)

To decode uplinks into JSON, open your device in TTS Console and configure:
- **Payload formatters (Uplink)** → **JavaScript**

Paste a decoder matching your STICKER firmware payload format.

HARDWARIO provides a working STICKER codec example here:
- https://docs.hardwario.com/apps/chirpstack/chirpstack-configuration/chirpstack-decoding

> Important: The decoder must match the firmware payload format  
> (Clime / Input / Motion / custom).
>
> Firmware reference:  
> https://github.com/hardwario/sticker-firmware

---

## 6) Verify data in TTS

- Open the device’s **Live data** view
- Confirm:
  - Uplinks are arriving
  - Payload formatter outputs decoded JSON fields

---

## Troubleshooting checklist (quick)

- **No uplinks**
  - Gateway connected to TTS? Correct frequency plan? Device in range?
- **Uplinks arrive but device is marked inactive**
  - Check DevAddr and session keys (ABP must match exactly)
- **Decoded data is empty or incorrect**
  - Wrong or missing payload formatter
- **Packets dropped after reprovisioning**
  - Frame counters may need reset when reusing ABP keys
