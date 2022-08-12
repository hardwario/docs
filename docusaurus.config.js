// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'HARDWARIO Documentation',
  tagline: 'Technical Resources for Products and Services',
  url: 'https://docs.hardwario.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: 'chester',
          path: 'chester',
          sidebarPath: require.resolve('./sidebars-chester.js'),
          editUrl: 'https://github.com/hardwario/docs/edit/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      ({
        id: 'ember',
        path: 'ember',
        routeBasePath: 'ember',
        sidebarPath: require.resolve('./sidebars-ember.js'),
      }),
    ],
    [
      '@docusaurus/plugin-content-docs',
      ({
        id: 'tower',
        path: 'tower',
        routeBasePath: 'tower',
        sidebarPath: require.resolve('./sidebars-tower.js'),
      }),
    ],
    [
      '@docusaurus/plugin-content-docs',
      ({
        id: 'cloud',
        path: 'cloud',
        routeBasePath: 'cloud',
        sidebarPath: require.resolve('./sidebars-cloud.js'),
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'HARDWARIO Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/chester/',
            label: 'CHESTER',
            position: 'left',
            activeBaseRegex: `/chester/`,
          },
          {
            to: '/ember/',
            label: 'EMBER',
            position: 'left',
            activeBaseRegex: `/ember/`,
          },
          {
            to: '/tower/',
            label: 'TOWER',
            position: 'left',
            activeBaseRegex: `/tower/`,
          },
          {
            to: '/cloud/',
            label: 'CLOUD',
            position: 'left',
            activeBaseRegex: `/cloud/`,
          },
          {
            href: 'https://github.com/hardwario/docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Sites',
            items: [
              {
                label: 'Homepage',
                to: 'https://hardwario.com',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Forum',
                href: 'https://forum.hardwario.com',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/hardwario',
              },
              {
                label: 'Twitter (EN)',
                href: 'https://twitter.com/hardwario_en',
              },
              {
                label: 'Twitter (CZ)',
                href: 'https://twitter.com/hardwario_cz',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/hardwario',
              },
              {
                label: 'GitLab',
                href: 'https://gitlab.hardwario.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} HARDWARIO a.s. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
