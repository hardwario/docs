---
slug: milesight-vs373
title: VS373
---

import Image from '@theme/IdealImage';

# Milesight Sensor VS373

Milesight VS373 is a **non-contact fall detection sensor** designed for **elderly care and healthcare facilities**. It employs advanced **4D 60-GHz millimeter-wave radar technology** combined with **AI algorithms** to detect falls and abnormal movements with **up to 99% accuracy**. The sensor provides **24/7 monitoring** in dark and humid environments, offers **complete privacy protection** without image capture, and features **IP65 waterproof rating**. It supports multiple detection functions including bed presence, room occupancy, motionless detection, and breathing monitoring.

<div class="container">
  <div class="row">
    <div class="col col--8">
      <div style={{ width: '500px', height: '500px' }}>
        <Image img={require('./vs373.png')} />
      </div>
    </div>
    <div class="col col--24"></div>
  </div>
</div>
<br />

## Integration Links
| Resource        | Link                                                                 |
|-----------------|----------------------------------------------------------------------|
| HARDWARIO Store | https://www.hardwario.store/p/milesight-vs373                        |
| Official page   | https://www.milesight.com/iot/product/lorawan-sensor/vs373           |
| User Guide      | https://resource.milesight.com/milesight/iot/document/vs373-user-guide-en.pdf |
| Datasheet       | https://resource.milesight.com/milesight/iot/document/vs373-datasheet-en.pdf |

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
| Decoder | [View decoder](https://github.com/Milesight-IoT/SensorDecoders/blob/main/vs-series/vs373/vs373-decoder.js) |
| Encoder | [View encoder](https://github.com/Milesight-IoT/SensorDecoders/blob/main/vs-series/vs373/vs373-encoder.js) |
| Codec | [View codec](https://github.com/Milesight-IoT/SensorDecoders/blob/main/vs-series/vs373/vs373-codec.json) |

---

## Power supply
| Type   | Value                      |
|--------|----------------------------|
| Power  | DC 5V/3A via USB Type-C    |

---

## Technical Specifications

| **Parameter** | **Value** |
|---------------|-----------|
| **Wireless Transmission** | |
| Technology | LoRaWAN®, Milesight D2D, Wi-Fi 2.4 GHz |
| Antenna | Internal |
| Frequency | CN470 / IN865 / RU864 / EU868 / US915 / AU915 / KR920 / AS923-1&2&3&4 |
| Tx Power | 16 dBm (868MHz) / 22 dBm (915MHz) / 19 dBm (470MHz) |
| Sensitivity | -137 dBm @300bps |
| Mode | OTAA / ABP Class C |
| **Radar Detection** | |
| Technology | 4D 60-GHz mmWave Radar |
| Transceiver | 24 transmitters, 22 receivers |
| Field of View | 70° H × 140° V |
| Detection Range | 2m×2m to 4m×5m (within 2.3-3m height) |
| Fall Detection Accuracy | Up to 99% |
| **Detection Functions** | |
| Primary Features | Fall detection, bed presence, room occupancy |
| Advanced Features | Motionless detection, breathing detection, bed exit alerts |
| **Interfaces** | |
| Digital Output | 1× (60V/1A) |
| Buttons | 1× Reset, 1× Multi-function |
| Indicators | Multi-color LED, Buzzer |
| Configuration | NFC / Downlink |
| **Physical Characteristics** | |
| Power Supply | DC 5V/3A (USB Type-C) |
| Power Consumption | Max 9.5W |
| Operating Temp | 0°C ~ +50°C |
| Humidity | 0%–95% RH (non-condensing) |
| Ingress Protection | IP65 |
| Dimensions | 114 × 84 × 15 mm |
| Weight | 214.5 g |
| Material | ABS+PC |
| Installation | Wall or ceiling mount |
| **Approvals** | CE, FCC |
