import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  {
    text: "主页",
    icon: "blogger",
    link: "/",
  },
  // "/demo/",
  {
    text: "博文",
    icon: "readme",
    prefix: "/posts/",
    children: [
      {
        text: "创建博客记录",
        icon: "blogger",
        prefix: "web/",
        children: [
          {
            text: "创建博客记录",
            icon: "blogger",
            link: "创建博客记录",
          },
          {
            text: "web归纳",
            icon: "html5",
            link: "web归纳",
          },
          {
            text: "vue",
            icon: "vuejs",
            prefix: "vue/",
            children: [
              {
                text: "Vue3复用组件(组件使用js对象)路由跳转后失效的bug",
                icon: "js",
                link: "Vue3复用组件(组件使用js对象)路由跳转后失效的bug",
              },
              {
                text: "vue18n无法获取数组对象",
                icon: "vuejs",
                link: "vue18n无法获取数组对象",
              },
            ],
          },
          {
            text: "div添加css动画边框效果",
            icon: "css3",
            link: "div添加css动画边框效果",
          },
        ],
      },
      {
        text: "docs",
        prefix: "docs",
        children: [],
      },
    ],
  },
  {
    text: "V2 文档",
    icon: "vuejs",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
