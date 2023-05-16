---
slug: installation-in-virtualbox
title: Installation in VirtualBox
---
import Image from '@theme/IdealImage';

# Installation in VirtualBox

The following article will guide you through the **CHESTER SDK** using **VirtualBox** virtual machine. Virtual machine contains all development tools and you program and edit code in your native operating system in VSCode using SSH extension.

## Installation Steps

### Virtual machine
- Download [VirtualBox](https://www.virtualbox.org/wiki/Downloads) (minimal supported version is 7.0)
- Download virtual machine image [hio-ubuntu](https://drive.google.com/file/d/1KpT_-cdA4LOhBEV7FfmNybCIZTgsyOii/view?usp=sharing) (6.62GB)
- In Virtualbox import `hio-ubuntu.ova` file in `File > Import Appliance`.

:::caution
On Linux / macOS host OS you might need to add the current user to `vboxusers` group by typing

```
sudo usermod -a -G vboxusers $USER
```

or `sudo adduser $USER vboxusers`

Then you need to log out and log in to apply changes.
:::

- Run the virtual machine. You will connect to it from VSCode later.

:::info
The VM has pre-configured that J-Link will be routed inside the VM and also in network configuration, there is opened port 22 for SSH connection that will be used from VSCode in your host OS.
:::

### Host system
- Download and install [VSCode](https://code.visualstudio.com/download)
- Download and install [supported SSH client](https://code.visualstudio.com/docs/remote/troubleshooting#_installing-a-supported-ssh-client).
- In VSCode install [Remote SSH pack](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack).
- In VScode press `Ctrl + Shift + P` and search for `Remote-SSH: Connect to Host...`, enter `martin@localhost` and `martin` as a password and you're connected.
- In the virtual machine terminal type `source hardwario/venv/bin/activate` to load Python virtual environment.
- In the left panel click **Open folder** and select the `hardwario` folder and you can start develop.

### Development

- On your **host machine**, you can use Power Profiler software to power CHESTER.
- In your virtual machine you use `west flash` or `hardwario chester app console` command. This command is run in your VM shell and communicates with J-Link which is connected inside the VM.


