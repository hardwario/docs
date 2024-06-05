---
slug: mqtt-broker
title: MQTT Broker Integration
---
import Image from '@theme/IdealImage';

# MQTT

MQTT is an open, simple and low overhead communication protocol for sending messages between many clients which are connected to the central MQTT broker. The FIBER system integrates an MQTT (Message Queuing Telemetry Transport) broker to facilitate seamless communication and interaction with the device or system. MQTT offers users a versatile platform for exchanging data, configuring system parameters, retrieving system information, and executing remote commands.
- Every **message** consists of two parts - **topic** and **payload**
- The **Topic** describes the content of the message and identifies it
- The **Topic** name has a **directory structure** - each level is divided with a symbol `/`
  - Topic can be `bedroom/temperature`, `kitchen/light/set`, etc.
- MQTT server is called the **broker** and clients can **publish messages** and **subscribe to topics**
- The task of the MQTT broker is to **deliver messages** from **publishers** to **subscribers**
- You can use two so-called **wildcards** while subscribing to the MQTT topic
  - `+` wildcard will subscribe to all topics in the specified topic
    - e.g. `+/light/set` will subscribe to `bedroom/light/set`, `kitchen/light/set`, etc.
  - `#` wildcard will subscribe to all sub-topics of a specified topic
    - e.g. `kitchen/#` will subscribe to `kitchen/light/set`, `kitchen/light/get`, `kitchen/temperature/get`, etc.
      :::caution

      The wildcard **#** can be used only at the **end of the topic** name

      :::

:::tip

You can read [**more about the MQTT topics and how to use them**](https://www.hivemq.com/blog/mqtt-essentials-part-5-mqtt-topics-best-practices/).

:::


## FIBER Topics

### System

|  Explanation            |    MQTT Topic                  |                        Response                        |
| :---------------------- | :----------------------------: | :----------------------------------------------------: |
| Get Device IP Address   | `fiber/{id}/system/ip/get`     | `"10.0.0.111"`  `"ok"`       |
| Get Device MAC Address  | `fiber/{id}/system/mac/get`    | `"d1:1a:dd:11:1d:11"` `"ok"` |
| Get Device Uptime       | `fiber/{id}/system/uptime/get` | `11111.11` `"ok"`            |
| Request Device Reboot (payload-delay)   | `fiber/{id}/system/reboot`   | `{payload}` ` -> rebooting `           |

### Voltage

|    Explanation   |      MQTT Topic         | Response  |
| :-------------   | :---------------------: | :-------: |
| Voltage          | `fiber/{id}/voltage/get`|  `{"battery_voltage": 0.0, "poe_voltage": 0.0}`|

### Config

|  Explanation             |    MQTT Topic                  |                        Response                              |
| :----------------------- | :----------------------------: | :----------------------------------------------------------: |
| Get Current Configuration| `fiber/{id}/config/get`        | `{"version": 1, "system": {"interface": "end0,eth0", ... }}` `"ok"` |

|  Explanation |    MQTT Topic  |   Payload     |      Response |
| :----------- | :------------: | :-----------: | :-----------: |
|Set Configuration|`fiber/{id}/config/get`|`{"version": 2, "system": {"interface": "end0,eth0", ... }}`| `{"version": 2, "system": {"interface": "end0,eth0", ... }}` `"ok"`|

# Mosquitto MQTT Broker Integration

#### Overview

The integration of the Mosquitto MQTT broker into our product enhances its capabilities by providing a robust messaging infrastructure. Mosquitto facilitates the communication between different components of the system, enabling seamless data exchange and further system expansion.

#### Usage

When connected to FIBER, you can use the mosquitto-cli package to subscribe to MQTT topics and monitor incoming messages. Perform the following steps:

Ensure that the Mosquitto MQTT broker is installed and running on your system.

Use the following command to subscribe to all topics (#) and display incoming messages:

```
mosquitto_sub -t "#" -v
```

```
fiber/2158512345/beacon {"uptime": 11111.11, "ip_address": "10.0.0.111", "mac_address": "d1:1a:dd:11:1d:11"}
fiber/2158512345/measurement {"5": {"28-00000dc9cd6b": [{"timestamp": 1717581574, "value": {"minimum": 22.5, "maximum": 25.19, "average": 23.4, "median": 22.5, "last": 25.11}, "sample_count": 3}]}}
```

To retrieve information from the system via MQTT, you can use the following command:

```
mosquitto_pub -h localhost -t fiber/2158512345/system/ip/get -m ""
```
```
fiber/2158512345/system/ip "10.0.0.111"
```
