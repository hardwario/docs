---
slug: /api-spec
title: MQTT API specification
---

import Image from '@theme/IdealImage';

# MQTT API specification

TAPPER can communicate over MQTT, using JSON messages.

## Topic

Every MQTT Topic starts with `tapper/$id/`, where id is the hardware address of TAPPER.

## Payload

TAPPER uses JSON formatted payloads.

Each Payload includes a timestamp.

### Events

TAPPER has multiple events defined in the API.

|           Topic           |                         Payload                         |
| :-----------------------: | :-----------------------------------------------------: |
|  `tapper/$id/event/boot`  |                 `{"timestamp": float }`                 |
| `tapper/$id/event/tamper` | `{"timestamp": float, "state": "active" \| "inactive"}` |
|  `tapper/$id/event/tag`   |           `{"timestamp": number, "id": str}`            |

:::info[Tags]

Tag UID is sent in the form of a big-endian hex string.

:::

### Interfaces

TAPPER has an RGB LED and a Buzzer for interaction with the user.

These can be activated through a request sent through MQTT in accordance with this specification.

#### Request

The request topic is `tapper/$id/control/request`.

The request payload:
```json
{
    "timestamp": float
    "id": int,
    "output": { // relay
            "command":"activate"|"deactivate"|"pulse",
            "duration": int (optional, only for pulse)
        },
    "visual": { // LED
            // either "state" or "pattern" must be set
            "state": "off" | "on/red" | "on/green" | "on/blue" | "on/yellow",
            "pattern":  "p1/red"    | "p2/red"    | "p3/red"    | "p4/red"   |
                        "p1/green"  | "p2/green"  | "p3/green"  | "p4/green" |
                        "p1/blue"   | "p2/blue"   | "p3/blue"   | "p4/blue"  |
                        "p1/yellow" | "p2/yellow" | "p3/yellow" | "p4/yellow"
            // "p1" is one long blink
            // "p2" is two long blinks
            // "p3" is three long blinks
            // "p4" is four short blinks (error)
        },
    "acoustic": { // buzzer
            "pattern": "p1" | "p2" | "p3" | "p4" // same as visual
        }
}
```




#### Response

|               Result               |             Topic             |                              Payload                               |
| :--------------------------------: | :---------------------------: | :----------------------------------------------------------------: |
| <font color="green">Success</font> | `tapper/$id/control/response` |       `{"timestamp": float, "id": int, "result": "success"}`       |
|   <font color="red">Error</font>   | `tapper/$id/control/response` | `{"timestamp": float, "id": int, "result": "error", "error": str}` |