// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'introduction',
    {
      type: 'category',
      label: 'Getting Started',
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: [
        'getting-started/system-basics'
      ],
    },
    {
      type: 'category',
      label: 'Desktop Programming',
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: [
        'desktop-programming/about-playground',
        'desktop-programming/playground-installation',
        'desktop-programming/playground-basics',
        'desktop-programming/firmware-flashing',
        'desktop-programming/radio-network-management',
        'desktop-programming/node-red-programming',
        'desktop-programming/data-visualization'
      ],
    },
    {
      type: 'category',
      label: 'Server on Raspberry Pi',
      link: {
        type: 'doc',
        id: 'server-raspberry-pi/index',
      },
      collapsed: false,
      items: [
        'server-raspberry-pi/installation-clean-os',
        'server-raspberry-pi/installation-os'
      ],
    },
    {
      type: 'category',
      label: 'Command Line Tools',
      link: {
        type: 'doc',
        id: 'command-line-tools/index',
      },
      collapsed: false,
      items: [
        'command-line-tools/firmware-tool',
        'command-line-tools/gateway-service',
        'command-line-tools/host-management',
        'command-line-tools/mqtt-to-influx-db'
      ],
    },
    {
      type: 'category',
      label: 'Firmware Development',
      link: {
        type: 'doc',
        id: 'firmware-development/index',
      },
      collapsed: false,
      items: [
        'firmware-development/about-hardwario-code',
        'firmware-development/tower-vscode-extension',
        'firmware-development/development-with-cli-tools'
      ],
    },
    {
      type: 'category',
      label: 'Firmware SDK',
      link: {
        type: 'doc',
        id: 'firmware-sdk/index',
      },
      collapsed: false,
      items: [
        'firmware-sdk/event-driven-programming',
        'firmware-sdk/task-scheduler',
        'firmware-sdk/power-management',
        'firmware-sdk/how-to/one-wire-relay',
        'firmware-sdk/how-to/accelerometer',
        'firmware-sdk/how-to/analog-digital-converter',
        'firmware-sdk/how-to/battery-module',
        'firmware-sdk/how-to/co2-module',
        'firmware-sdk/how-to/digital-analog-converter',
        'firmware-sdk/how-to/eeprom',
        'firmware-sdk/how-to/configuration',
        'firmware-sdk/how-to/graphics-library',
        'firmware-sdk/how-to/gpio-pins',
        'firmware-sdk/how-to/gps-module',
        'firmware-sdk/how-to/i2c-bus',
        'firmware-sdk/how-to/lcd-module',
        'firmware-sdk/how-to/led-control',
        'firmware-sdk/how-to/lora-module',
        'firmware-sdk/how-to/pir-module',
        'firmware-sdk/how-to/power-module',
        'firmware-sdk/how-to/push-button',
        'firmware-sdk/how-to/pwm',
        'firmware-sdk/how-to/relay-module',
        'firmware-sdk/how-to/rs-485-module',
        'firmware-sdk/how-to/rtc-clock',
        'firmware-sdk/how-to/servo-motor',
        'firmware-sdk/how-to/smart-led-strip',
        'firmware-sdk/how-to/soil-sensor',
        'firmware-sdk/how-to/spi-bus',
        'firmware-sdk/how-to/temperature-sensor',
        'firmware-sdk/how-to/uart-interface',
      ],
    },
    {
      type: 'category',
      label: 'Radio Communication',
      link: {
        type: 'doc',
        id: 'radio-communication/index',
      },
      collapsed: false,
      items: [
        'radio-communication/sub-ghz-radio',
        'radio-communication/lora-wan-radio'
      ],
    },
    {
      type: 'category',
      label: 'MQTT Protocol',
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: [
        'mqtt-protocol/topics-reference'
      ],
    },
    {
      type: 'category',
      label: 'Platform Integrations',
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: [
        'platform-integrations/grafana-visualization',
        'platform-integrations/blynk-app',
        'platform-integrations/ubidots-dashboards'
      ],
    },
    {
      type: 'category',
      label: 'Step-by-Step Projects',
      link: {
        type: 'doc',
        id: 'step-by-step-projects/index',
      },
      collapsed: false,
      items: [

      ],
    },
    {
      type: 'category',
      label: 'Hardware Modules',
      link: {
        type: 'doc',
        id: 'hardware-modules/index',
      },
      collapsed: false,
      items: [
        'hardware-modules/about-one-wire-slave-module',
        'hardware-modules/about-barometer-tag',
        'hardware-modules/about-base-module',
        'hardware-modules/about-battery-module',
        'hardware-modules/about-breadboard-module',
        'hardware-modules/about-button-module',
        'hardware-modules/about-climate-module',
        'hardware-modules/about-cloony',
        'hardware-modules/about-co2-module',
        'hardware-modules/about-core-module',
        'hardware-modules/about-cover-module',
        'hardware-modules/about-encoder-module',
        'hardware-modules/about-gps-module',
        'hardware-modules/about-humidity-tag',
        'hardware-modules/about-infragrid-module',
        'hardware-modules/about-lcd-module',
        'hardware-modules/about-lora-module',
        'hardware-modules/about-lux-meter-tag',
        'hardware-modules/about-micro-bit-module',
        'hardware-modules/about-mini-battery-module',
        'hardware-modules/about-mini-cover-module',
        'hardware-modules/about-nfc-tag',
        'hardware-modules/about-pir-module',
        'hardware-modules/about-power-module',
        'hardware-modules/about-probe-module',
        'hardware-modules/about-radio-dongle',
        'hardware-modules/about-relay-module',
        'hardware-modules/about-rs-485-module',
        'hardware-modules/about-sensor-module',
        'hardware-modules/about-soil-sensor',
        'hardware-modules/about-tag-module',
        'hardware-modules/about-temperature-tag',
      ],
    },
    {
      type: 'category',
      label: 'Hardware Interfaces',
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: [
        'hardware-interfaces/i2c-bus',
        'hardware-interfaces/spi-interface',
        'hardware-interfaces/uart-interface',
        'hardware-interfaces/usb-interface',
        'hardware-interfaces/one-wire-bus'
      ],
    },
    'test',
  ],
};

module.exports = sidebars;
