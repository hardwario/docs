// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'introduction',
    {
      type: 'category',
      label: 'Platform Management',
      link: {
        type: 'doc',
        id: 'platform-management/index',
      },
      collapsed: false,
      items: [
        'platform-management/mobile-application',
        'platform-management/cellular-networks',
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
        'hardware-description/connector-description',
        'hardware-description/i2c-address-space',
        'hardware-description/enclosures',
      ],
    },
    'power-mgmt',
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
      label: 'Catalog Applications',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        'catalog-applications/chester-push',
        'catalog-applications/chester-input',
        'catalog-applications/chester-current'
      ],
    },
    {
      type: 'category',
      label: 'Firmware Flashing',
      link: {
        type: 'doc',
        id: 'firmware-flashing/index',
      },
      collapsed: false,
      items: [
        'firmware-flashing/app-j-link',
        'firmware-flashing/app-bluetooth',
        'firmware-flashing/lte-j-link',
        'firmware-flashing/lrw-j-link',
        'firmware-flashing/chester-z-j-link',
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
        'firmware-sdk/install-ubuntu',
        'firmware-sdk/install-macos',
        'firmware-sdk/install-windows',
        'firmware-sdk/how-to-i2c-bus',
        'firmware-sdk/how-to-kconfig',
      ],
    },
    'ordering-codes',
    'product-certification',
  ],
};

module.exports = sidebars;
