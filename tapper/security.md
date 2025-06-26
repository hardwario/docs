---
slug: /security
title: Security Enhancements
---

import Image from '@theme/IdealImage';

# Improving Security

This document depicts a few steps for enhancing the security of your TAPPER.

## SSH with public-key authentication only

This allows for a safer and faster login.

### Procedure

- Before flashing your Raspberry Pi with RPi Imager, go to the [OS Customization](https://www.raspberrypi.com/documentation/computers/getting-started.html#advanced-options) and turn on SSH with public-key autherntication only.
  - An EdDSA (Ed25519) SSH key is recommended
    - If you don't have an SSH key you could use, make a new one `ssh-keygen -t ed25519`

## MQTT with TLS

MQTT can work using TLS. This is recomended as it prevents eavesdropping and unauthorized requests. 

### Procedure

The entire TLS Setup is described in [MQTT TLS Setup](tls-setup).