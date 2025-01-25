---
title: Messages
---
import Image from '@theme/IdealImage';

# Messages

Page to display device messages.

When you click on the **Messages** in the **left menu**, you will see all the messages from all your devices in the space.

When you click on the **Message** icon in the **device list** or **device detail**, you will see only messages from that specific device.

## List

The list of messages shows by default messages from **last 10 days**. You might need to change filter to see more messages.

In the list, you might show **message quick view** by clicking on **down arrow** symbol on the right side of the message.

You might also open message completely by clicking on the **ⓘ** symbol.

You can compare two messages by clicking on the **Compare messages** icon on two messages.

## Types

Messages can be one of the type

- **Data** - contains uplink data
- **Session** - messages which are exchanged during boot of the device
- **Config** - configuration messages, the device sends them only when config has changed (hash of config in session down message differs from the device config hash)
- **Encoder** - encoder JSON keys (used for more efficient of encoding **data** messages)
- **Decoder** - decoder JSON keys
- **Shell** - shell commands
- **Firmware** - firmware update packets

And one of two directions:
- **up** - uplink message from device to the Cloud
- **down** - downlink message from Cloud to the device

You might also filter on message type and direction

Downlink messages have a **down state**
- **pending** - waiting for device to wake-up and read message
- **sent** - message was received by a device
- **cancelled** - message was cancelled in cloud and device will not see it

## Basic Dashboard

**This function is for debugging purporses.**

For basic troubleshooting, you might click on the Dashboard icon and use JavaScript function to graph some values from displayed messages.

### Example 1
```
//{"Temperature":"red"}
const messageBody = message.body;
return {
    date: message.created_at,
    Temperature: messageBody?.thermometer?.temperature,
}
```

### Example 2
```
//{"Temperature":"red"}
const messageBody = message.body;
const points = messageBody?.hygrometer?.temperature?.measurements?.map((measurement) => {
    return measurement.value;
});
return {
    date: message.created_at,
    Temperature: messageBody?.hygrometer?.temperature?.measurements[0]?.value,
}
```

### Example 3
```
//{"Temperature":"red"}
const messageBody = message.body;
const points = messageBody?.hygrometer?.temperature?.measurements?.map((measurement) => {
    return measurement.value;
});
return {
    date: message.created_at,
    Temperature: points,
}
```
