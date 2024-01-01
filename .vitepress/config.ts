import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Documenté",
  description: "A literate testing framework to generate automated tests from documentation files",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide' },
      { text: 'Language', link: '/language-overview' },
      { text: 'Examples', link: 'https://documente.github.io/kitchen-sink' },
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'What is Documenté', link: '/guide' },
          { text: 'Get started', link: '/get-started' },
          { text: 'Language overview', link: '/language-overview' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/documente' }
    ]
  }
})
