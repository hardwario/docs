---
slug: segger-jlink
title: SEGGER J-Link
---

# SEGGER J-Link

SEGGER J-Link is a debug probe and software package for programming and debugging ARM, RISC-V, and other microcontrollers. The FIBER toolchain uses it to flash the **Southbridge** STM32 over SWD.

## Install on Windows

1. Go to [segger.com/downloads/jlink](https://www.segger.com/downloads/jlink).
1. Download the **J-Link Software and Documentation Pack** for Windows (`.exe` installer).
1. Run the installer — it will install:
   - J-Link drivers
   - J-Link Commander (`JLink.exe`)
   - J-Flash, J-Flash Lite
   - J-Link GDB Server
   - J-Link RTT Viewer
1. Follow the prompts and accept the license agreement.

The tools will be available in `C:\Program Files\SEGGER\JLink\` and added to the Start Menu.

## Install on Linux (Debian/Ubuntu)

1. Go to [segger.com/downloads/jlink](https://www.segger.com/downloads/jlink).
1. Download the **J-Link Software and Documentation Pack** for Linux — choose the `.deb` for your architecture (`x86_64` or `arm`/`arm64`).
1. Install:

   ```bash
   sudo dpkg -i JLink_Linux_V*_x86_64.deb
   ```

After install, `JLinkExe` is on your `PATH` and ready to use.
