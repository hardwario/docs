---
title: Maintenance
---
import Image from '@theme/IdealImage';

# Maintenance (`settings`)

The `settings` command persists and resets stored configuration over the developer shell (see [**Firmware Setup**](firmware-setup.md) for opening the console). A `config` change applies in RAM immediately but is lost on reboot until it is saved.

| Command | Description |
|---|---|
| `settings save` | Persist staged `config` changes to flash, then reboot. |
| `settings reset` | Restore application config and alarm rules to defaults (device identity and LoRaWAN credentials are kept), then reboot. |
| `settings erase` | Full NVS wipe, including identity and LoRaWAN credentials, then reboot. Destructive and shell-only. |

:::caution
`settings erase` removes the device identity and LoRaWAN credentials. Use it only to return a unit to a blank state.
:::
