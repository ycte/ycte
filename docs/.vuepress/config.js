import { defaultTheme, defineUserConfig } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import { getDirname, path } from '@vuepress/utils'

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'ycte',
  description: 'improving......',
  base: '/ycte/',
  head: [['link', { rel: 'icon', href: '/images/kokomi.png' }]],
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: '搜索',
        },
      },
      maxSuggestions: 7,
      isSearchable: (page) => true,
      getExtraFields: (page) => page.frontmatter.tags ?? [],
    }),
  ],
  theme: defaultTheme({
    sidebarDepth: 1, // 将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
    logo: '/images/kokomi.png',
    logoDark: '/images/kokomi.png',
    repo: 'https://github.com/ycte/ycte', // 仓库地址
    repoLabel: 'Github',
    editLink: true,
    editLinkText: '要一起敲键盘喵？',
    docsRepo: 'https://github.com/ycte/ycte',
    docsBranch: 'blog-edit',
    docsDir: 'docs',
    editLinkPattern: ':repo/edit/:branch/:path', // editLink 地址配置
    tip: '啊哈',
    navbar: [
      { text: 'improving......', link: '/' },
      { text: 'improving......', link: '/my-heart.html' },
      {
        text: 'improving......',
        link: '/t-f-my-heart/'
      },
      // {
      //   text: 'improving......',
      //   link: '/t-f-my-heart/kokomi.html'

      // }
    ],
    sidebar: {
      '/t-f-my-heart/': [
        {
          text: "improving......",
          // collapsible: true,
        },
      ],
      '/': [
        {
          text: 'improving......',
          children: ['rules.md']
        }
      ]
    },

  }),
  alias: {
    '@theme/HomeFooter.vue': path.resolve(__dirname, './components/MyHomeFooter.vue'),
  },
})
