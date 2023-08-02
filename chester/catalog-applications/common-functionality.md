---
slug: common-functionality
title: Common Functionality
---
import Image from '@theme/IdealImage';

# Common Functionality

The **catalog applications** share common functionality. For example the button behaviour or the way settings are handled.

## Button behaviour

Applications define actions for the mainboard button. The actions are chosen based on the number of consecutive presses of the button. Before an action is executed, **CHESTER** will blink the orange LED *N* times, indicating the amount of consecutive presses. The actions are:

|  Number of presses  |  Action                                     |
| ------------------: | :------------------------------------------ |
| 1                   | Send data immediately                       |
| 2                   | Sample data immediately                     |
| 3                   | Sample, aggregate and send data immediately |
| 4                   | Reboot the device                           |
| 5                   | Turn on the load LED for 2 minutes          |

## LED behaviour

When **CHESTER** is powered on, the LED will be lit red until the application is initialized. Then **CHESTER** will blink the green LED every five seconds to indicate the app is running.

## Default Configuration

This is the default configuration (printed using the `app config show` command):

```
app config interval-sample 60
app config interval-aggreg 300
app config interval-report 1800
```

You can change configuration using the `app config` command, followed by `config save`. Example:

```
app config interval-sample 120
app config interval-aggreg 600
config save
```

This will apply the changes and restart the application. After the restart, you can verify the settings changed using the `app config show` command.

## Shell commands

Apart from the commands mentioned above, the shell offers many more commands. They can be listed using the `help` command.

Example `help` output from the **CHESTER Clime** application:

```
help
You can try to call commands with <-h> or <--help> parameter for more information.

Available commands:
  accel    :Accelerometer commands.
  aggreg   :Aggregate data immediately
  app      :Application commands.
  batt     :Battery commands.
  ble      :BLE commands.
  button   :Button commands.
  config   :Configuration commands.
  flash    :Flash shell commands
  help     :Prints the help message.
  hygro    :Hygrometer commands.
  i2c      :I2C commands
  info     :Device information commands.
  kernel   :Kernel commands
  led      :LED commands.
  log      :Commands for controlling logger
  lrw      :LoRaWAN commands.
  lte      :LTE commands.
  mcuboot  :MCUboot commands
  rtc      :RTC commands for date/time operations.
  sample   :Sample immediately.
  send     :Send data immediately.
  therm    :Thermometer commands.
```

## Configuration backup v1.x.x → v2.x.x {#configuration-backup}

When upgrading an older **v1.x.x** firmware to **v2.x.x** - it is necessary to backup application configuration. The most important is this step in **CHESTER Current** application, where in configuration there are the **current transformers calibration coefficients**.

In case you forget to back up the data - they are not lost unless you executed `config save` command in newer firmware. However, you need to temporarily downgrade to [older firmware](https://github.com/hardwario/docs/blob/33661ca486dda9e6883d3a82edf0128ab32173d2/chester/catalog-applications/index.md#application-firmware) that can read the old configuration and apply the same configuration after the firmware is updated.

In the old firmware type `app config show` to the console. Then you need to copy all configuration items. If you use **HARDWARIO Manager** phone app or **HARDWARIO CLI** on your computer, you can highlight and copy current configuration text to your clipboard or text editor.

After updating to a newer firmware, paste the same lines to the console. If you use **HARDWARIO Manager** phone app or **HARDWARIO CLI** on your computer, you can paste all the lines together to the input line and press enter. All commands will be applied one by one. Check that configuration was applied correctly by typing `app config show`. Do not forget to apply changes by typing `config save`.
