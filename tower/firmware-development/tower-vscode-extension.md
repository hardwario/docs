---
slug: tower-vscode-extension
title: TOWER VSCode Extension
---
import Image from '@theme/IdealImage';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::caution

If you experience some issues or difficulties with the extension or portable version, please let us know on [**our forum**](https://forum.hardwario.com/) or directly on [**GitHub**](https://github.com/hardwario/hardwario-tower-vscode-extension/issues).

:::

This chapter focuses on the HARDWARIO TOWER Visual Studio Code extension, you will need to install some tools for this extension to work fully. If you don't want to bother with this, you can install our standalone HARDWARIO Code, on how to do that visit the [**About HARDWARIO Code chapter**](./about-hardwario-code.md).

## Installation

To install the extension you will have to download the latest release from [**GitHub Releases**](https://github.com/hardwario/hardwario-tower-vscode-extension/releases).

To install the downloaded .vsix extension file just go to the **Extensions Tab**, click the **three dots** and **Install from VSIX...**

<div class="container">
  <div class="row">
    <div class="col col--8">
      <div><Image img={require('./extension-install-guide.png')}/></div>
    </div>
    <div class="col col--2">
    </div>
  </div>
</div>

### Tools Setup

You will need some dependencies for the extension to work as intended:

:::tip

The extension will warn you that you are missing some of those and provide you with a corresponding link in the bottom right corner.

:::

<Tabs groupId="operating-system">
<TabItem value="windows" label="Windows" default>

- [**CMake**](https://cmake.org/install/)
- [**Ninja**](https://github.com/ninja-build/ninja/releases)
- [**arm-none-eabi-gcc**](https://mynewt.apache.org/latest/get_started/native_install/cross_tools.html#installing-the-arm-toolchain-for-windows)
- [**git**](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- **Linux commands**
  - You have to install git to your machine and then add the `\usr\bin\` folder to PATH. The folder path should look something like `C:\Program Files\Git\usr\bin\`
- [**make**](https://www.technewstoday.com/install-and-use-make-in-windows/) (**LEGACY**)

</TabItem>
<TabItem value="linux" label="Linux">

- [**CMake**](https://cmake.org/install/)
- [**Ninja**](https://github.com/ninja-build/ninja/releases)
- [**arm-none-eabi-gcc**](https://mynewt.apache.org/latest/get_started/native_install/cross_tools.html#installing-the-arm-toolchain-for-linux)
- [**git**](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [**make**](https://linuxhint.com/install-make-ubuntu/) (**LEGACY**)

</TabItem>
<TabItem value="macOS" label="macOS">

- [**CMake**](https://cmake.org/install/)
- [**Ninja**](https://github.com/ninja-build/ninja/releases)
- [**arm-none-eabi-gcc**](https://mynewt.apache.org/latest/get_started/native_install/cross_tools.html#installing-the-arm-toolchain-for-mac-os-x)
- [**git**](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [**make**](https://formulae.brew.sh/formula/make) (**LEGACY**)

</TabItem>
</Tabs>

:::tip

You can now start using the **Visual Studio Code** for developing HARDWARIO TOWER Firmware. To get some basic information on how to use the extension visit[**HARDWARIO Code Tutorial**](./hardwario-extension-tutorial.md) or you can go straight to the **Firmware Quick Start chapter**.

:::
