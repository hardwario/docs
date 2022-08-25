---
title: Extension Modules
---
import Image from '@theme/IdealImage';

# Extension Modules

The CHESTER mainboard (CHESTER-M) includes these integrated interfaces and peripherals:

* I<sup>2</sup>C bus (also featuring Sparkfun Qwiic Connect System)
* 1-Wire bus (using hardware bus driver with strong pull-up capability)
* Digital I<sup>2</sup>C thermometer
* 3-axis MEMS accelerometer
* 8 MB NOR flash memory
* 3-color RGY LED
* Push-button

The core feature of the CHESTER system is its hardware configurability provided by the wide range of extension modules. These modules are either soldered from the bottom of the mainboard (two slots A+B are available), or connected via system I2C bus (e.g., for modules installed in the enclosure top cover).

:::tip

On CHESTER DevKit variant, it is possible to install extension modules designated for the backside of the mainboard via spring connectors. That will allow you to quickly swap the interfaces during the development cycle. However, for the real device deployment, it is strongly recommended to have the modules soldered directly to the mainboard (HARDWARIO does the soldering).

:::

## Backside Modules

| Module Name   | Module Description                                                                                                                                                |
|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| CHESTER-X0A   | Up to 4 digital and analog inputs and outputs, 4-20 mA current loop channels, 0-10 V voltage inputs, dry contact, NPN or PNP input, including 5V boost converter. |
| CHESTER-X0B   | Up to 4 digital and analog inputs and outputs, 4-20 mA current loop channels, 0-10 V voltage inputs, dry contact, NPN or PNP input, without 5V boost converter.   |
| CHESTER-X1    | Up to eight 1-Wire channels (e.g. for Dallas DS18B20 digital temperature sensors)                                                                                 |
| CHESTER-X2    | Both TTL/UART and RS-485 interface (e.g., for Modbus communication)                                                                                               |
| CHESTER-X3A   | Up to 2 RTD (resistive temperature devices) sensors, such as Pt 100 and Pt 1000                                                                                   |
| CHESTER-X3B   | Up to 2 thermocouple channels (type B/C/E/J/K/N/R/S/T)                                                                                                            |
| CHESTER-X3C   | Up to 2 load-cell (strain gauge) channels that can be used for weight measurements                                                                                |
| CHESTER-X4    | DC/DC converter providing power from an external 6-28 VDC line (features input voltage measurement)                                                               |
| CHESTER-X5    | Differential analog input for +/- 30 V voltage measurement                                                                                                        |
| CHESTER-X6    | Interface module for our in-house S-Wire protocol targetting low-power peripherals                                                                                |
| CHESTER-X7    | 1-channel differential input converter with software-controlled 5V boost converter for current probes and other industrial sensors                                |
| CHESTER-X8    | Ultra-precise accelerometer                                                                                                                                       |
| CHESTER-X9    | 4-channel output module with smart protected switch for controlling relays and solenoids                                                                          |
| CHESTER-X10   | DC/DC converter + Li-Po charger providing power from an external 6-30 VDC line (features input voltage measurement)                                               |
| CHESTER-X7    | 4-channel differential input converter with software-controlled 5V boost converter for current probes and other industrial sensors                                |

## Cover Modules

| Module Name   | Module Description                                                                                                                                       |
|---------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| CHESTER-A1    | AC/DC converter for 110/230 V power supply                                                                                                               |
| CHESTER-A1A   | AC/DC converter for 110/230 V power supply with two 230V/16A power relays                                                                                |
| CHESTER-G1    | 8-channel galvanically isolated input module with isolated DC/DC power supply                                                                            |
| CHESTER-S1    | Environmental monitoring module with temperature, humidity, carbon dioxide (CO2), light intensity, atmospheric pressure, acoustic noise, and PIR sensors |
| CHESTER-Z1    | Rechargeable battery backup module with DC/DC converter and charger                                                                                      |
| CHESTER-Z1-F  | Rechargeable battery backup module with DC/DC converter and charger + up to 4 RGB illuminated push-buttons with acoustic feedback                        |

## Carrier Boards

:::info

These carrier boards require larger enclosure.

:::

| Module Name   | Module Description                                                                                                                                                     |
|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| CHESTER-B1    | Battery holders for up to either 6x D-cell or 8x C-cell sized batteries + off-mainboard LED                                                                            |
| CHESTER-B1-W  | Battery holders for up to either 6x D-cell or 8x C-cell sized batteries + off-mainboard LED + wireless M-Bus (wM-Bus)                                                  |
| CHESTER-C1    | Interface board with DC/DC converter, 2x power relay, 1-Wire terminals, 4x digital/analog inputs, and RS-485 interfaces + battery holder for 4x C-cell sized batteries |

:::caution

If you did not find the relevant module for your project, contact HARDWARIO. The hardware extension development roadmap is driven by specific project needs.

:::
