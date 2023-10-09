import { defineConfig } from "vitepress";

// 导入主题的配置
import { blogTheme } from "./blog-theme";

// Vitepress 默认配置
export default defineConfig({
  extends: blogTheme,
  lang: "zh-cn",
  title: "可一昂",
  description: "康师傅的博客",
  lastUpdated: true,
  themeConfig: {
    lastUpdatedText: "上次更新于",
    logo: "/logo.png",
    // editLink: {
    //   pattern:
    //     'https://github.com/ATQQ/sugar-blog/tree/master/packages/blogpress/:path',
    //   text: '去 GitHub 上编辑内容'
    // },
    nav: [{ text: "首页", link: "/" }],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/kzwill",
      },
    ],
  },
});
