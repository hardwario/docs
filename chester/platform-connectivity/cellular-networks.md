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


### Vodafone SIM EU28+2

This table applies for Vodafone SIM card. The `Carrier` column shows which roaming partner Vodafone uses in this area.

| Country                | Technology    | Carrier                           | PLMN ID  | APN         |
| :--------------------- | :------------ | :-------------------------------- | :------- | :---------- |
| Australia              | NB-IoT        | Vodafone                          | `50503`  | `hardwario` |
| Austria                | NB-IoT, LTE-M | A1 Austria                        | `23201`  | `hardwario` |
| Austria                | NB-IoT, LTE-M | Magenta T-Mobile Austria          | `23203`  | `hardwario` |
| Balearic               | NB-IoT, LTE-M | Vodafone Spain                    | `21401`  | `hardwario` |
| Belgium                | NB-IoT, LTE-M | Proximus Belgium                  | `20601`  | `hardwario` |
| Belgium                | NB-IoT, LTE-M | Orange Belgium                    | `20610`  | `hardwario` |
| Belgium                | NB-IoT, LTE-M | Base Belgium                      | `20620`  | `hardwario` |
| Bulgaria               | NB-IoT        | A1 Bulgaria                       | `28401`  | `hardwario` |
| Canada                 | LTE-M         | Telus Canada                      | `302220` | `hardwario` |
| Canada                 | LTE-M         | Bell Mobility Canada              | `302610` | `hardwario` |
| Canary Islands         | NB-IoT, LTE-M | Vodafone Spain                    | `21401`  | `hardwario` |
| Ceuta                  | NB-IoT, LTE-M | Vodafone Spain                    | `21401`  | `hardwario` |
| Croatia                | NB-IoT        | A1 HR                             | `21910`  | `hardwario` |
| Czech Republic         | NB-IoT        | T-Mobile Czech Republic           | `23001`  | `hardwario` |
| Czech Republic         | NB-IoT, LTE-M | Vodafone Czech Republic           | `23003`  | `hardwario` |
| Denmark                | NB-IoT, LTE-M | Nuuday                            | `23801`  | `hardwario` |
| Denmark                | NB-IoT, LTE-M | Telenor Denmark                   | `23802`  | `hardwario` |
| Denmark                | LTE-M         | Telia Denmark                     | `23820`  | `hardwario` |
| Estonia                | LTE-M         | Telia Estonia                     | `24801`  | `hardwario` |
| Estonia                | NB-IoT, LTE-M | Elisa Estonia                     | `24802`  | `hardwario` |
| Finland                | NB-IoT, LTE-M | Elisa Finland                     | `24405`  | `hardwario` |
| Finland                | NB-IoT, LTE-M | DNA Oy Finland                    | `24412`  | `hardwario` |
| Finland                | LTE-M         | Telia Finland                     | `24491`  | `hardwario` |
| France                 | LTE-M         | Orange France                     | `20801`  | `hardwario` |
| France                 | LTE-M         | SFR France                        | `20810`  | `hardwario` |
| France                 | NB-IoT, LTE-M | Bouygues France                   | `20820`  | `hardwario` |
| Germany                | NB-IoT, LTE-M | T-Mobile Germany                  | `26201`  | `hardwario` |
| Germany                | NB-IoT, LTE-M | Vodafone Germany                  | `26202`  | `hardwario` |
| Germany                | NB-IoT, LTE-M | Telefonica Germany                | `26207`  | `hardwario` |
| Greece                 | NB-IoT        | Vodafone-Panafon Greece           | `20205`  | `hardwario` |
| Hong Kong              | NB-IoT        | 3 Hong Kong                       | `45403`  | `hardwario` |
| Hungary                | NB-IoT, LTE-M | Telekom Hungary                   | `21630`  | `hardwario` |
| Hungary                | NB-IoT, LTE-M | Vodafone Hungary                  | `21670`  | `hardwario` |
| Iceland                | NB-IoT        | Vodafone Iceland                  | `27402`  | `hardwario` |
| Ireland                | NB-IoT        | Vodafone Ireland                  | `27201`  | `hardwario` |
| Ireland                | NB-IoT, LTE-M | Three Ireland (Hutchison) Limited | `27205`  | `hardwario` |
| Italy                  | NB-IoT, LTE-M | Vodafone Italy                    | `22210`  | `hardwario` |
| Italy                  | NB-IoT        | Wind Tre                          | `22288`  | `hardwario` |
| Japan                  | LTE-M         | NTT Docomo Japan                  | `44010`  | `hardwario` |
| Japan                  | LTE-M         | Softbank Japan                    | `44020`  | `hardwario` |
| Latvia                 | NB-IoT, LTE-M | LMT Latvia                        | `24701`  | `hardwario` |
| Liechtenstein          | NB-IoT, LTE-M | Swisscom Switzerland              | `22801`  | `hardwario` |
| Liechtenstein          | LTE-M         | Mobilkom Liechtenstein            | `29505`  | `hardwario` |
| Luxembourg             | LTE-M         | Post Luxembourg                   | `27001`  | `hardwario` |
| Madeira                | NB-IoT, LTE-M | Vodafone Portugal                 | `26801`  | `hardwario` |
| Malta                  | NB-IoT, LTE-M | Melita Mobile Ltd.                | `27877`  | `hardwario` |
| Melilla                | NB-IoT, LTE-M | Vodafone Spain                    | `21401`  | `hardwario` |
| Mexico                 | LTE-M         | Telcel Mexico                     | `334020` | `hardwario` |
| Mexico                 | LTE-M         | IUSACell Mexico                   | `334050` | `hardwario` |
| Netherlands            | NB-IoT, LTE-M | Vodafone Netherlands              | `20404`  | `hardwario` |
| Netherlands            | NB-IoT, LTE-M | Odido Netherlands                 | `20416`  | `hardwario` |
| New Zealand            | NB-IoT, LTE-M | One NZ                            | `53001`  | `hardwario` |
| Norway                 | NB-IoT, LTE-M | Telenor Mobil Norway              | `24201`  | `hardwario` |
| Poland                 | LTE-M         | Orange Poland                     | `26003`  | `hardwario` |
| Portugal               | NB-IoT, LTE-M | Vodafone Portugal                 | `26801`  | `hardwario` |
| Puerto Rico            | NB-IoT, LTE-M | T-Mobile United States            | `310260` | `hardwario` |
| Puerto Rico            | LTE-M         | Claro Puerto Rico                 | `330110` | `hardwario` |
| Romania                | NB-IoT, LTE-M | Vodafone Romania                  | `22601`  | `hardwario` |
| Romania                | LTE-M         | Orange Romania                    | `22610`  | `hardwario` |
| Russia                 | NB-IoT        | MTS Russia                        | `25001`  | `hardwario` |
| San Marino             | NB-IoT, LTE-M | Vodafone Italy                    | `22210`  | `hardwario` |
| Santa Cruz de Tenerife | NB-IoT, LTE-M | Vodafone Spain                    | `21401`  | `hardwario` |
| Slovakia               | NB-IoT, LTE-M | Orange Slovakia                   | `23101`  | `hardwario` |
| Slovenia               | NB-IoT, LTE-M | A1 Slovenia                       | `29340`  | `hardwario` |
| South Africa           | NB-IoT        | Vodacom South Africa              | `65501`  | `hardwario` |
| Spain                  | NB-IoT, LTE-M | Vodafone Spain                    | `21401`  | `hardwario` |
| Sweden                 | NB-IoT, LTE-M | Tele2 AB Sweden                   | `24007`  | `hardwario` |
| Sweden                 | LTE-M         | Telenor Sweden                    | `24008`  | `hardwario` |
| Switzerland            | NB-IoT, LTE-M | Swisscom Switzerland              | `22801`  | `hardwario` |
| Switzerland            | NB-IoT, LTE-M | Sunrise Switzerland               | `22802`  | `hardwario` |
| Taiwan                 | NB-IoT        | FarEasTone Taiwan                 | `46601`  | `hardwario` |
| United Kingdom         | NB-IoT        | Vodafone United Kingdom           | `23415`  | `hardwario` |
| United States          | NB-IoT, LTE-M | T-Mobile United States            | `310260` | `hardwario` |
| United States          | NB-IoT, LTE-M | AT&T                              | `310410` | `hardwario` |
| Vatican                | NB-IoT, LTE-M | Vodafone Italy                    | `22210`  | `hardwario` |
| Vietnam                | NB-IoT        | Viettel Vietnam                   | `45204`  | `hardwario` |

### Another carriers

The `Carrier` column shows which SIM card you have to use.

| Country  | Technology | Carrier  | PLMN ID | APN                |
| :------- | :--------- | :------- | :------ | :----------------- |
| <Link1/> | LTE-M      | Onomondo | -       | `onomondo`         |
| <Link2/> | NB-IoT     | Onomondo | -       | `onomondo`         |
| Austria  | NB-IoT     | T-Mobile | `23203` | `nbiot.telekom.sk` |
| Poland   | NB-IoT     | T-Mobile | `26002` | `nbiot.telekom.sk` |
| Slovakia | NB-IoT     | T-Mobile | `23102` | `nbiot.telekom.sk` |


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
lte config show
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
lte config nb-iot-mode false
lte config lte-m-mode true
lte config plmnid 23101
lte config apn hardwario
lte config addr 192.168.192.4
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

