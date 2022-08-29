---
slug: host-management
title: Host Management
---
import Image from '@theme/IdealImage';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

TODO GUIDE TO INSTALL BCG

This **multi-platform** Python tool is used to control the **radio** and **nodes**.

:::caution

<Tabs groupId="operating-system">
<TabItem value="windows" label="Windows" default>

You need [**Python and pip installed and in system PATH**](https://www.tutorialspoint.com/how-to-install-python-in-windows) on your device for you to be able to get the **Host Management Tool**

</TabItem>
<TabItem value="linux" label="Linux">

You need [**Python**](https://www.python.org/downloads/) and [**pip**](https://www.geeksforgeeks.org/how-to-install-pip-in-linux/) installed and in system **PATH** on your device for you to be able to get the **Host Management Tool**

</TabItem>
<TabItem value="macOS" label="macOS">

You need [**Python**](https://www.python.org/downloads/) and [**pip**](https://www.geeksforgeeks.org/how-to-install-pip-in-macos/) installed and in system **PATH** on your device for you to be able to get the **Host Management Tool**

</TabItem>
</Tabs>

:::

## Installation

To install the **Host Management Tool** you just need to open your systems **CLI** and run the following command:

:::tip

You can use the same command to upgrade **Host Management Tool** to the latest version

:::

<Tabs groupId="operating-system">
<TabItem value="windows" label="Windows" default>

```bash
pip install --upgrade --no-cache-dir bch
```

</TabItem>
<TabItem value="linux" label="Linux">

```bash
sudo pip install --upgrade --no-cache-dir bch
```

</TabItem>
<TabItem value="macOS" label="macOS">

```bash
pip install --upgrade --no-cache-dir bch
```

</TabItem>
</Tabs>

:::tip

To get all available commands just type **`bch --help`** to your **CLI**

<details><summary><b>bch --help output</b></summary>
<p>

  ``` showLineNumbers
  Usage: bch [OPTIONS] COMMAND [ARGS]...

  Options:
  --gateway TEXT                 Gateway name [default: usb-dongle].
  -H, --mqtt-host TEXT           MQTT host to connect to [default: 127.0.0.1].
  -P, --mqtt-port INTEGER RANGE  MQTT port to connect to [default: 1883].
  --mqtt-username TEXT           MQTT username.
  --mqtt-password TEXT           MQTT password.
  --mqtt-cafile PATH             MQTT cafile.
  --mqtt-certfile PATH           MQTT certfile.
  --mqtt-keyfile PATH            MQTT keyfile.
  -v, --verbosity LVL            Either CRITICAL, ERROR, WARNING, INFO or
                                  DEBUG

  --version                      Show the version and exit.
  -h, --help                     Show this message and exit.

  Commands:
  gw       Gateway
  node
  pairing
  pub
  sub      Subscribe topic.
  ```

</p>
</details>

:::

