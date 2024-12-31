---
slug: troubleshooting
title: Fiber Troubleshooting
---
import Image from '@theme/IdealImage';

# Troubleshooting

## 1. Reboot the system

- **sudo reboot**: Initiates a system reboot using the command line.

- **/system/reboot**: Initiates a system reboot using MQTT broker

  :::tip

  You can read [**more about rebooting a system using MQTT here.**](./mqtt-broker)

  :::

## 2. Restart the Device

1. Press the reset button on the back of the **FIBER**

2. Wait up to a minute.

## 3. Check Power Supply and Network Connectivity

If restarting the device via the button does not resolve the issue, please check the power supply:

1. Ensure that the power adapter is securely plugged into both the **FIBER** device and the power outlet.

2. Check the network cables to ensure they are securely connected to the **FIBER** device and the router.

3. If everything is working, then disconnect power to the **FIBER** device by turning it off.

4. Wait for a few minutes.

5. Turn on the **FIBER** device again and allow it some time to fully boot up.


## 4. Reinstall image and run the FIBER

1. Follow the installation instructions outlined in section [**FIBER Installation**](./installation-setup) of this documentation.

2. Log in to the target

    ```bash
    ssh root@[ip address]
    ```

3.  Run the installation script using the following command:

    ```bash
    /app/scripts/install.sh
    ```