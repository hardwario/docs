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
    }
  ],
};

module.exports = sidebars;
