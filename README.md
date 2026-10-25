# depictlightning

个人博客：推理加速、框架与卸载方向的[研究笔记 Wiki](https://ai-infra-wiki-erx.pages.dev/)、收集冷门工具与奇怪技术的「技术异闻录」，以及随笔栏目。

网站地址：https://depictlightning.github.io

## 写一篇新文章

在 `_posts/` 下创建 `YYYY-MM-DD-title.md`。研究笔记使用 `categories: [research]`，技术异闻录使用 `categories: [oddities]`，随笔使用 `categories: [essay]`。例如：

```markdown
---
layout: post
title: 一篇新的研究笔记
date: 2026-10-23
categories: [research]
---

正文从这里开始。
```

推送到 `master` 后，GitHub Pages 会自动重新发布网站。站点使用 GitHub Pages 自带的 Jekyll，不需要额外安装主题或构建依赖。
