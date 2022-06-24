// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'introduction',
    {
      type: 'category',
      label: 'Getting Started',
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: [
        'features',
        'parameters',
      ],
    },
    'flashing',
    'bluetooth',
    'extensions',
  ],
};

module.exports = sidebars;
