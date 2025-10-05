---
slug: index
title: Milesight - Sensors
---

import Image from '@theme/IdealImage';

Here is a list of tested **Milesight sensors** by HARDWARIO with reference resources:

| Name                                | Type                          | Overview                               | Product page                                                 | Purchase link                                             |
|-------------------------------------|-------------------------------|------------------------------------------------|-------------------------------------------------------------------------|------------------------------------------------------------------------|
| [**Milesight AM319-868M**](/milesight/sensors/am319-868m) | Ambience sensor              | [Details](/milesight/sensors/am319-868m)       | [Official site](https://www.milesight.com/iot/product/lorawan-sensor/am319) | [Buy here](https://www.hardwario.store/p/milesight-am319)             |
| [**Milesight WS303-868M**](/milesight/sensors/ws303-868m) | Leak detection sensor        | [Details](/milesight/sensors/ws303-868m)       | [Official site](https://www.milesight.com/iot/product/lorawan-sensor/ws303) | [Buy here](https://www.hardwario.store/p/milesight-ws303)             |
| [**Milesight WS201-868M**](/milesight/sensors/ws201-868m) | Fill level monitoring sensor | [Details](/milesight/sensors/ws201-868m)       | [Official site](https://www.milesight.com/iot/product/lorawan-sensor/ws201) | *Not available yet*                                                    |
| [**Milesight WT101-868M**](/milesight/sensors/wt101-868m) | Radiator thermostat          | [Details](/milesight/sensors/wt101-868m)       | [Official site](https://www.milesight.com/iot/product/lorawan-sensor/wt101) | [Buy here](https://www.hardwario.store/p/milesight-wt101)             |

## General configuration

**Overview**  
For sensor configuration, use the **Milesight ToolBox** mobile application, available on both:  
- Apple App Store: https://apps.apple.com/us/app/milesight-toolbox/id1518748039  
- Google Play Store: https://play.google.com/store/apps/details?id=com.ursalinknfc&hl=en&pli=1  

#### QR code – Milesight ToolBox
<div class="container">
  <div class="row">
    <div class="col col--8">
      <div style={{ width: '250px', height: '250px' }}>
        <Image img={require('./milesight-toolbox.png')} />
      </div>
    </div>
    <div class="col col--24"></div>
  </div>
</div>
<br />

**Installation and configuration**  
- Configuration is done via **NFC**.  
- After reading the device, go to the *Basic Information* tab to update the **Device Time**.  
- Setting the correct **date and time** is required for all devices.  

**LoRaWAN connection**  
- Devices are preconfigured with an **AppKey for OTAA** (default values are listed in the user manual).  
- The **gateway must be set to Public**. If the gateway is configured as Private, devices will not be able to join the network.  
