// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '茄子Blog',
  tagline: '想学好前端的拷贝忍者',
  url: 'https://messiahhh.github.io/',
  baseUrl: '/blog/', 
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/avatar.webp',
  organizationName: 'niceeggplant', // Usually your GitHub org/user name.
  projectName: 'blog', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  plugins: ['@docusaurus/theme-live-codeblock'],
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      hideableSidebar: true, 
      announcementBar: {
        id: 'support_us',
        content: '⭐️ 博客源码地址  <a target="_blank" rel="noopener noreferrer" href="https://github.com/Niceeggplant/niceq-blog">GitHub</a>',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: true,
      }, 
      navbar: {
        title: '茄子的博客',
        logo: {
          alt: '茄子',
          src: 'img/avatar.webp',
        },
        hideOnScroll: true,
        items: [
          {
            type: 'search',
            position: 'right',
          },
          {
            type: 'doc',
            docId: 'HTML',
            position: 'right',
            label: '正文',
          },
          {to: 'blog/面经', label: '面经', position: 'right'},
          {
            href: 'https://github.com/Niceeggplant',
            label: 'GitHub',
            position: 'right',
          },
        ],
      }, 
      prism: { 
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        defaultLanguage: 'javascript',
        additionalLanguages: ['rust'],
      }, 
      colorMode: {
        respectPrefersColorScheme: true
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'BWG0DEIDEP',
    
        // Public API key: it is safe to commit it
        apiKey: 'd3f9fff64e1510e7299229fb32996203',
    
        indexName: 'messiahhh',
      }
    }),
};

module.exports = config;
