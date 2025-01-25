---
slug: api
title: REST API
---
import Image from '@theme/IdealImage';

# HARDWARIO Cloud v2 REST API

For HARDWARIO Cloud v2 REST API, please see the [**API Swagger documentation**](https://api.hardwario.cloud/v2/documentation/).

For real-time delivery of messages from the devices, we strongly recommend using HTTPS webhooks. The REST API polling for messages increases delivery latency, data traffic, and request load on the service. Please see the [**Connectors**](connectors.md) for more details on data passing to your API endpoint through webhooks.

## API Examples

### List devices in the space with cURL

Please create an API key with appropriate permissions and replace these fields:

* Field `<api-key>`
* Field `<space-id>`

```
curl -X GET \
  -H 'X-Api-Key: <api-key>' \
  -H 'Accept: application/json' \
  'https://api.hardwario.cloud/v2/spaces/<space-id>/devices'
```

### List messages for a particular device with cURL

Please create an API key with appropriate permissions and replace these fields:

* Field `<api-key>`
* Field `<space-id>`
* Field `<device-id>`
* Field `<after>` is optional, default value is set only to **24 hrs ago**.
* Field `<limit>` is optional, default value is set only to **20 messages**.
* Field `<offset>` is optional (UUID of the last read message; optional/irrelevant for the first listing)

:::caution
If you see messages from the device in the HARDWARIO Cloud web, but not over API, please check parameters `<after>`  and `<limit>` mentioned above. They have different default values than filters in the web interface.
:::

```
curl -X GET \
  -H 'X-Api-Key: <api-key>' \
  -H 'Accept: application/json' \
  'https://api.hardwario.cloud/v2/spaces/<space-id>/messages?device_id=<device-id>&offset=<offset>'
```

### List devices in space with Python

```python
import requests

api_key = '...'
space_id = '...'

data = requests.get(f'https://api.hardwario.cloud/v2/spaces/{space_id}/devices?limit=500',
                    headers={'X-Api-Key': api_key}).json()

for item in data:
    print(item['id'], item['name'])
```
