---
slug: sticker-input-configuration
title: STICKER Input Configuration
---
import Image from '@theme/IdealImage';

# STICKER Input Configuration

## DIP Switch Legend

- 🔴 = DIP switch ON [RED]
- ⚫ = DIP switch OFF [BLACK]

## 1-Wire Input
Wiring for 1-WIRE (Dallas, ...):
- DIP switches enable the data lines (DQ1/DQ2).

![STICKER 1-Wire](STICKER-1W.png)

---

## Dry Contact Input
Wiring for DRY CONTACT:  
- 560 kΩ pull-up and grounded through 33 kΩ.  

![STICKER Dry Contact](STICKER-DRY-CONTACT.png)

---

## Analog Input (0–24 V)
Analog input 0–24 V:  
- Divider 1 kΩ / 33 kΩ.

![STICKER Analog Input](STICKER-ANALOG-INPUT.png)