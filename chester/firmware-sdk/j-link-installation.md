---
slug: j-link-installation
title: J-Link Installation
---
import Image from '@theme/IdealImage';

# J-Link Installation

The following chapter will guide you through the SEGGER J-Link installation.

## Installation Steps

1. Download **nRF Command Line Tools** from this link:

   https://www.nordicsemi.com/Products/Development-tools/nrf-command-line-tools/download

   :::tip

   Select the corresponding platform in the combo box selector on the left side.

   :::

1. Install the downloaded tools

   The installation contains the command line tools from Nordic Semiconductor, but also includes the **SEGGER J-Link Software and Documentation Pack**. It is recommended to install these two packages together via installer from Nordic Semiconductor, as it prevents the potential compatibility and version conflicts.

## Hardware Connection

1. Plug the SEGGER Cortex-M adapter to SEGGER J-Link.

2. Connect the 10-pin SWD flat cable to the SEGGER Cortex-M adapter and the other side to CHESTER.

   :::info

   There are three SWD connectors on the CHESTER mainboard. Typically, you will be dealing with the BLE port (connects to application microcontroller).

   :::

3. Connect the Micro-USB cable to SEGGER J-Link and to your computer.
