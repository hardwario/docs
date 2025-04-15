---
slug: device-states
title: Device States
---

# Device States

The device has three main states:

* initialization
* running
* error

During the running and error states, the device will try to broadcast information about itself (see [Device Discovery](../operation-instructions/device-discovery.md)).

In the error state, the device will begin counting down from 60 seconds and then will reboot. During this countdown, it is possible to rollback the firmware using similar procedure to the USER button factory reset.

## LED Behavior

During the init state, the LED will be on.

During operation, the green status LED will blink every 5 seconds to display
the current state. The LED blinks represents the following bit field:

| 1              | 2           | 3               | 4 - 6      |
| :------------- | :---------- | :-------------- | :--------  |
| Device running | WiFi status | Ethernet status | Error bits |

* **Device running** - this bit is always active
* **WiFi status** - this bit is active if WiFi is enabled, but not connected
* **Ethernet status** - this bit is active if Ethernet is enabled, but not connected
* **Error bits** - these bits are active if the device is in the error state

The bits are transmitted from the first one to the sixth one. If the bit is
high, the LED will blink for 20 ms and turn off for another 60 ms. A low bit
will result in the LED being off for 80 ms.

Due to how the bits are assigned, it is possible to get the current state
from just counting the amount of active bits:

* **1 bit** - device is running without issues
* **2 bits** - on of the connection interfaces is not active
* **3 bits** - both of the connection interfaces are inactive
* **> 3 bits** - the device is in an error state
  * if the device is in error state, you can subtract 3 from the cound and
    refer to the points above

