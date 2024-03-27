import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  build: {
    transpile:
      process.env.NODE_ENV === 'production'
        ? [
          'naive-ui',
          'vueuc',
          '@css-render/vue3-ssr',
          '@juggle/resize-observer'
        ]
        : ['@juggle/resize-observer']
  },
  vite: {
    optimizeDeps: {
      include:
        process.env.NODE_ENV === 'development'
          ? ['naive-ui', 'vueuc', 'date-fns-tz/formatInTimeZone']
          : []
    }
  },
  devtools: {
    enabled: true
  },
  modules: [
    ['nuxt-svgo', {
      autoImportPath: './assets/img/svg/'
    }],
    ['@pinia/nuxt', {}],
    ['@nuxtjs/google-fonts', {
      families: {
        Poppins: [500],
        Montserrat: [400, 500, 600, 700, 800, 900]
      },
      download: true
    }]
  ],
  alias: {
    '#/': "./",
    '#components/': './components/',
    '#assets/': './assets/',
    '#pages/': './pages/'
  }
})
