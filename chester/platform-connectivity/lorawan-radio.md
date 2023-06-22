---
slug: lorawan-radio
title: LoRaWAN Radio
---
import Image from '@theme/IdealImage';

CHESTER-M mainboard contains also LoRaWAN radio. [Catalog applications](catalog-applications/index.md) have both NB-IoT/LTE-M and LoRaWAN radio populated. Thanks to this you can easily switch to different radio just by a software reconfiguration.

CHESTER is using **CMWX1ZZABZ-078** module from **Murata**. This module has manufacturer firmware that takes care of all the LoRaWAN communication. It is also possible to flash our own [lora-modem](https://github.com/hardwario/lora-modem) open-source firmware, which is backward-compatible with the manufacturer's, but also adds more functionality and higer LoRaWAN version support. It is also [very well documented](https://github.com/hardwario/lora-modem/wiki/AT-Command-Interface), however this AT communication is handled by CHESTER so all you need is to set-up keys as explained below.

# EMBER LoRaWAN Gateway

We also offer **LoRaWAN gateway EMBER** ([EMBER docs](../../ember), [EMBER e-shop](https://shop.hardwario.com/ember/)). This gateway can manage LoRaWAN communication with CHESTER and network software could be running in our HARDWARIO Cloud, or completely in your infrastructure. LoRaWAN network is very flexible, reliable with long range and we use it in big factories or large open areas.

EMBER is using [CHIRPSTACK](https://www.chirpstack.io/) and [Node-RED](https://nodered.org/) for device management and further integrations.

# CHESTER LoRaWAN Configuration

Here is an example configuration parameters that CHESTER supports. You can use these tools to configure network keys and configuration:
- [HARDWARIO Manager](../platform-connectivity/hardwario-manager.md)
- [HARDWARIO Terminal](https://terminal.hardwario.com/) experimental Chrome BLE console
- J-Link with [HARDWARIO CLI Console](../developer-tools/command-line-tools.md#interactive-console)

:::tip

Not all catalog firmwares support switching NB-IoT/LTE-M to LoRaWAN radio over config. Please let us know so we can build firmware exactly for your needs.

:::

There are a lot of configurations like **ABP**** or **OTAA** authentication. The modem can be also set to fixed datarate to get the longest range. It also supports class **A** and **C** modes for receiving downlink messages.

To show the current configuration, type `lrw config show` to print a complete configuration.

```
lrw config test false
lrw config antenna int
lrw config band eu868
lrw config chmask
lrw config class a
lrw config mode otaa
lrw config nwk private
lrw config adr true
lrw config datarate 0
lrw config dutycycle true
lrw config devaddr 66445903
lrw config deveui 0000000000000000
lrw config joineui 0000000000000000
lrw config appkey 00000000000000000000000000000000
lrw config nwkskey 00000000000000000000000000000000
lrw config appskey 00000000000000000000000000000000
```
