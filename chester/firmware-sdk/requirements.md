---
slug: requirements
title: Requirements
---
import Image from '@theme/IdealImage';

# Requirements

This chapter defines the requirements if you want to start development with the CHESTER SDK.

## Hardware Setup

* Development board CHESTER DevKit

  * Can be provided by HARDWARIO

* USB programmer/debugger SEGGER J-Link Compact Plus + Cortex-M Adapter

  * Can be provided by HARDWARIO

* USB power source Power Profiler Kit 2 (PPK2)

  * Can be provided by HARDWARIO

* Two Micro-USB cables for J-Link and PPK2

  * Can be provided by HARDWARIO

* One of these operating systems:

  :::caution

  Despite all the operating systems being supported and working the same way, we have experienced extremely long build times on the Windows platform. For serious development, we recommend getting a PC with Ubuntu, or macOS. Alternatively, you will get better results in a virtualized environment (e.g. [VirtualBox](https://www.virtualbox.org/)).

  :::

  * Ubuntu 20.04 / 22.04
  * macOS 11 / 12
  * Windows 10 / Windows 11

## GitLab Access

You must have access to HARDWARIO GitLab (hosted at https://gitlab.hardwario.com). The account requires a partnership agreement with HARDWARIO. With the agreement, you are fully eligible for the CHESTER SDK GitLab access, and technical assistance.

Once the GitLab account is created, you will receive an email with the invitation. After the first login, you will be enforced to set up the two-factor authentication (2FA) method. You can use any of the popular tools, such as Google Authenticator, Microsoft Authenticator, or Twilio Authy.

:::tip

In HARDWARIO, we recommend using [Twilio Authy](https://www.twilio.com/authy), as it provides seamless cloud synchronization between your devices. Also, you should never share a single password for more than one site. Preferably, you should use randomly generated passwords from a password manager such as [Bitwarden](https://bitwarden.com) (which is free for personal use, open-source, and comes with a cloud synchronization feature).

:::

## Generate SSH Key

If you have not generated your SSH public/private key yet, you can do so using this command:

```
ssh-keygen
```

This will help you to generate the keys in your home folder. You should have files `id_rsa` (private key) and `id_rsa.pub` (private key) in the folder `.ssh` of your home directory.

:::warning

You must make sure the private key will not get to anybody else. Verify permissions on your key file.

:::

## Upload SSH Key

Your public SSH key must be uploaded to your HARDWARIO GitLab account. Log in to GitLab and open **Preferences** (from the top right corner). Next, click on **SSH Keys** and insert the content of your public key to the text area, give it a name, and click on **Add Key**.

You can test your connection with this command:

```
ssh -T git@gitlab.hardwario.com
```

It should output something like this:

```
Welcome to GitLab, @<YOUR_NICK_NAME>!
```
