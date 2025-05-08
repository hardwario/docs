---
slug: initial-configuration
title: Initial Setup and Configuration
---

# EMBER Initial Setup and Configuration

This article is a step-by-step guide for updating and configuring the EMBER gateway (MikroTik RBM33G) before shipping.

:::caution

This guide is mainly for the **first configuration** of EMBER **before shipping**.\
Most users will want to follow the [**Hotspot Configuration**](hotspot-configuration.md) guide.

:::

## Hardware preparation
- Insert the **Mikrotik R11E-LR8** LoRaWAN card into the onboard slot labeled **PCIe1**
- Remove the **jumper** on the right side (J7) to **enable power** to the PCIe cards.


## Prerequisites

You will need **a way to connect** to the EMBER (WebFig should be fine, but **WinBox is preferred**) and a copy of the Firmware
and package files.

- **RouterOS/Firmware package** - verified with [**v7.16.1**](pathname:///download/routeros-7.16.1-mmips.npk)

- **Package files (.zip archive)** - verified with [**v7.16.1**](pathname:///download/all_packages-mmips-7.16.1.zip)

:::tip

Don't forget to **extract** the package files **from the archive**.

:::

## Procedure

### Power On and connect to EMBER

- **Connect the power supply and ethernet**: Attach the **power supply** to the EMBER gateway and connect an **Ethernet cable** from
  the **left Ethernet port** on EMBER (`ether1`) to **your computer**.

- **Open RouterOS interface**: Access RouterOS via **WinBox** or WebFig for the following steps.

### Update EMBER

#### Uninstall All Packages

- **Remove all packages**: Uninstall all packages **except the RouterOS** package. (`System` > `Packages`)

:::danger

**Do not uninstall** the **RouterOS** package.

:::

:::tip

#### Why remove packages first?
Uninstalling **all extra packages** ensures a clean installation and **prevents conflicts** with older versions. This helps **avoid compatibility issues**.

:::

#### Update OS
- **Download RouterOS image**: download from [**official webpage**](https://mikrotik.com/product/rbm33g#fndtn-downloads))
- **Upload RouterOS image**: Upload the RouterOS **.npk file** to the **`Files`** section on EMBER.
- **Reboot**: Reboot the device to complete the update. (`System` > `Reboot`)

#### Update Bootloader

- **Update bootloader**: Go to `System` > `RouterBOARD` and select `Upgrade`.
- **Reboot device**: Reboot after updating the bootloader to finalize the upgrade. (`System` > `Reboot`)

#### Install Packages

- **Download packages**: download the package for **MMIPS** via [**download page**](https://mikrotik.com/download)
- **Upload packages**: Upload the **iot** package **.npk file** to the **`Files`** section (LoRa has been moved under the IoT
  package).
- **Reboot**: Reboot the device to complete the package installation. (`System` > `Reboot`)

:::caution

The **LoRa package** is now **under the IoT package**.

:::

### Configuration

#### Reset Configuration

- **Factory reset**: Go to `System` > `Reset Configuration` and check `No Default Configuration` to clear all settings.
- **Log in**: Use username `admin` and leave the **password field empty**.
- **Set a new password**: Go to `System` > `Users`, select **admin**, and change the password to `ember`.

:::tip

The **terminal** in WinBox might **prompt** you to set a **password**. If you do, there is **no need to set it in the menu**.

:::

#### Remove Pre-configured Settings

- **Delete LoRa servers**: Navigate to `IoT` > `LoRa` > `Servers` and remove all LoRa server entries.
- **Remove IP addresses**: Go to `IP` > `Addresses` and delete all existing IP address configurations.


#### Apply New Configuration

- **Paste configuration**: Copy the configuration **below** and **paste** it into the **terminal** to set up the EMBER gateway.

  ```
     /interface bridge add name=bridge0
     /port set 0 name=serial0
     /port set 1 name=serial1
     /interface bridge port add bridge=bridge0 interface=ether2
     /interface bridge port add bridge=bridge0 interface=ether3
     /iot lora set 0 antenna=uFL
     /ip address add address=172.31.255.1/24 interface=bridge0 network=172.31.255.0
     /ip dhcp-client add interface=ether1
     /system identity set name=ember
     /system note set show-at-login=no
  ```

:::tip

#### What does the config do?

- Creates a bridge between the `ether2` and `ether3` interfaces
- Sets the LoRa card antenna.
- Sets an IP address range for `bridge0` with `ether2` and `ether3` interfaces (`172.31.255.1/24`)
- Creates a DHCP client for the `ether1` interface
- Sets hostname to `ember`

:::

:::danger

This configuration **does not** set up any **LoRa servers**; the **customer has to add these themselves**.

:::

#### Verify Configuration

- **Print configuration**: Use the `export terse` command in the terminal and review the output. Ensure it matches the
  configuration above.

:::caution

There might be additional **TTN LoRa servers** after a reboot. These are **safe to Ignore**.\
This is a **baked-in** behavior of **RouterOS** when **no LoRa servers** are configured **before rebooting**.

:::

### Finalization

- **Shut down device**: Run the **command** `/system/shutdown` in the **terminal** or use the GUI `System` > `Shutdown`.
- **Disconnect power and ethernet**: Once the **device has powered down**, disconnect the **power supply** and the **ethernet**.

## Completion

The EMBER gateway should now be **fully updated and configured**. Good job!
