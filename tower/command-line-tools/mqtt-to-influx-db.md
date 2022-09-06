---
slug: mqtt-to-influx-db
title: MQTT Storage
---
import Image from '@theme/IdealImage';

For storing data from our sensors we like to use **InfluxDB - time-series database**. As a bridge between **MQTT** and **InfluxDB** we created a `mqtt2influxdb`. A tool that connects to **InfluxDB** and **MQTT broker** and by user-defined config subscribes to MQTT topics and stores data from messages.

