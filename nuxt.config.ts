import { defineNuxtConfig } from 'nuxt/config'
import { NuxtLinks, NuxtMeta } from './nuxt.meta';
import en from './plugins/i18n/en';
import ru from './plugins/i18n/ru';
export default defineNuxtConfig({
  devServer: {
    port: 5123
  },
  modules: [
    ['@nuxtjs/i18n', {
      locales: [
        {
          id: 0,
          code: 'ru',
          name: 'Русский',
        },
        {
          id: 1,
          code: 'en',
          name: 'English',
        },
      ],
      defaultLocale: 'ru',
      strategy: 'prefix_and_default',
      vueI18n: {
        fallbackLocale: 'ru',
        messages: {
          ru,
          en,
        },
      },
    }],
    ['nuxt-delay-hydration', {
      mode: 'mount',
      debug: process.env.NODE_ENV === 'development'
    }],
    '@nuxtjs/sitemap',
    'nuxt-simple-robots',
    'nuxt-schema-org',
    'nuxt-link-checker',
    ['@nuxtjs/seo', {
      automaticDefaults: false
    }],
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
      meta: NuxtMeta,
      link: NuxtLinks,
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
          additionalData: `@import "~/assets/scss/vars.scss";`
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