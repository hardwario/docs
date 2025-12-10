---
slug: milesight-wt101
title: WT101
---

import Image from '@theme/IdealImage';

# Milesight Sensor WT101

Milesight WT101 is a **smart radiator thermostat** with **LoRaWAN control** for efficient heating management. It integrates a **high-accuracy temperature sensor (±0.5 °C)**, supports **up to 16 heating schedules**, and includes safety features like **open window detection and child lock**.

<div class="container">
  <div class="row">
    <div class="col col--8">
      <div style={{ width: '500px', height: '500px' }}>
        <Image img={require('./wt101-868m.png')} />
      </div>
    </div>
    <div class="col col--24"></div>
  </div>
</div>
<br />

## Integration Links
| Resource        | Link                                                                 |
|-----------------|----------------------------------------------------------------------|
| HARDWARIO Store | https://www.hardwario.store/p/milesight-wt101                        |
| Official page   | https://www.milesight.com/iot/product/lorawan-sensor/wt101           |
| User Guide      | https://resource.milesight.com/milesight/iot/document/wt101-user-guide-en.pdf |
| Datasheet       | https://resource.milesight.com/milesight/iot/document/wt101-datasheet-en.pdf |

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

:::info DevEUI
**DevEUI** (Device Extended Unique Identifier) is unique for each device and can be found printed on the device label.
:::

---

## Data Encoding & Decoding

| Type | GitHub Link |
|------|--------------|
| Decoder | [View decoder](https://github.com/Milesight-IoT/SensorDecoders/blob/main/wt-series/wt101/wt101-decoder.js) |
| Encoder | [View encoder](https://github.com/Milesight-IoT/SensorDecoders/blob/main/wt-series/wt101/wt101-encoder.js) |
| Codec | [View codec](https://github.com/Milesight-IoT/SensorDecoders/blob/main/wt-series/wt101/wt101-codec.json) |

:::info 
### Terminology Overview
**Decoder** -> Converts the device’s binary payload into readable JSON.<br />
**Encoder** -> Converts JSON commands into binary payload for downlinks.<br />
**Codec** -> Defines the rules for decoding and encoding (structure, fields, ports) used by network servers.
:::

---

## Power supply
| Type   | Value          |
|--------|----------------|
| Power  | CR2450 battery |

---

## Technical Specifications

| **Parameter** | **Value** |
|---------------|-----------|
| **Wireless Transmission** | |
| Protocol | LoRaWAN® |
| Frequency | IN865 / RU864 / EU868 |
| Tx Power | 16 dBm (868 MHz) |
| Sensitivity | -137 dBm |
| Mode | OTAA / ABP Class A |
| **Valve Control** | |
| Actuator | Stepping Motor |
| Default Fitting | M30 × 1.5 mm |
| Optional Adapters | RA, RAV, RAVL, Giacomini, M28 (Comap, Herz, TA) |
| Advanced Features | Auto temperature control, Heat plans, Freeze protection, Open-window detection, Tamper alarm |
| **Temperature Sensor** | |
| Type | NTC |
| Range | -20°C ~ +60°C |
| Accuracy | ±0.5°C (0–50°C) |
| Resolution | 0.1°C |
| **Others** | |
| Display | LED display (white light) |
| Buttons | Control knob, Calibration/Tamper (internal), Reset (internal) |
| Software | NFC App / Downlink |
| Advanced Features | Child lock, External sensor mode, FUOTA |
| **Physical Characteristics** | |
| Power Supply | 2 × AA Li-FeS2 (3000 mAh total) |
| Battery Life | ~5–8 years (depending on SF) |
| Operating Temp | -20°C ~ +60°C |
| Storage Temp | -40°C ~ +70°C (without battery) |
| Humidity | 0–95% RH (non-condensing) |
| Ingress Protection | IP30 |
| Dimensions | Φ52 × 90 mm |
| Weight | 170 g (with batteries) |
| Material | Stainless + ABS, White |
| Installation | Valve latch |
| **Approvals** | CE, RoHS |

