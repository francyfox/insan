import {defineNuxtConfig} from 'nuxt/config'
import {NuxtLinks, NuxtMeta} from './nuxt.meta';

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      RECAPTCHA_SITE_KEY: '6LdgaOIpAAAAABTbGOXQtZXyk-BxRsl7Yfs6sZfd'
    }
  },
  devServer: {
    port: 5123
  },
  modules: [['@nuxtjs/i18n', {
    locales: [
      {
        id: 0,
        code: 'ru',
        name: 'Русский',
        iso: 'ru-RU'
      },
      {
        id: 1,
        code: 'en',
        name: 'English',
        iso: 'en-US'
      },
    ],
    defaultLocale: 'ru',
    strategy: 'prefix_and_default',
  }], ['nuxt-delay-hydration', {
    mode: 'mount',
    debug: process.env.NODE_ENV === 'development'
  }],
    '@nuxtjs/sitemap',
    'nuxt-simple-robots',
    'nuxt-schema-org',
    // 'nuxt-link-checker', // TODO: Вернуть потом
    ['@nuxtjs/seo', {
    automaticDefaults: false
  }],
    '@pinia/nuxt',
    ['nuxt-svgo', {
    autoImportPath: './assets/img/svg/',
    defaultImport: 'component'
  }],
    ['@nuxt/image', {
    quality: 100,
    domains: [
      'fondinsan.ru',
      'www.fondinsan.ru'
    ],
    alias: {
      fondinsan: 'https://fondinsan.ru/'
    }
  }], "@nuxtjs/i18n"],
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
        '/news',
        '/news/*',
        '/help',
        '/program'
      ]
    }
  },
  routeRules: {
    '/api/**': {
      proxy: 'https://www.fondinsan.ru/api/**'
    },
    modules: [['@nuxtjs/i18n', {
        locales: [
            {
                id: 0,
                code: 'ru',
                name: 'Русский',
                iso: 'ru-RU'
            },
            {
                id: 1,
                code: 'en',
                name: 'English',
                iso: 'en-US'
            },
        ],
        defaultLocale: 'ru',
        strategy: 'prefix_and_default',
    }], ['nuxt-delay-hydration', {
        mode: 'mount',
        debug: process.env.NODE_ENV === 'development'
    }],
        '@nuxtjs/sitemap',
        'nuxt-simple-robots',
        'nuxt-schema-org',
        // 'nuxt-link-checker', // TODO: Вернуть потом
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
        }], "@nuxtjs/i18n"],
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
                '/news',
                '/news/*',
                '/help',
                '/program'
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
        url: 'https://test-insan.hopto.org',
        name: 'Инсан',
        description: 'Стань частью добра вместе с фондом «Инсан»',
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