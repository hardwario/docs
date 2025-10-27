// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'introduction',
    'getting-started',
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
        {
          type: 'category',
          label: 'Sticker Input',
          link: {
            type: 'doc',
            id: 'catalog-applications/sticker-input',
          },
          collapsed: true,
          items: [
            {
              type: 'category',
              label: 'Configuration',
              link: {
                type: 'doc',
                id: 'sticker-input-configuration/index',
              },
              collapsed: true,
              items: []
            },
          ]
        },
        'catalog-applications/sticker-motion',
      ],
    },
    'developer-mode',
    'hardware-description',
    'power-management',
    'ordering-codes',
  ],
};

module.exports = sidebars;
