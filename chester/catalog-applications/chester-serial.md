---
slug: chester-serial
title: CHESTER Serial
---
import Image from '@theme/IdealImage';

# CHESTER Serial

**CHESTER Serial** is a universal application for industrial serial communications developed for the HARDWARIO CHESTER platform. It serves as a flexible gateway for integrating industrial devices (sensors, PLCs, meters) into the cloud.

The application is hardware-aware; it automatically detects the installed extension module and adapts its behavior:
* **RS-232** (with Module **CHESTER-X12**)
* **RS-485** (with Module **CHESTER-X2**)

## Key Features

* **Dual Interface Support:** Automatic configuration for RS-232 (Point-to-Point) or RS-485 (Multi-drop) based on the connected hardware.
* **Modbus RTU Master:** Polling of up to 8 slave devices with support for standard Modbus functions.
* **Transparent Mode:** Bidirectional data passthrough (tunneling) without interpretation, ideal for proprietary protocols.
* **Multi-Radio Connectivity:** Data transmission via LTE-M / NB-IoT (CBOR) or LoRaWAN (Optimized Binary).
* **Native Sensor Support:** Built-in drivers for specific industrial sensors like **MicroSENS** (CO2), **SenseCAP** (Meteo), and **Cubic** (Particulate Matter).

## Operating Modes

### Modbus RTU Master
In this mode, CHESTER acts as a Master controller that periodically queries connected Slave devices.
* **Capacity:** Up to 8 devices simultaneously.
* **Addressing:** Supports slave addresses 1–247.
* **Functions:** Supports FC01, FC02, FC03, FC04, FC05, FC06, FC0F, and FC10.

### Transparent Mode
Chester acts as a bridge. Data received from the serial port is sent to the cloud "as is" and vice versa.
* **Usage:** Debugging, legacy equipment, non-standard protocols.
* **Limitation:** Only one connected device is supported in this mode.

## Technical Specifications

| Feature | Value |
| :--- | :--- |
| **Operating System** | Zephyr RTOS |
| **Physical Interface** | RS-232 (Module X12), RS-485 (Module X2) |
| **Application Protocols** | Transparent (RAW), Modbus RTU |
| **Cloud Formats** | CBOR (LTE), Optimized Binary (LoRaWAN) |
| **Power Supply** | Primarily external source (5–28V DC) |

## Configuration

Configuration is performed via the serial console (Shell) using the `app config` command.

### Basic Setup


#### 1. Set communication mode (modbus or transparent)
```bash
app config serial-mode modbus
```

#### 2. Set network interface (lte, lrw, or none)
```bash
app config mode lte
```

#### 3. Set sampling and reporting intervals (in seconds)
```bash
app config interval-sample 60   # Measure every minute
app config interval-report 1800 # Send data every 30 minutes
```

#### 4. Configure Serial Line (UART)
```bash
app config serial-baudrate 9600
app config serial-parity none
app config serial-stop-bits 1
app config serial-data-bits 8
```

#### 5. Save and Reboot
```bash
app config save
```

### Device Configuration Examples

#### Example 1: SenseCAP Weather Station (Modbus)

- Configure device in slot 1: Type 'sensecap_s1000', Address 1, Timeout 1s
```bash
app config device1 "sensecap_s1000,1,1"
```

#### Example 2: MicroSENS CO2 Sensor (Transparent)

- Set mode to transparent
```bash
app config serial-mode transparent
```

- Configure device in slot 1 (Address is not used in transparent mode)
```bash
app config device1 "microsens_180hs"
```

## Integrated Drivers
The firmware includes native support for the following devices:


- MicroSENS 180-HS: Precision CO2, temperature, and pressure sensor for incubators (RS-232).
- SenseCAP S1000 / S500: Industrial all-in-one weather stations (RS-485 Modbus).
- CUBIC 6303: Particulate matter (PM) sensor (RS-485 Modbus).
- Generic Modbus: Allows connection of any Modbus RTU device where data is mapped to generic registers.

## Integrated Drivers

The firmware includes native support for the following devices:

* **MicroSENS 180-HS**: Precision CO2, temperature, and pressure sensor for incubators using RS-232 interface.
    * **Measurement Ranges:** CO2 (0–100%), Temperature (-40 to +85 °C), Pressure (300–1100 mbar).
    * **Features:** Remote Zero/Span calibration and factory reset.
* **SenseCAP S1000 / S500**: Industrial all-in-one weather stations communicating via RS-485 Modbus.
    * **Measurements:** Air temperature, humidity, pressure, light intensity, wind speed, and wind direction.
* **CUBIC 6303**: Particulate matter (PM) sensor communicating via RS-485 Modbus.
    * **Measurements:** PM1.0, PM2.5, PM10 (in ug/m3).
* **Generic Modbus**: Allows connection of any Modbus RTU device where data is mapped to generic registers.

## Data Formats

### LTE (CBOR)
For LTE-M and NB-IoT, data is structured into maps (CBOR objects):
* **message:** Protocol version and timestamp.
* **system:** Battery voltage, consumption, and uptime.
* **thermometer / accelerometer:** Internal sensor data.
* **device_data:** Measurements from external serial sensors.

### LoRaWAN (Binary)
Due to the **51-byte limit**, the payload is highly compressed:
1.  **Header (1B):** Bitmask indicating presence of specific data (Battery, Orientation, etc.).
2.  **System Data:** Optional voltage and orientation values.
3.  **Device Data:** Sequential data blocks for configured devices.

## Diagnostics and Testing

The following shell commands are available for verifying functionality:

* `app config show` – Displays current configuration.
* `app sample` – Triggers an immediate measurement cycle.
* `app send` – Triggers immediate data transmission to the cloud.
* `modbus read <addr> <count> <type>` – Directly tests Modbus communication (e.g., `modbus read 1 5 input` reads 5 registers from address 1).
* `device list` – Lists all connected and configured devices.