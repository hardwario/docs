// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'introduction', 'overview', {
      type: 'category',
      label: 'Cloud v2',
      link: {
        type: 'doc',
        id: 'cloud-v2/index',
      },
      collapsed: true,
      items: ['cloud-v2/connectors', 'cloud-v2/downlink', 'cloud-v2/api']
    }
  ],
};

module.exports = sidebars;
