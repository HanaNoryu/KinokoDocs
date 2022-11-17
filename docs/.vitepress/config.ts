export default {
  title: 'KinokoDocs',
  base: '/KinokoDocs/',
  description: '个人使用的速查代码库',
  themeConfig: {
    siteTitle: 'KinokoDocs',
    logo: '/logo.png',
    nav: [
      { text: '指南', link: '/guide/' },
      { text: 'CSS样式库', link: '/guide/test' },
      { text: 'gitee', link: 'https://gitee.com/geeksdidi' },
      {
        text: 'Drop Menu',
        items: [
          {
            items: [
              { text: 'Item A1', link: '/item-A1' },
              { text: 'Item A2', link: '/item-A2' },
            ],
          },
          {
            items: [
              { text: 'Item B1', link: '/item-B1' },
              { text: 'Item B2', link: '/item-B2' },
            ],
          },
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://gitee.com/geeksdidi' },
      { icon: 'twitter', link: '...' },
      // You can also add custom icons by passing SVG as string:
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>',
        },
        link: '...',
      },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You',
    },
  },
}
