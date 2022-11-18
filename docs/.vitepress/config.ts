import { defineConfig } from 'vitepress'
import { version } from '../../package.json'

export default defineConfig({
  title: 'KinokoDocs',
  base: '/kinokodocs/',
  description: 'Various collections of individuals on the Internet',

  cleanUrls: 'without-subfolders',

  head: [
    ['link', { rel: 'shortcut icon', href: '', type: 'image/x-icon' }],
  ],

  markdown: {
    headers: {
      level: [0, 0],
    },
  },

  themeConfig: {
    logo: { light: './yun.svg', dark: './yun-dark.svg' },

    nav: nav(),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/HanaNoryu' },
      // You can also add custom icons by passing SVG as string:
      /**
      {
        icon: {
          svg: '',
        },
        link: '...',
      },
      */
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present HanaNoryu',
    },

    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
  },
})

function nav() {
  return [
    { text: 'Guide', link: '/guide/what-is-vitepress', activeMatch: '/guide/' },
    { text: 'Configs', link: '/config/introduction', activeMatch: '/config/' },
    {
      text: version,
      items: [
        {
          text: 'Changelog',
          link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md',
        },
        {
          text: 'Contributing',
          link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md',
        },
      ],
    },
  ]
}
