---
slug: /installation
title: Installation
---

import Image from '@theme/IdealImage';

# TAPPER Client Installation

Basic installation of the TAPPER client application.

## Prepare

:::info[TL;DR]

- Flash RPi
- Update RPi and install client
  ```bash
  # For easy copy
  sudo apt update && sudo apt upgrade
  sudo reboot
  # reconnect
  sudo apt install git pipx python3-dev cmake libdbus-1-dev libglib2.0-dev
  pipx ensurepath
  sudo raspi-config # enable serial port and SPI
  pipx install 'git+ssh://git@github.com/hardwario/tapper.git@main#egg=tapper' # stable
  ```
- Continue at [Test it out](#test-it-out)

:::

### Flash the Raspberry Pi

- Use a tool like [Raspberry Pi Imager](https://github.com/raspberrypi/rpi-imager)
  - [Raspberry Pi Imager documentation](https://www.raspberrypi.com/documentation/computers/getting-started.html#raspberry-pi-imager)
  - Raspberry Pi OS **Lite** is recommended

:::tip

Raspberry Pi Imager allows you to set up a hostname, SSH access, WiFi, and [other settings](https://www.raspberrypi.com/documentation/computers/getting-started.html#advanced-options).

:::

:::caution[SSH Security]

It is recommended to set up **SSH with public-key authentication** only.  
RPi Imager lets you do this within [OS Customization](https://www.raspberrypi.com/documentation/computers/getting-started.html#advanced-options).

:::

### Update the Raspberry Pi

- Connect to your Raspberry Pi through SSH (`ssh <host>`)
- Run `sudo apt update && sudo apt upgrade`
  - This will update your indexes and download newer versions of installed packages
- Reboot (`sudo reboot`)

### Install and set up required packages

- We will need `git`, `pipx`, `python3-dev`, `cmake`, `libdbus-1-dev`, and `libglib2.0-dev`: `sudo apt install git pipx python3-dev cmake libdbus-1-dev libglib2.0-dev`
- `pipx` needs to be added to PATH: `pipx ensurepath`
  - This adds an entry into your `~/.bashrc`
  - To load it without logging out, use `source ~/.bashrc`

#### Why these?

- [Git](https://en.wikipedia.org/wiki/Git) for downloading the TAPPER Client
- [pipx](https://pipx.pypa.io/stable/) for installation into a separate virtual environment
- `python3-dev` are utilities for Python modules using C-compiled code
- [CMake](https://cmake.org/) for some compiled dependencies
- `libdbus-1-dev` is a library for dbus operations, dependency
- [GLib](https://docs.gtk.org/glib/) is a general-purpose, portable utility library, dependency

### Enable SPI and serial port

- Enable the serial port and SPI interface using `sudo raspi-config`
  - They are under Interface options

### Install the TAPPER client

:::tip[Regular Install (recommended)]

**Regular install**: `pipx install 'git+https://github.com/hardwario/tapper.git@main#egg=tapper'`

:::

:::danger[Bleeding Edge]

Bleeding-edge install (likely to experience bugs): `pipx install 'git+https://github.com/hardwario/tapper.git@dev#egg=tapper'`

`pipx` experimentally supports suffixes if you want the bleeding-edge version with a suffix, append `--suffix <suffix>` to the command.  
Example: `--suffix dev` would result in the command `tapperdev`

:::

### Test it out

- Run TAPPER in debug mode: `tapper run -d -h <your_mqtt_broker_host>`

:::info

- `-d` enables DEBUG logging into the CLI
- `-h` specifies the MQTT host

:::
