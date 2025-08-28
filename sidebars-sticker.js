// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'introduction',
    {
          type: 'category',
          label: 'Catalog Applications',
          link: {
            type: 'doc',
            id: 'catalog-applications/index',
          },
          collapsed: true,
          items: [
            'catalog-applications/sticker-clime',
            'catalog-applications/sticker-input',
            'catalog-applications/sticker-motion',
          ]
        },

      {
          type: 'category',
          label: 'Supported Sensors',
          link: {
            type: 'doc',
            id: 'supported-sensors/index',
          },
          collapsed: true,
          items: [
          
          ]
        },
        'hardware-description',
        'power-management',
        'ordering-codes',

  ],
};

module.exports = sidebars;
