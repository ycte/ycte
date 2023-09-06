## Hi there 👋

### 🪪关于我

* 🎮喜欢米家游戏，钟情于珊瑚宫心海和识之律者，反感勿近
* 💬语言表达能力欠佳，码字逻辑很乱喵
* 💻大学在读，在研究前端喵喵

### 🆔关于 `ycte`

* 😉顾名思义，’yc’ + ‘te’ 咯，’te’ 就是 test 的意思，这个账号原本是用来备份作业的，用着用着变成主号了
* 😋yc, 我昵称的缩写，个人常用 id 有 `yunxi`、`xiaoxi`、`识宝nrbl`、`iceCream` 等，反感勿近喵喵喵
* 🤐！好耶 



# ycte blog

基于 vuepress 2.0.0beta 快速搭建的个人博客，内容可能引起不适，请谨慎阅读。
### ✅已实现功能
- 可折叠 sidebar
- 基本配置
- 用于文章管理、与 typora 结合的基本文件结构

### 📅TODO List
- [x] 回到顶部
- [x] 文章搜索
- [x] 插件、主题配置
- [x] 插件、主题制作
- [x] ...

### 🚀部署

* 完成 git 的初始化和 `.gitignore` 设置（😑忘了，把 `node_modules` 全 push 上去了）

* 在根目录下新建  `.github/workflows/docs.yml`, 复制 [github-pages](https://v2.vuepress.vuejs.org/zh/guide/deployment.html#github-pages) 里面的配置样例

  注1：我 GitHub Actions 一直报错找不到 `docs/.vuepress/dist`, 把配置案例里面的改成 `./docs/.vuepress/dist` 试试

  注2：本地用 yarn，云端用 pnpm 出错，统一

* 。。。一系列操作，在 GitHub 设置里打开 GitHub Pages 功能（🤪详见文档），git push 。。。，wait