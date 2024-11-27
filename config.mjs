import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Deluminator",
  description: "a reverse shell generator package",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    /* nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ], */

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'About', link: '/about' },
          { text: 'Installation', link: '/installation' },
          { text: 'Usage', link: '/usage' },
          { text: 'Bypass', link: '/bypass' },
          { text: 'Disclaimer', link: '/disclaimer' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})