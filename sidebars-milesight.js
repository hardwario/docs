// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  milesight: [
    'introduction',
    {
      type: 'category',
      label: 'Sensors',
      link: {
        type: 'doc',
        id: 'sensors/index',
      },
      collapsed: true,
      items: [
        'sensors/milesight-am319',
        'sensors/milesight-ws201',
        'sensors/milesight-ws303',
        'sensors/milesight-wt101',
      ],
    },
    {
      type: 'category',
      label: 'Gateways',
      link: {
        type: 'doc',
        id: 'gateways/index',
      },
      collapsed: true,
      items: [
        'gateways/milesight-ug63',
        'gateways/milesight-ug65',
      ],
    },
  ],
};

module.exports = sidebars;
