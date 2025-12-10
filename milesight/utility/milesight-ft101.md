---
slug: milesight-ft101
title: FT101
---

import Image from '@theme/IdealImage';

# Milesight Field Tester FT101

Milesight FT101 is a **portable LoRaWAN® network testing device** with a **5.72-inch HD touchscreen** designed for **signal assessment and optimization**. It features an **octa-core processor running Android 12.0**, supports **all standard LoRaWAN® frequency bands**, and provides **up to 8 hours of continuous operation**. The device is ideal for evaluating network quality, identifying optimal deployment locations, and comprehensive **field testing of LoRaWAN networks**.

<div class="container">
  <div class="row">
    <div class="col col--8">
      <div style={{ width: '500px', height: '500px' }}>
        <Image img={require('./ft101.png')} />
      </div>
    </div>
    <div class="col col--24"></div>
  </div>
</div>
<br />

## Integration Links
| Resource        | Link                                                                 |
|-----------------|----------------------------------------------------------------------|
| HARDWARIO Store | https://www.hardwario.store/p/milesight-ft101                        |
| Official page   | https://www.milesight.com/product/accessories/ft101                 |
| User Guide      | https://resource.milesight.com/milesight/iot/document/ft101-user-guide-en.pdf |
| Datasheet       | https://resource.milesight.com/milesight/iot/document/ft101-datasheet-en.pdf |

---

## General configuration

**Overview**
FT101 is a **standalone Android device** with **5.72-inch HD touchscreen** running **Android 12.0**. Configuration and testing is performed through the pre-installed **Field Tester App**.

**Initial Setup**
- Connect to **Wi-Fi** and enable **Location Services** in Android Settings
- Grant location permission to Field Tester App for GPS tracking
- Launch **Field Tester App** and configure **LoRaWAN settings**
- The **AppEUI** (Join EUI) is fixed: **24E124C0002A0001**

**Testing Features**
- Multiple testing modes: signal quality (RSSI/SNR), coverage mapping, noise scanning, ping-pong simulation
- **Mock sensor mode** to simulate different Milesight devices
- Configurable **Tx power**, **reporting interval** (6-60s), **frequency band**, and **spreading factor**
- GPS coordinate recording during field tests
- Test results stored on 64GB internal storage, exportable via USB Type-C

**Additional Capabilities**
- **Milesight ToolBox** can be installed to configure other Milesight sensors via built-in **NFC reader**

---

## LoRaWAN Network Options

For information about supported LoRaWAN network server platforms, see 👉[**LoRaWAN Network Options**](https://docs.hardwario.com/milesight/utility/index#lorawan-network-options)

---

## LoRaWAN configuration
| Parameter        | Value                    |
|------------------|--------------------------|
| LoRaWAN version  | 1.0.3                    |
| Mode             | OTAA / ABP               |
| Sensitivity      | -137 dBm @ 125kHz, SF=12 |
| Tx Power         | 19 dBm (470MHz) / 16 dBm (868MHz) / 22 dBm (915MHz) |

:::info
**DevEUI** (Device Extended Unique Identifier) is unique for each device and can be found printed on the device label.
:::

---

## Power supply
| Type   | Value                                        |
|--------|----------------------------------------------|
| Power  | 4.3V/4300mAh lithium-ion rechargeable battery |
| Charging | 5V ⎓ 2A via USB Type-C                      |
| Active use | ~8 hours continuous operation              |
| Standby | >300 hours (~7 days)                         |

---

## Technical Specifications

| **Parameter** | **Value** |
|---------------|-----------|
| **Wireless Transmission** | |
| Protocol | LoRaWAN® V1.0.3 |
| Antenna | 1× 50Ω SMA female connector (external) |
| Frequency | CN470 / IN865 / EU868 / RU864 / US915 / AU915 / KR920 / AS923-1&2&3&4 |
| Tx Power | 19 dBm (470MHz) / 16 dBm (868MHz) / 22 dBm (915MHz) |
| Sensitivity | -137 dBm @ 125kHz, SF=12 |
| **Connectivity** | |
| Wi-Fi | 802.11 b/g/n (2.4GHz), 802.11 a/n/ac (5GHz) |
| Bluetooth | 4.0 (BLE) |
| GPS/GNSS | GPS / GLONASS / Beidou / Galileo |
| **Display & Interface** | |
| Screen | 5.72" TP LCD Touch Screen, 1440 × 720 resolution |
| Operating System | Android 12.0 |
| Processor | Octa-core MTK6762, 2 GHz |
| Memory | 4GB RAM + 64GB ROM |
| Storage Expansion | microSD up to 256GB |
| **Configuration** | |
| NFC | ISO/IEC 14443A, 1-3 cm reading distance |
| USB | Type-C (USB 3.0) for power and data |
| **Features** | |
| Testing Modes | Signal quality (RSSI/SNR), Coverage mapping, SF analysis, Noise scanning, Ping-pong simulation |
| Geolocation | GPS recording of test points |
| Reports | Comprehensive export capabilities |
| **Physical Characteristics** | |
| Power Supply | 4.3V/4300mAh Li-ion rechargeable |
| Battery Life | ~8 hours active / >300 hours standby |
| Operating Temp | -10°C ~ +50°C |
| Storage Temp | -20°C ~ +60°C |
| Humidity | 95% RH (non-condensing) |
| Ingress Protection | IP65 |
| Dimensions | 178 × 83 × 17 mm |
| Weight | 242 g (without antenna) |
| **Approvals** | CE, FCC, RoHS |
