// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'introduction',
    {
      type: 'category',
      label: 'Thingsboard',
      link: {
        type: 'doc',
        id: 'thingsboard/index',
      },
      collapsed: true,
      items: [

      ],
    },
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
    }
  ],
};

module.exports = sidebars;
