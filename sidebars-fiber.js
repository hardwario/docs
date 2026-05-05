// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    docs: [
      'introduction',
      'installation',
      {
        type: 'category',
        label: 'Platform',
        collapsed: true,
        items: [
          'developer/flash-stm32',
          'developer/flash',
          'developer/setup',
        ],
      },
      {
        type: 'category',
        label: 'Developer Tools',
        collapsed: true,
        items: [
          'developer-tools/segger-jlink',
        ],
      },
      {
        type: 'doc',
        id: 'changelog',
        label: 'Changelog',
      },
    ],
  };

  module.exports = sidebars;
