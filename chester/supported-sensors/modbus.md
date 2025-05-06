---
slug: modbus_sensors
title: Modbus Sensors
---

import Image from '@theme/IdealImage';

# Modbus Sensors

Here is list of tested sensors by HARDWARIO with basic configuration to use:

| Name                              | Type                 | Notes                          |
|-----------------------------------|----------------------|--------------------------------|
| Carlo Gavazzi EM1XX Series        | Electrometer         | Integrated into CHESTER Energy |
| Carlo Gavazzi EM5XX Series        | 3-Phase Electrometer | Integrated into CHESTER Energy |
| ORNO OR-WE-516                    | 3-Phase Electrometer | Integrated into CHESTER Energy |
| Schneider Electric iEM3000 series | 3-Phase Eletrometer  | Integrated into CHESTER Energy |
| LAMBRECHT meteo sensors           |                      | Integrated into CHESTER Meteo  |

# Modbus Communication Overview

![Modbus Architecture](https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Modbus_TCP_IP_Ethernet_network_diagram.png/800px-Modbus_TCP_IP_Ethernet_network_diagram.png)

*Figure: Typical Modbus network topology using Modbus RTU and Modbus TCP.*

## What is Modbus?

Modbus is a widely adopted serial communication protocol originally developed by Modicon (now Schneider Electric) in 1979. It is designed for connecting industrial electronic devices and is commonly used for communication between a supervisory computer and remote terminal units (RTUs) in SCADA systems.

Modbus enables devices to communicate over serial lines (Modbus RTU/ASCII) or over Ethernet (Modbus TCP/IP). It is open, simple, and robust, making it one of the most popular protocols in industrial automation.

---

## Modbus Variants

### Modbus RTU (Remote Terminal Unit)
- Uses RS-485 or RS-232 physical layer
- Binary format (compact, efficient)
- Master-slave architecture

### Modbus ASCII
- Similar to RTU but uses ASCII encoding
- Easier to debug manually but slower and less efficient

### Modbus TCP
- Runs over Ethernet (TCP/IP stack)
- Client-server model
- No need for device addressing (uses IP instead)

---

## Hardware Requirements

### Modbus RTU
- **Master Device** (e.g., PLC, gateway, HMI)
- **Slave Devices** (e.g., sensors, actuators, meters)
- **RS-485 Bus** (2-wire differential signal, supports up to 32 devices without repeaters)
- **Termination Resistors** and biasing recommended for signal integrity

### Modbus TCP
- **Ethernet-enabled master and slave devices**
- **Network switch/router** (optional depending on topology)

---

## Data Model

Modbus defines data using register-based addressing. The master polls the slave using function codes to read or write data.

### Address Types
- **Coils**: 1-bit (read/write)
- **Discrete Inputs**: 1-bit (read-only)
- **Input Registers**: 16-bit (read-only)
- **Holding Registers**: 16-bit (read/write)

### Common Function Codes
- `01` Read Coils
- `02` Read Discrete Inputs
- `03` Read Holding Registers
- `04` Read Input Registers
- `05` Write Single Coil
- `06` Write Single Register
- `16` Write Multiple Registers

---

## Example Output (Parsed JSON)
```json
{
  "device_id": "MODBUS-001",
  "timestamp": "2025-04-29T08:30:00Z",
  "holding_registers": {
    "40001": 1234,
    "40002": 5678
  },
  "input_registers": {
    "30001": 55.2
  },
  "coils": {
    "00001": true,
    "00002": false
  }
}
```

---

## Applications

- **Industrial automation**
- **Building management systems (BMS)**
- **SCADA systems**
- **Motor controllers, inverters, and PLCs**
- **Environmental and energy monitoring systems**

---

## Advantages of Modbus

- Open and widely supported
- Simple and easy to implement
- Versatile with both serial and Ethernet support
- Works over long distances with RS-485

---

## Limitations

- No native security or encryption
- Master-slave model (RTU) limits concurrency
- Limited data size per transaction (typically 256 bytes)
- Requires proper configuration of bus termination and addressing
