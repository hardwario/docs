---
slug: common-functionality
title: Common Functionality
---
import Image from '@theme/IdealImage';

# Common Functionality

The **catalog applications** share common functionality. For example the button behaviour or the way settings are handled.

## Network Mode Configuration

Some catalog firmwares allows configuration to use NB-IoT/LTE or LoRaWAN network. This firmware after power-up is not sending data, the **LED is blinking yellow** and you need to configure correct radio mode.

This `app mode` configuration is needed currently for these catalog applications:

- [CHESTER Clime](chester-clime.md)
- [CHESTER Current](chester-current.md)
- [CHESTER Push](chester-push.md)

The default functionality is that a device **does not use any radio** (mode `none`) and you need to set configuration parameter **mode**.

- `app config mode lte` for NB-IoT/LTE network
- `app config mode lrw` for LoRaWAN network

Then apply changes by typing `config save`. The device will reboot and use the correct network.


## Button Behaviour

Applications define actions for the mainboard button. The actions are chosen based on the number of consecutive presses of the button. Before an action is executed, **CHESTER** will blink the orange LED once for each button press, indicating the amount of consecutive presses. The actions are:

| Number of presses | Action                                      |
| :---------------: | :------------------------------------------ |
|         1         | Send data immediately                       |
|         2         | Sample data immediately                     |
|         3         | Sample, aggregate and send data immediately |
|         4         | Reboot the device                           |
|         5         | Turn on the load LED for 2 minutes          |

## LED Behaviour

When **CHESTER** is powered on, the LED will be lit red until the application is initialized. Then **CHESTER** will blink the green LED every five seconds to indicate the app is running.

If the **LED is blinking yellow**, you need to configure [which radio to use](#network-mode-configuration).

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

If you want to reset the configuration back to the default state, you can do so using `config reset`. In rare cases, when the CHESTER console isn't available, you can use the manual reset procedure. To initiate this, holding down the button while CHESTER boots. After holding the button for around 5 seconds, CHESTER will start rapidly blinking. At this point, you can release the button to proceed with the reset. If you continue holding the button until CHESTER stops blinking, the reset will be aborted.

:::caution

Reseting the configuration will also reset the connection parameters for LTE and LoRaWAN, which can result in CHESTER unable to communicate.

:::

You might also change configuration remotely over HARDWARIO Cloud using [**Config downlink command**](../../cloud/downlink#config).
In cloud you don't send the `config save` command.

## CHESTER BLE Tag subsystem

The **Chester** supports up to 8 **Teltonika EYE Sensor** Bluetooth tags that report temperature and humidity. This subsystem can be activated by following command:

```
tag config enabled true
```

After enabling the subsystem, save the configuration in order to restart **CHESTER** and start the subsystem:

```
config save
```

To use these sensors, the device must enroll them first. To enroll a tag, place it in very close proximity to CHESTER, run the following command and wait up to 10 seconds for the device to be discovered.
```
tag enroll
```

A optional signal strength threshold (from -128 to 0dbm, -128dbm providing the most range, -40dbm being the default) can be specified to make the enrollment less/more strict.

```
tag enroll <threshold>
```

To make the enrollment of these devices permanent, save them to the configuration with command.

```
config save
```

**Tag configuration:**

The packaged sensor should come activated. In case it is not, a magnet must touch the sensor to wake it up from hibernation mode.

The tags can be configured using the [EYE APP](https://wiki.teltonika-gps.com/view/EYE_SENSOR_/_BTSMP1#EYE_App_Configuration). We highly suggest updating the tag firmware as the default firmware does not allow some settings.

To configure the device, select it from the list of devices and change the options. The device name, address and serial number are available for the Android version of the application, the IOS version has limited knowledge of the devices.

The suggested configuration is:

| **Setting**           | **Value**             |
| --------------------- | --------------------- |
| Power signal settings | 4dbm                  |
| Advertising interval  | 10s                   |
| Active sensors        | Temperature, Humidity |


**Setup tips:**

The working distance between CHESTER and the Teltonika sensors depends on the signal power configuration of the sensor. To test the signal strength at the distance, run the following command and look at the rssi value:

```
tag read
```

If the signal strength is lower than -85 dbm, consider boosting the signal power to assure reliable communication.

## Report Interval Jitter

The periodic sending of data with `interval-report` has intentional jitter. This is used in case lot of CHESTERs are placed near each other, so they don't transmit at the same time if they have set the same interval. This jitter is random in the range of ±20 % of `interval-report`.

For example, if `interval-report` is set to 100 seconds, you can receive periodic data where two messages have a time difference from 80 (-20%) to 120 (+20%) seconds.

In applications where there are multiple aggregated values, this jitter has a side-effect that sometimes you can see fewer or more aggregated values than expected. The missing values are not lost, they will be sent correctly in the next message.

This jitter is not applied to **events** like button presses or input changes. They report immediately.

## Shell Commands

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

## Report Interval Jitter

The periodic sending of data with `interval-report` has intentional jitter. This is used in case lot of CHESTERs are placed near each other, so they don't transmit at the same time if they have set the same interval. This jitter is random in the range of ±20 % of `interval-report`.

For example, if `interval-report` is set to 100 seconds, you can receive periodic data where two messages have a time difference from 80 (-20%) to 120 (+20%) seconds.

In applications where there are multiple aggregated values, this jitter has a side-effect that sometimes you can see fewer or more aggregated values than expected. The missing values are not lost, they will be sent correctly in the next message.

This jitter is not applied to **events** like button presses or input changes. They report immediately.


## Configuration backup v1.x.x → v2.x.x {#configuration-backup}

When upgrading an older **v1.x.x** firmware to **v2.x.x** - it is necessary to backup application configuration. The most important is this step in **CHESTER Current** application, where in configuration there are the **current transformers calibration coefficients**.

In case you forget to back up the data - they are not lost unless you executed `config save` command in newer firmware. However, you need to temporarily downgrade to [older firmware](https://github.com/hardwario/docs/blob/33661ca486dda9e6883d3a82edf0128ab32173d2/chester/catalog-applications/index.md#application-firmware) that can read the old configuration and apply the same configuration after the firmware is updated.

In the old firmware type `app config show` to the console. Then you need to copy all configuration items. If you use **HARDWARIO Manager** phone app or **HARDWARIO CLI** on your computer, you can highlight and copy current configuration text to your clipboard or text editor.

After updating to a newer firmware, paste the same lines to the console. If you use **HARDWARIO Manager** phone app or **HARDWARIO CLI** on your computer, you can paste all the lines together to the input line and press enter. All commands will be applied one by one. Check that configuration was applied correctly by typing `app config show`. Do not forget to apply changes by typing `config save`.
