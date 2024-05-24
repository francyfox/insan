import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  devServer: {
    port: 5123
  },
  modules: [
    ['nuxt-delay-hydration', {
      mode: 'mount',
      debug: process.env.NODE_ENV === 'development'
    }],
    '@nuxtjs/sitemap',
    'nuxt-simple-robots',
    'nuxt-schema-org',
    'nuxt-link-checker',
    '@nuxtjs/seo',
    '@pinia/nuxt',
    ['nuxt-svgo', {
      autoImportPath: './assets/img/svg/',
      defaultImport: 'component'
    }],
    ['@nuxt/image', {
      quality: 90,
      domains: [
        'fondinsan.ru',
        'www.fondinsan.ru'
      ],
      alias: {
        fondinsan: 'https://fondinsan.ru/'
      }
    }]
  ],
  css: [
    '@unocss/reset/tailwind-compat.css',
    '@fontsource/montserrat',
    '#assets/scss/base.scss'
  ],
  vue: {
    compilerOptions: {
      isCustomElement: tag => tag.startsWith('lottie-player'),
    }
  },
  devtools: {
    enabled: process.env.NUXT_DEVTOOLS === 'true' ?? false
  },
  nitro: {
    compressPublicAssets: true,
    prerender: {
      ignore: [
        '/articles',
        '/articles/*',
        '/list-need',
        '/fond-programs'
      ]
    }
  },
  routeRules: {
    '/api/**': {
      proxy: 'https://www.fondinsan.ru/api/**'
    },
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
          'vueuc',
          '@juggle/resize-observer'
        ]
        : ['@juggle/resize-observer']
  },
  vite: {
    css: {
      devSourcemap: process.env.NODE_ENV === 'development',
      preprocessorOptions: {
        scss: {
          additionalData: `
                    @import "~/assets/scss/vars.scss";`
        }
      }
    },
    plugins: [],
    optimizeDeps: {
      include:
        process.env.NODE_ENV === 'development'
          ? ['naive-ui', 'vueuc', 'date-fns-tz/formatInTimeZone'] // ,
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