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
<TabItem value="all" label="Firmware & Applications" default>

### 2026-04-21

- **[FW]** Added calibration mode with Hall sensor activation

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
- **[FW]** LoRaWAN connectivity (Class A)
- **[FW]** MIFARE/NFC tag support via DS28E17
- **[Apps]** **STICKER Clime** — initial release (temperature, humidity)
- **[Apps]** **STICKER Input** — initial release (digital inputs, pulse counting)
- **[Apps]** **STICKER Motion** — initial release (PIR motion detection)

{/* separator */}
</TabItem>

<TabItem value="hw" label="Hardware">

:::info

No hardware revisions have been logged yet. Hardware updates will appear here when new STICKER board revisions are released.

:::

{/* separator */}
</TabItem>
</Tabs>

---

## Catalog Application Changelogs

| Application | Changelog | Last Updated |
|---|---|---|
| STICKER Clime | [Changelog](catalog-applications/sticker-clime#changelog) | 2025-11-23 |
| STICKER Input | [Changelog](catalog-applications/sticker-input#changelog) | 2025-11-23 |
| STICKER Motion | [Changelog](catalog-applications/sticker-motion#changelog) | 2025-11-23 |
