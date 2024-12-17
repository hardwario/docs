---
slug: connectors
title: Connectors
---
import Image from '@theme/IdealImage';

# Connectors

With a connector, you can create a webhook on the messages from the device. Device with the **same tag as the connector** will trigger single, or multiple connectors.

You can set which type of uplink messages the webhook will be called:
- data
- session
- config
- stats
- codec

Tags are important. They connect a device or multiple devices to the connector.

![](connector-new.png)

You can create a function, that will transform every message. It can act as a translator between CHESTER JSON data representation and your integration service.

![](connector-transformation.png)

In the connector preview tab, you can select one of the latest messages and in real-time see, how the transformation works.

![](connector-preview.png)

In the **Advanced** tab in the **Connectors**, you might change how many times the **HARDWARIO Cloud** tries to call your callback and in which intervals.

## JavaScript

Every message passing through the Cloud is handled by a JavaScript. Users can add further logic or completely reformat JSON which is sent. In script, you can also access all the information from the device like name, tags and labels. You can change HTTP request headers, change URL or completely stop the callback.

```js
function main(job) {
  let body = job.message.body
  return {
    "method": "POST",
    "url": "https://...",
    "header": {
      "Content-Type": "application/json"
    },
    "data": body
  }
}
```

If your function will return `null` object. The callback is not executed. This can be useful if you would like to have some notifications with third-party services that will send push-notification, e-mail or sms only when some parameter from the CHESTER device is above a certain threshold. You can use services like [**Twilio**](https://www.twilio.com/) or [**Sendgrid**](https://sendgrid.com/).

## Job object

Here is the structure of the `job` object.

The object `body.message.body` contains the JSON from the CHESTER with its data.

```json
{
  "url": "https://pipedream.net/",
  "method": "POST",
  "body": {
    "attempt": 0,
    "message": {
      "id": "018eebbe-678d-7c60-b4ef-d141f48378e8",
      "body": {
        "accelerometer": {
          "accel_x": 0.22,
          "accel_y": 9.8,
          "accel_z": 0.15,
          "orientation": 3
        },
        "battery": {
          "current_load": 25,
          "voltage_load": 2.5,
          "voltage_rest": 2.64
        },
        "frame": {
          "protocol": 3,
          "sequence": 69,
          "timestamp": 1713352118
        },
        "network": {
          "parameter": {
            "band": 20,
            "cid": 658209,
            "earfcn": 6447,
            "ecl": 0,
            "eest": 7,
            "plmn": 23003,
            "rsrp": -95,
            "rsrq": -6,
            "snr": 2
          }
        },
        "thermometer": {
          "temperature": 22.43
        }
      },
      "created_at": "2024-04-17T11:08:27.917Z",
      "type": "data",
      "direction": "up"
    },
    "device": {
      "id": "018a1535-fd39-7293-bd36-52df3e62e962",
      "space_id": "018a14f6-27e3-7293-b7d2-c39d7b0d7cd2",
      "serial_number": "2159020389",
      "session_id": 1712549305,
      "created_at": "2023-08-30T06:51:20.761Z",
      "label": {}
    },
    "connector": {
      "id": "018aef7c-c122-7893-a07c-70dbc6ebbddc",
      "timeout": 0
    }
  },
  "header": {
    "Content-Type": "application/json"
  }
}
```


### Callback Debugging

For testing purposes, you can use one of the free services like [**requestinspector.com**](https://requestinspector.com/) that creates an HTTP endpoint to test callbacks.

Another option is to use services that route public address to your localhost. For example [**ngrok.com**](https://ngrok.com/) where you can create also the fixed address for free.

Also, [**tailscale.com**](https://tailscale.com/) is an awesome free service to put all your devices to one private network even behind CG-NAT,
and one of the functionalities is also creating a tunnel with `serve` or `funnel` commands.
