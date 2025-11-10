---
slug: milesight-ug63
title: UG63
---

import Image from '@theme/IdealImage';

# Milesight Gateway UG63-868M

Milesight UG63 is a **compact LoRaWAN® gateway** designed for **small-scale deployments** with **8-channel support** and up to **2000 end-nodes**. It provides **Ethernet and 4G LTE backhaul**, easy **Wi-Fi configuration**, and ensures **cost-effective network coverage**.  

<div class="container">
  <div class="row">
    <div class="col col--8">
      <div style={{ width: '500px', height: '500px' }}>
        <Image img={require('./ug63-868m.png')} />
      </div>
    </div>
    <div class="col col--24"></div>
  </div>
</div>
<br />

## Power supply / connectivity
| Type        | Value                                   |
|-------------|-----------------------------------------|
| Power       | USB-C                                   |
| Wi-Fi       | Connect to the SSID shown on the device label |
| Access URL  | http://192.168.1.1                      |
| Login       | admin / password                        |

## Network configuration
- By default, the gateway provides a Wi-Fi network for initial setup.  
- Log in via browser at `192.168.1.1` (admin / password).  
- In **WAN settings**, select either **DHCP client** (automatic IP) or **Static IP** (manual configuration).  
- If DHCP is used, the assigned IP address can be found under *Status → Ethernet*.  
- It is recommended to **disable WLAN** after setup: *Settings → WLAN → Enable = false*.  

## Packet forwarding
The gateway supports several options for packet forwarding:  

- **Embedded NS** – simple built-in network server.  
- **Chirpstack v4** – connect to a local Chirpstack server.  
- **The Things Stack** – connect to The Things Industries cloud service.  

## LNS & CUPS
For secure connection to The Things Industries:  
- **LNS URI:** `wss://hardwario-com.eu1.cloud.thethings.industries:8887`  
- **CUPS URI:** `https://hardwario-com.eu1.cloud.thethings.industries:443`  
- Download the CA file from the [TTI root certificates](https://www.thethingsindustries.com/docs/concepts/advanced/root-certificates/) page.  
- Upload the client key files (`tc.key`, `cups.key`) generated in your TTI account.  


## Technical Specifications

| **Parameter** | **Value** |
|---------------|-----------|
| **Hardware System** | |
| CPU | Dual-core 240 MHz, 32-bit Xtensa® LX7 |
| Memory | 8 MB PSRAM |
| Flash | 16 MB |
| **LoRaWAN®** | |
| Channels | 8 (half-duplex) |
| Antenna | 1 × External |
| Frequency | CN470 / IN865 / EU868 / RU864 / US915 / AU915 / KR920 / AS923-1&2&3&4 |
| Tx Power | Max. 27 dBm |
| Sensitivity | -140 dBm @292bps |
| Protocol | V1.0.3 Class A/C |
| Supported Devices | ~2000 |
| Advanced Features | Packet filter, Retransmission |
| **Interfaces** | |
| Ethernet | 1 × RJ45 (10/100 Mbps, Auto) |
| Cellular (opt.) | 4G LTE Cat1/GSM |
| Wi-Fi | 802.11 b/g/n (2.4 GHz, AP mode) |
| USB | 1 × USB-C (power/console) |
| Buttons | Reset |
| LED | System, LTE |
| **Network** | HTTP(S), MQTT, VPN, OpenVPN client |
| Config/Update | Web, API, DeviceHub |
| **Power** | |
| Supply | 5V/2A (USB-C) / 5–12V DC / PoE splitter |
| Consumption | 1.3 W typ., 3.1 W max |
| **Physical Characteristics** | |
| Dimensions | Ø115 × 21 mm (excl. antenna) |
| Weight | 140 g (non-cellular), 158 g (cellular) |
| Housing | PC+ABS, White |
| Ingress Protection | IP30 |
| Installation | Desktop / Wall / Ceiling |
| Operating Temp | -20°C ~ +50°C |
| Humidity | 0–95% RH (non-cond.) |
| **Approvals** | CE, FCC |

## Integration resources
| Resource        | Link                                                                 |
|-----------------|----------------------------------------------------------------------|
| Official page   | https://www.milesight.com/iot/product/lorawan-gateway/ug63           |