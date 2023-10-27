---
slug: connectors
title: Connectors
---
import Image from '@theme/IdealImage';

# Connectors

With a connector, you can create a webhook on the messages from the device.

You can set which type of uplink messages the webhook will be called:
- data
- session
- config
- stats
- codec

![](connector-new.png)

## JavaScript

Every message passing through the Cloud is handled by a JavaScript. Users can add further logic or completely reformat JSON which is sent. In script, you can also access all the information from the device like name, tags and labels. You can change HTTP request headers, change URL or completely stop the callback.

```js
function main(job) {
  return {
    "url": "https://best.app.ever/new-message",
    "method": "POST",
    "body": JSON.stringify(job),
    "headers": { "Content-Type": "application/json" }
  }
}
```
