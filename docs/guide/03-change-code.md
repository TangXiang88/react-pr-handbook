# 3. 接任务改代码

> **主图位置：** `diagrams/03-change-code.svg`

![接任务改代码](/diagrams/03-change-code.svg)

## 目标

把 issue/任务翻译成**一次可演示的小改动**，落在正确目录。

## 默认做法

1. 复述验收标准（做不到就先问清，再写代码）
2. 分支命名：`feat/<short-name>` 或 `fix/<short-name>`
3. 先找该改的 `features/*`，共享外观才进 `components/ui`
4. 一次 PR 只解决一个任务切片（大需求拆开）

**为什么要小：** 评审成本随 diff 膨胀；小 PR 更容易在第一周合入，建立信心。

## 教具练习（必做）

完整步骤见仓库 [`examples/app/PRACTICE.md`](https://github.com/TangXiang88/react-pr-handbook/blob/master/examples/app/PRACTICE.md)。摘要：

**练习任务卡**

| 项 | 内容 |
| --- | --- |
| 背景 | 看板默认列表还差一条「入职练习」提示任务 |
| 验收 | 刷新后列表里能看到新的默认任务（不依赖手动输入） |
| 范围 | 只改 `examples/app/src/features/tasks/TaskBoard.tsx` 的 `initialTasks` |
| 不做 | 不改样式体系、不加新依赖、不重构目录 |

```bash
git checkout -b feat/add-onboarding-task
# 编辑 initialTasks，追加一条 title
npm run app:build
```

改完应能在界面上指给人看；下一章自测，再开 PR。

## 反例（别这么干）

- 顺手「整理」了半个 `components/` —— 拆成另一个 PR  
- 验收标准含糊就开写 —— 先留言问清  
- 一个分支里塞三个不相关需求 —— 拆分支

## 检查清单

- [ ] 改动能在界面上指给人看
- [ ] 没有顺手重构无关文件
- [ ] 类型检查本地能过（`npm run app:build`）

下一章：[自测与设计还原](./04-self-test)
