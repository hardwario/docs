---
slug: /
sidebar_position: 1
title: Introduction
---
import Image from '@theme/IdealImage';

# CLOUD Introduction

The HARDWARIO Cloud is an infrastructure that provides IoT connectivity and enables the management of HARDWARIO IoT devices and provides access to the transmitted device data via REST APIs or callbacks.

<Image img={require('./hardwario-cloud.png')}/>
<br />

1. To find out the cloud basic features, see the chapter:<br/>
    [**HARDWARIO Cloud Basic Features**](category/basic-feautures)
2. To understand cloud security precautions, go to the chapter:<br/>
    [**HARDWARIO Cloud Security Precautions**](category/security-precautions)
3. To learn about cloud integration options, go to the chapter:<br/>
    [**HARDWARIO Cloud Integrations**](category/integrations)

## HARDWARIO Cloud Basic Features 

- The incoming connections are encapsulated in so-called sessions which are established from the devices. The sessions are unique and fully traceable in the communication logs.
- The messages passed through the socket are translated from a binary format into a JSON and passed for pipeline processing in RabbitMQ.
- The message is stored in a database and if asynchronous callback is configured (by customer), the message is immediately delivered to the customer's backend (webhook).
- The data is also available through the REST API.
- Customers can interact with the devices and messages via a web portal, which is a client for its REST API (HARDWARIO Cloud is an API-first model).
- The whole stack is implemented in Node.js (Fastify framework) + Vue.js (frontend).
- HARDWARIO Cloud uses MongoDB as a database and Redis as an in-memory cache.
- All components run in isolated Docker containers (bootstrapped by Docker Compose).

## HARDWARIO Cloud Security Precautions

- Communication between device and server uses a proven DTLS socket implementation (v1.2) in the PSK mode.
- Bluetooth Low Energy has a security PIN enabled. The PIN is unique for each device.
- Servers are operated in Digital Ocean's Frankfurt data center.
- There are automated weekly backups of all the servers.
- All servers run the latest Ubuntu Server LTS distribution.
- HARDWARIO team updates server software in regular monthly intervals altogether with a security audit (running processes, users, system resources, etc.).
- All server logins are possible only from a regular user account (no root login).
- Login is possible only via SSH key (no password logins). The SSH key must be password protected.
- Every HARDWARIO team member is enforced to use password managers altogether with 2FA wherever possible. Authentication via trusted identity providers such as Google, Microsoft, etc. is preferred.

## HARDWARIO Cloud Integrations

### Callback
Callbacks are messages automatically forwarded by the cloud and sent to a defined URL endpoint. Callbacks are always entered for a given Group using the Edit icon. When setting up a callback, the following fields are filled in:

- Name - your chosen callback name, we recommend specifying the name of the integrated application, e.g. Ubidots
- Enabled - callback can be switched on/off, it is functional in Enabled - Yes state
- Note - space for your internal memo
- Method - a selection of options:
  - POST - carries request parameter in message body
  -  GET - carries request parameter appended in URL string
  - PUT - creates a new resource or replaces a representation of the target resource with the request payload
  - PATCH - updates the values of the resource properties
- URL Address - URL of the endpoint to which messages will be sent. We strongly recommend using HTTPS protocol (TLS technology).
- Query Parameters - optional URL extension
- Name - name of the specified parameter 
- Value - parameter value
- HTTP Headers - additional HTTP request context
- Name - name of the specified header (e.g. Authetication)
- Value - value, e.g. token
- Content Type - a selection of options:
  - application/json
  - application/x-www-form-urlencoded
  - application/octet-stream
- Payload - possibility to edit the message content using JSONata transformation. Leave this field empty if no further JSONata transformation is required (the payload will be passed as-is). See here for a description of JSONata, below for an example of selecting and transforming part of the message content:

    {
    "external_temperature": data.hygrometer.temperature,
    "external_humidity": data.hygrometer.humidity,
    "device_orientation": data.accelerometer.orientation,
    "ecl_signal quality": data.network.parameter.ecl
    }
    
- Original message - message content before transformation
- Transformed payload - message content after transformation

Save the callback using the SAVE CALLBACK button.

### REST API
A REST API is an application programming interface, that conforms to the constraints of REST architectural style and allows for interaction with RESTful web services. Description of our REST API can be found at the link: https://api.hardwario.cloud/.
