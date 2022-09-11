import { defineConfig } from 'vitepress'
import { sidebar } from './config/sidebar'

export default defineConfig({
  title: 'PGCM-UI',
  description: '一个 vue3 + ts 书写的组件库，为 pgcm 社区而生, 欢迎大家提交 pr, 一起完善组件库',
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: 'https://xiaoli-wyy.oss-cn-hongkong.aliyuncs.com/pgcm/logo.svg'  }],
  ],
  themeConfig: {
    nav: [
      { text: "指南", link: "/guild/installation" },
      { text: "组件", link: "/examples/button/" },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/xiaoli-sach" }],
    lastUpdatedText: '最后更新时间'
  },
  sidebar,
})
