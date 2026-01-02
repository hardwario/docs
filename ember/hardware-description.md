---
slug: hardware-description
title: Hardware Description
---

# Hardware Description

This article describes the **hardware configuration of the EMBER Hotspot**.

## EMBER Hotspot Overview

The **EMBER Hotspot** is based on the **RBM33G** platform from **MikroTik**.  
It is equipped with a **LoRaWAN** card and can optionally include an **LTE modem**.

The enclosure and connectors are **water-proof and dust-proof**, providing **IP67** protection.

## Antennas

### LoRaWAN

- Requires one external antenna

### LTE

- Uses two antennas
- Antennas can be internal or external
- Supports 2G / 3G / 4G

## Network Interfaces

The **EMBER Hotspot** provides two metallic **RJ45 Ethernet ports** (100/10 Mbit/s):

- **LAN**
  - Local configuration
  - Device management
  - Troubleshooting

- **WAN**
  - Backup Internet connectivity to the cloud
  - Used for PoE power input

## Power Supply Options

The device can be powered by:

- 24 V DC power adapter
- 24 V DC power supply
- 24 V DC passive **PoE** (Power over Ethernet) via the **WAN** port

:::danger
For outdoor installations, the **EMBER Hotspot must be mounted with connectors facing down**.
:::
