# 3. 接任务改代码

> **主图位置：** `diagrams/03-change-code.svg` ← `docs/diagrams/03-change-code.excalidraw`

![接任务改代码占位](/diagrams/03-change-code.svg)

## 目标

把 issue/任务翻译成**一次可演示的小改动**，落在正确目录。

## 默认做法

1. 复述验收标准（做不到就先问清，再写代码）
2. 分支命名：`feat/<short-name>` 或 `fix/<short-name>`
3. 先找该改的 `features/*`，共享外观才进 `components/ui`
4. 一次 PR 只解决一个任务切片（大需求拆开）

**为什么要小：** 评审成本随 diff 膨胀；小 PR 更容易在第一周合入，建立信心。

## 教具练习

在 `examples/app` 中给任务列表增加一条默认示例任务，或改一处可见文案——走完后面开 PR 的流程。

## 检查清单

- [ ] 改动能在界面上指给人看
- [ ] 没有顺手重构无关文件
- [ ] 类型检查本地能过（`npm run app:build`）

下一章：[自测与设计还原](./04-self-test)
