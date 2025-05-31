---
slug: /usage
title: Client Usage
---

import Image from '@theme/IdealImage';

# TAPPER Client CLI Usage

## Commands

Usage: `tapper COMMAND [OPTIONS] [ARGS]...`

### version

Write the version of the TAPPER client build into stdout.

`tapper version`

### run

Run the client.

`tapper run [OPTIONS]`

#### Options

- `-c` path to the [configuration](#configuration) file
- `-d` show debug output
- `-h` MQTT Broker host
- `--legacy` for use with legacy R1.0 hardware
- `--help` display help

#### Peripherals Behavior

**LED**

|        Behavior        |   Description    |
| :--------------------: | :--------------: |
| One Short Yellow Blink | NFC tag detected |
|  Continuous Red Light  | Tamper detected  |

**Buzzer**

|    Behavior    |   Description    |
| :------------: | :--------------: |
| One Short Beep | NFC tag detected |
| Continous Beep | Tamper Detected  |

# Configuration

The TAPPER configuration file uses YAML syntax.

## Options

:::info

More options are coming.

:::

### MQTT

To set up TLS, refer to [TLS Setup](tls-setup)

```yaml
mqtt:
  host: "your_host" # required
  port: 1883
  tls:
    cafile: "/path/to/file" # path to the self-signed CA certificate file
    certfile: "/path/to/file" # path to the client certificate file, signed by the CA
    keyfile: "/path/to/file" # path to the client key file
```

:::warning[MQTT Server Certificate]

The **MQTT host** must **match** the **CN** or one of the **SANs** specified in the **server** X509 certificate.

See [MQTT TLS Setup](tls-setup)

:::
