---
slug: /
title: Introduction
---

import Image from '@theme/IdealImage';

# TAPPER

**TAPPER** is a secure NFC tag reader powered by a Raspberry Pi Zero 2 W and the PN532 module. It was designed to communicate over MQTT for systems requiring reliable tag verification.

## Basic Features

- NFC Tag detection (verified with MIFARE Classic 1k)
- Secure MQTT communication
  - TLS support
- Tamper detection using a mechanical switch
- Visual and acoustic feedback via integrated RGB LED and Buzzer

## Where next?

- [Client Installation](installation) - Install the TAPPER client on TAPPER
- [Hardware Description](hardware) - Power connections, operating conditions specification
- [Client Usage](usage) - Usage of the TAPPER Client
- [Security Enhancements](security) - Tips for improved security
- [MQTT over TLS](tls-setup) - Setup guide for MQTT over TLS
- [MQTT Specification](api-spec) - MQTT API Specification
