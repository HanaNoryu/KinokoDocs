import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'KinokoDocs',
  base: '/kinokodocs/',
  description: 'Various collections of individuals on the Internet',

  cleanUrls: 'without-subfolders',

  head: [
    ['link', { rel: 'shortcut icon', href: 'https://image.hananoryu.cn/images/22%20-%20%E5%89%AF%E6%9C%AC.ico', type: 'image/x-icon' }],
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
    { text: '关于', link: '/about/site', activeMatch: '/about/' },
    {
      text: '组件库',
      items: [
        {
          text: 'Web Component',
          link: '/',
        },
        {
          text: 'Vue',
          link: '/',
        },
        {
          text: 'React',
          link: '/',
        },
      ],
    },
    { text: 'CSS样式库', link: '/styles-library', activeMatch: '/styles-library/' },
    {
      text: '收藏文章',
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
