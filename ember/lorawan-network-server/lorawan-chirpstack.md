---
slug: lorawan-chirpstack
title: ChirpStack v4
---
import Image from '@theme/IdealImage';

# ChirpStack v4

This guide shows how to connect the **HARDWARIO EMBER** LoRaWAN gateway (MikroTik RouterOS) to a **ChirpStack v4** network server.

## Useful docs
- EMBER → ChirpStack: https://docs.hardwario.com/ember/chirpstack/chirpstack-ember/
- EMBER → MikroTik LoRa interface configuration: https://docs.hardwario.com/ember/mikrotik/gateway-configuration/
- EMBER hotspot configuration (RouterOS basics, LoRaWAN section): https://docs.hardwario.com/ember/hotspot-configuration/

## Prerequisites
- Access to the EMBER management interface (**WebFig** or **WinBox**)
- Your ChirpStack gateway endpoint (hostname/IP + UDP ports) — typically the **Gateway Bridge** endpoint
- If you are not using the EMBER Cloud service, point the LoRaWAN server address to **your own** LoRaWAN server (no VPN tunnels needed).

---

## 1) Get the Gateway ID (EUI-64) from EMBER
1. Log into EMBER (WebFig).
2. Navigate to **WebFig → LoRa → Devices**.
3. Click your LoRa card (gateway) and note the **Gateway ID**.
   - You will use this value as **Gateway ID** in ChirpStack.

---

## 2) Point EMBER to your ChirpStack server (RouterOS LoRa settings)
> Important: RouterOS requires the LoRa card to be **Disabled** while you change LoRa settings.

### WebFig method
1. Go to **WebFig → LoRa → Devices** and make sure the LoRa card is **Disabled**.
2. Go to the **Servers** tab → **Add New**.
3. Fill:
   - **Name**: `chirpstack` (any name)
   - **Address**: `<your-chirpstack-gateway-endpoint>`
   - **Up/Down ports**: `<your-udp-ports>`
4. Go back to **Devices** tab → open the LoRa card and set:
   - **Network**: `Public` (or `Private` — must match your end devices)
   - **Network Servers**: select your newly created server
5. Enable the LoRa card (**Enabled**).

### RouterOS CLI example (optional)
```bash
/iot lora servers add name=chirpstack address=<HOST_OR_IP> up-port=<UP_PORT> down-port=<DOWN_PORT> protocol=UDP
/iot lora set 0 servers=chirpstack network=public disabled=no
```

---

## 3) Register EMBER as a gateway in ChirpStack
1. In **ChirpStack v4**, open **Tenant → Gateways**.
2. Click **Add Gateway**.
3. Fill in:
   - **Name**: anything (e.g., `ember-01`)
   - **Gateway ID**: the value from **RouterOS → LoRa → Devices → Gateway ID**
   - **Stats Interval**: your preference
4. Click **Submit**.

---

## 4) Verify gateway traffic
- On EMBER: **WebFig → LoRa → Traffic** should show incoming messages when nearby end devices transmit.
- In ChirpStack: the gateway should show activity (e.g., status/“last seen” updates).

---

## Payload decoder links (for end devices)
EMBER (gateway) forwards packets only — payload decoding is configured **per end device/app** in ChirpStack.

Example decoder (CHESTER Clime):
- Codec folder: https://github.com/hardwario/chester-sdk/tree/main/applications/clime/codec
- ChirpStack JS decoder: https://github.com/hardwario/chester-sdk/blob/main/applications/clime/codec/cs-decoder.js
