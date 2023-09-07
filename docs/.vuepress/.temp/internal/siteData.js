export const siteData = JSON.parse("{\"base\":\"/ycte/\",\"lang\":\"zh-CN\",\"title\":\"ycte\",\"description\":\"我♥永恒！\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"/images/kokomi.png\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
