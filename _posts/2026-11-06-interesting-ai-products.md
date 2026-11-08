---
layout: post
title: 有趣的ai产品
date: 2026-11-06
categories: [oddities]
---

本文收集有趣的 AI 产品，并借助产品管理 Skill 分析它们。

## 产品分析工具：pm-skills

[pm-skills](https://github.com/phuryn/pm-skills) 是 Paweł Huryn 创建的开源产品管理 Skill 集合，覆盖用户研究、产品发现、竞品分析、产品战略、数据分析和增长等工作。它把常用的产品方法整理成 AI Agent 可以使用的工作指引。[^pm-skills]

分析用户需求时，可以结合 JTBD（Jobs to Be Done）理论，关注用户在特定情境下想完成什么任务，以及为什么选择某个产品。[^jtbd]

`pm-skills` 按产品工作的不同阶段组织成多个插件，每个插件包含一组相关 Skill：[^pm-skills]

| 插件 | 主要用途 |
|---|---|
| `pm-product-discovery` | 发现用户需求，提出并验证产品假设 |
| `pm-product-strategy` | 制定产品战略和定位 |
| `pm-market-research` | 研究用户、市场和竞争对手 |
| `pm-data-analytics` | 分析产品数据、留存和实验结果 |
| `pm-execution` | 编写需求、规划迭代和推进产品工作 |
| `pm-go-to-market` | 规划产品上市、目标客户和增长路径 |
| `pm-marketing-growth` | 开展产品营销与增长相关工作 |
| `pm-ai-shipping` | AI 产品交付相关能力；仓库说明该部分已迁至 `phuryn/product-engineering` |

目前使用的是 `pm-market-research`，它包含以下七个 Skill。

| Skill | 分析什么 |
|---|---|
| `competitor-analysis` | 竞品及替代方案 |
| `customer-journey-map` | 用户使用过程 |
| `market-segments` | 潜在市场和用户群体 |
| `market-sizing` | 市场规模 |
| `sentiment-analysis` | 用户反馈与情绪 |
| `user-personas` | 典型用户画像 |
| `user-segmentation` | 根据用户行为和需求分群 |

分析具体产品时，可以按需要组合这些 Skill，不必每次都用完。

## 他们的故事

小红书用户“乐乐的奇迹营地”说：

> 来来来，6年产品经理说句话。世界上并不是只有互联网需要产品经理，现在随着产品及用户的观念深入人心，很多智能硬件，甚至宠物行业都开始有产品经理的岗位。我做过纯app类产品，也做过智能硬件，就我个人而言，智能硬件行业作为产品带来的成就感远胜于APP，比起。 NPS日活粘性留存率，一个正儿八经在物理世界能够跑起来的机器，按照你的意志执行功能，我觉得这才是产品经理最有获得感的时候。此外，智能硬件行业对好产品的需求真的很强烈，我见过很多资深的研发工程师，专做产品，哪怕到40岁了，依然是产品组的核心成员。年龄焦虑真的小很多。
>
> 顺带一提，虽然纯互联网厂薪资普遍比智能硬件行业高20~30%吧，但是我选智能硬件一部分原因，也是因为相对来说工作和生活比较平衡，我们公司周末是双休，然后周一到周五会加班个三天左右（到七点半），我觉得这个简直就是洒洒水了，下班我还可以去健个身，买个菜回家做饭，回家再打两盘游戏。所以说真的不用死盯着互联网。

## 参考文献

[^pm-skills]: Paweł Huryn. 《PM Skills Marketplace》. GitHub。[原文](https://github.com/phuryn/pm-skills)。
[^jtbd]: Christensen Institute. 《Jobs to Be Done Theory》. [原文](https://www.christenseninstitute.org/theory/jobs-to-be-done/)。
