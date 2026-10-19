---
title: "个人技术博客与知识空间"
description: "基于 Astro 5 + Svelte + Tailwind CSS 构建的高性能静态技术博客，支持深色模式与细腻交互体验。"
category: "个人开源项目"
tags: ["Astro 5", "Svelte", "Tailwind CSS", "TypeScript", "SSG"]
order: 3
highlights:
  - "极致首屏加载性能与静态预渲染（SSG），Lighthouse 性能跑分 98+"
  - "侧边栏多卡片整体吸附（Sticky）自适应响应式布局与 Navbar 避让"
  - "Pagefind 全文本地毫秒级搜索与数学公式 KaTeX 支持"
demoUrl: "/"
repoUrl: "https://github.com/yinwusaya/fuwari"
---

## 📌 项目概述

本博客是作者记录技术思考、工程架构实践与沉淀个人知识体系的独立博客站点。基于现代前沿的内容驱动框架 **Astro 5** 开发，并融合了 **Svelte** 组件交互与 **Tailwind CSS** 原子化样式系统，具有极高渲染性能、低运行时开销以及精美的视觉交互设计。

> 📷 **图片预留位（博客首页与文章阅读效果）**  
> *（待补充：博客主页界面截图）*

---

## 🛠️ 技术亮点

### 1. 极致渲染性能（Zero-JS by Default）
- 采用 Astro 独创的 **Islands Architecture（群岛架构）**，主体内容为纯静态 HTML，仅在需要交互的局部组件（如深色模式开关、搜索弹窗）上按需水合 Svelte 组件；
- 全站静态打包生成（SSG），Lighthouse 桌面端性能得分高达 98+。

### 2. 侧边栏整体 Sticky 智能吸附交互
- 优化原生主题结构，重构左侧卡片布局，将个人信息卡片、分类与标签整合成连贯的吸附容器；
- 动态适配顶部导航栏固定高度（`4.5rem`）并保留适度呼吸间隙（`5.5rem`），无论长文如何滚动，侧边栏信息均能优雅保持在视口左侧。

### 3. 全文轻量化毫秒级离线搜索
- 集成 **Pagefind** 静态搜索引擎，在构建期自动扫描生成轻量级索引文件；
- 零后端依赖，无需服务器即可实现全文关键词高亮与毫秒级搜索响应。
