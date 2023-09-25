import { getThemeConfig, defineConfig } from "@sugarat/theme/node";

// 主题独有配置
// 详见文档: https://theme.sugarat.top/
const blogTheme = getThemeConfig({
  // 文章默认作者
  author: "可一昂",
  // 友链
  friend: [
    {
      nickname: "可一昂",
      des: "可一昂的github",
      avatar: "https://avatars.githubusercontent.com/u/41730382?v=4",
      url: "https://github.com/kzwill",
    },
  ],
  recommend: {
    showSelf: true,
  },
  // 开启离线的全文搜索支持（如构建报错可注释下面的配置再次尝试）
  search: "pagefind",
  // popover: {
  //   title: '公告',
  //   body: [
  //     {
  //       type: 'text',
  //       content: 'QQ交流群：681489336 🎉🎉'
  //     },
  //     { type: 'text', content: '👇公众号👇---👇 微信 👇' },
  //     {
  //       type: 'image',
  //       src: 'https://img.cdn.sugarat.top/mdImg/MTYxNTAxODc2NTIxMA==615018765210'
  //     },
  //     {
  //       type: 'text',
  //       content: '欢迎大家加群&私信交流'
  //     },
  //     {
  //       type: 'button',
  //       content: '博客',
  //       link: 'https://sugarat.top'
  //     }
  //   ],
  //   duration: 0
  // }
});

// Vitepress 默认配置
// 详见文档：https://vitepress.dev/reference/site-config
export default defineConfig({
  extends: blogTheme,
  lang: "zh-cn",
  title: "可一昂",
  description: "康师傅的博客",
  vite: {
    optimizeDeps: {
      include: ["element-plus"],
      exclude: ["@sugarat/theme"],
    },
  },
  lastUpdated: true,
  base: "/my-blog/",
  themeConfig: {
    lastUpdatedText: "上次更新于",
    footer: {
      message: "更多请访问github",
      copyright:
        'MIT Licensed | <a target="_blank" href="https://github.com/kzwill/my-blog"> @kzwill/my-blog</a>',
    },
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
