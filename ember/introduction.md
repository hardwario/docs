---
slug: /
title: Introduction
---
import Image from '@theme/IdealImage';

# EMBER

**EMBER** platform provides transmission and processing of measured sensor values and control of actuators in industrial sites.

We utilize **LoRaWAN** for industrial site **LPWAN**, **LTE** for connectivity to cloud services, cloud components for **LoRaWAN** server, and **Node-RED** for **REST** integrations.

It is composed of those parts:

* The industrial sites where **EMBER IoT Hotspot** and **CHESTER** are located

  * **EMBER Hotspot** - Outdoor **LoRaWAN** gateway

  * **CHESTER** - Outdoor sensing and control device with **LoRaWAN** modem

* **LTE** transport from **Onomondo**

* **EMBER Cloud** service with those services

  * **ChirpStack** - **LoRaWAN Network Server**

  * **Node-RED** - Low-code programming for event-driven integrations

Data visualization and processing can be done using specialized cloud services or on-premise applications.

## System Concept

There is at least one site for **EMBER** service, but you can use several cloud services and several sites.

The minimal site configuration is:

* One **LoRaWAN** device (such as CHESTER)

* One **LoRaWAN** gateway (EMBER Hotspot)

* One instance of a **LoRaWAN** server (e.g., **EMBER Cloud** operated by **HARDWARIO**)

Every **EMBER Hotspot** can serve more than 100 **LoRaWAN** devices if these are within the radio coverage.

:::tip

The redundant site configuration comes with a minimum of two **EMBER Hotspot** units (both within the radio coverage of the devices).

:::

The supported **LoRaWAN** protocol is based on the [**LoRaWAN specification**](https://lora-alliance.org/about-lorawan/).

The supported **LTE** connectivity is based on **3GPP** specifications.

The **EMBER Cloud** service operates on the virtual private servers of the [**Digital Ocean**](https://www.digitalocean.com/products/droplets) cloud computing service.

The **EMBER Cloud** is interconnected with all **EMBER Hotspot** units by two independent **VPN** tunnels (Virtual Private Networks) over the **LTE** internet connectivity:

* **OpenVPN** TCP-based VPN for **LoRaWAN** traffic

* **WireGuard** UDP-based VPN for remote management of **EMBER Hotspot**
