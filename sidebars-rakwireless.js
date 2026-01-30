// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  rakwireless: [
    'introduction',
       {
      type: 'category',
      label: 'Gateways',
      link: {
        type: 'doc',
        id: 'gateways/index',
      },
      collapsed: true,
      items: [
        'gateways/rak-RAK7268V2',
        'gateways/rak-RAK7289V2',
      ],
    },
  ],
};

module.exports = sidebars;