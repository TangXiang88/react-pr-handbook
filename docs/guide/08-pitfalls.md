# 8. 常见翻车

> **主图位置：** `diagrams/08-pitfalls.svg`

![常见翻车](/diagrams/08-pitfalls.svg)

## 初级前端高频坑

| 现象 | 更好的做法 |
| --- | --- |
| 一个 PR 改了十个无关文件 | 拆 PR；重构单独开 |
| 没有截图/预览就求审 | 补视觉证据 |
| CI 红着催 Review | 先修红再 @ 人 |
| 把业务组件塞进巨大 `components/` | 优先放进对应 `features/` |
| 分支从过期的主分支拉出，冲突爆炸 | 开 PR 前 rebase/merge 默认分支 |
| 设计还原凭感觉 | 对照稿面量间距与文案 |
| 合并后不管线上 | 按第 7 章做一次验证 |

## 开 PR 前 30 秒自检

1. Diff 里有没有「顺手改动」？有 → 挪走或另开 PR  
2. 描述里陌生人能否复现验证？不能 → 补步骤  
3. 有没有图或预览？没有 → 先补再 @  
4. CI / 本地 build 绿了吗？红 → 先修  

## 手册到这里

你应能独立走完：**拉起 → 改一小步 → 自测 → 规范 PR → 跟 Review → 合并验证**。

建议把 [`examples/app/PRACTICE.md`](https://github.com/TangXiang88/react-pr-handbook/blob/master/examples/app/PRACTICE.md) 完整做一遍，当作第一次「仿真」合入。

v2 才会展开状态管理、性能、组件库等专题——先把这一条线打磨锋利。

返回：[手册地图](/)
