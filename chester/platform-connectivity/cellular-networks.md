---
slug: cellular-networks
title: Cellular Networks
---
import Image from '@theme/IdealImage';

export const Link1 = () => (
  <a href="https://onomondo.com/network-marketplace/lte-m-network-coverage/"><b>Open list</b></a>
);

export const Link2 = () => (
  <a href="https://onomondo.com/network-marketplace/nb-iot-network-coverage/"><b>Open list</b></a>
);

In this article, you will find details on various supported cellular networks and the particular settings in various environments. The **CHESTER** platform supports **LTE-M** and **NB-IoT** cellular technologies using  **nRF9160** System-in-Package from **Nordic Semiconductor**.

In **HARDWARIO**, we do not restrict customers to use any SIM card provider of their preference (as long as the selected carrier offers one of the supported cellular technologies). On the other hand, for the SIM cards provided by **HARDWARIO**, we can provide an extended level of technical support.

As of now, we can deliver SIM cards for these three carriers:

* **LTE-M** connectivity: **Onomondo**
* **NB-IoT** connectivity: **Vodafone**
* **NB-IoT** connectivity: **T-Mobile**

:::caution

For plastic SIM cards, we only support **Nano-SIM** form factor (4FF). Alternatively, **HARDWARIO** can provide a SIM chip variant (MFF2) for bulk orders.

:::

## Network Settings

This article provides settings reference for the tested networks and current **Cloud v2**.

In case of older firmwares, see legacy [**Cloud v1**](#cloud-v1-configuration) chapter.

:::caution

The table below applies to the SIM cards provided by **HARDWARIO**. We cannot guarantee data validity if the SIM cards are sourced from anywhere else.

:::

| Country        | Technology | Carrier  | PLMN ID  | APN                | Remark           |
| :------------- | :--------- | :------- | :------- | :----------------- | :--------------- |
| <Link1/>       | LTE-M      | Onomondo | -        | `onomondo`         |                  |
| <Link2/>       | NB-IoT     | Onomondo | -        | `onomondo`         |                  |
| Australia      | NB-IoT     | Vodafone | `50503`  | `hardwario`        |                  |
| Austria        | NB-IoT     | T-Mobile | `23203`  | `nbiot.telekom.sk` |                  |
| Czech Republic | NB-IoT     | Vodafone | `23003`  | `hardwario`        |                  |
| Germany        | NB-IoT     | Vodafone | `26202`  | `hardwario`        |                  |
| Greece         | NB-IoT     | Vodafone | `20205`  | `hardwario`        |                  |
| Hungary        | NB-IoT     | Vodafone | `21670`  | `hardwario`        |                  |
| Ireland        | NB-IoT     | Vodafone | `27201`  | `hardwario`        |                  |
| Italy          | NB-IoT     | Vodafone | `22210`  | `hardwario`        |                  |
| Netherlands    | NB-IoT     | Vodafone | `20404`  | `hardwario`        |                  |
| New Zealand    | NB-IoT     | Vodafone | `53001`  | `hardwario`        |                  |
| Poland         | NB-IoT     | T-Mobile | `26002`  | `nbiot.telekom.sk` |                  |
| Portugal       | NB-IoT     | Vodafone | `26801`  | `hardwario`        |                  |
| Romania        | NB-IoT     | Vodafone | `22601`  | `hardwario`        |                  |
| Slovakia       | NB-IoT     | T-Mobile | `23102`  | `nbiot.telekom.sk` |                  |
| South Africa   | NB-IoT     | Vodafone | `65501`  | `hardwario`        |                  |
| Spain          | NB-IoT     | Vodafone | `21401`  | `hardwario`        |                  |
| United Kingdom | NB-IoT     | Vodafone | `23415`  | `hardwario`        |                  |
| United States  | NB-IoT     | Vodafone | `310410` | `hardwario`        | Roaming via AT&T |

## Applying Settings

You can apply the settings using these commands:

```
lte config lte-m-mode false
lte config nb-iot-mode true
lte config autoconn false
lte config plmnid 50503
lte config apn hardwario
```

When `autoconn` is `true`, the **`plmnid` parameter is ignored** and SIM searches for the best network according to 3GPP standard.

```
lte config autoconn true
```

:::tip

Having this option enabled is the recommended setting for the **LTE-M** networks (e.g. **Onomondo**).

:::

You must save the settings using this command:

```
config save
```

You can verify the settings using this command:

```
config show
```

Run this command to query the LTE registration state:

```
lte state
```

You can read the IMSI of the SIM card even when the CHESTER is not attached:

```
lte imsi
```

## Onomondo Configuration

This is the reference LTE settings when using **CHESTER** with the **Onomondo** SIM card:

```
lte config lte-m-mode true
lte config nb-iot-mode false
lte config autoconn true
lte config apn onomondo
lte config addr 20.101.123.47
```

## Vodafone Czech Republic NB-IoT Configuration

This is the reference LTE settings when using **CHESTER** with the **Vodafone Czech Republic** SIM card:

```
lte config lte-m-mode false
lte config nb-iot-mode true
lte config autoconn false
lte config apn hardwario
lte config plmnid 23003
lte config addr 192.168.192.4
```

## Slovak Telekom NB-IoT Configuration

This is the reference LTE settings when using **CHESTER** with the **Slovak Telekom** SIM card:

```
lte config lte-m-mode false
lte config nb-iot-mode true
lte config autoconn false
lte config apn nbiot.telekom.sk
lte config plmnid 23102
lte config addr 20.101.123.47
```

## Vodafone Slovakia (Orange)

This is the reference LTE settings when using **CHESTER** with the Czech **Vodafone** SIM card in Slovakia using Orange:

```
lte config lte-m-mode true
lte config nb-iot-mode false
lte config plmnid 23101
```

## Mobily (Saudi Arabia) NB-IoT Configuration

This is the reference LTE settings when using **CHESTER** with the **Mobily** SIM card:

```
lte config lte-m-mode false
lte config nb-iot-mode true
lte config autoconn false
lte config apn M2M-NB
lte config plmnid 42003
lte config addr 20.101.123.47
```

## Cloud v1 configuration

For our legacy [HARDWARIO Cloud v1](https://legacy.hardwario.cloud) firmwares (usually CHESTER catalogue firmware version is 2.x.x) you need to use a different settings for these two config items:

- **IP** with Vodafone SIM card: `lte config addr 192.168.168.1`
- **IP** with non-Vodafone SIM card: `lte config addr 165.227.146.193`
- **APN**: `lte config apn hardwario.com`

Notice the APN has a `.com` suffix, and IP leads to Cloud v1 UDP server.

Don't forget to **save configuration changes by typing `config save`.**

## List Available Networks

You can use CHESTER to scan for networks it can see. This is mainly for troubleshooting purposes.
you have to use J-Link RTT connection with [HARDWARIO CLI](../developer-tools/command-line-tools.md), this doesn't work with a BLE connection.

Open HARDWARIO CLI console by typing `hardwario chester app console`

```
lte config test true
config save

lte test uart enable
lte test wakeup
lte test cmd at\%xsystemmode=1,1,0,0
lte test cmd at+cfun=1
lte test cmd at\%cops=?

<wait for %COPS response>

lte config test false
config save
```

:::warning

Don't forget to disable modem test mode after you get the `%COPS` response so CHESTER can work properly again.

```
lte config test false
config save
```

:::

Response will be in application log during several minutes (e.g. ~3 minutes with usual bandlock for Bands 2, 4, 5, 8, 12, 20, 28) in the form like:

`%COPS: (2,"","","26201",7),(1,"","","26202",7)`

**Output explanation:**

`%COPS: [(<stat>,long alphanumeric <oper>,short alphanumeric <oper>,numeric <oper>[,<AcT>])]`

`<stat>`
- 0 – Unknown
- 1 – Available
- 2 – Current
- 3 – Forbidden

`<oper>`
- PLMNID of operator

`<AcT>`
- 7 – LTE-M
- 9 – NB-IoT

