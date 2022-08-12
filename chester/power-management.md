---
slug: power-management
title: Power Management
---

# Power Management

CHESTER is developed as a very low power device with a power consumption in the µA range. Therefore, it can be powered by batteries in many applications for several years. Useful information about batteries for IoT can be found in this article.

What power supply options are available?

* Primary C lithium cell Saft LS 26500 3.6V LiSoCl2 with a capacity of 7.7 Ah. This battery is suitable for most applications, especially in environments requiring a wide temperature range, as it is capable of operating in temperatures from -60 to +85°C. It also has a negligible self-discharge current and thus does not lose its capacity during storage. Its disadvantage is its relatively high cost, so please include battery replacement costs in your projects.

* The CHESTER-B1 expansion module, which can be fitted with:

  * 3 x Primary D lithium cell Saft LS 33600 3.6V LiSoCl2 with a capacity of 51 Ah (180 Wh). The same conditions apply for this solution as for the primary cell Saft LS 26500. Please consider using a larger box for the CHESTER-B1 module with dimensions 200x280x65mm.

  * 6 x Primary lithium C cell Saft LS 26500 3.6V LiSoCl2 with a capacity of 46 Ah (151 Wh). The same conditions apply for this solution as for the Saft LS 26500 primary cell. Please consider using a larger box for the CHESTER-B1 module with dimensions 200x280x45mm.

  * 6 x Primary D alkaline cell 1.5 V with a capacity of 102 Ah (150 Wh). This solution is suitable for projects with a temperature range of -20 to +50 °C. Expect to use a larger box for the CHESTER-B1 module with dimensions 200x280x65mm.

  * 8 x Primary C alkaline cell 1.5 V with a capacity of 62 Ah (150 Wh). This solution is suitable for projects with a temperature range of -20 to +50 °C. Expect to use a larger box for the CHESTER-B1 module with dimensions 200x280x65mm.

* Charged by CHESTER-Z module and rechargeable Li-Ion 18650 3.7 V Li-Ion battery with a capacity of 3.35 Ah. This solution is suitable for projects where mains power is an option but long-term operation of the device is required in the event of a power failure. You can also connect a solar panel to the CHESTER-Z, which then recharges the Li-Ion battery. When using this solution, please allow for a temperature range of -10 °C, especially in recharging mode.

* From external DC line sources using these modules:

  * **CHESTER-X4**: DC/DC converter (voltage range 6-28 VDC).
  * **CHESTER-X10**: DC/DC converter with the integrated Lithium-Ion charger (voltage range 6-30 VDC).
