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
    'flashing',
    'bluetooth',
    {
      type: 'category',
      label: 'Extensions',
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: [
        'extensions/chester-x0',
        'extensions/chester-x2',
        'extensions/chester-x3',
        'extensions/chester-x4',
        'extensions/chester-x6',
        'extensions/chester-x7',
        'extensions/chester-x8',
        'extensions/chester-x9',
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
      ],
    },
  ],
};

module.exports = sidebars;
