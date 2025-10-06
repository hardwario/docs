// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'index',
    'devices',
    'messages',
    'tags',
    'connectors',
    'users',
    'downlink',
    'fota',
    'api',
    'variables',
    {
      type: 'category',
      label: 'Cloud v1',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        'cloud-v1/introduction',
        'cloud-v1/overview',
      ]
    },

  
     {
      type: 'category',
      label: 'Video Tutorials',
      link: {
        type: 'doc',
        id: 'videos-cloud/index',
      },
      collapsed: true,
      items: [
        'videos-cloud/cloud-chester-add',
      ],
    }

  ],
};

module.exports = sidebars;
