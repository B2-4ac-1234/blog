import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "创建博客记录",
      icon: "blogger",
      link: "/posts/web/创建博客记录",
    },
    {
      text: "博文",
      icon: "readme",
      prefix: "/posts/",
      children: [
        {
          text: "web",
          icon: "blogger",
          prefix: "web/",
          collapsible: true,
          link: "web/",
          children: [
            {
              text: "div添加css动画边框效果",
              icon: "css3",
              link: "div添加css动画边框效果",
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
              collapsible: true,
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
          ],
        },
        {
          text: "docs",
          prefix: "docs",
          children: [],
        },
      ],
    },
    "intro",
    "slides",
  ],
});
