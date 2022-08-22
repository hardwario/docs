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
        'features',
        'parameters',
      ],
    },
    {
      type: 'category',
      label: 'Hardware Description',
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: [
        'hardware-description/basic-parameters',
        'hardware-description/block-diagram',
        'hardware-description/connector-description',
        'hardware-description/enclosures',
      ],
    },
    'power-mgmt',
    {
      type: 'category',
      label: 'Firmware Flashing',
      link: {
        type: 'doc',
        id: 'firmware-flashing/index',
      },
      items: [
        'firmware-flashing/app-j-link',
        'firmware-flashing/app-bluetooth',
      ],
    },
    'bluetooth',
    {
      type: 'category',
      label: 'Extension Modules',
      link: {
        type: 'doc',
        id: 'extension-modules/index',
      },
      collapsed: false,
      items: [
        'extension-modules/chester-x0',
        'extension-modules/chester-x2',
        'extension-modules/chester-x3',
        'extension-modules/chester-x4',
        'extension-modules/chester-x6',
        'extension-modules/chester-x7',
        'extension-modules/chester-x8',
        'extension-modules/chester-x9',
      ],
    },
    {
      type: 'category',
      label: 'Firmware SDK',
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: [
        'firmware-sdk/requirements',
        'firmware-sdk/j-link-installation',
        'firmware-sdk/install-ubuntu',
        'firmware-sdk/install-macos',
        'firmware-sdk/install-windows',
        'firmware-sdk/how-to-i2c-bus',
        'firmware-sdk/how-to-kconfig',
      ],
    },
    'ordering-codes',
  ],
};

module.exports = sidebars;
