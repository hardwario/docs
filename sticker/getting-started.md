---
slug: getting-started
title: Getting Started
---
import Image from '@theme/IdealImage';

# Getting Started

The **HARDWARIO STICKER** acts as an end device in a LoRaWAN network.  
Therefore, it needs to be added into the **ChirpStack system**, together with a gateway (for example, **EMBER**).

---

In the following link, you can find a **step-by-step guide** on how to install the entire system, add your STICKER device into **ChirpStack**, and set up your LoRaWAN network.

Link 👉 [https://docs.hardwario.com/apps/chirpstack/index#getting-started-with-chirpstack-v4](/apps/chirpstack/index#getting-started-with-chirpstack-v4)

If you are new to this, you can also read more general information about **LoRaWAN networks** in the following link:

Link 👉 [https://docs.hardwario.com/apps/chirpstack/index#lorawan-network](/apps/chirpstack/index#lorawan-network)

### ChirpStack v4 Configuration for STICKER

The following configuration should be entered during the creation of device profiles that define a group of end devices within the ChirpStack v4 environment.

| **Parameter** | **Value** |
|----------------|-----------|
| **General – MAC version** | **LoRaWAN 1.0.4** |
| **General – Regional parameters revision** | **B** |
| **General – ADR algorithm** | **Default ADR algorithm (LoRa only)** |
| **Join (OTAA/ABP) – Device supports OTAA** | **OFF** |
| **Class-B – Device supports Class-B** | **OFF** |
| **Class-C – Device supports Class-C** | **OFF** |
