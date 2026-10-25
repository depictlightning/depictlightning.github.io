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

## 本地预览

安装 Ruby＋Devkit 后，重新打开终端，在仓库根目录运行：

```powershell
bundle config set --local path vendor/bundle
bundle install
bundle exec jekyll serve --host 127.0.0.1 --port 4000
```

前两条命令用于首次安装项目依赖；之后只需运行第三条。首页为 `http://127.0.0.1:4000/`，FDE 文章为 `http://127.0.0.1:4000/oddities/2026/10/25/understanding-fde/`。保存文件后会自动重新生成页面，刷新浏览器即可查看。

## 云端预览（备选）

在 GitHub 仓库页面选择需要预览的分支（默认为 `master`），点击 **Code → Codespaces → Create codespace**。

首次创建时会自动安装 Ruby 依赖并启动 Jekyll，之后打开 **Ports** 面板中 4000 端口的地址即可查看。首页为 `/`，技术异闻录为 `/oddities/`，FDE 文章为 `/oddities/2026/10/25/understanding-fde/`。

在 Codespaces 中保存文章后，Jekyll 会自动重新生成页面，刷新浏览器即可看到变化，不需要每次提交。若预览服务已停止，在终端运行：

```sh
bundle exec jekyll serve --host 0.0.0.0 --port 4000
```

结束后在 GitHub Codespaces 页面停止环境。如需隔离未发布的草稿，可先创建临时分支；云端与本地交替编辑前先同步同一分支，避免两边覆盖。

## 发布

本地预览并确认发布后，提交并推送到 `master`，GitHub Pages 会自动重新发布网站。若使用临时分支，先将其合并到 `master` 再推送。其他分支不会更新正式站，但公开仓库中的草稿提交仍然公开可见。
