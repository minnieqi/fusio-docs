// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Fusio',
  tagline: 'Fusio is an open source API management platform which helps to build and manage REST APIs',
  url: 'https://docs.fusio-project.org/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/fusio_32px.png',
  organizationName: 'apioo', // Usually your GitHub org/user name.
  projectName: 'fusio', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/apioo/fusio-website/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/apioo/fusio-website/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Fusio',
        logo: {
          alt: 'Fusio',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'bootstrap',
            position: 'left',
            label: 'Introduction',
          },
          {
            href: 'https://github.com/apioo/fusio',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting started',
                to: '/docs/bootstrap',
              },
            ],
          },
          {
            title: 'API',
            items: [
              {
                label: 'Backend API',
                href: 'https://demo.fusio-project.org/apps/internal/#!/page/about',
              },
              {
                label: 'Worker API',
                href: 'https://www.fusio-project.org/documentation/worker',
              },
              {
                label: 'PHP API',
                href: 'https://www.fusio-project.org/documentation/php',
              },
            ],
          },

          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/apioo/fusio',
              },
              {
                label: 'Forum',
                href: 'https://groups.google.com/forum/#!forum/fusio',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/c/FusioAPI',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/FusioAPI',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Cloud',
                href: 'https://fusio.cloud/',
              },
              {
                label: 'ApiGen',
                href: 'https://apigen.app/',
              },
              {
                label: 'TypeSchema',
                href: 'https://typeschema.org/',
              },
              {
                label: 'PSX',
                href: 'https://phpsx.org/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Christoph Kappestein. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;