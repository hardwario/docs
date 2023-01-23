---
slug: lte-modem-over-j-link
title: LTE Modem over J-Link
---
import Image from '@theme/IdealImage';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# LTE Modem over J-Link

This article describes how to flash the LTE modem firmware in **CHESTER** using **SEGGER J-Link**.

## Requirements

You will need the following hardware and software tools:

* One of these operating systems:

  * **Ubuntu** version 20.04 / 22.04
  * **macOS** version 11 / 12 (with Homebrew installed)
  * **Windows** version 10 / 11

* **Python 3** distribution installed on your system:

  <Tabs groupId="operating-system">

  <TabItem value="ubuntu" label="Ubuntu" default>

  Run this command in the **Terminal** app:

  ```
  sudo apt install python3
  ```

  </TabItem>

  <TabItem value="macos" label="macOS">

  Run this command in the **Terminal** app:

  ```
  brew install python3
  ```

  </TabItem>

  <TabItem value="windows" label="Windows">

  Download the latest stable installer from [this link](https://www.python.org/downloads/windows/).

  :::caution

  Ensure the Windows installer can modify the `PATH` variable so the **Python** executable is available from any location.

  :::

  </TabItem>

  </Tabs>

* **CHESTER** device (you will need to open the enclosure top cover with six screws)

* USB debugger/programmer **SEGGER J-Link** (including a 10-pin **SWD** adapter + flat cable)

  :::tip

  **HARDWARIO** provides J-Link + all the required accessories on demand.

  :::

* Micro-USB cable with appropriate plug type to your computer

  :::danger

  Some Micro-USB cables provide only power and no data signals. If the connection between J-Link, and your system does not work, check the cable type in the first place.

  :::

* Python application bundle **HARDWARIO Command Line Tools**

## Installation

You can install **HARDWARIO Command Line Tools** with these steps:

1. On Windows only - Install the **SEGGER J-Link** drivers:

   * Download [64-bit Intel/AMD installer](https://www.segger.com/downloads/jlink/JLink_Windows_x86_64.exe)
   * Download [32-bit Intel/AMD installer](https://www.segger.com/downloads/jlink/JLink_Windows.exe)
   * Download [64-bit ARM installer](https://www.segger.com/downloads/jlink/JLink_Windows_arm64.exe)

1. Open the **Terminal** (Ubuntu or macOS) or **Command Prompt** (Windows) application.

1. Initialize the **Python** virtual environment:

   ```
   python3 -m venv hardwario-venv
   ```

1. Activate the **Python** virtual environment:

   <Tabs groupId="operating-system">

   <TabItem value="ubuntu" label="Ubuntu" default>

   ```
   source hardwario-venv/bin/activate
   ```

   </TabItem>

   <TabItem value="macos" label="macOS">

   ```
   source hardwario-venv/bin/activate
   ```

   </TabItem>

   <TabItem value="windows" label="Windows">

   ```
   hardwario-venv\Scripts\activate.bat
   ```

   </TabItem>

   </Tabs>

   :::caution

   When you close the **Terminal** or **Command Prompt**, you must reactivate the **Python** virtual environment. Simply repeat the appropriate command for the given platform above.

   :::

1. Install **HARDWARIO Command Line Tools**:

   ```
   pip install hardwario
   ```

1. You can verify the installation with the following command:

   ```
   hardwario --version
   ```

   It should provide output similar to this:

   ```
   hardwario.chester v1.19.0
   hardwario.cloud v1.4.1
   hardwario.common v1.7.1
   hardwario.hardwario v1.2.0
   ```

## Flashing Procedure

Follow these steps to flash the LTE modem firmware in the **CHESTER** device:

1. Open the **CHESTER** enclosure (6 screws from the bottom side).

1. Connect the 10-pin flat cable to the connector labeled `APP` (or `BLE` on hardware revision R3.2 and earlier).

   :::caution

   One of the wires on the flat cable between **SEGGER J-Link** and **CHESTER** has red color. This red color denotes signal number `1`. This red-colored signal has to be oriented toward the black dot located next to the **SWD** connector on the **CHESTER** mainboard. The same rule with the cable applies at the side of **SEGGER J-Link**.

   :::

1. Connect the other side of the 10-pin flat cable to the **SEGGER J-Link** adapter board (and plug the adapter board into the **SEGGER J-Link** device).

1. Connect the **Micro-USB** cable to your computer and **SEGGER J-Link**.

1. Open the **Terminal** (Ubuntu or macOS) or **Command Prompt** (Windows) application.

1. Activate the **Python** virtual environment where you have installed the **HARDWARIO Command Line Tools** (see the previous chapter).

1. Run this command to erase the application firmware:

   ```
   hardwario chester app erase
   ```

   :::tip

   The application firmware erase is required in order to prevent the reset signal collision between **SEGGER J-Link** and the application firmware.

   :::

1. Connect the 10-pin flat cable to the connector labeled `LTE`.

   :::caution

   One of the wires on the flat cable between **SEGGER J-Link** and **CHESTER** has red color. This red color denotes signal number `1`. This red-colored signal has to be oriented toward the black dot located next to the **SWD** connector on the **CHESTER** mainboard. The same rule with the cable applies at the side of **SEGGER J-Link**.

   :::

1. Download the **LTE modem** firmware package [**v1.3.0**](pathname:///download/hio-chester-lte-v1.3.0.zip).

1. Run this command to flash the LTE modem firmware:

   ```
   hardwario chester lte flash hio-chester-lte-v1.3.0.zip
   ```

1. Connect the 10-pin flat cable to the connector labeled `APP` (or `BLE` on hardware revision R3.2 and earlier).

   :::caution

   One of the wires on the flat cable between **SEGGER J-Link** and **CHESTER** has red color. This red color denotes signal number `1`. This red-colored signal has to be oriented toward the black dot located next to the **SWD** connector on the **CHESTER** mainboard. The same rule with the cable applies at the side of **SEGGER J-Link**.

   :::

1. Flash the application firmware.

1. Disconnect the **SEGGER J-Link** adapter.
