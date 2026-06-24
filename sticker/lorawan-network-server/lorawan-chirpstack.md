---
slug: lorawan-chirpstack
title: ChirpStack v4
---

# ChirpStack v4

**ChirpStack** is an open-source LoRaWAN Network Server you can run on your own infrastructure. Choose this option if you want a private LoRaWAN network that you fully control.

This section guides you through registering your **HARDWARIO STICKER** in ChirpStack v4.

:::info
Make sure **ChirpStack v4 is already installed and running** before you continue.

Installation guide: https://docs.hardwario.com/apps/chirpstack/chirpstack-installation
:::

---

## Choose how your STICKER joins the network

STICKER supports two activation methods. Pick the one that matches the keys you received with your device:

- **[OTAA – Over-The-Air Activation](./chirpstack-otaa.md)**  
  The device joins the network automatically using **DevEUI**, **AppEUI / JoinEUI** and **AppKey**.

- **[ABP – Activation by Personalization](./chirpstack-abp.md)**  
  The device uses pre-configured session keys (**DevAddr**, **NwkSKey**, **AppSKey**) and skips the join procedure.

---

## Useful links

- ChirpStack v4 Installation – https://docs.hardwario.com/apps/chirpstack/chirpstack-installation
- ChirpStack v4 – End Devices – https://docs.hardwario.com/apps/chirpstack/chirpstack-configuration/chirpstack-end-devices
- ChirpStack v4 – Data Decoding (STICKER codec example) – https://docs.hardwario.com/apps/chirpstack/chirpstack-configuration/chirpstack-decoding
- STICKER Decoder – https://github.com/hardwario/sticker-firmware/blob/main/app/decoder/ttn.js
