---
slug: lorawan-tts
title: The Things Stack
---
import Image from '@theme/IdealImage';

# The Things Stack

This page explains how to register **HARDWARIO STICKER** into **The Things Stack** and how to add a payload formatter (decoder).

Useful HARDWARIO docs:
- TTS – End Devices (registration flow): https://docs.hardwario.com/apps/the-things-stack/tts-configuration/tts-end-devices
- STICKER device info + recommended ChirpStack profile (MAC/Regional params reference): https://docs.hardwario.com/sticker/getting-started
- STICKER codec example (works as a JavaScript payload formatter pattern): https://docs.hardwario.com/apps/chirpstack/chirpstack-configuration/chirpstack-decoding

---

## Prerequisites

- A TTS deployment (Cloud or Enterprise) where you can create applications and devices.
- A gateway connected to TTS (or a public network connection if you’re using one).
- Your STICKER powered and within coverage.

---

## 1) Collect the required identifiers & keys

TTS device registration is typically **OTAA**, requiring:
- **JoinEUI / AppEUI**
- **DevEUI**
- **AppKey**
- **Device ID** (your own readable identifier)

This is exactly what HARDWARIO’s TTS End Devices guide asks for:
- https://docs.hardwario.com/apps/the-things-stack/tts-configuration/tts-end-devices

> If your STICKER is provisioned/configured for ABP instead (common in some deployments), you will need ABP credentials (DevAddr/NwkSKey/AppSKey).  
> TTS supports ABP too, but OTAA is generally preferred when possible.

---

## 2) Create an Application (TTS)

In TTS Console:
- Home → **Create application**
- Fill:
  - Application ID
  - Application name
  - (Optional) description / labels
- Create

(Exact flow in the HARDWARIO guide)
- https://docs.hardwario.com/apps/the-things-stack/tts-configuration/tts-end-devices

---

## 3) Register the STICKER end device (TTS)

Inside your application:
- Click **+ Register end device**
- Choose:
  - “Enter the device manually” (unless you have a predefined template)

Fill:
- **JoinEUI (AppEUI)**
- **DevEUI**
- **AppKey**
- **Device ID**
- (Optional) labels

Click **Register end device**.

> Reference: https://docs.hardwario.com/apps/the-things-stack/tts-configuration/tts-end-devices

---

## 4) “Device Profile” settings in The Things Stack

In **The Things Stack**, LoRaWAN MAC and regional parameters are handled automatically by the Network Server and do not require manual configuration.

For reference, HARDWARIO STICKER uses the following LoRaWAN stack parameters:

- **MAC version:** LoRaWAN 1.0.4  
- **Regional parameters revision:** B  
- **Device class:** Class A (Class B and Class C disabled)

These parameters are applied implicitly and do not need to be configured by the user.

---

## 5) Add a payload formatter (decoder) in TTS

To decode uplinks into JSON, in TTS Console open your device and configure:
- **Payload formatters** (Uplink) → **JavaScript**

Then paste a decoder matching your STICKER firmware payload.

HARDWARIO provides a working STICKER codec example (JavaScript `decodeUplink` style) here:
- https://docs.hardwario.com/apps/chirpstack/chirpstack-configuration/chirpstack-decoding

> Important: The correct decoder depends on the firmware payload format (Clime / Input / Motion / custom).  
> Firmware reference: https://github.com/hardwario/sticker-firmware

---

## 6) Verify data in TTS

- Watch the device’s **Live data** / uplink events in TTS
- Confirm:
  - Uplinks arriving
  - Payload formatter outputs decoded fields

---

## Troubleshooting checklist (quick)

- **No uplinks**
  - Gateway connected to TTS? Correct frequency plan? Device in range?
- **Join fails (OTAA)**
  - JoinEUI/DevEUI/AppKey mismatch between device and TTS
- **Uplinks arrive but data is not decoded**
  - Wrong/missing payload formatter
- **Still unsure which identifiers/keys to use**
  - Confirm whether your STICKER is configured for OTAA or ABP in your provisioning/NFC configuration process.
