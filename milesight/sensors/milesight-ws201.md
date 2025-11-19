---
slug: milesight-ws201
title: WS201
---

import Image from '@theme/IdealImage';

# Milesight Sensor WS201

Milesight WS201 is a **wireless fill level monitoring sensor** using **ToF (Time-of-Flight) technology** for high accuracy. It supports **LoRaWAN connectivity** with remote management in the Milesight IoT Cloud, operates for **up to 2 years on a coin cell battery**, and is ideal for **public facility maintenance**

<div class="container">
  <div class="row">
    <div class="col col--8">
      <div style={{ width: '500px', height: '500px' }}>
        <Image img={require('./ws201-868m.png')} />
      </div>
    </div>
    <div class="col col--24"></div>
  </div>
</div>
<br />

## Integration Links
| Resource        | Link                                                                 |
|-----------------|----------------------------------------------------------------------|
| HARDWARIO Store | Not yet available                                                     |
| Official page   | https://www.milesight.com/iot/product/lorawan-sensor/ws201           |
| User Guide      | https://resource.milesight.com/milesight/iot/document/ws201-user-guide-en.pdf |
| Datasheet       | https://resource.milesight.com/milesight/iot/document/ws201-datasheet-en.pdf |

---

## General configuration
Configuration is done via NFC using the [Milesight ToolBox app](/milesight/sensors/index#qr-code--milesight-toolbox).

For sensor configuration instructions, see 👉 [**General configuration**](/milesight/sensors/index/#general-configuration).

---

## LoRaWAN Network Options

For information about supported LoRaWAN network server platforms, see 👉[**LoRaWAN Network Options**](https://docs.hardwario.com/milesight/sensors/index#lorawan-network-options)

---

## LoRaWAN configuration
| Parameter        | Value                    |
|------------------|--------------------------|
| Join type        | OTAA                     |
| AppEUI/JoinEUI   | 24E124C0002A0001         |
| AppKey           | 5572404C696E6B4C6F52613230313823 |

---

## Data Encoding & Decoding

| Type | GitHub Link |
|------|--------------|
| Decoder | [View decoder](https://github.com/Milesight-IoT/SensorDecoders/blob/main/ws-series/ws201/ws201-decoder.js) |
| Encoder | [View encoder](https://github.com/Milesight-IoT/SensorDecoders/blob/main/ws-series/ws201/ws201-encoder.js) |
| Codec | [View codec](https://github.com/Milesight-IoT/SensorDecoders/blob/main/ws-series/ws201/ws201-codec.json) |

---

## Power supply
| Type   | Value           |
|--------|-----------------|
| Power  | 2× AA batteries |

---

## Technical Specifications

| **Parameter** | **Value** |
|---------------|-----------|
| **Wireless Transmission** | |
| Protocol | LoRaWAN® |
| Antenna | Internal |
| Frequency | CN470 / IN865 / RU864 / EU868 / US915 / AU915 / KR920 / AS923-1&2&3&4 |
| Tx Power | 16 dBm (868MHz) / 22 dBm (915MHz) / 19 dBm (470MHz) |
| Sensitivity | -132 dBm @300bps |
| Mode | OTAA / ABP Class A |
| **Distance Measurement** | |
| Principle | Time-of-Flight (ToF) |
| Range | 1–55 cm |
| Accuracy | ±1 cm |
| Resolution | 1–3 mm (depending on distance) |
| FoV | 25°, Accuracy ±5° |
| **Others** | |
| Button | Reset (internal) |
| LED | Indicator (internal) |
| Configuration | NFC App / Downlink |
| Advanced Features | Threshold alarm, Hibernate mode |
| **Physical Characteristics** | |
| Power Supply | 1 × CR2450 (590 mAh) |
| Battery Life | ~2–3 years (depending on SF & region) |
| Operating Temp | -10°C ~ +60°C |
| Humidity | 0–95% RH (non-condensing) |
| Ingress Protection | IP30 |
| Dimensions | 66 × 38 × 12 mm |
| Weight | 24.7 g (incl. battery) |
| Material | ABS+PC (flame retardant), White |
| Installation | 3M tape |
| **Approvals** | CE, FCC, RoHS |

