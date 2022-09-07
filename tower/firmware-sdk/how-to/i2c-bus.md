---
slug: how-to-i2c-bus
title: "How To: I²C Bus"
---
import Image from '@theme/IdealImage';

This is the main **bus TOWER uses** to communicate with most of the **sensors and modules**. All of them have their address in the TOWER I²C address space.

:::info

  Normally you don’t need to use I²C API, because **all the sensors have their libraries** in the [**SDK**](https://sdk.hardwario.com/group__twr__i2c.html) that gives you the measured data. You will need I²C APIs in case you want to implement a new I²C sensor or chip.

:::

## References
- [**I²C SDK Module**](https://sdk.hardwario.com/group__twr__i2c.html)
- GitHub Repository Example

