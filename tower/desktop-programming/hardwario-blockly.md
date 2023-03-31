---
slug: hardwario-blockly
title: HARDWARIO Blockly
---

import Image from '@theme/IdealImage';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info

This tool is still in development and can break sometimes. In that case, you can contact us on [**GitHub**](https://github.com/hardwario/hardwario-blockly/issues) or directly at [**ask@hardwario.com**](ask@hardwario.com).

You can probably fix that just by **restarting Playground**.

:::

We used [**Google Blockly**](https://developers.google.com/blockly) to create our implementation of a **No-Code/Low-Code environment for TOWER**.

## Blockly Environment

This is the main feature of this tool. It provides an environment for programming with the blocks.

This is a Low-code/No-code environment which means that you don't need to know how to write code to make it work.

It is designed to make firmware creation fast and easy for users on any level of knowledge.

<Image img={require('./blockly-showcase.png')}/>

### Live Code Generation

This tool provides the possibility to show live-generated C code that is identical to the blocks in the workspace.

Thanks to this, you can create some basic firmware with the use of blocks, then take the code and finalize it in the [**HARDWARIO Code**](../firmware-development/about-hardwario-code.md).

<Image img={require('./blockly-code.png')}/>

### Compiling and Flashing

:::caution

For this to work, you have to have CMake, Ninja and git installed on your device and in the PATH. You can find more info about this in chapter [**TOWER VSCode Extension**](../firmware-development/tower-vscode-extension.md#tools-setup).

:::

After you are finished with your firmware, you can simply click the **Compile and Flash** button at the bottom of the page. After a while, it will switch to the firmware tab and you can just select your device and flash it.

## Other Features

### Blocks Generating




