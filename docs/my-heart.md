---
lang: zh-CN
title: 1. 我♥永恒
description: 页面的描述
---

# 我♥永恒

So, first, 再强调一遍——我♥永恒



## 博客文档管理
主要需要理解相对路径转换成路由路径的逻辑。



#### (1) 官网的介绍
| 相对路径                    | 路由路径                      |
| --------------------------- | ----------------------------- |
| `/README.md`                | `/`                           |
| `/index.md`                 | `/`                           |
| `/contributing.md`          | `/contributing.html`          |
| `/guide/README.md`          | `/guide/`                     |
| `/guide/getting-started.md` | `/guide/getting-started.html` |

下面将分门别类梳理。



#### (2) 带大纲的单篇文章

* 路径：`/…….html` 和根路径 `/` 、 `/index.html`

* 配置：默认主题中集成了提取 markdown 中标题生成 sidebar 的功能，参考主题配置中的 [sidebardepth](https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html#sidebardepth)

* 效果：

  ![image-20230906160652352](./assets/image-20230906160652352.png)



#### (3) 文章的集合

* 路径：封闭的文件夹路径（官方文档强调了封闭，如上面的 `/guide/`）

* 效果：

  ![image-20230906191625915](./assets/image-20230906191625915.png)
  
* 配置：参考官方文档中示例三可折叠侧边栏的配置[sidebar](https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html#sidebar)，即为上述效果，vuepress 会根据 `children` 数组自动排序和生成 prev 和 next 

* 注意：官方提供了在 markdown 文档的 frontmatter 中配置 sidebar 的方法，且优先级高；但是这样（比如在每个文件夹的 `README.md` 下配置，只会在当前 markdown 文档生效，不推荐这样进行文章集合的配置。
