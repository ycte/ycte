import { defaultTheme, defineUserConfig } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'ycte',
  description: '我♥永恒！',
  base: '/ycte/',
  head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  theme: defaultTheme({
    sidebarDepth: 1, // 将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
    logo: 'https://wx4.sinaimg.cn/orj360/006n4v0Qgy1hg3nhi15ewj30go0iy411.jpg',
    logoDark: 'https://wx4.sinaimg.cn/orj360/006n4v0Qgy1hg3nhi15ewj30go0iy411.jpg',
    repo: 'https://github.com/ycte/ycte',
    repoLabel: 'Github',
    navbar: [
      { text: '首页', link: '/' },
      { text: '关于我♥', link: '/my-heart.html' },
      {
        text: '谨防盗版我♥',
        link: '/t-f-my-heart/'
      },
      {
        text: '我♥永恒',
        children: [
          { text: '#ycte 永远的永夜君#', link: 'https://github.com/ycte' },
          { text: '#珊瑚宫心海 美神降临#', link: 'https://github.com/ycte' },
          { text: '#珊瑚宫心海 稻妻神颜#', link: 'https://github.com/ycte' },
          { text: '#珊瑚宫心海 怦然心动#', link: 'https://github.com/ycte' },
          { text: '#珊瑚宫心海 淡雅脱俗#', link: 'https://github.com/ycte' },
          { text: '#珊瑚宫心海 温文尔雅#', link: 'https://github.com/ycte' },
          { text: '#珊瑚宫心海 沧海之约#', link: 'https://github.com/ycte' },
          { text: '#珊瑚宫心海 珍珠音色#', link: 'https://github.com/ycte' },
          { text: '#珊瑚宫心海 霓裳羽衣#', link: 'https://github.com/ycte' },
          { text: '#沫芒宫刑海 永远的永夜君#', link: 'https://github.com/ycte' },
          { text: '#净善宫新海 永远的永夜君#', link: 'https://github.com/ycte' },
          { text: '#珊瑚宫心海 一顾倾人城再顾倾人国#', link: 'https://github.com/ycte' },
          { text: '#珊瑚宫心海点赞须弥女路人逆袭T0大C秒取消#', link: 'https://github.com/ycte' },
        ]

      }
    ],
    sidebar: {
      '/t-f-my-heart/': [
        {
            text: "谨防新型珊瑚宫心海骗局",
            collapsible: true,
          children: ['/t-f-my-heart/kokomi.md', '/t-f-my-heart/ycte.md',
            '/t-f-my-heart/沫芒宫刑海.md', '/t-f-my-heart/净善宫新海.md']
        },
      ],
      '/': [
        {
          text: '关于我♥',
          children: ['/my-heart.md', 'rules.md']
        }
      ]
    },
    
  })
})
