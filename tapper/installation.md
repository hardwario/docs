---
slug: /installation
title: Installation
---

import Image from '@theme/IdealImage';

# TAPPER Client Installation

Basic installation of the tapper client application

## Prepare

:::info[TL;DR]

```bash
# For easy copy
sudo apt update && sudo apt upgrade
sudo reboot
# reconnect
sudo apt install git pipx python3-dev
pipx ensurepath
sudo raspi-config # enable serial port and SPI
pipx install 'git+ssh://git@github.com/hardwario/tapper.git@main#egg=tapper' # stable
```

Continue at [Test-it-out](#test-it-out)

:::

### Flash the Raspberry Pi

- Use a tool like [Raspberry Pi Imager](https://github.com/raspberrypi/rpi-imager)
- Flash the Raspberry Pi OS Lite

### Update the Raspberry Pi

- Connect to your raspberry through SSH (`ssh <host>` - you can replace host with your RPi's hostname if mDNS is enabled)
- Run `sudo apt update && sudo apt upgrade`
  - This will update your indexes and downloads newer versions of installed packages if present
- Reboot (`sudo reboot`)

### Install and set up required packages

- We will need `git`, `pipx`, and `python3-dev`
- `sudo apt install git pipx python3-dev`
- `pipx` needs to be added to PATH: `pipx ensurepath`

#### Why these?

- [Git](https://en.wikipedia.org/wiki/Git) for downloading the tapper source
- [pipx](https://pipx.pypa.io/stable/) for instalation into a separate virtual environment
- python3-dev are utilities for Python modules using C compiled code

### Enable SPI and serial port

- Enable the serial port and SPI interface using `sudo raspi-config`
  - They are under Interface options

### Prepare git (optional, recommended)

- Set up [SSH keys on GitHub](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)
- Add [GitHub](https://github.com) to you `known_hosts`
  - Probably easiest is to `ssh git@github.com` and then yes when prompted to verify [fingerprints](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/githubs-ssh-key-fingerprints)
  - Or add the [fingerprints](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/githubs-ssh-key-fingerprints) to `~/.ssh/known_hosts`

### Install the TAPPER client

:::tip[Regular Install (recommended)]

**Regular install**: `pipx install 'git+ssh://git@github.com/hardwario/tapper.git@main#egg=tapper'`

:::

:::danger[Bleeding Edge]

Bleeding-edge install (likely to experience bugs): `pipx install 'git+ssh://git@github.com/hardwario/tapper.git@dev#egg=tapper'`

:::

### Test it out

- Run TAPPER in debug mode: `tapper run -d -h <your_mqtt_broker_host>`

:::info

- `-d` enables DEBUG logging into the CLI
- `-h` specifies the MQTT host

:::
