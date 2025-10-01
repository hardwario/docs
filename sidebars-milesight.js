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
        'sensors/am319-868m',
        'sensors/ws201-868m',
        'sensors/ws303-868m',
        'sensors/wt101-868m',
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
        'gateways/ug63-868m',
        'gateways/ug65-868m',
      ],
    },
  ],
};

module.exports = sidebars;
