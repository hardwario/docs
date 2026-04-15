---
slug: changelog
title: Changelog
toc_min_heading_level: 2
toc_max_heading_level: 3
---

# Changelog

This page tracks all notable changes in CHESTER catalog application firmware since **v3.0.0** (Cloud v2 migration).

---

## v3.5.4 (2026-04-14)

### SDK / Common
- Added runtime CHESTER-Z detection — single firmware works with or without Z module
- Added shell command for 1-Wire (W1) bus scanning
- Deploy script updated with CLI arguments and complete app list

### CHESTER Clime
- Runtime CHESTER-Z detection — removed separate Clime Z variant
- Fixed build failure for IAQ variant when both Z and X10 features are present

### CHESTER Control
- Added dual X0 module variant (CHESTER Control 8Ch Z) with CHESTER-Z support

---

## v3.5.3 (2026-03-06)

### CHESTER Serial
- Added CHESTER Serial as a new catalog application
- Supports RS-485 (CHESTER-X2, multi-drop, up to 8 devices) and RS-232 (CHESTER-X12, point-to-point)

---

## v3.5.2 (2026-03-10)

### SDK / Common
- Added I2C, MCUboot, and GPIO shell commands to all applications
- Changed default LTE mode to `lte-m,nb-iot` (automatic NB-IoT fallback)
- Moved CHESTER Counter and CHESTER Signal to `_legacy` folder

### GNSS
- Added configurable M8 initialization priority via Kconfig

---

## v3.5.1 (2025-12-08)

### SDK / Common
- Cloud metrics API added — exposes uplink/downlink counters, errors, and diagnostics
- Soft timeout support for cloud send/downlink operations
- Dangerous config commands filtered from cloud downloads
- Common aggregation data structure (`ctr_data_aggreg`) introduced across all apps
- Configurable LTE attach policy (aggressive, periodic, progressive)
- Improved LTE low-power handling for networks without PSM

### CHESTER Clime
- New variants: SPS30 (particulate matter), Radon, TC (thermocouple)
- Enabled DS18B20 (1-Wire) temperature sensors for all variants
- Removed legacy Clime 1W and Clime 1WH variants (merged into base)
- Merged Radon application into Clime as a variant
- Added soil sensor LoRaWAN encoding
- Added downlink watchdog

### CHESTER Control
- Added LoRaWAN support with encode/decode tests
- Added Z variant
- Added support for CHESTER X9
- Added soil sensor support
- Added delta value to counter aggregations
- Fixed missing mutex unlock

### CHESTER Current
- Added shell commands for channel calibration
- Improved LoRaWAN support
- Fixed calibration range, added downlink watchdog

### CHESTER Meteo
- Added CHESTER Meteo M variant (Modbus RTU — Lambrecht, Sensecap/OPM sensors)
- Added soil sensor support
- Added LoRaWAN support
- Improved pyranometer support

### CHESTER Scale
- Added LoRaWAN (LRW) support

### CHESTER Motion
- Added as a new catalog application — PIR-based motion detection

### CHESTER wM-Bus
- Added as a new catalog application
- Added enroll (teach) mode for device pairing
- Added scan all with cloud-decode config support
- Added shell send command

---

## v3.3.0 (2025-07-14)

### SDK / Common
- Updated all catalog apps to v3.3.0
- BLE tag subsystem improvements: increased tag slots to 32, reduced RAM impact, improved enroll behavior
- Configuration subsystem: added factory reset, HEX config item, per-item parse callback
- Fixed mutex deadlocks in BLE tag aggregation across all applications
- LoRaWAN: fixed keys to use HEX config item, fixed datarate range

### CHESTER Clime
- Added project generator integration
- Added LoRa support for IAQ variant
- Fixed thermocouple #ifdef guards

### CHESTER Control
- Ported to Cloud v2 with project generator
- Added X4 line threshold values
- 6x button press enables X9 outputs

### CHESTER Current
- Ported to Cloud v2 with project generator
- Added ChirpStack decoder

### CHESTER Push
- Ported to Cloud v2 with project generator

### CHESTER Range
- Ported to Cloud v2 with BLE tag support

### CHESTER Scale
- Ported to Cloud v2

### CHESTER Demo
- Added network parameters and BLE support

---

## v3.0.0 (2024-07-17)

### SDK / Common
- **Major release**: Migration from Cloud v1 to Cloud v2 protocol
- Introduced project generator (`west chester-update`) for variant management
- Added LTE v2 subsystem with state machine architecture
- Added GNSS support
- Added LED fading sequencer
- VERSION files introduced for all applications
- BLE tag subsystem: early scan stop, configurable scan duration

### CHESTER Clime
- First application ported to Cloud v2
- Added 1-Wire in default variant

### CHESTER Meteo
- Ported to Cloud v2
- Added pyranometer support (Meteo P variant)
