---
slug: api
title: API
---
import Image from '@theme/IdealImage';

# API

For Cloud v2 API please see the [**API Swagger documentation**](https://api.prod.hardwario.cloud/v2/documentation/index.html).

For real-time delivery of devices' messages we strongly recommend using HTTP callback, please see the [**Connectors**](connectors.md).

## Python API examples

Currently, Cloud v2 API does not support fixed API Keys, so you have to log in using your credentials and space name. See the examples below.

### Log-in and list devices

This example logs in to the Cloud v2 production portal (`api.prod.hardwario.cloud`). It gets Space ID, then it get list of all devices in this space.


```python
#!/usr/bin/env python3

import requests

email = ''
password = ''
space_id = ''

base_url = 'https://api.prod.hardwario.cloud'

# Login
resp = requests.post(base_url + '/v2/auth/login',
                     json={"email": email, "password": password})

if resp.status_code != 200:
    raise Exception('Login failed')

authorization = 'Bearer ' + resp.json()['access_token']

print(authorization)

resp = requests.get(f'{base_url}/v2/space/{space_id}/devices',
                    headers={'Authorization': authorization})

print(resp.status_code)

if resp.status_code != 200:
    raise Exception('Device read failed:' + resp.text)

print(resp.json())
```

### Create devices

```python

# Copy the log-in from the first example code

# Create device from list in space

devices = [
    {
        "name": "dev-001",
        "serial_number": "2112345678",
        "token": "hie1koh5toh0ga6iedoJ1hahshohmoh7"
    },
    {
        "name": "dev-002",
        "serial_number": "2112345679",
        "token": "hie1koh5toh0ga6iedoJ1hahshohmoh7",
        "tags": [{"id": "5f6b5b4e-3b4c-4c4c-8c8c-8c8c8c8c8c8c"}],
        "external_id": "1234567890"
    }
]

for device in devices:
    resp = requests.post(f'{base_url}/v2/space/{space_id}/devices', json=device,
                         headers={'Authorization': authorization})

    if resp.status_code != 201:
        raise Exception('Device create failed:' + resp.text)

    print(resp.json())
```
