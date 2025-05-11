---
slug: /
title: Introduction
---

import Image from '@theme/IdealImage';

# TAPPER

TAPPER is a simple NFC Tag reader, communicating over MQTT.

## Featues

- NFC Tag detection
- MQTT communication
  - TLS connection is currently work-in-progress
- Tamper detection

## MQTT protocol description

TAPPER uses MQTT, sending JSON messages

### JSON Messages

The general JSON message always has a timestamp and payload field

eg. `{"timestamp": float, "payload": payload}`

- `timestamp` is the unix timestamp (epoch time)
- `payload` can be anything supported in [**JSON**](https://en.wikipedia.org/wiki/JSON)

### Topics

Every topic starts with `tapper/$id`, where `id` is the hardware address of the TAPPER, formatted in a human readable format (`aa:bb:cc:dd:ee:ff`).

:::info

The hardware address is acquired using [**`uuid.getnode()`**](https://docs.python.org/3/library/uuid.html#uuid.getnode)

:::

The following table depicts only the payload part of the JSON message - timestamp was excluded for clarity.

|     Topic      |                                  Payload                                   |                  Description                   |                                                 Example                                                  |
| :------------: | :------------------------------------------------------------------------: | :--------------------------------------------: | :------------------------------------------------------------------------------------------------------: |
|    `device`    |                           `"alive"\|"shutdown"`                            | Message sent on startup and shutdown of TAPPER |                                                `"alive"`                                                 |
|  `heartbeat`   | `{"id": str, "uptime": str, "cpu": float, "memory": float, "disk": float}` |   A simple heartbeat, usages are in percent    | `{"id": "aa:bb:cc:dd:ee:ff", "uptime": "2439.9991614818573", "cpu": 17.9, "memory": 38.4, "disk": 12.8}` |
|     `tag`      |                                   `list`                                   |             ID of the detected tag             |                                    `["0xde", "0x76", "0x24", "0xcf"]`                                    |
| `tamper/event` |                            `"Tamper detected!"`                            |          A tamper event was detected           |                                           `"Tamper detected!"`                                           |
| `tamper/init`  |                                   `bool`                                   |      Initital state of the tamper switch       |                                                 `"True"`                                                 |

:::danger

This will change in newer versions.

:::
