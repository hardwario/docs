---
slug: /cellular-networks
title: Cellular Networks
---
import Image from '@theme/IdealImage';

export const Link1 = () => (
  <a href="https://onomondo.com/network-marketplace/lte-m-network-coverage/"><b>Open list</b></a>
);

export const Link2 = () => (
  <a href="https://onomondo.com/network-marketplace/nb-iot-network-coverage/"><b>Open list</b></a>
);

In this article, you will find details on various supported cellular networks and the particular settings in various environments. The **CHESTER** platform supports **LTE-M** and **NB-IoT** cellular technologies.

:::tip

The connectivity is enabled through the **nRF9160** System-in-Package from **Nordic Semiconductor**.

:::

In **HARDWARIO**, we do not restrict customers to use any SIM card provider of their preference (as long as the selected carrier offers one of the supported cellular technologies). On the other hand, for the SIM cards provided by **HARDWARIO**, we can provide an extended level of technical support.

As of now, we can deliver SIM cards for these three carriers:

* **LTE-M** connectivity: **Onomondo**
* **NB-IoT** connectivity: **Vodafone**
* **NB-IoT** connectivity: **T-Mobile**

:::caution

For plastic SIM cards, we only support **Nano-SIM** form factor (4FF). Alternatively, **HARDWARIO** can provide a SIM chip variant (MFF2) for bulk orders.

:::

## Network Settings

This article provides settings reference for the tested networks:

:::caution

The table below applies to the SIM cards provided by **HARDWARIO**. We cannot guarantee data validity if the SIM cards are sourced from anywhere else.

:::

| Country        | Technology | Carrier  | PLMN ID  | APN                | Remark           |
| :------------- | :--------- | :------- | :------- | :----------------- | :--------------- |
| <Link1/>       | LTE-M      | Onomondo | -        | `onomondo`         |                  |
| <Link2/>       | NB-IoT     | Onomondo | -        | `onomondo`         |                  |
| Australia      | NB-IoT     | Vodafone | `50503`  | `hardwario.com`    |                  |
| Austria        | NB-IoT     | T-Mobile | `23203`  | `nbiot.telekom.sk` |                  |
| Czech Republic | NB-IoT     | Vodafone | `23003`  | `hardwario.com`    |                  |
| Germany        | NB-IoT     | Vodafone | `26202`  | `hardwario.com`    |                  |
| Greece         | NB-IoT     | Vodafone | `20205`  | `hardwario.com`    |                  |
| Hungary        | NB-IoT     | Vodafone | `21670`  | `hardwario.com`    |                  |
| Ireland        | NB-IoT     | Vodafone | `27201`  | `hardwario.com`    |                  |
| Italy          | NB-IoT     | Vodafone | `22210`  | `hardwario.com`    |                  |
| Netherlands    | NB-IoT     | Vodafone | `20404`  | `hardwario.com`    |                  |
| New Zealand    | NB-IoT     | Vodafone | `53001`  | `hardwario.com`    |                  |
| Poland         | NB-IoT     | T-Mobile | `26002`  | `nbiot.telekom.sk` |                  |
| Portugal       | NB-IoT     | Vodafone | `26801`  | `hardwario.com`    |                  |
| Romania        | NB-IoT     | Vodafone | `22601`  | `hardwario.com`    |                  |
| Slovakia       | NB-IoT     | T-Mobile | `23102`  | `nbiot.telekom.sk` |                  |
| South Africa   | NB-IoT     | Vodafone | `65501`  | `hardwario.com`    |                  |
| Spain          | NB-IoT     | Vodafone | `21401`  | `hardwario.com`    |                  |
| United Kingdom | NB-IoT     | Vodafone | `23415`  | `hardwario.com`    |                  |
| United States  | NB-IoT     | Vodafone | `310410` | `hardwario.com`    | Roaming via AT&T |

## Applying Settings

You can apply the settings using these commands:

```
lte config lte-m-mode false
lte config nb-iot-mode true
lte config autoconn false
lte config plmnid 50503
lte config apn hardwario.com
```

If you need to search for the network automatically, enable the `autoconn` parameter:

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

## Onomondo Configuration

This is the reference LTE settings when using **CHESTER** with the **Onomondo** SIM card:

```
lte config lte-m-mode true
lte config nb-iot-mode false
lte config autoconn true
lte config apn onomondo
lte config addr 165.227.146.193
```
