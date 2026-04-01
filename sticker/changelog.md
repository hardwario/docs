---
slug: changelog
title: STICKER Changelog
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# STICKER Changelog

This page tracks all notable changes across the STICKER platform — including **firmware** and **catalog applications**. Use the tabs below to filter by change category.

:::info

Firmware source: [hardwario/sticker-firmware](https://github.com/hardwario/sticker-firmware) on GitHub.

:::

---

## General Platform Updates

<Tabs groupId="changelog-category">
<TabItem value="all" label="All Changes" default>

### 2026-04-01

- **[FW]** Fixed DS28E17 machine probe initialization reliability — retries `write_config` and reads back echoed register for verification
- **[FW]** Fixed atomic state read in machine probe scan

### 2026-02-17

- **[FW]** Reduced PYQ1648 (PIR) IRQ latency from 2.5 ms to 100 µs for faster motion response
- **[FW]** Added analog pinctrl for I2C1 sleep state — reduces idle current leakage
- **[FW]** Added NVS config version check — resets defaults on schema mismatch after firmware update
- **[FW]** Fixed GPIO pin conflict: skips input init when PIR is enabled
- **[FW]** Added delay after SI7210 ONEBURST trigger to avoid stale hall-effect readings
- **[FW]** Added `reset_counts` shell commands for hall and input counters
- **[FW]** Fixed LoRaWAN state machine counters (changed from `uint8_t` to `int` to prevent overflow)
- **[FW]** Atomically snapshot and clear notify flags in compose — prevents race conditions
- **[FW]** Split LED message queue to reduce blink caller stack usage
- **[FW]** Added intermediate watchdog feeds during boot init sequence
- **[FW]** Added CRC16 verification on DS28E17 read data

### 2026-01-30 — v1.2.0

- **[FW]** Fixed LED debug mode sequence — green blink now correctly precedes yellow

### 2025-12-15 — v1.1.0

- **[FW]** Implemented LoRaWAN JOIN retry mechanism — device retries joining the network after failed attempts

### 2025-11-23 — v1.0.0

- **[FW]** Initial public release of STICKER firmware
- **[FW]** Support for three catalog applications: **STICKER Clime**, **STICKER Input**, **STICKER Motion**
- **[FW]** LoRaWAN connectivity (Class A)
- **[FW]** MIFARE/NFC tag support via DS28E17

{/* separator */}
</TabItem>

<TabItem value="fw" label="Firmware">

### 2026-04-01

- Fixed DS28E17 machine probe initialization reliability (retries + readback verification)
- Fixed atomic state read in machine probe scan

### 2026-02-17

- Reduced PYQ1648 (PIR) IRQ latency from 2.5 ms to 100 µs
- Added analog pinctrl for I2C1 sleep state — reduces idle leakage
- Added NVS config version check with defaults reset on mismatch
- Fixed GPIO pin conflict when PIR and input are both configured
- Added delay after SI7210 ONEBURST trigger
- Added `reset_counts` shell commands for hall and input counters
- Fixed LoRaWAN state machine counter overflow (`uint8_t` → `int`)
- Atomically snapshot notify flags in compose
- Split LED message queue to reduce stack usage
- Added watchdog feeds during boot init
- Added CRC16 verification on DS28E17 read data

### 2026-01-30 — v1.2.0

- Fixed LED debug mode sequence (green before yellow)

### 2025-12-15 — v1.1.0

- Implemented LoRaWAN JOIN retry mechanism

### 2025-11-23 — v1.0.0

- Initial release — Clime, Input, Motion apps; LoRaWAN Class A; NFC/MIFARE support

{/* separator */}
</TabItem>

<TabItem value="hw" label="Hardware">

:::info

No hardware revisions have been logged yet. Hardware updates will appear here when new STICKER board revisions are released.

:::

{/* separator */}
</TabItem>

<TabItem value="apps" label="Applications">

### 2025-11-23 — v1.0.0

- **STICKER Clime** — initial release (temperature, humidity)
- **STICKER Input** — initial release (digital inputs, pulse counting)
- **STICKER Motion** — initial release (PIR motion detection)

{/* separator */}
</TabItem>
</Tabs>

---

## Catalog Application Changelogs

| Application | Changelog | Last Updated |
|---|---|---|
| STICKER Clime | — | — |
| STICKER Input | — | — |
| STICKER Motion | — | — |
