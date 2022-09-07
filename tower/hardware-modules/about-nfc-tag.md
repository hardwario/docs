---
slug: about-nfc-tag
title: About NFC Tag
---
import Image from '@theme/IdealImage';

<div class="container">
  <div class="row">
    <div class="col col--4">
      <div><Image img={require('./1-wire-module.png')} /></div>
    </div>
    <div class="col col--6">
      <p>
        The <b>NFC Tag</b> operates as a dual port memory. You have the NFC protocol from one side and the I²C bus interface from the other side. It features a 1 kB EEPROM memory.
      </p>
      <p>
        The chip does not have to be powered when accessed from the NFC side.
      </p>
    </div>
  </div>
</div>

:::info

**NFC** (or **N**ear **F**ield **C**ommunication) is a great technology for transferring data over a short distance (**a couple of centimeters**). This attribute makes this technology appealing for security key provisioning.

Many smartphones are equipped with NFC technology today.

:::

## Features
- Integrated NFC tag **NT3H2111 (NXP)**
- Communication using the **I²C bus**
- 1 kB EEPROM memory
- Optional interrupt output
- Optional energy harvesting output
- Operating current: 240 µA
- Operating voltage range: 1.7 V to 3.6 V
- Operating temperature range: -20 to 70 °C
- Mechanical dimensions: 16 x 16 mm

## References
- [**Shop**](https://shop.hardwario.com/nfc-tag/)
- [**Schematics**](https://github.com/hardwario/bc-hardware/tree/master/out/bc-tag-nfc)
- [**SDK Library**](https://sdk.hardwario.com/group__twr__tag__nfc)
- [**Header File**](https://github.com/hardwario/twr-sdk/blob/master/twr/inc/twr_tag_nfc.h)
- [**Source File**](https://github.com/hardwario/twr-sdk/blob/master/twr/src/twr_tag_nfc.c)
