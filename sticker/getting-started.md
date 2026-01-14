---
slug: getting-started
title: Getting Started
---
import Image from '@theme/IdealImage';

# STICKER Quick Start Guide

Welcome! This page helps you **power up (revive)** your STICKER and choose what to do next:
- connect it to **ChirpStack**,
- connect it to **The Things Stack (TTS)**,
- or use **your own LoRaWAN network**,
and then visualize data in **Ubidots** or **ThingsBoard**.

---

## Before you start

#### What STICKER is

**STICKER** is an open IoT platform based on STM32WL with integrated LoRaWAN connectivity. It is a compact, battery-powered device with long lifetime and ready-to-use applications such as STICKER Clime, Input, and Motion, making it ideal for flexible sensor deployments.

For detailed technical specifications of the hardware, please refer to the [**Hardware Description**](https://docs.hardwario.com/sticker/hardware-description/) page.

#### You will need
- **STICKER device** (Clime / Input / Motion)
- **2× AA batteries**
- A **LoRaWAN gateway** within range (your own or a public network gateway)
- A **LoRaWAN Network Server** (ChirpStack / TTS / other)
- (Optional) A dashboard platform (Ubidots / ThingsBoard)

#### Useful links
- STICKER overview: https://docs.hardwario.com/sticker/
- STICKER product page: https://www.hardwario.com/sticker
- STICKER store page: https://www.hardwario.store/sticker
- STICKER **Decoder**: https://github.com/hardwario/sticker-firmware/blob/main/app/decoder/ttn.js
- HARDWARIO datasheets hub (includes STICKER datasheet link): https://www.hardwario.com/resources/datasheets

---

## 1) Identify your STICKER variant

STICKER ships with a ready-to-use “catalog application”:

- **STICKER Clime** — temperature & humidity monitoring  
  https://docs.hardwario.com/sticker/catalog-applications/sticker-clime/

- **STICKER Input** — external sensors + analog/digital inputs (1‑Wire, dry contact, 0–24 V analog)  
  https://docs.hardwario.com/sticker/catalog-applications/sticker-input/

- **STICKER Motion** — ultra‑low‑power PIR motion detection  
  https://docs.hardwario.com/sticker/catalog-applications/sticker-motion/

Catalog overview:  
https://docs.hardwario.com/sticker/catalog-applications/catalog-applications/

---

## 2) “Revive” STICKER

1. **Open the enclosure** and access the battery holder.
2. **Insert two AA cells** (check polarity).
3. STICKER will boot and the **status LED** indicates activity.
4. For the first test, place the device **close to your LoRaWAN gateway** (best RF conditions).
5. Wait for the first uplink (the timing depends on the installed catalog app and reporting interval).

#### NFC note (optional, but useful)
STICKER is **NFC-ready** and can be configured even when batteries are not inserted (NFC energy harvesting).
This is useful for provisioning LoRaWAN settings before installation:
- STICKER Power Management: https://docs.hardwario.com/sticker/power-management/

:::info
A HARDWARIO provisioning and configuration application using NFC is currently under development.
:::


---

## 3) Choose your LoRaWAN backend

You always need:
**STICKER → (LoRa radio) → Gateway → Network Server → Application/Cloud/Dashboard**

### ChirpStack v4
Best if you want a private LoRaWAN network you control.

Start here (HARDWARIO guide):
- **https://docs.hardwario.com/sticker/lorawan-network-server/lorawan-chirpstack**

Step-by-step sections:
- Installation: https://docs.hardwario.com/ember/chirpstack/chirpstack-installation
- Gateways: https://docs.hardwario.com/apps/chirpstack/chirpstack-configuration/chirpstack-gateways
- End devices: https://docs.hardwario.com/apps/chirpstack/chirpstack-configuration/chirpstack-end-devices
- Payload decoding: https://docs.hardwario.com/apps/chirpstack/chirpstack-configuration/chirpstack-decoding
- STICKER **Decoder**: https://github.com/hardwario/sticker-firmware/blob/main/app/decoder/ttn.js

---

### The Things Stack
Best if you want to use TTS (managed or self-hosted), including TTN/TTI workflows.

Start here (HARDWARIO guide):
- **https://docs.hardwario.com/sticker/lorawan-network-server/lorawan-tts**

Step-by-step sections:
- Gateways: https://docs.hardwario.com/apps/the-things-stack/tts-configuration/tts-gateways
- End devices: https://docs.hardwario.com/apps/the-things-stack/tts-configuration/tts-end-devices
- STICKER **Decoder**: https://github.com/hardwario/sticker-firmware/blob/main/app/decoder/ttn.js

---

### Self-Hosted LoRaWAN Server
If you already operate a LoRaWAN backend (or a local LoRaWAN stack), integrate STICKER as a standard LoRaWAN end device:

- Register the device in your NS
- Use the correct **frequency plan/region**
- Configure keys / activation method required by your firmware
- Add a [**payload decoder**](https://github.com/hardwario/sticker-firmware/blob/main/app/decoder/ttn.js) (so you get engineering values)
- Forward data via **MQTT / Webhooks / HTTP** to your application

---

## 4) Visualize data

### Ubidots
HARDWARIO guide:
- **https://docs.hardwario.com/apps/ubidots/index/**

Useful links:
- Ubidots (HARDWARIO instance): https://ubidots.hardwario.com
- Ubidots official: https://ubidots.com

### ThingsBoard
HARDWARIO guide:
- **https://docs.hardwario.com/apps/thingsboard/index/**

Useful links:
- ThingsBoard (HARDWARIO instance): https://thingsboard.hardwario.com
- ThingsBoard official: https://thingsboard.io

---

## 5) Next steps (after first successful uplink)

At this point, your STICKER is connected, data is arriving, and dashboards are working.

Typical next steps:

- **Install the device in its final location** and verify long-term LoRaWAN coverage.
- **Observe data for several hours or days** to confirm stability and expected update intervals.
- **Adjust reporting behavior** (if applicable) to balance responsiveness and battery life.
- **Set alerts or thresholds** in your dashboard platform.

:::info
#### STICKER Input wiring (Input variant only)

If you are using **STICKER Input**, refer to the wiring and DIP switch configuration guide:
- https://docs.hardwario.com/sticker/sticker-input-wiring/sticker-input-wiring/
:::


---

## Developer / customization path (optional)
If you want to modify behavior or build custom firmware:
- Developer Access (Debug Mode): https://docs.hardwario.com/sticker/developer-mode/
- Open firmware repository: https://github.com/hardwario/sticker-firmware/

---

## Troubleshooting checklist
- **No uplinks?**
  - Check battery polarity / replace batteries
  - Move closer to a gateway (RF coverage)
  - Verify frequency plan and device profile in your NS
  - Verify keys / activation method required by your firmware
  - Check payload decoder settings
