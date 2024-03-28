import { defineNuxtConfig } from 'nuxt/config';

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
    ['@pinia/nuxt', {}], ['@nuxtjs/google-fonts', {
      families: {
        Poppins: [500],
        Montserrat: [400, 500, 600, 700, 800, 900]
      },
      download: true
    }],
    ['@nuxt/image', {
      dir: 'assets/img'
    }]
  ],
  alias: {
    '#/': './',
    '#components/': './components/',
    '#assets/': './assets/',
    '#pages/': './pages/'
  }
});