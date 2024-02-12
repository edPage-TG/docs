import { type DefaultTheme, defineConfig } from 'vitepress'

export const en = defineConfig({
  lang: 'en-US',
  description: 'Documentation template.',

  themeConfig: {
    nav: nav(),
    siteTitle: 'Documentation',

    sidebar: {
      '/en/guide/': { base: '/en/guide/', items: sidebarGuide() },
    },

    footer: {
      // message: 'School management application.',
      copyright: `Copyright © ${new Date().getFullYear()} <a href="https://edpage.net" target="_blank">edPage</a>`,
    },
  },
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Read the documentation',
      link: '/en/guide/getting-started',
      activeMatch: '/en/guide/',
    },
    {
      text: 'v1.0.0',
      items: [
        {
          text: 'News',
          link: '#',
        },
        {
          text: 'Report a problem',
          link: '#',
        },
      ],
    },
  ]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Introduction',
      collapsed: false,
      items: [{ text: 'Getting started', link: 'getting-started' }],
    },
    {
      text: 'Others',
      collapsed: false,
      items: [{ text: 'About', link: 'about' }],
    },
  ]
}

export const search: DefaultTheme.LocalSearchOptions['locales'] = {
  en: {
    translations: {
      button: {
        buttonText: 'Search',
        buttonAriaLabel: 'Search',
      },
      modal: {
        displayDetails: 'Display detailed list',
        resetButtonTitle: 'Reset search',
        backButtonTitle: 'Close search',
        noResultsText: 'No results for',
        footer: {
          selectText: 'to select',
          navigateText: 'to navigate',
          closeText: 'to close',
        },
      },
    },
  },
}
