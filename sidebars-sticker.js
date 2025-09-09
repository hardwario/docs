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
        'developer-mode',
          'hardware-description',
      {
          type: 'category',
          label: 'STICKER Input Configuration',
          link: {
            type: 'doc',
            id: 'sticker-input-configuration/index',
          },
          collapsed: true,
          items: [
          
          ]
        },
        'power-management',
        'ordering-codes',

  ],
};

module.exports = sidebars;
