// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'introduction',
    {
      type: 'category',
      label: 'Ubidots',
      link: {
        type: 'doc',
        id: 'ubidots/index',
      },
      collapsed: true,
      items: [
        'ubidots/creating-device',
        'ubidots/cloud-connection',
        {
          type: 'category',
          label: 'Creating Dashboard',
          collapsed: true,
          items: [
            'ubidots/creating-dashboard/metric',
            'ubidots/creating-dashboard/line-chart',
            'ubidots/creating-dashboard/html-canvas',
            'ubidots/creating-dashboard/synthetic-variable',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'ThingsBoard',
      link: {
        type: 'doc',
        id: 'thingsboard/index',
      },
      collapsed: true,
      items: [
        'thingsboard/creating-device',
        'thingsboard/cloud-connection',
        'thingsboard/creating-dashboard',
      ],
    },
    {
      type: 'category',
      label: 'ChirpStack',
      link: {
        type: 'doc',
        id: 'chirpstack/index',
      },
      collapsed: true,
      items: [
        
        'chirpstack/chirpstack-configuration',
      ],
    },
    {
      type: 'category',
      label: 'The Things Network',
      link: {
        type: 'doc',
        id: 'the-things-network/index',
      },
      collapsed: true,
      items: [],
    },
    {
      type: 'category',
      label: 'Video Tutorials',
      link: {
        type: 'doc',
        id: 'videos-apps/index',
      },
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Ubidots',
          collapsed: true,
          items: [
            'videos-apps/ubidots-new-device',
            'videos-apps/ubidots-cloud-connection',
            'videos-apps/ubidots-dashboard',
          ],
        },
        {
          type: 'category',
          label: 'ThingsBoard',
          collapsed: true,
          items: [
            'videos-apps/thingsboard-new-device',
            'videos-apps/thingsboard-cloud-connection',
            'videos-apps/thingsboard-dashboard',
          ],
        },
        {
          type: 'category',
          label: 'ChirpStack v4',
          collapsed: true,
          items: [
            
            'videos-apps/chirpstack-ember',
            'videos-apps/chirpstack-devices',
            'videos-apps/chirpstack-decoding',
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;
