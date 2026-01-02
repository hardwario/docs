---
slug: lorawan-tts
title: The Things Stack
---
import Image from '@theme/IdealImage';

# The Things Stack

This guide shows how to connect the **HARDWARIO EMBER** LoRaWAN gateway (MikroTik RouterOS) to **The Things Stack (TTS)**.

## Useful docs
- TTS gateway registration: https://docs.hardwario.com/apps/the-things-stack/tts-configuration/tts-gateways/
- MikroTik RouterOS + TTS (UDP / LNS / CUPS): https://help.mikrotik.com/docs/spaces/ROS/pages/67633276/The%2BThings%2BStack
- EMBER hotspot configuration (RouterOS basics): https://docs.hardwario.com/ember/hotspot-configuration/
- EMBER MikroTik LoRa interface basics: https://docs.hardwario.com/ember/mikrotik/gateway-configuration/

## Prerequisites
- Access to the EMBER management interface (**WebFig** or **WinBox**)
- A TTS account with permissions to create gateways
- If you are not using the EMBER Cloud service, point the LoRaWAN server address to **your own** LoRaWAN server (no VPN tunnels needed).

---

## 1) Get the Gateway EUI (EUI-64)
On MikroTik RouterOS, the gateway EUI is shown as **Gateway ID**:

- **IoT → LoRa → Devices → Gateway ID**

---

## 2) Register the gateway in The Things Stack
1. In TTS Console, click **Register gateway**.
2. Enter the **Gateway EUI** (use RouterOS **Gateway ID**).
3. Fill the gateway details:
   - **Gateway ID**
   - **Gateway Name**
   - **Frequency plan** (choose the one matching your region/hardware; e.g., Europe 868.1 MHz)
4. Enable **Require authenticated connection**.
5. Enable both:
   - **Generate API key for CUPS**
   - **Generate API key for LNS**
6. Click **Register gateway** and **download both API keys** (CUPS + LNS).

---

## 3) Configure EMBER (MikroTik RouterOS) to connect to TTS (recommended: LNS + CUPS)
> RouterOS typically requires the LoRa card to be **Disabled** while you change LoRa settings.

You’ll use the downloaded keys in RouterOS.

### LNS (LoRa Basics Station)
- Protocol: **LNS**
- Port: **8887**
- Set the **LoRa Basics Station LNS authentication Key** to the LNS key
- Enable **SSL/TLS**

### CUPS (Configuration & Update Server)
- Protocol: **CUPS**
- Port: **443**
- Set the CUPS key (from the downloaded `cups.key` file)
- Enable **SSL/TLS**

### Root certificates (required for SSL/TLS)

To establish a secure TLS connection to **The Things Stack (LNS / CUPS)**, import the official **The Things Stack Root CA certificates** into RouterOS and mark them as **trusted**.

- Download the certificates from:  
  https://www.thethingsindustries.com/docs/reference/root-certificates/
- Import them in RouterOS (**Files → Import Certificate**) and set them as trusted.


---

## 4) Enable and verify
1. In RouterOS: **IoT → LoRa → Devices → Enable**
2. In TTS Console, open the gateway and confirm **Live data** updates.

---

## Payload decoder links (for end devices)
Decoders are configured per **end device/application** in TTS (Payload Formatter).

Example decoder (CHESTER Clime):
- Codec folder: https://github.com/hardwario/chester-sdk/tree/main/applications/clime/codec
- JS decoder reference: https://github.com/hardwario/chester-sdk/blob/main/applications/clime/codec/cs-decoder.js
