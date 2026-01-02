// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'introduction',
    'getting-started',
    'hardware-description',
    'initial-configuration',
    'hotspot-configuration',
    {
      type: 'category',
      label: 'LoRaWAN Network Server',
      collapsed: true,
      items: [
        'lorawan-network-server/lorawan-chirpstack',
        'lorawan-network-server/lorawan-tts',
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
    {
      type: 'category',
      label: 'ChirpStack v4',
      collapsed: true,
      items: [
        'videos-ember/chirpstack-ember',
      ],
    },
    {
      type: 'category',
      label: 'MikroTik',
      collapsed: true,
      items: [
        'videos-ember/mikrotik-update',
        'videos-ember/mikrotik-configuration',
      ],
    },
  ],
}

  ],
};

module.exports = sidebars;
