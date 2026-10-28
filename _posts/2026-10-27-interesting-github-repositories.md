---
layout: post
title: 有趣的 GitHub 开源仓库
date: 2026-10-27
categories: [oddities]
---

## Resin

[ekzhang/resin](https://github.com/ekzhang/resin) 是一个用于构建大模型推理引擎的实验性组件库，提供 Rust 调度器和 KV cache 等基础设施。它有趣的地方在于将调度与模型的前向计算分开，方便针对新模型和硬件编写推理实现。[^resin]

仓库还提供 `add-resin-model` skill，指导 AI 编程助手适配模型及指定 GPU，并进行正确性和性能验证。[^resin-skill]

## OXR

[SoMarkAI/OXR](https://github.com/SoMarkAI/OXR) 是一个开源文档解析项目，可以将 PDF 和文档图片转换为带有版面坐标的 Markdown 或 JSON。它的版面分析模块可以替换，方便针对不同文档调整解析方式。[^oxr]

## 参考文献

[^resin]: ekzhang. 《resin》. GitHub。[原文](https://github.com/ekzhang/resin)。
[^resin-skill]: ekzhang. 《Add a Resin model》. GitHub。[原文](https://github.com/ekzhang/resin/blob/main/skills/add-resin-model/SKILL.md)。
[^oxr]: SoMark. 《OXR-1.0》. GitHub。[原文](https://github.com/SoMarkAI/OXR)。
