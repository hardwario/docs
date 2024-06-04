---
slug: installation-setup
title: Fiber Installation
---
import Image from '@theme/IdealImage';

# Fiber Installation

This article provides instructions on bootstrap and configuring the Linux system on Compute Module 4. The instructions below assume the Linux host environment.
This article uses the term host - a Linux-based PC which configures the target (Fiber version 2 hardware).

## Install Image

- Download image
- Uncompress the image
- Install image to Fiber
  - Connect the PoE adapter to the target.
  - Connect the Mini USB cable between the host and the target.
  - Use a jumper to short the BOOT pins on the mainboard.
  - Shortly press the RESET tact switch on the rear side of the mainboard.
  - Now Compute Module 4 should start in the bootloader mode.
  - Remove the jumper from the BOOT pins on the mainboard.
- Flash the image
- Set up network connection


## Network Connection Setup

To start Fiber, follow the instructions below depending on your preferred connection method:

### Wi-Fi Connection

If you are connecting Fiber to your network via Wi-Fi, follow these steps:

- Connect your Fiber device to the PoE port of the PoE adapter.
- Wait for the device to establish a Wi-Fi connection with your network.
- Determine the IP address.
- Log in to the target (password *`fiber`*):
  ```sh
  ssh root@[ip address]
  ```
- Wait for approximately a minute for Fiber to establish a connection with your network.

### Ethernet Connection

If you are connecting Fiber to your network via Ethernet, follow these steps:

- Connect one Ethernet cable from the PoE adapter's LAN port to your router or switch.
- Connect another Ethernet cable from the PoE adapter's port to the Fiber device.
- Determine the IP address.
- Log in to the target (password *`fiber`*):
  ```sh
  ssh root@[ip address]
  ```
- Wait for approximately a minute for Fiber to establish a connection with your network.

### Static IP Address Connection

If your company utilizes a static IP address for Fiber connections, follow these steps:

- Update Configuration File (system section)
  - Set static_ip to True.
  - Replace the following placeholders with your network details: address (Your static IP address), netmask, gateway, dns.
- Depending on the type of Ethernet or Wi-fi connection, use the instructions for them above.

## Development Environment Setup

This section outlines the process of configuring the development environment to facilitate work on the Fiber project. Follow these steps to ensure a smooth and efficient development experience with Fiber.

### 1. Clone Project Repository Locally from GitLab

[https://gitlab.hardwario.com/Fiber-v2/application](https://gitlab.hardwario.com/Fiber-v2/application) clone to local/path/to/project

### 2. Create Dockerfile and Build Docker Container

#### 2.1 Install Docker

**For Windows and macOS:**

- Download Docker Desktop from the official Docker website.
- Start Docker Desktop and wait for Docker Engine to fully start.

**For Ubuntu:**

```terminal
sudo apt update
sudo apt install -y docker.io
```

#### 2.2 Create Dockerfile

```Dockerfile
# Specify the base image, in this case Python 3.10 slim
FROM python:3.10-slim

# Update the package list and install necessary dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    libffi-dev \
    libgpiod-dev \
    python3-dev \
    gcc \
    libc-dev \
    libncurses5-dev \
    libncursesw5-dev \
    ansible \                    # Install Ansible for automating configuration management
    sshpass \                    # Install sshpass for passing SSH password in scripts
    sudo                         # Install sudo for executing commands with superuser privileges

# Install Poetry - a tool for managing Python dependencies
RUN pip install poetry

# Set the working directory to /app
WORKDIR /app

# Create a volume to persist data inside the container
VOLUME /app

# Disable virtual environment creation for Poetry, as we are using a container
RUN poetry config virtualenvs.create false
```

#### 2.3 Start Docker Container

1. Navigate to the project directory:

   ```sh
   cd local/path/to/project
   ```

2. Build the Docker image:

   ```sh
   docker build -t image-name .
   ```

3. Run the Docker container:

   ```sh
   docker run -it -v ${PWD}:/app --name container-name image-name bash
   ```

4. If the container is stopped, start it and open a bash session:

   ```sh
   docker start container-name ; docker exec -it container-name bash
   ```

   _Please replace image-name and container-name with the desired names. Ensure that you execute docker build and docker run commands with administrator privileges if Docker Desktop is running without administrator rights (Windows and macOS)._ You'll be able to work with the project inside this container, and any changes you make will be reflected immediately in the local file system.

### 3. Put the project in the Fiber

1.  You need to copy the local project to your target:

    ```sh
    scp -r local/path/to/project/* root@[ip address]:/app/
    ```

2.  Log in to the target

    ```sh
    ssh root@[ip address]
    ```

3.  Run the installation script using the following command:

      ```sh
      /app/scripts/install.sh
      ```

    The program must be running.

#### Additional information

1. View logs journal

   ```sh
   journalctl -u fiber-core.service
   ```

2. Restart the service

   ```sh
   systemctl restart fiber-core.service
   ```

3. Stop the service

   ```sh
   systemctl stop fiber-core.service
   ```