---
slug: /usage
title: Client Usage
---

import Image from '@theme/IdealImage';

# TAPPER Client CLI Usage

## Commands

`tapper command [options]`

## version

Write the version of the TAPPER client build into the stdout.

`tapper version`

## run

Run the client.

`tapper run [options]`

### Options

- `-c` path to the [configuration](#configuration) file
- `-d` show debug output
- `-h` MQTT Broker host
- `--legacy` for use with legacy R1.0 hardware

# Configuration

The TAPPER configuration file is written using the YAML syntax.

## Options

:::info

More options are coming.

:::

### MQTT

```yaml
mqtt:
  host: "your_host"
```
