---
slug: hardware-description
title: Hardware Description
---
import Image from '@theme/IdealImage';

# Hardware Description


STICKER is a compact IoT device built on the **STM32WL System-on-Chip** with an integrated **LoRa radio** and ARM Cortex-M4F core.  
It is powered by two AA batteries, with battery voltage monitoring and efficient power management (boost converter and LDO).

The device includes **NFC memory and antenna** for simple configuration, even without power (energy harvesting).

It features a rich set of **built-in sensors**:
- Temperature and humidity (SHT43)  
- Light intensity (OPT3001)  
- Atmospheric pressure (MPL3115A2)  
- PIR motion (PYD1698)  
- 3-axis accelerometer (LIS2DH12)  
- Dual Hall-effect door opening detector (A1266)  

For flexibility, there is also:
- **1-Wire bus master** for external sensors  
- **Terminal block for external inputs**  

Device status is indicated by a **multi-color LED (R/G/Y)** and communication is handled via an **internal 868/915 MHz antenna**.

---

## Block Diagram

<div class="container">
  <div class="row">
    <div class="col col--8">
      <div>
        <Image img={require('./block-diagram-sticker.png')} />
      </div>
    </div>
    <div class="col col--24">
    </div>
  </div>
</div>
<br />

---

## Overview

#### Sticker Clime - Enclosure, Mainboard, and Battery Holder

![Sticker Clime](sticker-clime-overview.png)

#### Sticker Input - Enclosure, Mainboard, and Battery Holder

![Sticker Input](sticker-input-overview.png)

#### Sticker Motion - Enclosure, Mainboard, and Battery Holder

![Sticker Motion](sticker-motion-overview.png)

---

## Schematics

### MCU

![Sticker - MCU](hardware-diagrams/mcu.png)

### Antenna

![Sticker - Antenna](hardware-diagrams/antenna.png)

### Sensors

![Sticker - Sensors](hardware-diagrams/sensors.png)

### NFC

![Sticker - NFC](hardware-diagrams/nfc.png)

### NFC Configuration Architecture

![Sticker - NFC Configuration Architecture](sticker-nfc.drawio.png)

### Power

![Sticker - Power](hardware-diagrams/power.png)

---

## Enclosures

| **Parameter**        | **Value**             |
|-----------------------|-----------------------|
| **Enclosure material**| ABS                   |
| **Dimension**         | 91 × 36.5 × 33.3 mm   |

![Sticker - Catalog](sticker.png)