---
slug: developer-mode
title: Developer Access
---
import Image from '@theme/IdealImage';

# Developer Access (Debug Mode)

## Debug Mode

The STICKER can also be delivered in **Debug Mode**, which is intended primarily for developers.  
In this configuration, the device is supplied in an open state, allowing direct access for development.  

This mode highlights that STICKER is an **open platform**, enabling developers to explore, modify, and extend its functionality according to their needs.

## Flashing Firmware via J-Link

To flash application firmware to the CHESTER device with SEGGER J-Link:

1. Connect the J-Link to the CHESTER APP (or BLE) connector and to your PC.  
2. Make sure Python 3 and HARDWARIO Command Line Tools are installed.  
3. Activate your Python virtual environment.  
4. Run the flashing command with either the HEX file or the application unique ID:  
   
```
hardwario chester app flash <HEX-FILE-PATH or APPLICATION-UNIQUE-ID>
```

5. Disconnect the J-Link adapter when finished.

---

📖 [See full guide here → Application over J-Link](/chester/firmware-flashing/application-over-j-link/)