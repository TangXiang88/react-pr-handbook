# 2. 拉起项目

> **主图位置：** `diagrams/02-setup.svg`

![拉起项目](/diagrams/02-setup.svg)

## 目标

克隆本仓库后，文档站与示例应用都能在本地跑起来，并认目录。

## 推荐步骤

```bash
git clone https://github.com/TangXiang88/react-pr-handbook.git
cd react-pr-handbook
npm install
npm run app:dev
```

另开终端：

```bash
npm run docs:dev
```

| 命令 | 你应该看到 |
| --- | --- |
| `npm run app:dev` | 浏览器打开「任务看板（教具）」 |
| `npm run docs:dev` | VitePress 手册首页，可点进各章 |

需要 Node.js **20+**（见根目录 `package.json` 的 `engines`）。

## 目录约定（默认观点）

```
examples/app/src/
  pages/           # 路由级页面编排（如 HomePage）
  features/        # 按业务切片（当前：tasks）
  components/ui/   # 跨功能共享的哑组件（Button、PageShell）
```

**为什么用混合结构：** 纯 `components/` 分层容易变成垃圾场；纯 feature 对超小教具又偏重。混合让「页面编排 / 功能内聚 / 共享 UI」边界看得见。

### 一眼定位

| 你想改… | 先打开 |
| --- | --- |
| 页面标题 / 副标题 | `pages/HomePage.tsx` |
| 任务列表、添加任务 | `features/tasks/TaskBoard.tsx` |
| 单条任务怎么渲染 | `features/tasks/TaskItem.tsx` |
| 按钮样式（全局复用） | `components/ui/Button.tsx` |

## 卡住时

- `npm install` 失败 → 确认 Node ≥ 20，删掉 `node_modules` 再装一次  
- 端口占用 → 看终端提示的实际 Local URL  
- 只跑了 app、没跑 docs → 两个进程都要开（手册与教具是分开的）

## 检查清单

- [ ] `npm run app:dev` 浏览器能打开
- [ ] 能指出一个 feature 目录和一个 ui 组件文件
- [ ] 知道改 UI 文案大概该进哪个目录

下一章：[接任务改代码](./03-change-code)
