# 教具练习：加一条默认任务

配合手册第 3–7 章，走完一次「小改动 → 规范 PR」仿真。

## 练习任务卡

| 项 | 内容 |
| --- | --- |
| 背景 | 默认列表还差一条入职练习提示 |
| 验收 | 刷新后列表里出现新的**默认**任务（不是靠输入框临时加） |
| 改哪里 | 只改 `src/features/tasks/TaskBoard.tsx` 里的 `initialTasks` |
| 不做 | 不加依赖、不改目录结构、不顺手重构 UI 组件 |

建议文案（可自拟，但要肉眼可见）：

```ts
{ id: '4', title: '按 PRACTICE.md 走完一次练习 PR', done: false },
```

## 步骤

```bash
# 在仓库根目录
git checkout master
git pull
git checkout -b feat/add-onboarding-task
```

1. 编辑 `initialTasks`，追加一条  
2. `npm run app:dev` → 刷新，确认新任务在列表中  
3. 缩窄窗口看一眼布局  
4. `npm run app:build`  
5. 截一张改后图（有改前图更好）  
6. commit / push / 按仓库 PR 模板开 PR  

手册对照：

- 改代码 → [第 3 章](https://tangxiang88.github.io/react-pr-handbook/guide/03-change-code)  
- 自测 → [第 4 章](https://tangxiang88.github.io/react-pr-handbook/guide/04-self-test)  
- 开 PR → [第 5 章](https://tangxiang88.github.io/react-pr-handbook/guide/05-open-pr)  

## 可选加分

- 把首页副标题改得更短（`pages/HomePage.tsx`）——**另开 PR**，别和本练习混在一起。
