<template><div><h1 id="我♥永恒" tabindex="-1"><a class="header-anchor" href="#我♥永恒" aria-hidden="true">#</a> 我♥永恒</h1>
<p>So, first, 再强调一遍——我♥永恒</p>
<h2 id="博客文档管理" tabindex="-1"><a class="header-anchor" href="#博客文档管理" aria-hidden="true">#</a> 博客文档管理</h2>
<p>主要需要理解相对路径转换成路由路径的逻辑。</p>
<h4 id="_1-官网的介绍" tabindex="-1"><a class="header-anchor" href="#_1-官网的介绍" aria-hidden="true">#</a> (1) 官网的介绍</h4>
<table>
<thead>
<tr>
<th>相对路径</th>
<th>路由路径</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>/README.md</code></td>
<td><code v-pre>/</code></td>
</tr>
<tr>
<td><code v-pre>/index.md</code></td>
<td><code v-pre>/</code></td>
</tr>
<tr>
<td><code v-pre>/contributing.md</code></td>
<td><code v-pre>/contributing.html</code></td>
</tr>
<tr>
<td><code v-pre>/guide/README.md</code></td>
<td><code v-pre>/guide/</code></td>
</tr>
<tr>
<td><code v-pre>/guide/getting-started.md</code></td>
<td><code v-pre>/guide/getting-started.html</code></td>
</tr>
</tbody>
</table>
<p>下面将分门别类梳理。</p>
<h4 id="_2-带大纲的单篇文章" tabindex="-1"><a class="header-anchor" href="#_2-带大纲的单篇文章" aria-hidden="true">#</a> (2) 带大纲的单篇文章</h4>
<ul>
<li>
<p>路径：<code v-pre>/…….html</code> 和根路径 <code v-pre>/</code> 、 <code v-pre>/index.html</code></p>
</li>
<li>
<p>配置：默认主题中集成了提取 markdown 中标题生成 sidebar 的功能，参考主题配置中的 <a href="https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html#sidebardepth" target="_blank" rel="noopener noreferrer">sidebardepth<ExternalLinkIcon/></a></p>
</li>
<li>
<p>效果：</p>
<p><img src="@source/assets/image-20230906160652352.png" alt="image-20230906160652352"></p>
</li>
</ul>
<h4 id="_3-文章的集合" tabindex="-1"><a class="header-anchor" href="#_3-文章的集合" aria-hidden="true">#</a> (3) 文章的集合</h4>
<ul>
<li>
<p>路径：封闭的文件夹路径（官方文档强调了封闭，如上面的 <code v-pre>/guide/</code>）</p>
</li>
<li>
<p>效果：</p>
<p><img src="@source/assets/image-20230906191625915.png" alt="image-20230906191625915"></p>
</li>
<li>
<p>配置：参考官方文档中示例三可折叠侧边栏的配置<a href="https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html#sidebar" target="_blank" rel="noopener noreferrer">sidebar<ExternalLinkIcon/></a>，即为上述效果，vuepress 会根据 <code v-pre>children</code> 数组自动排序和生成 prev 和 next</p>
</li>
<li>
<p>注意：官方提供了在 markdown 文档的 frontmatter 中配置 sidebar 的方法，且优先级高；但是这样（比如在每个文件夹的 <code v-pre>README.md</code> 下配置，只会在当前 markdown 文档生效，不推荐这样进行文章集合的配置。</p>
</li>
</ul>
</div></template>


