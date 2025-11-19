---
slug: milesight-gs601
title: GS601
---

import Image from '@theme/IdealImage';

# Milesight Sensor GS601

Milesight GS601 is a **ceiling-mounted vape and smoke detector** designed for **smoke-free environments** including schools, apartments, hotels, and stairwells. It uses **laser scattering technology** to detect e-cigarettes, traditional cigarettes, and marijuana with **high accuracy**, while also monitoring **temperature**, **humidity**, **particulate matter** (PM1.0/2.5/10), and **TVOC**. The sensor features **anti-tamper protection**, **real-time alerts** via buzzer (70 dB) and LED indicators, **IP30 rating**, and **LoRaWAN Class C** connectivity for comprehensive air quality monitoring and enforcement.

<div class="container">
  <div class="row">
    <div class="col col--8">
      <div style={{ width: '500px', height: '500px' }}>
        <Image img={require('./gs601.png')} />
      </div>
    </div>
    <div class="col col--24"></div>
  </div>
</div>
<br />

## Integration Links
| Resource        | Link                                                                 |
|-----------------|----------------------------------------------------------------------|
| HARDWARIO Store | https://www.hardwario.store/p/milesight-gs601                        |
| Official page   | https://www.milesight.com/iot/product/lorawan-sensor/gs601           |
| User Guide      | https://resource.milesight.com/milesight/iot/document/gs601-user-guide-en.pdf |
| Datasheet       | https://resource.milesight.com/milesight/iot/document/gs601-datasheet-en.pdf |

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
| Work mode        | Class C                  |
| Join type        | OTAA                     |
| AppEUI/JoinEUI   | 24E124C0002A0001         |
| AppKey           | 5572404C696E6B4C6F52613230313823 |

---

## Data Encoding & Decoding

| Type | GitHub Link |
|------|--------------|
| Decoder | [View decoder](https://github.com/Milesight-IoT/SensorDecoders/blob/main/gs-series/gs601/gs601-decoder.js) |
| Encoder | [View encoder](https://github.com/Milesight-IoT/SensorDecoders/blob/main/gs-series/gs601/gs601-encoder.js) |
| Codec | [View codec](https://github.com/Milesight-IoT/SensorDecoders/blob/main/gs-series/gs601/gs601-codec.json) |

---

## Power supply
| Type   | Value                          |
|--------|--------------------------------|
| Power  | 5V/1A USB Type-C or PoE Splitter |

---

## Technical Specifications

| **Parameter** | **Value** |
|---------------|-----------|
| **Wireless Transmission** | |
| Technology | LoRaWAN® |
| Antenna | Internal |
| Frequency | RU864 / IN865 / EU868 / US915 / AU915 / KR920 / AS923-1&2&3&4 |
| Tx Power | 16 dBm (868MHz) / 22 dBm (915MHz) |
| Sensitivity | -137 dBm @300bps |
| Mode | OTAA / ABP Class C |
| **Vape/Smoke Detection** | |
| Technology | Laser scattering |
| Detection Range | 0-100 (scale) |
| Accuracy | ±10 |
| Detection Capability | E-cigarettes, traditional cigarettes, marijuana |
| **Environmental Sensors** | |
| Temperature | -20°C ~ +60°C, Accuracy ±0.2°C |
| Humidity | 0% ~ 100% RH, Accuracy ±2% |
| Particulate Matter | PM1.0, PM2.5, PM10 (0-1000 μg/m³) |
| TVOC | 0-2000 μg/m³ |
| **Alerts & Indicators** | |
| Buzzer | Yes, 70 dB |
| LED Indicators | Visual status alerts |
| Tamper Detection | Vibration sensor |
| Flame Alarm | Temperature-based (20-60°C monitoring) |
| **Features** | |
| Configuration | NFC / Downlink |
| Advanced Features | Anti-tamper, adjustable buzzer, FUOTA |
| Water/Gas Resistance | Resilient against false alarms |
| **Physical Characteristics** | |
| Power Supply | 5V/1A USB Type-C or PoE Splitter |
| Operating Temp | -5°C ~ +45°C |
| Humidity | 0%–95% RH (non-condensing) |
| Ingress Protection | IP30 |
| Dimensions | Ø128 × 40 mm |
| Weight | 178.6 g |
| Material | ABS+PC |
| Installation | Ceiling mount (3M adhesive, 2.7-3m height) |
| **Approvals** | CE, FCC, RoHS |
