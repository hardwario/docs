# Initial Setup and Configuration


## Purpose

This document provides the step-by-step process for setting up, updating, and configuring the EMBER device (MikroTik RBM33G) for HARDWARIO operations.

## Procedure


### 1. Preparation and Connection

   - **Connect Power Supply and Ethernet**: Attach the power supply to the EMBER device. Connect an Ethernet cable from the EMBER's left Ethernet port (Ether1) to your computer.
   - **Open RouterOS Interface**: Access RouterOS via Winbox or WebFig for the following steps.

---

### 2. Update Process


#### 2.1 Record Installed Packages

   - **Note Current Packages**: Document all installed packages. This will be useful for reinstallation if needed.

#### 2.2 Uninstall Unnecessary Packages

   - **Remove All Non-Essential Packages**: Uninstall all packages except the RouterOS package.

#### 2.3 Update Firmware

   - **Download Firmware File for MMIPS Architecture**: Obtain the latest firmware file compatible with MMIPS architecture (Verified with [**v7.16.1**](pathname:///download/routeros-7.16.1-mmips.npk)).
   - **Upload Firmware**: Upload the firmware file to the EMBER’s "Files" section.
   - **Reboot**: Reboot the device to complete the firmware update.

#### 2.4 Update Bootloader

   - **Navigate to Bootloader Update**: Go to `System` > `RouterBOARD` and select "Upgrade".
   - **Reboot Device**: Reboot after updating the bootloader to finalize the upgrade.

#### 2.5 Reinstall Packages

   - **Download Latest Packages**: Obtain the latest package files for the device (Verified with [**v7.16.1**](pathname:///download/all_packages-mmips-7.16.1.zip)).
   - **Upload Packages**: Upload the packages that have been previously installed to the EMBER's "Files" section (LoRa has been moved unde the IoT package).
   - **Reboot**: Reboot the device to complete the firmware update.

---

### 3. Configuration Process


#### 3.1 Reset Configuration

   - **Factory Reset**: Go to `System` > `Reset Configuration` to clear any previous settings.
   - **Log in with Password**: Use the password `ember` when prompted.

#### 3.2 Remove Pre-configured Settings

   - **Delete LoRa Servers**: Navigate to `IoT` > `LoRa` > `Servers` and remove all LoRa server entries.
   - **Remove IP Addresses**: Go to `IP` > `Addresses` and delete all existing IP address configurations.

#### 3.3 Apply New Configuration

   - **Paste Configuration**: Copy the configuration below and paste it into the Terminal to set up the EMBER device.

  ```
  /interface bridge add name=bridge0
  /interface wireless security-profiles set [ find default=yes ] supplicant-identity=MikroTik
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

##### What does the cofig do? (Differences from default)

 - Creates a bridge between the `ether2` and `ether3` interfaces
 - No LoRa Servers - TBA by customer
 - Sets a static IP address range for the `ether1` interace (172.31.255.1/24)
 - Creates a DHCP client for the `ether1` interface
 - Sets hostname to `ember`

#### 3.4 Verify Configuration

   - **Export Configuration**: Use the command `/export terse` in the Terminal and review the output. Ensure it matches the configuration above.

---

### 4. Shutdown and Final Steps

   - **Shutdown Device**: Run the command `/system/shutdown` in the Terminal.
   - **Disconnect Power**: Once the device has powered down, disconnect the power supply and ethernet.

## Completion

The EMBER device should now be fully updated and configured as per the specifications outlined in this document.
