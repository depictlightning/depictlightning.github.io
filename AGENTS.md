# 博客仓库协作约定

本文件只适用于当前仓库。修改和临时产物留在当前仓库内，任务结束时清理临时文件。

## 构建与发布

- GitHub Pages 从 `master` 分支的仓库根目录发布。
- 网站使用 Jekyll、自定义 `_layouts/` 和 `assets/style.css`，没有额外主题包；本地构建依赖由 `Gemfile` 和 `Gemfile.lock` 管理。
- 是否提交、推送或发布，以当次请求为准。
- 确认发布后，提交并推送到 `master`，GitHub Pages 自动发布；临时分支需先合并。其他分支不会更新正式站，但公开仓库中的草稿提交仍公开可见。

## 本地预览

- 随笔默认只审阅文字，不构建或启动预览；其他页面修改完成后提供可访问的预览地址。用户当次明确要求时再启动随笔预览；预览不等于正式发布。
- 当前没有文章时，在仓库根目录运行 `python preview.py`，访问 `http://127.0.0.1:4000/`；旧研究归档页为 `http://127.0.0.1:4000/research/`。
- 添加 `_posts` 文章后使用 Jekyll 的实际构建结果。当前优先使用本地 Ruby，通过 `bundle exec jekyll serve --host 127.0.0.1 --port 4000` 预览；GitHub Codespaces 作为备选，不需要 WSL。
- 当前日常使用 `master` 本地预览；需要隔离草稿时再创建临时分支。Codespaces 启动配置位于 `.devcontainer/devcontainer.json`，预览使用 4000 端口。
- 本地首次安装 Ruby＋Devkit 后重新打开终端，在仓库根目录依次运行 `bundle config set --local path vendor/bundle` 和 `bundle install`；之后只需运行 Jekyll 预览命令。
- 本地首页为 `http://127.0.0.1:4000/`，异闻录为 `/oddities/`；保存文件后会自动重新生成页面，刷新浏览器查看，无需提交。
- 云端预览：在 GitHub 仓库选择目标分支，点击 **Code → Codespaces → Create codespace**；自动安装依赖并启动后，打开 **Ports** 面板中 4000 端口的地址。服务停止时运行 `bundle exec jekyll serve --host 0.0.0.0 --port 4000`，使用结束后停止 Codespaces 环境。
- 只有用户确认发布后，才合并或推送到 `master`。云端与本地交替编辑前先同步同一分支。

## 内容

- 首页身份表述以现有页面为准，不自行添加个人经历、成果或身份信息。
- 技术笔记归入 `research`，随笔归入 `essay`。
- 异闻录归入 `oddities`，用于冷门工具、奇怪知识与偶然发现；栏目地址为 `/oddities/`。
- 新文章放在 `_posts/YYYY-MM-DD-title.md`，front matter 使用 `layout: post` 和对应的 `categories`。
- 随笔先在对话中提供文章供用户审阅，确认写入后再保存到 `_posts/`；完成草稿后调用 `humanizer-zh` 润色，保留用户确认的标题、观点和事实，不编造经历。
- 随笔写入完成后，提醒用户亲自查看 `_posts/` 中对应的文章，并提供具体文件链接；是否提交、推送仍以当次请求为准。
- 不自行添加小说原文或装饰性文学短句。

## 视觉与协作

- 首页采用暖纸色与克制的魔幻现实主义意象；文章页面优先保证阅读清晰。
- 修改前先读相关文件，沿用现有结构。
- 主题、视觉风格和首页身份表述等主观决定，先遵循本次请求与已确认的偏好；仍不明确时再询问。
