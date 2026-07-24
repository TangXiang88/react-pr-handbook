# 7. 合并与发布

> **主图位置：** `diagrams/07-merge-release.svg` ← `docs/diagrams/07-merge-release.excalidraw`

![合并与发布占位](/diagrams/07-merge-release.svg)

## 目标

知道「Merge」之后你还要盯什么，避免以为点了绿色按钮就结束。

## 默认顺序

1. CI 绿 + 批准满足团队规则
2. 合并（squash 或 merge commit 按团队约定；本手册示例倾向 squash，保持主分支清晰）
3. 删已合并的短分支
4. 看部署 / 预发 / 生产验证（按你们环境）
5. 关闭 issue，补一句结果

**为什么合并后还要看一眼：** 前端常有「仅生产环境才出现」的路径、缓存、权限问题。

## 降级

没有独立发布流水线 → 合并即视为交付，但仍应在目标环境手动点验主路径。

下一章：[常见翻车](./08-pitfalls)
