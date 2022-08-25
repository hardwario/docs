---
slug: ordering-codes
title: Ordering Codes
---
import Image from '@theme/IdealImage';

# Ordering Codes

This chapter defines all possible ordering codes for the CHESTER ecosystem. The order specifications must be fully compliant with the part numbers stated below.

:::tip

Each product lists available parts, i.e. which parts are standard and usually immediately available. If you need a specific combination, talk to us for availability and MOQ (minimum order quantity) conditions.

:::

## Mainboard Modules

### CHESTER-M: Standard Mainboard

**Format:** `CHESTER-M-[A][B][C][D][E][G][L][N][S][V]`

**Legend:**

* `A` = Battery holder size "AA" (2x)
* `B` = Battery holder size "C" (1x)
* `C` = Cellular (NB-IoT + LTE-M modem)
* `D` = Developer variant (without supercapacitors and charger, with sprint terminals)
* `E` = External power source variant (without supercapacitors and charger)
* `G` = GNSS (satellite positioning module GPS/Galileo/GLONASS/BeiDou)
* `L` = LoRaWAN (LoRaWAN modem)
* `S` = Nano-SIM holder
* `V` = Vodafone SIM chip

**Available parts:**

| Ordering Code     | Ordering Code      | Ordering Code      |
|:------------------|:-------------------|:-------------------|
| `CHESTER-M-EL`    | `CHESTER-M-BEL`    | `CHESTER-M-AEL`    |
| `CHESTER-M-CV`    | `CHESTER-M-BCV`    | `CHESTER-M-ACV`    |
| `CHESTER-M-CS`    | `CHESTER-M-BCS`    | `CHESTER-M-ACS`    |
| `CHESTER-M-CGV`   | `CHESTER-M-BCGV`   | `CHESTER-M-ACGV`   |
| `CHESTER-M-CGS`   | `CHESTER-M-BCGS`   | `CHESTER-M-ACGS`   |
| `CHESTER-M-CGLS`  | `CHESTER-M-BCGLS`  | `CHESTER-M-ACGLS`  |
| `CHESTER-M-CDGLS` | `CHESTER-M-BCDGLS` | `CHESTER-M-ACDGLS` |

## Cover Modules

### CHESTER-S1: Integrated Multi-Sensor

**Format:** `CHESTER-S1-[B][C][M][N][P][T]`

:::info

This product connects to the system I²C bus on CHESTER-M via the 7-pin JST connector.

:::

**Legend**:

* `B` = Push-button w/ RGB LED
* `C` = CO2 sensor
* `M` = Microphone
* `N` = No microcontroller
* `P` = PIR detector
* `T` = Thermocamera

:::info

The lux meter and hygrometer are always included. In the case of the "N" version, their I²C bus is connected directly to the system I2C connector.

:::

**Available parts:**

| Ordering Code     |
|:------------------|
|`CHESTER-S1-BCMP`  |
|`CHESTER-S1-BCMPT` |
|`CHESTER-S1-N`     |
|`CHESTER-S1-NP`    |

### CHESTER-Z: Backup + Push-buttons

:::caution

This product connects to the system I²C bus on CHESTER-M via the 7-pin JST connector.

:::

**Format:** `CHESTER-Z-[X|1-F]`

**Legend:**

* `X` = Center push-button included
* `1-F` = Binary combination (represented by a single hexadecimal digit) of the installed push-buttons

:::info

Push-button bit 0 represents the top-most button.

:::

:::caution

An acoustic beeper is installed only if any of the pushbuttons are present.

:::

**Available parts:**

| Ordering Code |
|:--------------|
| `CHESTER-Z`   |
| `CHESTER-Z-F` |
| `CHESTER-Z-X` |

## Carrier Boards

### CHESTER-B1: Batteries + wM-Bus

**Format:** `CHESTER-B1-[A][C][D][L][W]`

**Legend:**

* `A` = Battery holders configured for alkaline cells (2S3P or 2S4P configuration)
* `C` = Eight battery holders of size "C"
* `D` = Six battery holders of size "D"
* `L` = Battery holders configured for lithium cells (6P or 8P configuration)
* `W` = Wireless M-Bus (wM-Bus) module with u.FL connector for antenna

**Available parts:**

| Ordering Code   |
|:----------------|
|`CHESTER-B1-AC`  |
|`CHESTER-B1-AD`  |
|`CHESTER-B1-ADW` |
|`CHESTER-B1-CL`  |
|`CHESTER-B1-DL`  |
|`CHESTER-B1-DLW` |

### CHESTER-C1: Interfaces + Control

**Format:** `CHESTER-C1-[R]`

**Legend:**

* `R` = Power relays included

**Available parts:**

| Ordering Code   |
|:----------------|
|`CHESTER-C1`     |
|`CHESTER-C1-R`   |

## Backside Modules

### CHESTER-K: 4x Diff. Input + 5 V Boost

**Format:** `CHESTER-K-[1{C|V}]-[2{C|V}]-[3{C|V}]-[4{C|V}]`

:::caution

This expansion module occupies both backside slots "A" and "B".

:::

**Legend:**

* `1C` = Channel 1 configured for current measurements (differential)
* `1V` = Channel 1 configured for voltage measurements (single-ended)
* `2C` = Channel 2 configured for current measurements (differential)
* `2V` = Channel 2 configured for voltage measurements (single-ended)
* `3C` = Channel 3 configured for current measurements (differential)
* `3V` = Channel 3 configured for voltage measurements (single-ended)
* `4C` = Channel 4 configured for current measurements (differential)
* `4V` = Channel 4 configured for voltage measurements (single-ended)

**Available parts:**

| Ordering Code          |
|:-----------------------|
|`CHESTER-K-1C-2C-3C-4C` |
|`CHESTER-K-1C-2C-3C-4V` |
|`CHESTER-K-1C-2C-3V-4V` |
|`CHESTER-K-1C-2V-3V-4V` |
|`CHESTER-K-1V-2V-3V-4V` |

### CHESTER-X0A: 4x Input w/ 5 V Boost

**Format:** `CHESTER-X0A[:{A|B}]`

**Legend:**

* `:A` = Expansion module configured for backside slot "A" position
* `:B` = Expansion module configured for backside slot "B" position

**Available parts:**

| Ordering Code  |
|:---------------|
|`CHESTER-X0A:A` |
|`CHESTER-X0A:B` |

### CHESTER-X0B: 4x Input w/o 5 V Boost

**Format:** `CHESTER-X0A[:{A|B}]`

**Legend:**

* `:A` = Expansion module configured for backside slot "A" position
* `:B` = Expansion module configured for backside slot "B" position

**Available parts:**

| Ordering Code  |
|:---------------|
|`CHESTER-X0B:A` |
|`CHESTER-X0B:B` |

### CHESTER-X1: 8x 1-Wire Bus Driver

**Format:** `CHESTER-X1-[G][:{A|B}]`

**Legend:**

* `G` = Only four 1-Wire channels provided with ground terminal next to each channel
* `:A` = Expansion module configured for backside slot "A" position
* `:B` = Expansion module configured for backside slot "B" position

**Available parts:**

| Ordering Code   |
|:----------------|
|`CHESTER-X1:A`   |
|`CHESTER-X1:B`   |
|`CHESTER-X1-G:A` |
|`CHESTER-X1-G:B` |

### CHESTER-X2: UART/RS-485 Interface

**Format:** `CHESTER-X2[:{A|B}]`

**Legend:**

* `:A` = Expansion module configured for backside slot "A" position
* `:B` = Expansion module configured for backside slot "B" position

**Available parts:**

| Ordering Code |
|:--------------|
|`CHESTER-X2:A` |
|`CHESTER-X2:B` |

### CHESTER-X3A: 2x Pt100/Pt1000 Interface

**Format:** `CHESTER-X3A[:{A|B}]`

**Legend:**

* `:A` = Expansion module configured for backside slot "A" position
* `:B` = Expansion module configured for backside slot "B" position

**Available parts:**

| Ordering Code  |
|:---------------|
|`CHESTER-X3A:A` |
|`CHESTER-X3A:B` |

### CHESTER-X3B: 2x Thermocouple Interface

**Format:** `CHESTER-X3B[:{A|B}]`

**Legend:**

* `:A` = Expansion module configured for backside slot "A" position
* `:B` = Expansion module configured for backside slot "B" position

**Available parts:**

| Ordering Code  |
|:---------------|
|`CHESTER-X3B:A` |
|`CHESTER-X3B:B` |

### CHESTER-X3C: 2x Load Cell Interface

**Format:** `CHESTER-X3C[:{A|B}]`

**Legend:**

* `:A` = Expansion module configured for backside slot "A" position
* `:B` = Expansion module configured for backside slot "B" position

**Available parts:**

| Ordering Code  |
|:---------------|
|`CHESTER-X3C:A` |
|`CHESTER-X3C:B` |

### CHESTER-X4: 28 V Buck + 4x P Switch

:::info

Only a single instance of this module can be installed on CHESTER-M.

:::

**Format:** `CHESTER-X4`

**Available parts:**

| Ordering Code |
|:--------------|
|`CHESTER-X4`   |
|`CHESTER-X4`   |

### CHESTER-X6: S-Wire Bus + 5 V Boost

:::info

Only a single instance of this module can be installed on CHESTER-M.

:::

**Format:** `CHESTER-X6`

**Available parts:**

| Ordering Code |
|:--------------|
|`CHESTER-X6:A` |
|`CHESTER-X6:B` |

### CHESTER-X7: 1x Diff. Input + 5 V Boost

**Format:** `CHESTER-X7[:{A|B}]`

**Legend:**

* `:A` = Expansion module configured for backside slot "A" position
* `:B` = Expansion module configured for backside slot "B" position

**Available parts:**

| Ordering Code |
|:--------------|
|`CHESTER-X7`   |

### CHESTER-X8: Ultra-Precise Accelerometer

:::info

Only a single instance of this module can be installed on CHESTER-M.

:::

**Format:** `CHESTER-X8`

**Available parts:**

| Ordering Code |
|:--------------|
|`CHESTER-X8`   |

### CHESTER-X9: 4x Protected N Switch

**Format:** `CHESTER-X9`

**Available parts:**

| Ordering Code |
|:--------------|
|`CHESTER-X9`   |

### CHESTER-X10: 28 V Buck + Li-Po Charger

**Format:** `CHESTER-X10`

**Available parts:**

| Ordering Code |
|:--------------|
|`CHESTER-X10`  |

## Other Accessories

### CHESTER-S2: External Hygrometer

**Format:** `CHESTER-S2`

:::info

This product connects to the system I²C bus on CHESTER-M via the 5-pin JST connector.

:::

**Available parts:**

| Ordering Code |
|:--------------|
|`CHESTER-S2`   |
