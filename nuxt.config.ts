import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
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
  devtools: {
    enabled: true
  },
  modules: [
    ['nuxt-svgo', {
      autoImportPath: './assets/img/svg/',
      defaultImport: 'component'
    }],
    ['@nuxt/image', {}]
  ],
  alias: {
    '#/': './',
    '#components/': './components/',
    '#assets/': './assets/',
    '#pages/': './pages/'
  }
});