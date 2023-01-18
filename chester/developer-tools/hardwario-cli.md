---
slug: /hardwario-cli
title: HARDWARIO CLI
---
import Image from '@theme/IdealImage';

# HARDWARIO CLI

HARDWARIO command line tool allows you to:

- **Flash APP/BLE** application firmware (NRF52)
- Show interactive terminal for **configuration** and **debugging**
- Access **Product Information Block** (PIB) in UICR flash memory that contains **HARDWARIO Serial Number** (HSN) and other parameters
- Update modem firmware (NRF9160)

## Setup

**HARDWARIO CLI** is a **Python 3** tool. Please follow the steps below based on your operating system.

### Ubuntu

Python 3 should already be installed on your OS.

### macOS

Follow the [Install Packages](firmware-sdk/../../firmware-sdk/install-macos.md#install-package-manager) chapter to install Homebrew. Then run `brew install python3`.

### Windows

Follow the [Install Python](firmware-sdk/../../firmware-sdk/install-windows.md#install-python) chapter.

## APP/BLE Application Firmware

Connect J-Link to the [APP SWD Port](segger-j-link.md#segger-j-link-to-app-port-connection).

In this chapter, we use the `hardwario chester app` commands. If you type the previous command, the tool will show you all the possible commands so you can explore the options.

### Interactive Console

Use the command `hardwario chester app console` to open the interactive terminal.

### Image Flashing

Use the command `hardwario chester app flash <parameter>` to flash the firmware.

The `<parameter>` can be:

- A **BIN** or **HEX** file.
- A unique ID that was sent to you by email or from our [Catalog Application firmwares](../catalog-applications/index.md#application-firmware). It has this format `34677881d57f4b0eb85507f176627bee`.

### Processor Reset

Use the command `hardwario chester app reset` to reset the firmware.

### Product Information Block

PIB is a separate UICR flash block in NRF52 memory that contains factory-programmed device information.

Use `hardwario chester app pib read` to read the PIB data.

```
Vendor name: HARDWARIO
Product name: CHESTER-M
Hardware variant: CDGLS
Hardware revision: R3.2
Serial number: 0000000000
Claim token: 98ae432aa12ea82458ed04b4816bf225
BLE passkey: 275889
```

You can also use the `write` command in case you delete the PIB by mistake. The tool will ask you for every parameter. You can find the original parameters in the last **JSON** message in the **HARDWARIO Cloud**.

## LTE Modem Firmware

Connect J-Link to the [LTE SWD Port](segger-j-link.md#segger-j-link-to-lte-port-connection).

### Image Flashing

Use the command `hardwario chester lte flash firmware.zip` to flash the modem firmware.

### Flash Erasing

### Processor Reset

## LoRaWAN Modem Firmware

### Image Flashing

### Flash Erasing

### Processor Reset

## Command Aliases

If you develop and iterate quite frequently, you might find these command aliases useful. Add them to your terminal init script.

```
alias wb='west build'
alias wu='west update'
alias wf='west flash'
alias wr='rm -rf build/'
alias wc='hardwario chester app console'
alias wfc='west flash && hardwario chester app console'
```