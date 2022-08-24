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
        {
          type: 'category',
          label: 'How To',
          link: {
            type: 'doc',
            id: 'firmware-sdk/how-to/index',
          },
          collapsed: false,
          items: [
            {
              type: 'doc',
              id: 'firmware-sdk/how-to/co2-module',
              label: 'CO2 Module',
            },
          ],
        },
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
        'hardware-modules/about-core-module'
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
