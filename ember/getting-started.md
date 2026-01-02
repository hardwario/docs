---
slug: getting-started
title: Getting Started
---
import Image from '@theme/IdealImage';

# EMBER Quick Start Guide

Welcome! This page helps you **power up (revive)** your HARDWARIO **EMBER** and choose what to do next:
- run a **managed LoRaWAN backend** via **EMBER Cloud Service** (ChirpStack + Node-RED),
- connect EMBER to your own **ChirpStack**,
- connect EMBER to **The Things Stack (TTS)**,
- or forward packets to **your own LoRaWAN Network Server**,
and then pass data to dashboards such as **Ubidots** or **ThingsBoard**.

Official documentation:
- https://docs.hardwario.com/ember/

---

## Before you start

#### What EMBER is 
EMBER is an industrial **LoRaWAN gateway (IoT Hotspot)** based on **MikroTik RBM33G**, designed for outdoor deployments (IP67 enclosure).  
Hardware description: https://docs.hardwario.com/ember/hardware-description/

#### You will need
- EMBER gateway (Hotspot)
- **LoRaWAN antenna** (required)
- Power source:
  - 24 V DC adapter / 24 V DC power supply, or
  - 24 V DC passive PoE via the **WAN** port
- Internet connectivity (WAN and/or LTE, depending on your setup)
- A LoRaWAN backend (EMBER Cloud Service / ChirpStack / TTS / other)
- (Optional) A dashboard platform (Ubidots / ThingsBoard)

#### Quick links
- EMBER product page (datasheet + overview): https://www.hardwario.com/ember
- Hotspot configuration (LAN IP, login, RouterOS script): https://docs.hardwario.com/ember/hotspot-configuration/
- EMBER Cloud Service (managed ChirpStack + Node-RED): https://docs.hardwario.com/ember/cloud-service/

---

## 1) “Revive” EMBER

#### 1.1 Attach antennas (important)
- **Attach the LoRaWAN antenna before powering on.**
- If your unit includes LTE, it may use **two LTE antennas** (internal/external depending on configuration).

More details: https://docs.hardwario.com/ember/hardware-description/#antennas

#### 1.2 Power the gateway
EMBER can be powered by:
- **24 V DC power adapter**
- **24 V DC power supply**
- **24 V DC passive PoE** through the **WAN Ethernet port**

More details: https://docs.hardwario.com/ember/hardware-description/#power-supply-options

#### 1.3 Outdoor mounting safety note
:::danger

For outdoor installations, **EMBER Hotspot** has to be mounted with connectors facing down.

:::

---

## 2) Connect for local access

EMBER runs **MikroTik RouterOS**.  
For initial access and management, use the LAN interface and standard RouterOS tools.

**Main documentation (recommended start):**
- EMBER Hotspot configuration & local access:  
  https://docs.hardwario.com/ember/hotspot-configuration/

Additional references:
- MikroTik RouterOS overview:  
  https://help.mikrotik.com/docs/spaces/ROS/pages/328059/RouterOS
- WebFig (browser management):  
  https://help.mikrotik.com/docs/spaces/ROS/pages/328131/WebFig

---

## 3) Optional: update RouterOS

Use this section if you need to update or align the RouterOS version on EMBER.

**Main documentation (HARDWARIO):**
- RouterOS update on EMBER (WebFig workflow):  
  https://docs.hardwario.com/ember/mikrotik/gateway-update/

Additional references:
- MikroTik downloads (RouterOS / WinBox):  
  https://mikrotik.com/download


---

## 4) Choose your LoRaWAN backend 

At a high level:
**LoRaWAN devices → EMBER (gateway) → LoRaWAN Network Server → Integrations → Dashboards / Apps**

### EMBER Cloud Service (managed backend)

**EMBER Cloud Service** is a fully managed LoRaWAN backend operated by HARDWARIO.  
It is designed for a fast start without the need to run your own infrastructure.

What the service typically provides:
- **ChirpStack** – LoRaWAN Network Server  
- **Node-RED** – data processing, payload decoding, and forwarding  
- Preconfigured connectivity between the gateway, LNS, and integrations

👉 Recommended if you want to **get data from devices quickly** and forward it to applications or dashboards.

#### Key links
- Service overview and concept:  
  **https://docs.hardwario.com/ember/cloud-service/**

- EMBER Cloud web portal (service management):  
  https://docs.hardwario.com/ember/cloud-service/#web-management

- ChirpStack in EMBER Cloud Service:  
  https://docs.hardwario.com/ember/cloud-service/#chirpstack-lorawan-server

- Node-RED in EMBER Cloud Service:  
  https://docs.hardwario.com/ember/cloud-service/#node-red-application

---

### ChirpStack (self-hosted)

**Main documentation (recommended start):**
- ChirpStack (LoRaWAN Network Server overview):  
  **https://docs.hardwario.com/ember/lorawan-network-server/lorawan-chirpstack**

Additional resources:
- Add EMBER gateway to ChirpStack v4 (HARDWARIO tutorial):  
  https://docs.hardwario.com/ember/chirpstack/chirpstack-ember/

- (Optional) Install ChirpStack v4 (Debian/Ubuntu):  
  https://docs.hardwario.com/ember/chirpstack-v4-installation/

- Official ChirpStack docs (gateway connectivity):  
  https://www.chirpstack.io/docs/guides/connect-gateway.html

---

### The Things Stack

**Main documentation (recommended start):**
- The Things Stack (LoRaWAN Network Server overview):  
  **https://docs.hardwario.com/ember/lorawan-network-server/lorawan-tts**

Additional resources:
- TTS documentation home:  
  https://www.thethingsindustries.com/docs/

Protocol note:
- Many gateways use **Semtech UDP Packet Forwarder**, but it has known security and scalability drawbacks.  
  TTS recommends **LoRa Basics™ Station** when possible.

Reference:
- Semtech UDP Packet Forwarder concept:  
  https://www.thethingsindustries.com/docs/hardware/gateways/concepts/udp/

---

### Self-Hosted LoRaWAN Server
If you already run another LoRaWAN server, you can set EMBER to forward packets to your server.

Key note from the official Hotspot Configuration:
- If you **do not use EMBER Cloud service**, use **your LoRaWAN server IP address**
  and you **don’t need to configure VPN tunnels**.

Reference: https://docs.hardwario.com/ember/hotspot-configuration/

---

## 5) Dashboards & visualization

Once your LoRaWAN server receives uplinks, you typically:
1) decode payload → 2) transform to JSON/telemetry → 3) send to a dashboard via HTTP/MQTT.

If you use **EMBER Cloud Service**, **Node-RED** is usually the fastest way to transform and forward data.

### Ubidots

**Main documentation (HARDWARIO):**
- Ubidots integration overview:  
  **https://docs.hardwario.com/apps/ubidots/index**

Additional resources:
- Ubidots home:  
  https://ubidots.com/
- Ubidots documentation:  
  https://ubidots.com/docs/


- HARDWARIO-hosted Ubidots instance (if applicable):  
  https://ubidots.hardwario.com/

---

### ThingsBoard

**Main documentation (HARDWARIO):**
- ThingsBoard integration overview:  
  **https://docs.hardwario.com/apps/thingsboard/index**

Additional resources:
- ThingsBoard home:  
  https://thingsboard.io/
- ThingsBoard documentation:  
  https://thingsboard.io/docs/

- HARDWARIO-hosted ThingsBoard instance (if applicable):  
  https://thingsboard.hardwario.com/


---

## 6) “Day 1” validation checklist

- [ ] LoRaWAN antenna attached (required)
- [ ] Power connected (24 V DC or 24 V passive PoE via WAN)
- [ ] Outdoor installation: connectors facing down
- [ ] PC connected to **LAN**, receives DHCP lease, can reach `172.31.255.254`
- [ ] RouterOS login works (`admin` / `ember`)
- [ ] Gateway is configured to your backend (EMBER Cloud / ChirpStack / TTS / other)
- [ ] In the LoRaWAN server UI, gateway status shows **Last seen / connected**
- [ ] You can see uplinks from at least one LoRaWAN device

---

## Troubleshooting (quick)

#### Can’t reach `172.31.255.254`
- Make sure you are plugged into the **LAN** port (not WAN).
- Ensure your PC is set to DHCP (or set a static IP in `172.31.255.0/24`).
- Check the Ethernet link LEDs.

#### Gateway is powered, but not “seen” in the LoRaWAN server
- Confirm the gateway’s forwarding destination (server address / ports / protocol).
- Verify WAN/LTE Internet connectivity.
- If using EMBER Cloud, confirm you are using the provided service URL and correct configuration guidance.

#### Want to understand the baseline RouterOS configuration
- The reference configuration is documented here:  
  https://docs.hardwario.com/ember/hotspot-configuration/
