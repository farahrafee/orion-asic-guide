
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Digital ASIC Design Guide',
  favicon: 'img/orion-logo.png',
  url: 'https://farahrafee.github.io',
  baseUrl: '/backend-flow/',
  organizationName: 'farahrafee',
  projectName: 'backend-flow',
  onBrokenLinks: 'throw',

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
          sidebarPath: './sidebars.js',
          editUrl:
	    'https://github.com/farahrafee/backend-flow/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/orion-logo.png',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Digital ASIC Design Guide',
        logo: {
          alt: 'Orion Logo',
          src: 'img/orion-logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'frontendSidebar',
            position: 'left',
            label: 'Front-End Flow',
          },
          {
            type: 'docSidebar',
            sidebarId: 'backendSidebar',
            position: 'left',
            label: 'Back-End Flow',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Orion Radiation Measurement Group. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
