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
import requests

email='...'
password='...'
space_name = '...'

base_url = 'https://api.prod.hardwario.cloud'

# Login
resp = requests.post(base_url + '/v2/auth/login', json={ "email": email, "password": password})

print(resp)

if resp.status_code != 200:
    raise Exception('Login failed: {}'.format(resp.text))

authorization = 'Bearer ' + resp.json()['access_token']

# Get space id
resp = requests.get(base_url + '/v2/spaces', headers={ 'Authorization': authorization })

for s in resp.json():
    print(s['name'], s['type'], s['id'])
    if s['name'] == space_name:
        space_id = s['id']
        break

resp = requests.post(base_url + '/v2/auth/space', json={ 'space_id': space_id },  headers={ 'Authorization': authorization })
if resp.status_code != 200:
    raise Exception('Auth to space failed')

authorization_personal_space = 'Bearer ' + resp.json()['access_token']

# Get list of devices
resp = requests.get(base_url + '/v2/devices', headers={ 'Authorization': authorization_personal_space })

if resp.status_code != 201:
    raise Exception('Device get failed:' + resp.text)

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
        "token": "hie1koh5toh0ga6iedoJ1hahshohmoh5"
    },
    {
        "name": "dev-002",
        "serial_number": "2112345679",
        "token": "hie1koh5toh0ga6iedoJ1hahshohmoha",
        "tags": [ {"id": "5f6b5b4e-3b4c-4c4c-8c8c-8c8c8c8c8c8c"} ],
        "external_id": "1234567890"
    }
]

for device in devices:
    resp = requests.post(base_url + '/v2/devices', json=device, headers={ 'Authorization': authorization_personal_space })

    if resp.status_code != 201:
        raise Exception('Device create failed:' + resp.text)
    print(resp.json())
```
