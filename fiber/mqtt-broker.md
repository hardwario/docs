---
slug: mqtt-broker
title: MQTT Broker Integration
---
import Image from '@theme/IdealImage';

# MQTT Broker Integration

The Fiber system integrates an MQTT (Message Queuing Telemetry Transport) broker to facilitate seamless communication and interaction with the device or system. MQTT offers users a versatile platform for exchanging data, configuring system parameters, retrieving system information, and executing remote commands. Below is a guide on how to utilize the MQTT broker effectively:

- **/config/get**: Retrieves the current system configuration.
- **/config/set**: Sets or updates the system configuration.
- **/system/mac/get**: Retrieves the MAC (Media Access Control) address of the device.
- **/system/ip/get**: Retrieves the IP (Internet Protocol) address of the device.
- **/system/uptime/get**: Retrieves the uptime of the device.
- **/system/reboot**: Initiates a system reboot.