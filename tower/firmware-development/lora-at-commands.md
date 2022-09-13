---
slug: lora-at-commands
title: LoRa AT Commands Configuration
---
import Image from '@theme/IdealImage';

This document describes how to configure HARDWARIO TOWER LoRa devices with AT commands over a USB virtual serial port.

:::info

This document does not explain project-specific firmware commands and functions. They are explained in the project itself.

These commands apply to all firmware in the [**HARDWARIO Playground**](../desktop-programming/about-playground.md) with the prefix `twr-lora-`

:::

## About AT Commands

To list all possible commands use `AT$HELP`. The set of supported commands will depend on your firmware version.

<details><summary><b>AT$HELP Example Output</b></summary>
<p>

```showLineNumbers
AT$HELP
AT$DEVEUI
AT$DEVADDR
AT$NWKSKEY
AT$APPSKEY
AT$APPKEY
AT$APPEUI
AT$BAND 0:AS923, 1:AU915, 5:EU868, 6:KR920, 7:IN865, 8:US915
AT$MODE 0:ABP, 1:OTAA
AT$NWK Network type 0:private, 1:public
AT$ADR Automatic data rate 0:disabled, 1:enabled
AT$DR Data rate 0-15
AT$REPU Repeat of unconfirmed transmissions 1-15
AT$REPC Repeat of confirmed transmissions 1-8
AT$JOIN Send OTAA Join packet
AT$FRMCNT Get frame counters
AT$LNCHECK MAC Link Check
AT$RFQ Get RSSI/SNR of last RX packet
AT$DEBUG Show debug UART communication
AT$REBOOT Firmware reboot
AT$FRESET LoRa Module factory reset
AT$SEND Immediately send packet
AT$STATUS Show status
AT$BLINK LED blink 3 times
AT$LED LED on/off
AT+CLAC List all available AT commands
AT$HELP This help
```

</p>
</details>

### Read Value

To read the value of a variable, you just have to append the question mark `?` to the end of the **corresponding AT command**

```
AT$APPSKEY?
```

The current value of the variable will be shown in the terminal

```
APPSKEY: BF22C15EB89237A65DAABB05B2C91EB4
```

### Update Value

To update the value of the variable use the following syntax of a variable followed by `=` and the desired value

```
AT$APPSKEY=BF22C15EB89237A65DAABB05B2C91EB4
```

:::tip

You can use [**online key generators**](https://loratools.nl/#/keys) for testing purposes

:::

