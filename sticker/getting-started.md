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

> STICKER is a compact, battery-powered LoRaWAN end device.  
> Official STICKER docs: https://docs.hardwario.com/sticker/

---

## Before you start

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

---

## 3) Choose your LoRaWAN backend

You always need:
**STICKER → (LoRa radio) → Gateway → Network Server → Application/Cloud/Dashboard**

#### Path A — ChirpStack (private/self-hosted LoRaWAN)
Best if you want a private LoRaWAN network you control.

Start here (HARDWARIO guide):
- https://docs.hardwario.com/apps/chirpstack/index/

Step-by-step sections:
- Installation: https://docs.hardwario.com/ember/chirpstack/chirpstack-installation
- Gateways: https://docs.hardwario.com/apps/chirpstack/chirpstack-configuration/chirpstack-gateways
- End devices: https://docs.hardwario.com/apps/chirpstack/chirpstack-configuration/chirpstack-end-devices
- Payload decoding: https://docs.hardwario.com/apps/chirpstack/chirpstack-configuration/chirpstack-decoding

---

#### Path B — The Things Stack (TTS)
Best if you want to use TTS (managed or self-hosted), including TTN/TTI workflows.

Start here (HARDWARIO guide):
- https://docs.hardwario.com/apps/the-things-stack/index/

Step-by-step sections:
- Gateways: https://docs.hardwario.com/apps/the-things-stack/tts-configuration/tts-gateways
- End devices: https://docs.hardwario.com/apps/the-things-stack/tts-configuration/tts-end-devices

---

#### Path C — Your own LoRaWAN Network Server / private LoRaWAN
If you already operate a LoRaWAN backend (or a local LoRaWAN stack), integrate STICKER as a standard LoRaWAN end device:

- Register the device in your NS
- Use the correct **frequency plan/region**
- Configure keys / activation method required by your firmware
- Add a **payload decoder** (so you get engineering values)
- Forward data via **MQTT / Webhooks / HTTP** to your application

---

## 4) Visualize data

Once uplinks are flowing, you have two common approaches:

#### Option 1 — Use HARDWARIO Cloud as a bridge (fastest dashboard path)
If you use HARDWARIO Cloud, you can forward data to dashboards via connectors.

- HARDWARIO Cloud: https://hardwario.cloud

#### Ubidots
HARDWARIO guide:
- https://docs.hardwario.com/apps/ubidots/index/

Useful links:
- Ubidots (HARDWARIO instance): https://ubidots.hardwario.com
- Ubidots official: https://ubidots.com

#### ThingsBoard
HARDWARIO guide:
- https://docs.hardwario.com/apps/thingsboard/index/

Useful links:
- ThingsBoard (HARDWARIO instance): https://thingsboard.hardwario.com
- ThingsBoard official: https://thingsboard.io

---

#### Option 2 — Integrate directly from ChirpStack / TTS to your platform
Both ChirpStack and TTS support exporting data using **MQTT** and/or **Webhooks**.
You can connect those outputs directly to Ubidots or ThingsBoard if you do not want HARDWARIO Cloud in between.

---

## 5) Next steps (after first successful uplink)

- Mount the device in its final location and validate LoRaWAN coverage.
- Choose what you want to measure:
  - **Clime**: ambient monitoring
  - **Motion**: motion events + occupancy/traffic insights
  - **Input**: connect external sensors / industrial signals

#### STICKER Input wiring (if you have the Input variant)
- Wiring + DIP switch modes: https://docs.hardwario.com/sticker/sticker-input-wiring/sticker-input-wiring/

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
