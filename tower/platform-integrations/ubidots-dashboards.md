---
slug: ubidots-dashboards
title: Ubidots Dashboards
---
import Image from '@theme/IdealImage';

With [**Ubidots**](https://ubidots.com), you can monitor your values remotely and get notifications when they go over set **thresholds**.

On how to set up Ubidots to work with **TOWER**, you just need to follow a few simple steps.

:::note

Ubidots offers a free trial, but for more and larger projects you will need to follow their [**Pricing**](https://ubidots.com/pricing).

:::

## Get Ubidots API Token

First, you need to [**Create an Ubidots account**](https://industrial.ubidots.com/accounts/signup_industrial/).

After you have your account, you can get your API Token.
- Click **on your profile in the top-right corner**
- Select **API Credentials**
- Copy your **Default Token**

## Import Node-RED Flow

:::info

Here is the complete flow which you can import to **Node-RED**.

:::

:::tip

If you don't know what a Node-RED is, you can read the [**Desktop Programming section**](../desktop-programming/about-playground.md) or [**Server on Raspberry Pi section**](../server-raspberry-pi/index.md).

:::

<details><summary><b>Node-RED flow JSON</b></summary>
<p>

:::tip

You can change the `YOUR-TOKEN-HERE` on highlighted line for your **Default Token** here or after import in the GUI by clicking on the **blue Ubidots node**.

:::

```json showLineNumbers
[
   {
      "id":"6c6622f5.06be2c",
      "type":"mqtt in",
      "z":"2c41a2bd.aa36ae",
      "name":"",
      "topic":"node/#",
      "qos":"2",
      "broker":"29fba84a.b2af58",
      "x":70,
      "y":40,
      "wires":[
         [
            "f3036e8f.15107"
         ]
      ]
   },
   {
      "id":"f3036e8f.15107",
      "type":"function",
      "z":"2c41a2bd.aa36ae",
      "name":"Ubidots Decode",
      "func":"// Declare variables\nvar ubi_payload = {}\nvar ubi_msg = {};\nvar topic = msg.topic.split(\"/\");\n\n// Get device label, variable name and value from HARDWARIO message\nvar device_label = topic[1];\nvar variable = topic[4];\nvar value = msg.payload;\n\n// Build Ubidots MQTT payload\nubi_msg['device_label'] = device_label;\nubi_payload[variable] = value;\nubi_msg['payload'] = ubi_payload;\nreturn ubi_msg;",
      "outputs":1,
      "noerr":0,
      "x":280,
      "y":40,
      "wires":[
         [
            "3ae188a9.accc48"
         ]
      ]
   },
   {
      "id":"3ae188a9.accc48",
      "type":"ubidots_out",
      "z":"2c41a2bd.aa36ae",
      "name":"",
      // highlight-next-line
      "token":"YOUR-TOKEN-HERE",
      "label_device":"",
      "device_label":"",
      "tier":"educational",
      "x":530,
      "y":40,
      "wires":[

      ]
   },
   {
      "id":"29fba84a.b2af58",
      "type":"mqtt-broker",
      "z":"",
      "broker":"127.0.0.1",
      "port":"1883",
      "clientid":"",
      "usetls":false,
      "compatmode":true,
      "keepalive":"60",
      "cleansession":true,
      "birthTopic":"",
      "birthQos":"0",
      "birthPayload":"",
      "willTopic":"",
      "willQos":"0",
      "willPayload":""
   }
]
```

</p>
</details>

## The Ubidots Node

**TOWER** utilizes **Ubidots official Node-RED node**, which connects to Ubidots’ MQTT broker and expects a Node-RED message **with the following format**:

```json showLineNumbers
{
    "device_label": YOUR_DEVICE_NAME,
    "payload": {"SENSOR_VARIABLE_NAME": "SENSOR_VARIABLE_VALUE"}
}
```

To aggregate TOWER messages into the expected Ubidots format, a **function node**(orange node) called **Ubidots Decode** is used (this function is already included in the Node-RED flow above)

```js showLineNumbers
// Declare variables
var ubi_payload = {}
var ubi_msg = {};
var topic = msg.topic.split("/");

// Get device label, variable name and value from HARDWARIO message
var device_label = topic[1];
var variable = topic[4];
var value = msg.payload;

// Build Ubidots MQTT payload
ubi_msg['device_label'] = device_label;
ubi_payload[variable] = value;
ubi_msg['payload'] = ubi_payload;
return ubi_msg;
```

:::info

Thanks to this simple setup a new **Ubidots device will be created for every new TOWER module detected by your TOWER gateway**.

You don't have to do any additional setup if you don't want to.

:::

:::tip

In the **Data -> Dashboard Tab** you can create a preview of all your important values. In the **Data->Event Tab** you can set rules so you’ll get notified when some value gets out of the limits. The **SMS notification** is easy to set up.

:::
