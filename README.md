# react-pr-handbook

[![CI](https://github.com/TangXiang88/react-pr-handbook/actions/workflows/ci.yml/badge.svg)](https://github.com/TangXiang88/react-pr-handbook/actions/workflows/ci.yml)
[![Deploy docs](https://github.com/TangXiang88/react-pr-handbook/actions/workflows/deploy-docs.yml/badge.svg)](https://github.com/TangXiang88/react-pr-handbook/actions/workflows/deploy-docs.yml)

**给初级前端的入职协作手册：从拉起 React 项目到合入第一个规范 PR。**

用协作时间线当骨架，在关键节点挂上可执行的前端约定；每章一张主图，对照迷你示例仓库动手。

📖 **在线文档：** [https://tangxiang88.github.io/react-pr-handbook/](https://tangxiang88.github.io/react-pr-handbook/)

## 这是什么 / 不是什么

| 是 | 不是 |
| --- | --- |
| 学习型文档站 + 教具级 React 示例 | 全栈百科 / 组件库文档 |
| 强观点默认路径（附「为什么」与降级） | 中立的多流派对照大全 |
| 面向刚入职、会写一点代码的初级前端 | 给负责人的治理制度手册 |

## 仓库结构

```
react-pr-handbook/
├── docs/              # VitePress 文档站（CC BY 4.0）
│   ├── guide/         # 各章正文
│   ├── diagrams/      # Excalidraw 源文件
│   └── public/diagrams/  # 导出的 SVG
└── examples/app/      # Vite + React + TypeScript 教具（MIT）
    └── src/
        ├── pages/
        ├── features/
        └── components/ui/
```

## 本地运行

需要 Node.js 20+。

```bash
npm install
npm run docs:dev    # 文档站 http://localhost:5173
npm run app:dev     # 示例应用（端口见终端）
```

## 默认假设（摘要）

面向常见互联网小团队：GitHub + PR、CI（至少 lint/typecheck）、Figma 可对照、有人做 Code Review、可预览部署或至少本地截图对比。

若你的环境缺某一项，见文档 [默认假设与降级](./docs/guide/00-assumptions.md)。

## 许可

- **示例代码**（`examples/`）：[MIT](./LICENSE-MIT)
- **文档与图**（`docs/`）：[CC BY 4.0](./LICENSE-CC-BY-4.0)

## 贡献

修错别字、坏链、补例子欢迎直接开 PR 或 [Issue](https://github.com/TangXiang88/react-pr-handbook/issues/new/choose)。若要改手册的默认观点，请先开 [Discussion](https://github.com/TangXiang88/react-pr-handbook/discussions)。详见 [CONTRIBUTING.md](./CONTRIBUTING.md)。
