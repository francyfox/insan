import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  devtools: {
    enabled: true
  },
  modules: [
    ['@nuxtjs/seo', {
      url: 'https://digit-insan.netlify.app',
      name: 'Инсан',
      description: 'Welcome to my awesome site!',
      indexable: process.env.SITE_INDEX === 'true' ?? false,
    }],
    ['nuxt-svgo', {
      autoImportPath: './assets/img/svg/',
      defaultImport: 'component'
    }],
    ['@nuxt/image', {}]
  ],
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