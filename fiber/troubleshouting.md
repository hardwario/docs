---
slug: troubleshooting
title: FIBER Troubleshooting
---
import Image from '@theme/IdealImage';

# Troubleshooting

## 1. Reboot the system using MQTT broker
- **/system/reboot**: Initiates a system reboot.

:::tip

You can read [**more about rebooting a system using MQTT here.**](./mqtt-broker)

:::

## 2. Restart the Device

- Press the reset button on the back of the FIBER
- Wait up to a minute.

## 3. Check Power Supply and Network Connectivity

If restarting the device via the button does not resolve the issue, please check the power supply:

- Ensure that the power adapter is securely plugged into both the FIBER device and the power outlet.
- Check the network cables to ensure they are securely connected to the FIBER device and the router.
- If everything is working, then disconnect power to the FIBER device by turning it off.
- Wait for a few minutes.
- Turn on the FIBER device again and allow it some time to fully boot up.

## 4. Reinstall image and run the FIBER

- Follow the installation instructions outlined in section [**FIBER Installation**](./installation-setup) of this documentation.
- Log in to the target

  ```sh
  ssh root@[ip address]
  ```

- Run the installation script using the following command:

  ```sh
  /app/scripts/install.sh
  ```