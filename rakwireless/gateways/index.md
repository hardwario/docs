---
slug: index
title: RAKwireless - Gateways
---

import Image from '@theme/IdealImage';

Here is a list of tested **RAKwireless gateways** by HARDWARIO with reference resources:

| Name | Type | Overview | Product page | Purchase link |
| :--- | :--- | :--- | :--- | :--- |
| [**RAK7268V2**](./rak7268v2.md) | Indoor LoRaWAN® Gateway <br/>(WisGate Edge Lite 2) | [Details](./rak7268v2.md) | [Official site](https://docs.rakwireless.com/product-categories/wisgate/rak7268v2/overview) | [Buy here](https://www.hardwario.store/p/rak-7268v2) |
| [**RAK7289V2**](./rak7289v2.md) | Outdoor Industrial LoRaWAN® Gateway <br/>(WisGate Edge Pro) | [Details](./rak7289v2.md) | [Official site](https://docs.rakwireless.com/product-categories/wisgate/rak7289v2/overview/) | [Buy here](https://www.hardwario.store/p/rak-7289v2) |

---

## LoRaWAN Network Options

To operate your LoRaWAN device, you can choose between two supported network server platforms. Both solutions allow you to manage gateways, register end devices, configure profiles, and process payload data.

### Option 1: The Things Stack (TTS)

A cloud-based LoRaWAN Network Server suitable for both small and large deployments.

#### Gateway Registration on TTS

1. Log in to your TTS Console (e.g., `hardwario-com.eu1.cloud.thethings.industries`).
2. Go to **Gateways > + Register gateway**.
3. Paste your **Gateway EUI** (16 characters, found in the gateway Dashboard) and select the correct **Frequency Plan** (e.g., Europe 863-870 MHz).
4. Navigate to **API Keys > + Add API key**.
5. Select **"Link as Gateway to a Gateway Server..."** and click **Create API key**.
6. **Copy the key string** (starts with `NNSXS...`) immediately – you will need it for gateway configuration.

#### Gateway Configuration (Basics Station)

On your RAK gateway, navigate to **LoRa > Configuration** and select **Basics Station**:

| Setting | Value |
| :--- | :--- |
| **Basics Station Mode** | LNS Server |
| **Server URL** | `wss://hardwario-com.eu1.cloud.thethings.industries` (Port 8887) |
| **Trust (CA Certificate)** | Upload the [ISRG Root X1 .pem](https://letsencrypt.org/certs/isrgrootx1.pem) file |
| **Client Token** | Paste your TTS API Key |

➡️ **Full configuration guide:** [Configure The Things Stack](/apps/the-things-stack/index#configure-the-things-stack)

---

### Option 2: ChirpStack v4

An open-source LoRaWAN Network Server ideal for on-premise or private network installations.

#### Gateway Registration on ChirpStack

1. Log in to your ChirpStack Console (e.g., `http://your-ip-address:8080`).
2. Go to **Gateways > + Add gateway**.
3. Paste your **Gateway EUI** (found in your RAK dashboard) into the **Gateway ID (EUI64)** field.
4. Select a **Gateway Profile** (e.g., EU868 or US915) that matches your regional plan.
5. Navigate to **API Keys** (found under the **Tenant** or **System** menu in the sidebar).
6. Click **+ Create API key**, give it a name like "RAK7268-BasicsStation", and click **Submit**.
7. **Copy the API Key string immediately** – you will use this in the "Gateway Token" field on your RAK gateway if you choose Token-based authentication.

➡️ **Getting started guide:** [Getting Started with ChirpStack v4](/apps/chirpstack/index#getting-started-with-chirpstack-v4)

---