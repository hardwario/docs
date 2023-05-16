---
slug: installation-in-virtualbox
title: Installation in VirtualBox
---
import Image from '@theme/IdealImage';

# Installation in VirtualBox

The following article will guide you through the **CHESTER SDK** using in **VirtualBox** virtual machine. Virtual machine contains all development tools and you program and edit code in your native operating system in VSCode using SSH extension.

## Installation Steps

### Virtual machine
- Download [VirtualBox](https://www.virtualbox.org/wiki/Downloads)
- Download virtual machine image [hio-ubuntu](https://drive.google.com/file/d/1KpT_-cdA4LOhBEV7FfmNybCIZTgsyOii/view?usp=sharing) (6.62GB)
- In Virtualbox import `hio-ubuntu.ova` file in `File > Import Appliance`.

:::caution
On Linux / macOS host OS you might need to add current user to `vboxusers` group by typing

```
sudo usermod -a -G vboxusers $USER
```

or `sudo adduser $USER vboxusers`

Then you need to log-out and log-in to apply changes.
:::

- Run the virtual machine. Log-in with `martin/hardwario` credentials and note an IP address. You will connect to it from VSCode later.

:::info
The VM has pre-configured that J-Link will be routed inside the VM and also in network configuration, there is opened port 22 for SSH connection that will be used from VSCode in your host OS.
:::

### Host system
- Download and install [VSCode](https://code.visualstudio.com/download)
- Download and install [supported SSH client](https://code.visualstudio.com/docs/remote/troubleshooting#_installing-a-supported-ssh-client).
- In VSCode install [Remote SSH pack](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack).
- In VScode press `Ctrl + Shift + P` and search for `Remote-SSH: Connect to Host...`, enter `martin@<your-ip>` and `hardwario` password and you're connected.

### Development

- On your host machine you can use Power Profiler software to power CHESTER.
- For flashing you use `west flash` command. This command is run in your VM shell and communicates with J-Link that is connected inside the VM.
