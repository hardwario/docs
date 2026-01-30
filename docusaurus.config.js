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
  favicon: 'img/favicon.ico',

  // ✅ Přesunuto z kořene: onBrokenMarkdownLinks → markdown.hooks.onBrokenMarkdownLinks
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

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
        editUrl: 'https://github.com/hardwario/docs/edit/main',
      }),
    ],
    [
      '@docusaurus/plugin-content-docs',
      ({
        id: 'fiber',
        path: 'fiber',
        routeBasePath: 'fiber',
        sidebarPath: require.resolve('./sidebars-fiber.js'),
        editUrl: 'https://github.com/hardwario/docs/edit/main',
      }),
    ],
    [
      '@docusaurus/plugin-content-docs',
      ({
        id: 'tapper',
        path: 'tapper',
        routeBasePath: 'tapper',
        sidebarPath: require.resolve('./sidebars-tapper.js'),
        editUrl: 'https://github.com/hardwario/docs/edit/main',
      }),
    ],
    [
      '@docusaurus/plugin-content-docs',
      ({
        id: 'tower',
        path: 'tower',
        routeBasePath: 'tower',
        sidebarPath: require.resolve('./sidebars-tower.js'),
        editUrl: 'https://github.com/hardwario/docs/edit/main',
      }),
    ],
    [
      '@docusaurus/plugin-content-docs',
      ({
        id: 'cloud',
        path: 'cloud',
        routeBasePath: 'cloud',
        sidebarPath: require.resolve('./sidebars-cloud.js'),
        editUrl: 'https://github.com/hardwario/docs/edit/main',
      }),
    ],
    [
      '@docusaurus/plugin-content-docs',
      ({
        id: 'gauger',
        path: 'gauger',
        routeBasePath: 'gauger',
        sidebarPath: require.resolve('./sidebars-gauger.js'),
        editUrl: 'https://github.com/hardwario/docs/edit/main',
      }),
    ],
    [
      '@docusaurus/plugin-content-docs',
      ({
        id: 'apps',
        path: 'apps',
        routeBasePath: 'apps',
        sidebarPath: require.resolve('./sidebars-apps.js'),
      }),
    ],
    [
      '@docusaurus/plugin-content-docs',
      ({
        id: 'sticker',
        path: 'sticker',
        routeBasePath: 'sticker',
        sidebarPath: require.resolve('./sidebars-sticker.js'),
      }),
    ],
    // ➜ Milesight docs plugin
    [
      '@docusaurus/plugin-content-docs',
      ({
        id: 'milesight',
        path: 'milesight',
        routeBasePath: 'milesight',
        sidebarPath: require.resolve('./sidebars-milesight.js'),
        editUrl: 'https://github.com/hardwario/docs/edit/main',
      }),
    ],
    // ➜ NEW: RAKwireless docs plugin
    [
      '@docusaurus/plugin-content-docs',
      ({
        id: 'rakwireless',
        path: 'rakwireless',
        routeBasePath: 'rakwireless',
        sidebarPath: require.resolve('./sidebars-rakwireless.js'),
        editUrl: 'https://github.com/hardwario/docs/edit/main',
      }),
    ],
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1200,
        min: 640,
        steps: 2,
        disableInDev: false,
      },
    ],
    require.resolve('docusaurus-plugin-image-zoom'),
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'HARDWARIO Logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo-dark.svg',
        },
        items: [
          // 1) PRODUCTS (podmenu)
          {
            label: 'PRODUCTS',
            position: 'left',
            items: [
              { to: '/chester/', label: 'CHESTER', activeBaseRegex: `/chester/` },
              { to: '/sticker/', label: 'STICKER', activeBaseRegex: `/sticker/` },
              { to: '/ember/',   label: 'EMBER',   activeBaseRegex: `/ember/` },
              { to: '/fiber/',   label: 'FIBER',   activeBaseRegex: `/fiber/` },
              { to: '/gauger/',  label: 'GAUGER',  activeBaseRegex: `/gauger/` },
              { to: '/tapper/',  label: 'TAPPER',  activeBaseRegex: `/tapper/` },
              { to: '/tower/',   label: 'TOWER',   activeBaseRegex: `/tower/` },
            ],
          },
          // 2) SMART DEVICES (podmenu)
          {
            label: 'SMART DEVICES',
            position: 'left',
            items: [
              { to: '/milesight/', label: 'MILESIGHT', activeBaseRegex: `/milesight/` },
              { to: '/rakwireless/', label: 'RAKwireless', activeBaseRegex: `/rakwireless/` },
            ],
          },
          // 3) CLOUD (bez podmenu)
          {
            to: '/cloud/',
            label: 'CLOUD',
            position: 'left',
            activeBaseRegex: `/cloud/`,
          },
          // 4) APPS (podmenu)
          {
            label: 'APPS',
            position: 'left',
            items: [
              { to: '/apps/ubidots/index', label: 'UBIDOTS', activeBaseRegex: `/apps/ubidots/index` },
              { to: '/apps/thingsboard/index', label: 'THINGSBOARD', activeBaseRegex: `/apps/thingsboard/index` },
              { to: '/apps/chirpstack/index', label: 'CHIRPSTACK', activeBaseRegex: `/apps/chirpstack/index` },
              { to: '/apps/the-things-stack/index', label: 'THE THINGS STACK', activeBaseRegex: `/apps/the-things-stack/index` },
              { to: '/apps/videos-apps/videos-apps', label: 'VIDEO TUTORIALS', activeBaseRegex: `/apps/videos-apps/videos-apps` },
            ],
          },
          {
            href: 'https://github.com/hardwario/docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      zoom: {
        selector: '.markdown :not(em) > img',
        config: {
          background: {
            light: 'rgb(255, 255, 255)',
            dark: 'rgb(50, 50, 50)',
          },
        },
      },
      algolia: {
        apiKey: '00f3bf4268a994b715822ae701e41326',
        indexName: 'hardwario',
        appId: 'AKRT8SVTPP',
        contextualSearch: false,
        placeholder: 'search',
        searchPagePath: false,
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Sites',
            items: [{ label: 'Homepage', to: 'https://hardwario.com' }],
          },
          {
            title: 'Community',
            items: [
              { label: 'Forum', href: 'https://forum.hardwario.com' },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/company/hardwario' },
              { label: 'Twitter (EN)', href: 'https://twitter.com/hardwario_en' },
              { label: 'Twitter (CZ)', href: 'https://twitter.com/hardwario_cz' },
            ],
          },
          {
            title: 'More',
            items: [
              { label: 'GitHub', href: 'https://github.com/hardwario' },
              { label: 'GitLab', href: 'https://gitlab.hardwario.com' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} HARDWARIO a.s. Built with Docusaurus.`,
      },
      docs: {
        sidebar: { hideable: true },
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
      },
    }),
};

module.exports = config;