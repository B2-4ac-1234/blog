import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  // "/demo/",
  {
    text: "博文",
    icon: "pen-to-square",
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
          // {
          //   text: "vue",
          //   icon: "vuejs",
          //   prefix: "vue/",
          //   children: [
          //     {
          //       text: "图标放大组件",
          //       icon: "vuejs",
          //       link: "图标放大组件",
          //     },
          //     {
          //       text: "Vue3复用组件(组件使用js对象)路由跳转后失效的bug",
          //       icon: "js",
          //       link: "Vue3复用组件(组件使用js对象)路由跳转后失效的bug",
          //     },
          //     {
          //       text: "vue18n无法获取数组对象",
          //       icon: "vuejs",
          //       link: "vue18n无法获取数组对象",
          //     },
          //     {
          //       text: "vue项目axios封装及使用",
          //       icon: "js",
          //       link: "vue项目axios封装及使用",
          //     },
          //   ],
          // },
          {
            text: "div添加css动画边框效果",
            icon: "css3",
            link: "div添加css动画边框效果",
          },
        ],
      },
    ],
  },
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
