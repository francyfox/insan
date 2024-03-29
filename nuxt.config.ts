import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/sitemap',
    'nuxt-simple-robots',
    'nuxt-schema-org',
    'nuxt-link-checker',
    '@nuxtjs/seo',
    ['nuxt-svgo', {
      autoImportPath: './assets/img/svg/',
      defaultImport: 'component'
    }],
    ['@nuxt/image', {}]
  ],
  devtools: {
    enabled: process.env.NUXT_DEVTOOLS === 'true' ?? false
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  site: {
    url: 'https://digit-insan.netlify.app',
    name: 'Инсан',
    description: 'Welcome to my awesome site!',
    indexable: process.env.NUXT_SITE_ENV !== 'preview' ?? false,
    trailingSlash: true
  },
  linkChecker: {
    runOnBuild: false,
  },
  build: {
    transpile:
      process.env.NODE_ENV === 'production'
        ? [
          'naive-ui',
          '@css-render/vue3-ssr',
          '@juggle/resize-observer'
        ] // 'vueuc',
        : ['@juggle/resize-observer']
  },
  vite: {
    css: {
      devSourcemap: true // this one
    },
    plugins: [],
    optimizeDeps: {
      include:
        process.env.NODE_ENV === 'development'
          ? ['naive-ui'] // 'vueuc', 'date-fns-tz/formatInTimeZone'
          : []
    }
  },
  alias: {
    '#/': './',
    '#components/': './components/',
    '#assets/': './assets/',
    '#pages/': './pages/'
  }
});