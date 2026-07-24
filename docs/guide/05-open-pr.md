# 5. 开 PR

> **主图位置：** `diagrams/05-open-pr.svg`

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

## 推送与创建

```bash
git add examples/app/src/features/tasks/TaskBoard.tsx
git commit -m "Add onboarding sample task to the teaching board."
git push -u origin HEAD
```

在 GitHub 上 Compare & pull request。目标分支用仓库默认分支（本仓库为 `master`）。

## 示例：练习 PR 怎么填

**标题：** `Add onboarding sample task to teaching board`

**改动说明：**  
为教具默认列表增加一条入职练习提示任务，方便新人对照第 3 章动手。无产品 issue，按 `examples/app/PRACTICE.md` 验收。

**怎么验证：**

1. `npm run app:dev`
2. 打开首页，确认列表中出现新的默认任务
3. `npm run app:build`

**视觉证据：** 贴改前 / 改后截图。  
**风险与范围：** 仅改 `initialTasks`；未动 `components/ui`。

## 检查清单

- [ ] 标题能概括改动（像 changelog 一句）
- [ ] CI 已触发且你自己看过结果
- [ ] 指定了评审人（或按团队惯例；自学时可 `@` 自己走完模板）

下一章：[评审与修改](./06-review)
