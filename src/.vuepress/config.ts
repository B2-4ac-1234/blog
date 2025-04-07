import { defineUserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import theme from "./theme";

export default defineUserConfig({
  base: "/blog/",
  lang: "zh-CN",
  title: "B2-4AC的博客",
  description: "B2-4AC的博客",

  theme,

  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
      customFields: [
        {
          getter: (page) => page.frontmatter.category as any,
          formatter: "分类：$content",
        },
        {
          getter: (page) => page.frontmatter.tag as any,
          formatter: "标签：$content",
        },
      ],
    }),
  ],
  // Enable it with pwa
  // shouldPrefetch: false,
});
