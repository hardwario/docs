---
slug: about-infragrid-module
title: About Infragrid Module
---
import Image from '@theme/IdealImage';

<div class="container">
  <div class="row">
    <div class="col col--4">
      <div><Image img={require('./1-wire-module.png')} /></div>
    </div>
    <div class="col col--6">
      <p>
        <b>Infra Grid Module</b> has 64 infrared temperature sensors in <b>8x8 matrix</b>. You can do non-contact infrared temperature measurements.
      </p>
      <p>
        It uses Panasonic Infrared Array Sensor Grid-EYE with <b>AMG8833 chip</b>. You can detect not just <b>movements</b> but also the <b>direction</b> and <b>size of the moving object</b>.
      </p>
    </div>
  </div>
</div>

## Features
- Infrared images in **8x8 pixel resolution**
- Operating voltage of 3.3 V
- Temperature accuracy ±2.5 °C
- Operating and measuring temperatures from 0°C to 80°C
- Human detection distance up to 7 m
- Current consumption of 4.5 mA in normal mode (10 FPS)
- Integrated power switch for low power operation.
- Integrated temperature sensor −20 °C to 80 °C

## References
- [**Shop**](https://shop.hardwario.com/infra-grid-module/)
- [**Schematics**](https://github.com/hardwario/bc-hardware/tree/master/out/bc-module-infra-grid)
- [**SDK Library**](https://sdk.hardwario.com/group__twr__module__infra__grid.html)
- [**Header File**](https://github.com/hardwario/twr-sdk/blob/master/twr/inc/twr_module_infra_grid.h)
- [**Source File**](https://github.com/hardwario/twr-sdk/blob/master/twr/src/twr_module_infra_grid.c)
- [**Projects**](https://www.hackster.io/hardwario/projects?part_id=110885)
