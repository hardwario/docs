// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'introduction',
    {
      type: 'category',
      label: 'Platform Connectivity',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        'platform-connectivity/hardwario-manager',
        'platform-connectivity/cellular-networks',
        'platform-connectivity/bluetooth-low-energy',
        'platform-connectivity/lorawan-radio',
        'platform-connectivity/satellite-connectivity',
      ],
    },
    {
      type: 'category',
      label: 'Catalog Applications',
      link: {
        type: 'doc',
        id: 'catalog-applications/index',
      },
      collapsed: true,
      items: [
        'catalog-applications/chester-clime',
        'catalog-applications/chester-current',
        'catalog-applications/chester-input',
        'catalog-applications/chester-push',
        'catalog-applications/chester-meteo',
        'catalog-applications/chester-range'
      ],
    },
    {
      type: 'category',
      label: 'Extension Modules',
      link: {
        type: 'doc',
        id: 'extension-modules/index',
      },
      collapsed: true,
      items: [
        'extension-modules/chester-x0',
        'extension-modules/chester-x1',
        'extension-modules/chester-x2',
        'extension-modules/chester-x3',
        'extension-modules/chester-x4',
        'extension-modules/chester-x5',
        'extension-modules/chester-x6',
        'extension-modules/chester-x7',
        'extension-modules/chester-x8',
        'extension-modules/chester-x9',
        'extension-modules/chester-x10',
        'extension-modules/chester-k1',
      ],
    },
    {
      type: 'category',
      label: 'Hardware Description',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        'hardware-description/basic-parameters',
        'hardware-description/block-diagram',
        'hardware-description/schematic-diagram',
        'hardware-description/layout-placement',
        'hardware-description/connector-description',
        'hardware-description/i2c-address-space',
        'hardware-description/enclosures',
      ],
    },
    'power-management',
    {
      type: 'category',
      label: 'Firmware Flashing',
      link: {
        type: 'doc',
        id: 'firmware-flashing/index',
      },
      collapsed: true,
      items: [
        'firmware-flashing/application-over-j-link',
        'firmware-flashing/application-over-bluetooth',
        'firmware-flashing/lte-modem-over-j-link',
        'firmware-flashing/lorawan-modem-over-j-link',
        'firmware-flashing/chester-z-over-j-link',
      ],
    },
    {
      type: 'category',
      label: 'Developer Tools',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        'developer-tools/command-line-tools',
        'developer-tools/segger-j-link',
        'developer-tools/power-profiler-kit-ii'
      ],
    },
    {
      type: 'category',
      label: 'Firmware SDK',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        'firmware-sdk/requirements',
        'firmware-sdk/j-link-installation',
        'firmware-sdk/installation-on-ubuntu',
        'firmware-sdk/installation-on-macos',
        'firmware-sdk/installation-on-windows',
        'firmware-sdk/installation-in-virtualbox',
        'firmware-sdk/build-and-deploy',
        'firmware-sdk/applications',
        'firmware-sdk/samples',
        'firmware-sdk/application-customization',
        'firmware-sdk/how-to-i2c-bus',
        'firmware-sdk/how-to-kconfig',
        'firmware-sdk/how-to-cbor',
        'firmware-sdk/licenses',
      ],
    },
    {
      type: 'category',
      label: 'Platform Security',
      link: {
        type: 'doc',
        id: 'platform-security/index',
      },
      collapsed: true,
      items: [
      ],
    },
    'ordering-codes',
    'product-certification',
  ],
};

module.exports = sidebars;
