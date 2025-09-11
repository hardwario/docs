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
        'ubidots/creating-dashboard',
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
        'chirpstack/chirpstack-installation',
        'chirpstack/chirpstack-configuration',
      ],
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
        'videos-apps/ubidots-new-device',
        'videos-apps/ubidots-cloud-connection',
        'videos-apps/ubidots-dashboard',
      ],
    }

  ],
};

module.exports = sidebars;
