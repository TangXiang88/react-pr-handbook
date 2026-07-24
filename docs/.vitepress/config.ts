import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'react-pr-handbook',
  description: '给初级前端的入职协作手册：从拉起 React 项目到合入第一个规范 PR',
  lang: 'zh-CN',
  base: '/react-pr-handbook/',
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: '手册', link: '/guide/00-assumptions' },
      { text: 'GitHub', link: 'https://github.com/TangXiang88/react-pr-handbook' },
    ],
    sidebar: [
      {
        text: '开始',
        items: [
          { text: '手册地图', link: '/' },
          { text: '默认假设与降级', link: '/guide/00-assumptions' },
        ],
      },
      {
        text: '协作闭环',
        items: [
          { text: '1. 总览地图', link: '/guide/01-map' },
          { text: '2. 拉起项目', link: '/guide/02-setup' },
          { text: '3. 接任务改代码', link: '/guide/03-change-code' },
          { text: '4. 自测与设计还原', link: '/guide/04-self-test' },
          { text: '5. 开 PR', link: '/guide/05-open-pr' },
          { text: '6. 评审与修改', link: '/guide/06-review' },
          { text: '7. 合并与发布', link: '/guide/07-merge-release' },
          { text: '8. 常见翻车', link: '/guide/08-pitfalls' },
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/TangXiang88/react-pr-handbook' },
    ],
    outline: { label: '本页目录' },
    docFooter: { prev: '上一章', next: '下一章' },
  },
})
