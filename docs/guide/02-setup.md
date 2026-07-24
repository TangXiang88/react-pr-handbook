# 2. 拉起项目

> **主图位置：** `diagrams/02-setup.svg` ← `docs/diagrams/02-setup.excalidraw`

![拉起项目](/diagrams/02-setup.svg)

## 目标

克隆本仓库后，文档站与示例应用都能在本地跑起来，并认目录。

## 推荐步骤

```bash
git clone <本仓库 URL>
cd react-pr-handbook
npm install
npm run app:dev
```

另开终端：

```bash
npm run docs:dev
```

## 目录约定（默认观点）

```
examples/app/src/
  pages/           # 路由级页面编排
  features/        # 按业务切片（如 tasks）
  components/ui/   # 跨功能共享的哑组件
```

**为什么用混合结构：** 纯 `components/` 分层容易变成垃圾场；纯 feature 对超小教具又偏重。混合让「页面编排 / 功能内聚 / 共享 UI」边界看得见。

## 检查清单

- [ ] `npm run app:dev` 浏览器能打开
- [ ] 能指出一个 feature 目录和一个 ui 组件文件
- [ ] 知道改 UI 文案大概该进哪个目录

下一章：[接任务改代码](./03-change-code)
