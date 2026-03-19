---
slug: lorawan-tts
title: The Things Stack
---
import Image from '@theme/IdealImage';

# The Things Stack

This guide shows how to connect the **HARDWARIO EMBER** LoRaWAN gateway (MikroTik RouterOS) to **The Things Stack (TTS)** using **LoRa Basics Station** (CUPS + LNS).

## Useful docs
- TTS gateway registration: https://docs.hardwario.com/apps/the-things-stack/tts-configuration/tts-gateways/
- MikroTik RouterOS + TTS (UDP / LNS / CUPS): https://help.mikrotik.com/docs/spaces/ROS/pages/67633276/The%2BThings%2BStack
- EMBER hotspot configuration (RouterOS basics): https://docs.hardwario.com/ember/hotspot-configuration/
- EMBER MikroTik LoRa interface basics: https://docs.hardwario.com/ember/mikrotik/gateway-configuration/

## Prerequisites
- Access to the EMBER management interface (**WebFig**, **WinBox**, or **SSH**)
- A TTS account with permissions to create gateways
- If you are not using the EMBER Cloud service, point the LoRaWAN server address to **your own** LoRaWAN server (no VPN tunnels needed).

---

## 1) Get the Gateway EUI (EUI-64)
On MikroTik RouterOS, the gateway EUI is shown as **Gateway ID**:

- **WebFig:** IoT → LoRa → Devices → Gateway ID
- **CLI:**
  ```
  /iot lora print
  ```
  Look for the `gateway-id` field (e.g. `503139534D814750`).

---

## 2) Register the gateway in The Things Stack
1. In TTS Console, click **Register gateway**.
2. Enter the **Gateway EUI** (use RouterOS **Gateway ID**).
3. Fill the gateway details:
   - **Gateway ID**
   - **Gateway Name**
   - **Frequency plan** (choose the one matching your region/hardware; e.g., `EU_863_870_TTN`)
4. Enable **Require authenticated connection**.
5. Enable both:
   - **Generate API key for CUPS**
   - **Generate API key for LNS**
6. Click **Register gateway** and **download both API keys** (CUPS + LNS).

:::tip
After registration, verify that both keys are visible in **General Settings → LoRa Basics Station** section of your gateway in TTS Console. The CUPS and LNS Authentication Keys must be set there — if either is missing, the gateway will get a `401 Unauthorized` error.
:::

---

## 3) Configure EMBER (MikroTik RouterOS) to connect to TTS

:::note
RouterOS requires the LoRa card to be **Disabled** while you change LoRa settings:
```
/iot lora disable 0
```
:::

### 3.1) Import Root Certificates (required for SSL/TLS)

To establish a secure TLS connection to TTS, import the official **The Things Stack Root CA certificates** into RouterOS and mark them as **trusted**.

The recommended certificate bundle contains 7 CAs: ISRG Root X1, Amazon Root CA 1–4, Baltimore CyberTrust Root, and The Things Industries Root CA.

**CLI:**
```
/tool/fetch url="https://www.thethingsindustries.com/docs/concepts/advanced/root-certificates/ca.pem" dst-path="ca.pem"
/certificate/import file-name="ca.pem" passphrase=""
```

Verify that all certificates are imported and trusted:
```
/certificate print
```

**WebFig:** Download [ca.pem](https://www.thethingsindustries.com/docs/concepts/advanced/root-certificates/ca.pem), upload it to the router via **Files**, then import via **System → Certificates → Import**.

### 3.2) Create a CUPS server

The downloaded `cups.key` file contains a line like:
```
Authorization: Bearer NNSXS.XXXX...XXXX
```

Enter this value **in full** (including the `Authorization: Bearer` prefix) into the `key` field.

**CLI:**
```
/iot lora servers add \
  name="TTS-CUPS" \
  address="<your-tenant>.eu1.cloud.thethings.industries" \
  port=443 \
  protocol=CUPS \
  ssl=yes \
  key="Authorization: Bearer <CUPS_API_KEY>"
```

:::info
The `address` field is **hostname only** — no `https://` prefix, no port suffix. The port is set separately.

Replace `<your-tenant>` with your TTS tenant ID (e.g. `hardwario-com`). For The Things Network community, use `eu1.cloud.thethings.network`.
:::

### 3.3) (Optional) Create an LNS server

When using CUPS, the LNS connection is configured **automatically** by the CUPS server — you don't need to create a separate LNS server entry. CUPS will push the LNS address and credentials to the gateway.

If you prefer a **direct LNS connection** (without CUPS), create an LNS server instead:

```
/iot lora servers add \
  name="TTS-LNS" \
  address="<your-tenant>.eu1.cloud.thethings.industries" \
  port=8887 \
  protocol=LNS \
  ssl=yes \
  key="<LNS_API_KEY>"
```

### 3.4) Assign the server to the gateway

```
/iot lora set 0 servers="TTS-CUPS"
```

---

## 4) Enable and verify

Enable the LoRa gateway:
```
/iot lora enable 0
```

Check the status:
```
/iot lora print
```

The `status` field should change from `Starting...` to `Active` within ~30 seconds. You should also see uplink traffic in the TTS Console **Live data** tab.

Check the logs for detailed connection info:
```
/log print where topics~"lora"
```

A successful CUPS → LNS connection looks like:
```
[CUPS] connecting to https://<server>:443/update-info
[CUPS] updating LNS host wss://<server>:8887
[LNS] connecting to wss://<server>:8887/traffic/eui-<GW_EUI>
[LNS] <server> configured
[FWD] gateway-0 forwarder is ready
```

---

## Troubleshooting

### CUPS returns 401 Unauthorized
```
[CUPS] ERROR: ERROR parsing http: 401 should contain www-authenticate header
```
- Verify the `key` in RouterOS matches the CUPS key in TTS Console (**General Settings → LoRa Basics Station → CUPS Authentication Key**)
- Ensure the **LNS Authentication Key** is also set in TTS Console — CUPS will fail if LNS key is missing
- The key must include the `Authorization: Bearer` prefix

### Gateway stuck on "Starting..."
- Check that root CA certificates are imported and trusted (`/certificate print`)
- Verify the server address is correct (hostname only, no `https://`)
- Test connectivity: `/tool/fetch url="https://<server>" mode=https keep-result=no`

### No uplinks in TTS Console
- Confirm the frequency plan in TTS matches the `channel-plan` in RouterOS
- Check that the gateway EUI in TTS matches the `gateway-id` in RouterOS
- Verify the LoRa antenna is connected

---

## Payload decoder links (for end devices)
Decoders are configured per **end device/application** in TTS (Payload Formatter).

Example decoder (CHESTER Clime):
- Codec folder: https://github.com/hardwario/chester-sdk/tree/main/applications/clime/codec
- JS decoder reference: https://github.com/hardwario/chester-sdk/blob/main/applications/clime/codec/cs-decoder.js
