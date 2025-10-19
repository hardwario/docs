// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'introduction',
    'hardware-description',
    'initial-configuration',
    'hotspot-configuration',
     {
      type: 'category',
      label: 'ChirpStack',
      link: {
        type: 'doc',
        id: 'chirpstack/index',
      },
      collapsed: true,
      items: [
        'chirpstack-v4-installation',
        'chirpstack/chirpstack-ember',
      ],
    },
    {
      type: 'category',
      label: 'MikroTik',
      collapsed: true,
      items: [
        'mikrotik/gateway-update',
        'mikrotik/gateway-configuration',
      ],
    },
    'cloud-service',
    'ordering-codes',
    {
      type: 'category',
      label: 'Video Tutorials',
      collapsed: true,
      items: [
        'videos-ember/chirpstack-ember',
      ],
    }
  ],
};

module.exports = sidebars;
