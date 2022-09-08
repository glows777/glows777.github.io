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
      "/back_end/": [
        
      ],
      "/front_end/": [
        {
          text: "JS",
          items: [{ text: "EventLoop", link: "/front_end/JS/事件循环" }],
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
          items: [{text: 'Vite', link: '/front_end/Engineering/Vite'}],
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
              items: [{ text: "BFC", link: "/front_end/HTML_CSS/HTML" }],
            },
          ],
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
          items: [{ text: "栈", link: "/base/DataStructure/栈" }],
        },
        {
          text: "算法",
          items: [{ text: "栈", link: "/base/algo/快排" }],
        },
      ],
    },
  },
};
