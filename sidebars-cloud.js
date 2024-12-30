// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: 'category',
      label: 'Cloud v2',
      link: {
        type: 'doc',
        id: 'cloud-v2/index',
      },
      collapsed: false,
      items: [
        'cloud-v2/devices', 'cloud-v2/messages', 'cloud-v2/tags', 'cloud-v2/connectors', 'cloud-v2/users', 'cloud-v2/downlink',
        'cloud-v2/fota', 'cloud-v2/api'
      ]
    },
    {
      type: 'category',
      label: 'Cloud v1',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        'introduction',
        'overview',
      ]
    }
  ],
};

module.exports = sidebars;
