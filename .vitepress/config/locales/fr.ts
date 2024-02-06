import { type DefaultTheme, defineConfig } from 'vitepress'

export const fr = defineConfig({
  lang: 'fr-FR',
  description: 'Template de documentation.',

  themeConfig: {
    nav: nav(),
    siteTitle: 'Documentation',

    sidebar: {
      '/guide/': { base: '/guide/', items: sidebarGuide() },
    },

    footer: {
      // message: 'Application de gestion scolaire.',
      copyright: `Copyright © ${new Date().getFullYear()} <a href="https://edpage.net" target="_blank">edPage</a>`,
    },

    docFooter: {
      prev: 'Page précédente',
      next: 'Page suivante',
    },

    outline: {
      label: 'Sur cette page',
    },

    lastUpdated: {
      text: 'Mis à jour le',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short',
      },
    },

    langMenuLabel: 'Changer de langue',
    returnToTopLabel: 'Retour au début de la page',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Passer an thème sombre',
    lightModeSwitchTitle: 'Passer au thème clair',
    darkModeSwitchTitle: 'Apparence',
  },
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Lire la documentation',
      link: '/guide/getting-started',
      activeMatch: '/guide/',
    },
    {
      text: 'v1.0.0',
      items: [
        {
          text: 'Nouveautés',
          link: '#',
        },
        {
          text: 'Signaler un problème',
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
      items: [
        { text: 'Pour commencer', link: 'getting-started' },
      ],
    },
    {
      text: 'Autres',
      collapsed: false,
      items: [
        { text: 'A propos', link: 'about' },
      ],
    },
  ]
}
