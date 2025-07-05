import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'ko-KR',
  title: "Tips by @Palbahngmiyine",
  description: "Just tips.",
  cleanUrls: true,
  metaChunk: true,
  outDir: 'dist',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '설정 일람', link: '/contents/common-linux' }
    ],

    sidebar: [
      {
        text: '설정 팁',
        items: [
          { text: '리눅스 설정', link: '/contents/common-linux' },
          { text: 'Git 설정', link: '/contents/git' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/palbahngmiyine/just-tips' }
    ]
  }
})
