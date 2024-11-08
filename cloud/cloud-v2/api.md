---
slug: api
title: API
---
import Image from '@theme/IdealImage';

# API

For Cloud v2 API please see the [**API Swagger documentation**](https://api.hardwario.cloud/v2/documentation/).

For real-time delivery of devices' messages we strongly recommend using HTTP callback, please see the [**Connectors**](connectors.md).

## API Examples

### List devices in space with cURL

Please create an API key and fill it in `<api-key>`, also set correct `<space-id>`.

```
curl -X GET "https://api.hardwario.cloud/v2/spaces/<space-id>/devices" -H 'accept: application/json' -H 'X-API-Key: <api-key>' -H 'Content-Type: application/json'
```

### List devices in space with Python

```python
#!/usr/bin/env python3

import requests
import json

api_key = ...
space_id = ...
base_url = 'https://api.hardwario.cloud'


def get_devices():
    data = requests.get(f'{base_url}/v2/spaces/{space_id}/devices?limit=500',
                        headers={'X-API-Key': api_key}).json()

    for item in data:
        print(item["id"], item["name"])


if __name__ == "__main__":
    get_devices()

```
