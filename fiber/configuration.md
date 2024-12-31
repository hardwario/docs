---
slug: configuration
title: Configuration File
---
import Image from '@theme/IdealImage';

# Configuration File

The configuration file is located on the **FIBER** device within the config directory and is named **config.yaml**. This file contains parameters that govern various aspects of **FIBER**'s operation, such as network interfaces, sensor data collection intervals, MQTT communication settings, and data storage preferences.

## Overview of Configuration Parameters

```yaml
version: Specifies the version of the configuration file.

system:
    interface: Defines the network interfaces used by the system. By default, it includes both "end0" and "eth0" interfaces.
    static_ip: Specifies whether the client is using a static IP address.
        - True: For static IP address, provide 'address', 'netmask', 'gateway', 'dns'.
        - False: For automatic connection.
    address: Specifies the IP address of the device.
    netmask: Specifies the subnet mask.
    gateway: Specifies the gateway address.
    dns: Specifies the DNS server address.

sensor:
    enabled: Indicates whether sensor data collection is enabled (True) or disabled (False).
    report_interval_seconds: Specifies the interval (in seconds) at which sensor data is reported.
    sampling_interval_seconds: Specifies the interval (in seconds) at which sensor data is sampled.

measurement:
    report_minimum: Show the minimum sensor value in the data analysis.
    report_maximum: Show the maximum sensor value in the data analysis.
    report_average: Show the average sensor value in the data analysis.
    report_median: Show the median sensor value in the data analysis.
    report_last: Show the last recorded sensor value in the data analysis.

mqtt:
    enabled: Indicates whether MQTT communication is enabled (True) or disabled (False).
    host: Specifies the MQTT broker host address.
    port: Specifies the MQTT broker port number.

storage:
    enabled: Indicates whether data storage is enabled (True) or disabled (False).
    name: Specifies the name of the database file for storing records.
```

To modify the configuration file, you must access the **FIBER** device. Once you have access, navigate to the **config** directory and edit the **config.yaml** file using a text editor, command line tools, or through Docker.

