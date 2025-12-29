---
slug: lorawan-chirpstack
title: ChirpStack v4
---
import Image from '@theme/IdealImage';

# ChirpStack v4

This page explains what you need to prepare and how to register a **HARDWARIO STICKER** as a LoRaWAN end device in **ChirpStack v4**, including the recommended device-profile settings and how to add a payload decoder.

Useful HARDWARIO docs:
- STICKER Getting Started (incl. ChirpStack v4 device-profile settings): https://docs.hardwario.com/sticker/getting-started
- ChirpStack v4 – End Devices (how to register devices): https://docs.hardwario.com/apps/chirpstack/chirpstack-configuration/chirpstack-end-devices
- ChirpStack v4 – Data Decoding (STICKER codec example): https://docs.hardwario.com/apps/chirpstack/chirpstack-configuration/chirpstack-decoding

---

## Prerequisites

- A working LoRaWAN gateway connected to ChirpStack v4 (and configured for your region/frequency plan).
- A ChirpStack v4 tenant + gateway already visible in ChirpStack.
- Your STICKER powered and within gateway coverage.

---

## 1) Collect the required LoRaWAN identifiers & keys for STICKER

What you need depends on **activation method**:

### Option A — ABP (Activation by Personalization)
This is consistent with the HARDWARIO “recommended” STICKER device-profile setting where **Device supports OTAA = OFF**.

You will need:
- **DevEUI** (64-bit)
- **DevAddr** (32-bit)
- **NwkSKey** (Network Session Key, 128-bit)
- **AppSKey** (Application Session Key, 128-bit)

### Option B — OTAA (Over-the-Air Activation)
If your STICKER is configured to join via OTAA, you will need:
- **DevEUI** (64-bit)
- **JoinEUI / AppEUI** (64-bit)
- **AppKey** (128-bit)

> Note: STICKER firmware supports configuring LoRaWAN settings using **NFC from a phone** (so in many deployments, identifiers/keys are obtained from your provisioning process or NFC configuration workflow).  
> Firmware repo (reference): https://github.com/hardwario/sticker-firmware

---

## 2) Create a Device Profile for STICKER (recommended settings)

In ChirpStack v4:
**Device Profiles → Add Device Profile**

Use the **recommended STICKER settings** from HARDWARIO docs:

| Parameter | Value |
|---|---|
| MAC version | LoRaWAN 1.0.4 |
| Regional parameters revision | B |
| ADR algorithm | Default ADR algorithm (LoRa only) |
| Device supports OTAA | OFF |
| Device supports Class-B | OFF |
| Device supports Class-C | OFF |

> Source: https://docs.hardwario.com/sticker/getting-started#chirpstack-v4-configuration-for-sticker

**Also set:**
- **Region** to match your network (EU868 / US915 / …).
- **Expected uplink interval** to something realistic for your STICKER firmware configuration (helps ChirpStack with device management).

---

## 3) Create an Application in ChirpStack

In ChirpStack v4:
**Applications → Add Application**

Fill:
- Name (e.g. `sticker-prod` or `sticker-lab`)
- Region (must match your gateway + device profile)

Save.

---

## 4) Register the STICKER end device

In your Application:
**Application → End Devices → Add End Device**

Fill:
- **Name** (human readable)
- **Device EUI (DevEUI)**
- (If the UI asks) **JoinEUI / AppEUI**  
  - For ABP devices, this may be unused, but some UIs still show the field.
- **Device Profile** → choose the STICKER profile you created
- Submit

### If you are using ABP (typical with “OTAA OFF” profile)
After creating the device:
**Go to the “Activation” tab** and set:
- **Device Address (DevAddr)**
- **Network Session Key (NwkSKey)**
- **Application Session Key (AppSKey)**

Then click:
- **(Re)activate device**

> This flow is described in HARDWARIO’s ChirpStack v4 End Devices guide:  
> https://docs.hardwario.com/apps/chirpstack/chirpstack-configuration/chirpstack-end-devices

---

## 5) Add a payload decoder (codec) for STICKER

To see meaningful data (temperature, humidity, motion, etc.), you must add a codec.

In ChirpStack v4:
**Device Profiles → (your STICKER profile) → Codec**

- Select **Payload codec: JavaScript functions**
- Paste the decoder code
- Submit

HARDWARIO provides a working **STICKER codec example** here:
- https://docs.hardwario.com/apps/chirpstack/chirpstack-configuration/chirpstack-decoding

> Pro tip: The codec must match the firmware payload format you are running (Clime / Input / Motion, custom builds, etc.).  
> If you want the codec under version control, start from the STICKER firmware repository and search for the codec implementation patterns (e.g., `decodeUplink`):  
> https://github.com/hardwario/sticker-firmware

---

## 6) Verify uplinks

- Go to **Applications → (your app) → Events**
- Check **Up** events
- You should see:
  - raw payload bytes
  - decoded JSON fields (if codec is set correctly)

---

## Troubleshooting checklist (quick)

- **No packets at all**
  - Gateway online? Correct region? Antenna? Device in range?
- **Packets at gateway but not in application**
  - Wrong keys (ABP) / wrong DevAddr / wrong DevEUI registration
- **Decoded data is empty or nonsense**
  - Wrong codec (doesn’t match firmware payload)
- **ABP + reusing keys**
  - Frame counters can cause drops when reusing old session keys; consider proper re-provisioning for production (avoid “lab shortcuts”).
