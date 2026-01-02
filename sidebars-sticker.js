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
              label: 'Wiring',
              link: {
                type: 'doc',
                id: 'sticker-input-wiring/index',
              },
              collapsed: true,
              items: []
            },
          ]
        },
        'catalog-applications/sticker-motion',
      ],
    },
     {
      type: 'category',
      label: 'LoRaWAN Network Server',
      collapsed: true,
      items: [
        'lorawan-network-server/lorawan-chirpstack',
        'lorawan-network-server/lorawan-tts',
      ],
    },
    'developer-mode',
    'hardware-description',
    'power-management',
    'ordering-codes',
  ],
};

module.exports = sidebars;
