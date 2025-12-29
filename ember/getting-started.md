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
- ChirpStack: https://www.chirpstack.io/
- The Things Stack (TTS): https://www.thethingsindustries.com/docs/
- Ubidots: https://ubidots.com/
- ThingsBoard: https://thingsboard.io/

---

## 1) “Revive” EMBER

#### 1.1 Attach antennas (important)
- **Attach the LoRaWAN antenna before powering on.**
- If your unit includes LTE, it may use **two LTE antennas** (internal/external depending on configuration).

More details: https://docs.hardwario.com/ember/hardware-description/

#### 1.2 Power the gateway
EMBER can be powered by:
- **24 V DC power adapter**
- **24 V DC power supply**
- **24 V DC passive PoE** through the **WAN Ethernet port**

More details: https://docs.hardwario.com/ember/hardware-description/

#### 1.3 Outdoor mounting safety note
For outdoor installations, mount EMBER with **connectors facing down**.  
https://docs.hardwario.com/ember/hardware-description/

---

## 2) Connect for local access

EMBER runs **MikroTik RouterOS**. The easiest “day 1” workflow is to plug into LAN and open WebFig.

#### 2.1 Plug your PC into the LAN port
Default management network:
- **LAN IP (gateway):** `172.31.255.254`
- LAN is **non-routed** and provides **DHCP server** functionality.

Hotspot configuration reference: https://docs.hardwario.com/ember/hotspot-configuration/

#### 2.2 Log in to RouterOS
Default login credentials:
- **Username:** `admin`
- **Password:** `ember`

Management options:
- SSH
- WinBox (desktop)
- WebFig (browser)
- RouterOS API

Reference: https://docs.hardwario.com/ember/hotspot-configuration/

> Recommended: after onboarding, change credentials and review access rules according to your security policy.

---

## 3) Optional: update RouterOS 

If you need a controlled, up-to-date baseline:
- HARDWARIO guide (WebFig → System → Packages): https://docs.hardwario.com/ember/mikrotik/gateway-update/

Official MikroTik docs:
- RouterOS Manual: https://help.mikrotik.com/docs/spaces/ROS/pages/328059/RouterOS
- WebFig overview: https://help.mikrotik.com/docs/spaces/ROS/pages/328131/WebFig
- MikroTik downloads (WinBox / RouterOS): https://mikrotik.com/download

---

## 4) Choose your LoRaWAN backend 

At a high level:
**LoRaWAN devices → EMBER (gateway) → LoRaWAN Network Server → Integrations → Dashboards / Apps**

#### Path A — EMBER Cloud Service (managed ChirpStack + Node-RED)
This is the fastest path if you want a ready-to-use backend operated for you.

Docs: https://docs.hardwario.com/ember/cloud-service/

#### How to access the web management
Login URL format:
- `https://<customer identifier>-<service index>.ember.hardwario.cloud/`

Inside the portal, services are typically labeled:
- `cs` = ChirpStack
- `nr` = Node-RED

#### ChirpStack access (EMBER Cloud Service)
ChirpStack URL format:
- `https://ember-<customer identifier>-<service index>-cs.tp.hardwario.com/`

Default ChirpStack credentials (as documented):
- Username: `admin`
- Password: `admin`

Docs: https://docs.hardwario.com/ember/cloud-service/

#### Node-RED access (EMBER Cloud Service)
Node-RED URL format:
- `https://ember-<customer identifier>-<service index>-nr.tp.hardwario.com/`

Data is delivered to Node-RED using MQTT (Mosquitto) at:
- `localhost:1883`

Default uplink topic:
- `application/+/device/+/event/up`

Docs: https://docs.hardwario.com/ember/cloud-service/

> Practical tip: Decoding payloads in Node-RED is often more flexible than decoding directly in ChirpStack.

---

#### Path B — Your own ChirpStack (self-hosted)
Use this path when you operate your own LoRaWAN infrastructure.

Start here:
- Add EMBER gateway to ChirpStack v4 (HARDWARIO tutorial):  
  https://docs.hardwario.com/ember/chirpstack/chirpstack-ember/

(Optional) Install ChirpStack v4 (Debian/Ubuntu guide):
- https://docs.hardwario.com/ember/chirpstack-v4-installation/

Official ChirpStack docs (gateway connectivity):
- https://www.chirpstack.io/docs/guides/connect-gateway.html

---

#### Path C — The Things Stack (TTS)
Use this path when you want to connect EMBER to TTS/TTN-style deployments.

TTS docs home:
- https://www.thethingsindustries.com/docs/

Protocol note:
- Many gateways use **Semtech UDP Packet Forwarder**, but it has known security/scalability drawbacks.
  TTS recommends **LoRa Basics™ Station** when possible.

Reference (Semtech UDP concept page):
- https://www.thethingsindustries.com/docs/hardware/gateways/concepts/udp/

---

#### Path D — Your own LoRaWAN Network Server / custom forwarding
If you already run another LoRaWAN server, you can set EMBER to forward packets to your server.

Key note from the official Hotspot Configuration:
- If you **do not use EMBER Cloud service**, use **your LoRaWAN server IP address**
  and you **don’t need to configure VPN tunnels**.

Reference: https://docs.hardwario.com/ember/hotspot-configuration/

---

## 5) Dashboards & visualization 

Once your LoRaWAN server receives uplinks, you typically:
1) decode payload → 2) transform to JSON/telemetry → 3) send to dashboard via HTTP/MQTT.

If you use **EMBER Cloud Service**, Node-RED is usually the fastest way to transform and forward data.

#### Option 1 — Ubidots
Official links:
- Ubidots home: https://ubidots.com/
- Ubidots docs: https://ubidots.com/docs/

HARDWARIO example page (creating a device):
- https://docs.hardwario.com/apps/ubidots/creating-device/

If your deployment uses the HARDWARIO-hosted Ubidots instance:
- https://ubidots.hardwario.com/

#### Option 2 — ThingsBoard
Official links:
- ThingsBoard home: https://thingsboard.io/
- ThingsBoard docs: https://thingsboard.io/docs/

If your deployment uses the HARDWARIO-hosted ThingsBoard instance:
- https://thingsboard.hardwario.com/

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
