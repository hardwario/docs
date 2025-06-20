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

|    Behavior     |   Description    |
| :-------------: | :--------------: |
| One Short Beep  | NFC tag detected |
| Continuous Beep | Tamper Detected  |

## Configuration

The TAPPER configuration file uses YAML syntax.

```yaml
mqtt:
  host: "your_host" 
  port: 1883
  tls:
    cafile: "/path/to/file"
    certfile: "/path/to/file"
    keyfile: "/path/to/file"
```

### MQTT

- Host is the host with the MQTT broker. At least this is required.
- Port is the port with the exposed MQTT broker.

### TLS

To set up TLS, refer to [TLS Setup](tls-setup).

- Cafile is the path to the CA file to verify the server certificate with. (The signing CA)
- Certfile is the path to the client certificate file, signed by the CA.
- Keyfile is the path to the client key file.

:::warning[MQTT Server Certificate]

The **MQTT host** must **match** the **CN** or one of the **SANs** specified in the **server** X509 certificate.

See [MQTT TLS Setup](tls-setup)

:::

### Example

An example config file in `/home/hardwario/tapper.conf`:

```yaml
mqtt:
  host: "10.0.0.150"
  port: 8883
  tls:
    cafile: "/home/hardwario/ca.crt"
    certfile: "/home/hardwario/client.crt"
    keyfile: "/home/hardwario/client.key"
```
Would be used with: `tapper run -c /home/hardwario/tapper.conf`
