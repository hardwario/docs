---
slug: chirpstack
title: ChirpStack
---
import Image from '@theme/IdealImage';

# Getting Started with ChirpStack

The **HARDWARIO STICKER** operates as an end device within a LoRaWAN network. To manage your data and device connectivity, you need to register it within a LoRaWAN Network Server (LNS). 

While there are various platforms available, we provide full support and documentation for the **ChirpStack system**, which works seamlessly with gateways such as **EMBER**.

---

If you choose to use ChirpStack as your network server, follow the **step-by-step guide** below. It covers the entire system installation, adding your STICKER device, and setting up your local LoRaWAN network.

👉 [**Guide: Getting Started with ChirpStack v4**](https://docs.hardwario.com/apps/chirpstack/index#getting-started-with-chirpstack-v4)

### New to LoRaWAN?
If you are new to this technology, you can find general information about how **LoRaWAN networks** function in our documentation:

👉 [**Introduction to LoRaWAN Networks**](https://docs.hardwario.com/apps/chirpstack/index#lorawan-network)

---

### Device Profile Configuration
Whether you are using ChirpStack or another LoRaWAN Network Server, the following parameters are essential for the STICKER to communicate correctly. Use these values when creating your device profile:

| **Parameter** | **Value** |
|----------------|-----------|
| **LoRaWAN MAC version** | **1.0.4** |
| **Regional parameters revision** | **B** |
| **ADR algorithm** | **Default ADR algorithm (LoRa only)** |
| **Activation Mode (OTAA)** | **OFF** (Sticker usually uses ABP) |
| **Device Class** | **Class A** (Ensure Class-B and Class-C are **OFF**) |


