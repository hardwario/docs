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

This is the main feature of this tool. It provides an environment for programming with colorful blocks without the need to write a single line of code.

This is a Low-code/No-code environment which means that you don't need to know how to write code to make it work.

It is designed to make firmware creation fast and easy for users on any level of knowledge.

<Image img={require('./blockly-showcase.png')}/>

### Examples


### Project Structure

### Live Code Generation

This tool provides the possibility to show live-generated C code that is identical to the blocks in the workspace.

Thanks to this, you can create some basic firmware with the use of blocks, then take the code and finalize it in the [**HARDWARIO Code**](../firmware-development/about-hardwario-code.md).

<Image img={require('./blockly-code.png')}/>

### Compiling and Flashing

:::caution

For this to work, you have to have CMake, Ninja and git installed on your device and in the PATH. You can find more info about this in chapter [**TOWER VSCode Extension**](../firmware-development/tower-vscode-extension.md#tools-setup).

:::

After you are finished with your firmware, you can simply click the **Compile and Flash** button at the bottom of the page. After a while, it will switch to the firmware tab and you can just select your device and flash it.

:::tip

More about flashing in the [**Firmware Flashing chapter**](./firmware-flashing.md)

:::

## Other Features

### Portability

If you want to distribute your projects or created blocks you can just copy the user folder from your filesystem, compress it to for example zip file and send it.
On the other side, the user can just unzip it to their user folder and then reload Blockly in Playground.

:::info

To open your user folder, click on **Open Projects Folder** in Blockly index or on **Open Blocks Folder** in Blocks Creator index.

:::

### Blocks Generation

:::info

This is an advanced part of this tool. You don't need to use it at all but if you are interested in creating your categories and custom blocks that you can then use in the **HARDWARIO Blockly**.

:::

To access this feature click on the **Go to Blocks Creator** button at the Blockly index.

#### Categories

To edit your categories just click **Edit your categories** button at the top of the Blocks Creator screen.

You need to add categories to put your custom blocks into them. You can also use pre-made categories that we use but it is not advisable.

:::info

Here is an example of how to add some basic categories. You can add a category without any other configurations or you can add color to the category (in RGB format).

This example will add category **Ultrasound Sensor** with black color (default color) and category **External Temperature Sensor** with color "#CF0514".

:::

<details><summary><b>Basic Categories Example</b></summary>
<p>

  ```yml showLineNumbers
  ---
  categories:
    Ultrasound Sensor:
    External Temperature Sensor:
      colour: '#CF0514'
  ```

</p>
</details>


#### Blocks

You can add your custom blocks with the use of Blocks Creator.

:::info

The first example is one of our pre-made modules for the [**Button Module**](https://shop.hardwario.com/button-module/) of TOWER. You can see the structure of the file here.

- `category` - determines which category will be used for the blocks of this module (the category has to be included in the pre-made or your categories).

- `global_variable` - here you can add line by line anything that you want to add at the top of the code.

- `application_init` - here you can define the block that will always go into the **Initialization category**-
  - `block`
    - `text` - here you should specify what text will be present on the block. You can use `%` to make some parts generated from the **arguments**.
    - `arguments` - here you have to specify one by one the arguments that will replace the `%` in the text by `dropdown/number/variable/etc.`
  - `code` - here, line by line you specify the code that will be added to `application_init`. You can use `{ARGUMENT_NAME}` to have some parts replaceable based on the `arguments`.

- `handler` - this is the block that will represent the event handler of your module. It will be a block that will allow you to put more blocks in it (parent block)

- `action` - this is the place to add every possible action that your module can do. Each of those elements will be a separate block added to your specified category.
  - `NAME_OF_THE_ACTION` - you just specify the block name, it has to be module specific.
    - `block` - this is the same as with the `application_init` part, the block will just be placed in the specified category.
    - `code` - code is the same as well.
:::

<details><summary><b>Pre-made button module</b></summary>
<p>

  ```yaml showLineNumbers
  ---
  button:
    category:
      - Button
    global_variable:
      - twr_button_t button;
    application_init:
      block:
        text:
          - Initialize Button %1
          - Button GPIO %2 %3
          - Button Pull %4 %5
          - Default State %6
        arguments:
          X:
            type: new_line
          GPIO:
            type: dropdown
            options:
              - ["BUTTON", "TWR_GPIO_BUTTON"]
          Y:
            type: new_line
          PULL:
            type: dropdown
            options:
              - ["DOWN", "TWR_GPIO_PULL_DOWN"]
              - ["NONE", "TWR_GPIO_PULL_NONE"]
              - ["UP", "TWR_GPIO_PULL_UP"]
          Z:
            type: new_line
          DEFAULT_STATE:
            type: dropdown
            options:
              - ["TRUE", "TRUE"]
              - ["FALSE", "FALSE"]
      code:
        - twr_button_init(&button, {GPIO}, {PULL}, 0);
        - twr_button_set_event_handler(&button, button_event_handler, NULL);
    handler:
      block:
        text: On Button %1
      declaration: void button_event_handler(twr_button_t *self, twr_button_event_t event, void *event_param)
      events:
        prefix: TWR_BUTTON_EVENT_
        enum:
          PRESS:
          RELEASE:
          CLICK:
            - button_click_count++;
          HOLD:
            - button_hold_count++;
    action:
      publish_click_count:
        block:
          text:
            - Publish Button Click Count Over the Radio
        code:
          - twr_radio_pub_push_button(&button_click_count);
      publish_hold_count:
        block:
          text:
            - Publish Button Hold Count Over the Radio
        code:
          - twr_radio_pub_event_count(TWR_RADIO_PUB_EVENT_HOLD_BUTTON, &button_hold_count);
  ```

</p>
</details>
