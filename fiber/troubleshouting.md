---
slug: troubleshooting
title: Fiber Troubleshooting
---
import Image from '@theme/IdealImage';


# Troubleshooting

## 1. Reboot the system using MQTT broker
- **/system/reboot**: Initiates a system reboot.

## 2. Restart the Device

- Press the reset button on the back of the Fiber
- Wait up to a minute.

## 3. Check Power Supply and Network Connectivity

If restarting the device via the button does not resolve the issue, please check the power supply:

- Ensure that the power adapter is securely plugged into both the Fiber device and the power outlet.
- Check the network cables to ensure they are securely connected to the Fiber device and the router.
- If everything is working, then disconnect power to the Fiber device by turning it off.
- Wait for a few minutes.
- Turn on the Fiber device again and allow it some time to fully boot up.

## 4. Reinstall image and run the Fiber

- Follow the installation instructions outlined in section **Installation and Setup** of this documentation.
- Log in to the target

  ```sh
  ssh root@[ip address]
  ```

- Run the installation script using the following command:

  ```sh
  /app/scripts/install.sh
  ```