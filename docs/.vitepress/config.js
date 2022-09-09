export default {
  title: "glows777的博客",
  description: "glows777写文章的地方，不仅限于前端~",
  themeConfig: {
    siteTitle: "glows777",
    logo: "/logo.jpg",
    nav: [
      {
        text: "前端",
        items: [
          { text: "JS", link: "/front_end/JS/" },
          { text: "TS", link: "/front_end/TS/" },
          { text: "工程化", link: "/front_end/Engineering/" },
          { text: "HTML&CSS", link: "/front_end/HTML_CSS/" },
          { text: "Vue", link: "/front_end/Vue/" },
          { text: "React", link: "/front_end/React/" },
        ],
      },
      { text: "Node", link: "/back_end/" },
      { text: "计算机基础", link: "/base/" },
      { text: "About", link: "/about/" },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/glows777" },
      // { icon: "twitter", link: "..." },
      // You can also add custom icons by passing SVG as string:
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>',
        },
        link: "...",
      },
    ],
    sidebar: {
      "/back_end/": [],
      "/front_end/": [
        {
          text: "JS",
          items: [
            { text: "数据类型", link: "/front_end/JS/数据类型" },
            { text: "JS中的类型转换", link: "/front_end/JS/JS中的类型转换" },
            { text: "==与===的区别", link: "/front_end/JS/双等于与三等于的区别" },
            { text: "数组常用方法", link: "/front_end/JS/数组常用方法" },
            { text: "字符串常用方法", link: "/front_end/JS/字符串常用方法" },
            {
              text: "执行上下文&作用域&闭包",
              link: "/front_end/JS/执行上下文_闭包_作用域",
            },
            { text: "闭包的一些实践", link: "/front_end/JS/闭包的一些实践" },
            { text: "深浅拷贝", link: "/front_end/JS/深浅拷贝" },
            { text: "EventLoop", link: "/front_end/JS/事件循环" },
          ],
        },
        {
          text: "TS",
          items: [
            {
              text: "TS基础",
              items: [{ text: "基础语法", link: "/front_end/TS/TS基础" }],
            },
            {
              text: "TS进阶",
              items: [{ text: "TS类型体操", link: "/front_end/TS/TS类型体操" }],
            },
          ],
        },
        {
          text: "工程化",
          items: [{ text: "Vite", link: "/front_end/Engineering/Vite" }],
        },
        {
          text: "HTML&&CSS",
          items: [
            {
              text: "HTML",
              items: [{ text: "HTML", link: "/front_end/HTML_CSS/HTML" }],
            },
            {
              text: "CSS",
              items: [
                { text: "CSS一些技巧", link: "/front_end/HTML_CSS/CSS技巧" },
              ],
            },
          ],
        },
        {
          text: "Vue",
          items: [{ text: "响应式原理", link: "/front_end/Vue/响应式原理" }],
        },
        {
          text: "React",
          items: [{ text: "初识React", link: "/front_end/React/初识React" }],
        },
      ],
      "/base/": [
        {
          text: "os",
          items: [{ text: "系统调用", link: "/base/os/系统调用" }],
        },
        {
          text: "计网",
          items: [{ text: "http", link: "/base/Network/http" }],
        },
        {
          text: "数据结构",
          items: [
            { text: "队列", link: "/base/DataStructure/队列" },
            { text: "散列表", link: "/base/DataStructure/散列表" },
          ],
        },
        {
          text: "算法",
          items: [
            { text: "递归", link: "/base/algo/递归" },
            { text: "哈希函数", link: "/base/algo/哈希函数" },
            { text: "排序（上）", link: "/base/algo/排序（上）" },
            { text: "排序（下）", link: "/base/algo/排序（下）" },
            { text: "线性排序", link: "/base/algo/线性排序" },
          ],
        },
      ],
    },
  },
};
