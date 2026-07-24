# 5. 开 PR

> **主图位置：** `diagrams/05-open-pr.svg` ← `docs/diagrams/05-open-pr.excalidraw`

![开 PR](/diagrams/05-open-pr.svg)

## 目标

开出一份**别人不用猜**的 Pull Request。

## 默认 PR 必须有

1. **为什么改**（关联 issue / 背景一句）
2. **怎么验证**（步骤或命令）
3. **看得见的证据**：预览链接，或前后截图
4. **风险与范围**（有没有改到公共组件、有没有跟版）

本仓库提供了 PR 模板：`.github/PULL_REQUEST_TEMPLATE/pull_request_template.md`，建议直接用。

**为什么强制「看得见」：** 前端改动的真相在屏幕上；纯文字描述容易漏还原问题。

## 检查清单

- [ ] 标题能概括改动（像 changelog 一句）
- [ ] CI 已触发且你自己看过结果
- [ ] 指定了评审人（或按团队惯例）

下一章：[评审与修改](./06-review)
