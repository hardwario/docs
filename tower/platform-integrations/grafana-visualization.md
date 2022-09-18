---
slug: grafana-visualization
title: Grafana Visualization
---
import Image from '@theme/IdealImage';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

[**Grafana**](https://grafana.com) is an open platform for beautiful analytics and monitoring. It allows you to create nice-looking dashboards that will give you quick insights into your sensor data.

<Image img={require('./grafana-for-visualization-grafana.png')} />

## Install Grafana

<Tabs groupId="operating-system">
<TabItem value="linux" label="Linux">

:::info

First, you will need to install [**InfluxDB**](https://www.influxdata.com).

:::

#### Start by installing all the needed packages
```bash
sudo apt install apt-transport-https curl -y
```

#### Add the repository key
```bash
curl -sL https://repos.influxdata.com/influxdb.key | sudo apt-key add -
```

#### Add repository to the source list

  <Tabs groupId="linux-type">
  <TabItem value="debian" label="Debian">

  ```bash
  echo "deb https://repos.influxdata.com/debian stretch stable" | sudo tee /etc/apt/sources.list.d/influxdb.list
  ```

  </TabItem>
  <TabItem value="ubuntu" label="Ubuntu">

  ```bash
  echo "deb https://repos.influxdata.com/ubuntu/ xenial stable" | sudo tee /etc/apt/sources.list.d/influxdb.list
  ```

  </TabItem>
  </Tabs>

#### Install the InfluxDB Package
```bash
sudo apt update && sudo apt install influxdb
```

#### Start the InfluxDB Service to test it
```bash
sudo systemctl start influxdb
```

:::info

After you tested the InfluxDB, you can move to [**Grafana**](https://grafana.com).

:::

#### Install Grafana Dependencies
```bash
sudo apt install adduser libfontconfig -y
```

#### Install Grafana

<Tabs groupId="device-type">
  <TabItem value="rpi" label="Raspberry Pi">

  #### Download the Latest Version
  ```bash
  wget $(wget "https://api.github.com/repos/fg2it/grafana-on-raspberry/releases/latest" -q -O - | grep browser_download_url | grep armhf.deb | head -n 1 | cut -d '"' -f 4) -O grafana.deb
  ```

  #### Install the Package
  ```bash
  sudo dpkg -i grafana.deb
  ```

  </TabItem>
  <TabItem value="desktop" label="Desktop">

  #### Add Repository to Source List
  ```bash
  curl -sL https://packages.grafana.com/gpg.key | sudo apt-key add -
  echo "deb https://packages.grafana.com/oss/deb stable main" | sudo tee /etc/apt/sources.list.d/grafana.list
  ```

  #### Install the Package
  ```bash
  sudo apt update && sudo apt install grafana -y
  ```

  </TabItem>
</Tabs>

#### Enable Grafana on Boot
```bash
sudo systemctl daemon-reload
sudo systemctl enable grafana-server
```

#### Test Grafana
```bash
sudo systemctl start grafana-server
```

</TabItem>
<TabItem value="macOS" label="macOS">

:::caution

Make sure you have [**Homebrew**](https://brew.sh) installed.

:::

:::info

First, you will need to install [**InfluxDB**](https://www.influxdata.com).

:::

#### Install InfluxDB and Enable It

```bash
brew install influxdb
brew services start influxdb
```

:::info

After you installed the InfluxDB, you can move to [**Grafana**](https://grafana.com).

:::

#### Install InfluxDB and Enable It

```bash
brew install grafana
brew services start grafana
```

</TabItem>
</Tabs>

## Configure Grafana

To configure Grafana, you will first have to open it and log in:

- [**http://localhost:3000/**](http://localhost:3000/) - Grafana is running on your **local machine**
- **http://hub.local:3000/** - Grafana is running on [**your Raspberry Pi with our Hub installed**](../server-raspberry-pi/installation-os.md)
- **http://\[ip\]:3000/** - Grafana is installed on your device, you should know the IP address of that device

:::info

Default **User** is `admin`.
Default **Password** is `admin`.

:::

#### Create a Data Source

Select **Add Data Source** and fill the data

- Enter the Name: `node`
- Select the Type: `InfluxDB`
- Enter the URL: **http://localhost:8086**
- Enter the Database: `node`

<Image img={require('./grafana-data-source.png')} />

#### Download [**dashboard.json**](https://tower.hardwario.com/en/latest/_downloads/882b72bc83234952ae383399de296ed8/dashboard.json) and import it to Grafana

:::info

Click the **Grafana icon on the top left** -> **Dashboard** -> **Import**.

:::

#### Upload the `dashboard.json`, choose node as a data source and click **Import**

<Image img={require('./grafana-import.png')} />

<Image img={require('./grafana-import-dashboard.png')} />

#### Example output for [**Wireless Climate Monitor**](https://www.hackster.io/jakub-smejkal/radio-climate-monitor-96de57) and [**Wireless CO2 Monitor**](https://www.hackster.io/jakub-smejkal/radio-co2-monitor-311d2c) projects

<Image img={require('./grafana-dashboard.png')} />


