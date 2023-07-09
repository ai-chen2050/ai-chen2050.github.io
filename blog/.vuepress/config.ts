import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import { gungnirTheme } from "../../packages/theme/lib/node/gungnirTheme";
// import { gungnirTheme } from "vuepress-theme-gungnir";

const isProd = process.env.NODE_ENV === "production";

export default defineUserConfig({
  title: "Blake Chan",
  description: "Blake Chan (Blakechan) be the change you wish to see in the world.",

  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: `/img/logo/favicon-16x16.png`
      }
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: `/img/logo/favicon-32x32.png`
      }
    ],
    ["meta", { name: "application-name", content: "Blake Chan" }],
    ["meta", { name: "apple-mobile-web-app-title", content: "Blake Chan" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" }
    ],
    [
      "link",
      { rel: "apple-touch-icon", href: `/img/logo/apple-touch-icon.png` }
    ],
    ["meta", { name: "theme-color", content: "#377bb5" }],
    ["meta", { name: "msapplication-TileColor", content: "#377bb5" }]
  ],

  bundler: viteBundler(),

  theme: gungnirTheme({
    repo: "ai-chen2050/ai-chen2050.github.io",
    docsDir: "blog",
    docsBranch: "main",

    hitokoto: "https://v1.hitokoto.cn?c=i", // enable hitokoto (一言) or not?

    // personal information
    personalInfo: {
      name: "Blake Chan",
      avatar: "/img/avatar6.png",
      description: "Be the change you wish to see in the world.",
      sns: {
        github: "ai-chen2050",
        linkedin: "blake-chen-2825a9118",
        twitter: "Mr_chen5694",
        csdn: "smilejiasmile",
        email: "ai-chen2050@qq.com",
        rss: "/rss.xml"
      }
    },

    // header images on home page
    homeHeaderImages: [
      {
        path: "/img/home-bg/1.jpg",
        // mask: "rgba(40, 57, 101, .4)"
      },
      {
        path: "/img/home-bg/2.jpg",
        mask: "rgba(196, 176, 131, .1)"
      },
      {
        path: "/img/home-bg/3.jpg",
        // mask: "rgba(68, 74, 83, .1)"
      },
      {
        path: "/img/home-bg/4.jpg",
        // mask: "rgba(19, 75, 50, .2)"
      },
      {
        path: "/img/home-bg/5.jpg"
      }
    ],

    // other pages
    pages: {
      tags: {
        subtitle: "Black Sheep Wall",
        bgImage: {
          path: "/img/pages/tags.jpg",
          mask: "rgba(211, 136, 37, .3)"
        }
      },
      links: {
        subtitle:
          "When you are looking at the stars, please put the brightest star shining night sky as my soul.",
        bgImage: {
          path: "/img/pages/links.jpg",
          mask: "rgba(64, 118, 190, 0.5)"
        }
      },
      about: {
        subtitle:
          "Be the change you wish to see in the world.",
        bgImage: {
          path: "/img/pages/forest.jpg",
          mask: "rgba(0, 255, 127, 0.33)"
        }
      }
    },

    themePlugins: {
      // only enable git plugin in production mode
      git: isProd,
      katex: true,
      giscus: {
        repo: "ai-chen2050/ai-chen2050.github.io",
        repoId: "R_kgDOJi2wdA",
        category: "Announcements",
        categoryId: "DIC_kwDOJi2wdM4CXmQ2",
        darkTheme: "/styles/giscus-dark.css"
      },
      mdPlus: {
        all: true
      },
      ga: "G-1CQNQNPK1Y",
      ba: "b3a7b6fedcba22d39897693d6f716035",
      rss: {
        siteURL: "https://ai-chen2050.github.io/",
        copyright: "Blakechan 2018-2022"
      }
    },

    navbar: [
      {
        text: "Home",
        link: "/",
        icon: "fa-fort-awesome"
      },
      {
        text: "Tags",
        link: "/tags/",
        icon: "fa-tag"
      },
      {
        text: "Links",
        link: "/links/",
        icon: "fa-satellite-dish"
      },
      {
        text: "Projs",
        link: "https://github.com/ai-chen2050",
        icon: "oi-rocket"
      },
      {
        text: "About",
        // link: "https://github.com/ai-chen2050",
        link: "/about/",
        icon: "fa-paw",
      }
      // {
      //   text: "Portfolio",
      //   link: "https://portfolio.zxh.io/",
      //   icon: "oi-rocket"
      // }
    ],

    footer: `
      &copy; <a href="https://github.com/ai-chen2050" target="_blank">Blakechan</a> 2018-2023
    `
  }),

  markdown: {
    headers: {
      level: [2, 3, 4, 5]
    },
    code: {
      lineNumbers: false
    }
  }
});