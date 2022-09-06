---
slug: about-cloony
title: About Cloony
---
import Image from '@theme/IdealImage';

<div class="container">
  <div class="row">
    <div class="col col--4">
      <div><Image img={require('./1-wire-module.png')} /></div>
    </div>
    <div class="col col--6">
      <p>
        Cloony is a compact version of the Core Module. The size is 23 x 23 mm. It has a 32-bit ARM microcontroller with 192 kB of flash memory and 20 kB of RAM. Besides the integrated sub-GHz radio for the 868/915 MHz band, it also features a digital temperature sensor and security chip.
      </p>
      <p>
        There are two basic differences from the Core Module. First, it does not have an integrated 3D accelerometer. Second, it does not have any USB interface. Programming can be done either using an SWD debugger or using a UART bootloader (you need RESET, BOOT, TXD2 and RXD2 signals).
      </p>
    </div>
  </div>
</div>

## Features
- ARM Cortex M0+ 32-bit MCU STM32L083CZ (ST)
- 192 kB Flash / 20 kB RAM
- Radio module (868/915 MHz) based on SPIRIT1 (ST)
- Security chip ATSHA204A (Microchip)
- Red color LED
- 10-pin SWD connector for debugging (optional)
- Operating voltage range: 2.0 V to 3.6 V
- Operating temperature range: -20 to 70 °C
- Mechanical dimensions: 23 x 23 mm

## References
- [**Shop**](https://shop.hardwario.com/button-module/)
- [**Schematics**](https://github.com/hardwario/bc-hardware/tree/master/out/bc-cloony)
- [**Projects**](https://www.hackster.io/hardwario/projects?part_id=74081)
