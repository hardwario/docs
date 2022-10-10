---
slug: lte-modem-over-j-link
title: LTE Modem over J-Link
---
import Image from '@theme/IdealImage';

# LTE Modem over J-Link

This article will describe how to flash the LTE modem firmware in CHESTER using SEGGER J-Link.

## Requirements

You will need the following hardware and software tools:

* One of these operating systems:

  * Ubuntu 20.04 / 22.04
  * macOS 11 / 12 (with Homebrew installed)
  * Windows 10 / Windows 11

* **Python 3** distribution installed on your system:

  * On Ubuntu, run this command in the **Terminal** app:

    ```
    sudo apt install python3
    ```

  * On macOS, run this command in the **Terminal** app:

    ```
    brew install python3
    ```

  * On Windows, download the latest stable installer from [this link](https://www.python.org/downloads/windows/).

    :::caution

    Ensure the Windows installer can modify the `PATH` variable so the Python executable is available from any location.

    :::

* HARDWARIO CHESTER device (you will need to open the enclosure top cover with six screws)

* USB debugger/programmer SEGGER J-Link (including a 10-pin SWD adapter + flat cable)

  :::tip

  HARDWARIO provides J-Link + all the required accessories on demand.

  :::

* Micro-USB cable with appropriate plug type to your computer

  :::danger

  Some Micro-USB cables provide only power and no data signals. If the connection between J-Link, and your system does not work, check the cable type in the first place.

  :::

* Python application bundle **HARDWARIO Command Line Tools**

## Installation

You can install **HARDWARIO Command Line Tools** with these steps:

1. On Windows only - Install SEGGER J-Link drivers:

   * Download [64-bit Intel/AMD installer](https://www.segger.com/downloads/jlink/JLink_Windows_x86_64.exe)
   * Download [32-bit Intel/AMD installer](https://www.segger.com/downloads/jlink/JLink_Windows.exe)
   * Download [64-bit ARM installer](https://www.segger.com/downloads/jlink/JLink_Windows_arm64.exe)

1. Open the **Terminal** (Ubuntu or macOS) or **Command Prompt** (Windows) application.

1. Initialize the Python virtual environment:

   ```
   python3 -m venv hardwario-venv
   ```

1. Activate the Python virtual environment:

   ```
   source hardwario-venv/bin/activate
   ```

   :::caution

   When you close the **Terminal** or **Command Prompt**, you must reactivate the Python virtual environment. Simply call the command from the above procedure: `source hardwario-venv/bin/activate`.

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

Follow these steps to flash the LTE modem firmware in the CHESTER device:

1. Open the **CHESTER** enclosure (6 screws from the bottom side).

1. Connect the 10-pin flat cable to the connector labeled `LTE`.

   :::caution

   One of the wires on the flat cable between J-Link and CHESTER has red color. This red color denotes a **signal number 1**. This red-colored signal has to be oriented toward the white dot located next to the SWD connector on CHESTER mainboard. The same rule with the cable applies at the side of **SEGGER J-Link**.

   :::

1. Connect the other side of the 10-pin flat cable to SEGGER J-Link adapter board (and plug the adapter board to SEGGER J-Link device).

1. Connect the **Micro-USB** cable to your computer and **SEGGER J-Link**.

1. Open the **Terminal** (Ubuntu or macOS) or **Command Prompt** (Windows) application.

1. Activate the Python virtual environment where you have installed the **HARDWARIO Command Line Tools** (see the previous chapter).

1. Download the **LTE modem** firmware package [**v1.3.0**](/download/hio-chester-lte-v1.3.0.zip).

1. Run this command to flash the LTE modem firmware:

   ```
   hardwario chester lte flash hio-chester-lte-v1.3.0.zip
   ```

1. Disconnect the SEGGER J-Link adapter.
