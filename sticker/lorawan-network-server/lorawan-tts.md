---
slug: lorawan-tts
title: The Things Stack
---

# The Things Stack

**The Things Stack (TTS)** is a managed LoRaWAN Network Server provided by The Things Industries. It is available as a public cloud service (The Things Stack Cloud / Community Edition) or as a private deployment, and it is the easiest way to get a STICKER online without running your own infrastructure.

This section guides you through registering your **HARDWARIO STICKER** in The Things Stack.

:::info
Before registering your STICKER, make sure you have access to a **The Things Stack** deployment (Cloud, Community, or Enterprise) and that a LoRaWAN gateway is connected and online.
:::

---

## Choose how your STICKER joins the network

STICKER supports two activation methods. Pick the one that matches the keys you received with your device:

- **[OTAA – Over-The-Air Activation](./tts-otaa.md)**  
  The device joins the network automatically using **DevEUI**, **AppEUI / JoinEUI** and **AppKey**.

- **[ABP – Activation by Personalization](./tts-abp.md)**  
  The device uses pre-configured session keys (**DevAddr**, **NwkSKey**, **AppSKey**) and skips the join procedure.

---

## Useful links

- TTS – End Devices – https://docs.hardwario.com/apps/the-things-stack/tts-configuration/tts-end-devices
- STICKER Decoder – https://github.com/hardwario/sticker-firmware/blob/main/app/decoder/ttn.js
