---
slug: boolean
title: Boolean Values
---
import Image from '@theme/IdealImage';

# Boolean (true/false) Values

## Problem Description

When sending data to **Ubidots**, boolean values (`true` / `false`) are **not supported as textual or native boolean types**.  
Ubidots expects **numeric values**, typically:

- `1` → true  
- `0` → false  

If boolean values are sent directly, they may be rejected or stored incorrectly.

---

## Where the Conversion Must Happen

The boolean-to-numeric conversion must be performed in the **HARDWARIO Cloud** connector that forwards data to Ubidots.  
This ensures that Ubidots receives only numeric values while the original data structure remains unchanged in the cloud.

The conversion is implemented using **JSONata**.

:::info
If you are not sure how to work with a Connector in **HARDWARIO Cloud**, you can find more information in the documentation here:  
https://docs.hardwario.com/apps/ubidots/cloud-connection
:::


---

## Data Flow

1. Device sends data with boolean values  
2. Data arrives in the cloud  
3. Connector transforms the data  
4. Transformed numeric data is sent to Ubidots  

---

## Connector Function (JSONata Transformation)

This is the function used in the connector to convert a boolean value to a numeric value:

```
{
  "machine.state": {
    "value": $number(data.sensor.machine.state = true),
    "timestamp": $toMillis($string(created_at))
  }
}
```


## Incoming Data (Before Transformation)

Example of data as received by the cloud:

```
{
  "sensor": {
    "machine": {
      "state": true
    }
  },
  "created_at": "2024-01-01T12:00:00Z"
}
```

## Outgoing Data (After Transformation)

Example of data sent to Ubidots after connector processing:

```
{
  "machine.state": {
    "value": 1,
    "timestamp": 1704110400000
  }
}
```