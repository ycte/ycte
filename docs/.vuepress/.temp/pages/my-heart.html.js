export const data = JSON.parse("{\"key\":\"v-21b550bb\",\"path\":\"/my-heart.html\",\"title\":\"1. 我♥永恒\",\"lang\":\"zh-CN\",\"frontmatter\":{\"lang\":\"zh-CN\",\"title\":\"1. 我♥永恒\",\"description\":\"页面的描述\"},\"headers\":[{\"level\":2,\"title\":\"博客文档管理\",\"slug\":\"博客文档管理\",\"link\":\"#博客文档管理\",\"children\":[]}],\"git\":{\"updatedTime\":1694005209000,\"contributors\":[{\"name\":\"ycte\",\"email\":\"114587040+ycte@users.noreply.github.com\",\"commits\":1}]},\"filePathRelative\":\"my-heart.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
