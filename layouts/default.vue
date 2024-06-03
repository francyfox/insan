<script setup lang="ts">
import { NConfigProvider, NMessageProvider, NModalProvider } from 'naive-ui'
import type { GlobalThemeOverrides } from 'naive-ui'
import { useDeviceStore } from '~/store/device';
import { useNavigationStore } from '~/store/navigation';
import { useSettingsStore } from '~/store/settings';

const settingsStore = useSettingsStore()
const store = useDeviceStore()
const { mediaQuery } = storeToRefs(store)
const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#3681B9',
    primaryColorHover: '#3681B9',
    primaryColorPressed: '#13396C',
  },
  Select: {
    peers: {
      InternalSelection: {
        placeholderColor: '#000',
        arrowColor: '#000',
        border: 'none'
      }
    }
  },
  Input: {
    paddingMedium: '18px 10px',
    borderRadius: '14px',
    border: '1px solid #97989D'
  },
  Message: {
    padding: '12px',
    fontSize: '16px',
    iconSize: '32px',
    borderRadius: '14px',
  },
  Collapse: {
    titleFontSize: '18px',
    titlePadding: 0
  },
  Tabs: {
    barColor: 'transparent',
    tabBorderColor: 'transparent'
  }
}
onMounted(() => {
  const matchMediaList = {
    twoXl: window.matchMedia('(min-width: 1321px)'),
    xl: window.matchMedia('(min-width: 1281px)'),
    lg: window.matchMedia('(min-width: 981px)'),
    md: window.matchMedia('(min-width: 769px)'),
    sm: window.matchMedia('(min-width: 577px)'),
    xs: window.matchMedia('(min-width: 361px)'),
    xxs: window.matchMedia('(min-width: 321px)'),
  }

  for (const key in matchMediaList) {
    mediaQuery.value[key] = matchMediaList[key].matches
  }

  // TODO: тоже выглядит костыльно

  window.addEventListener('resize', () => {
    for (const key in matchMediaList) {
      mediaQuery.value[key] = matchMediaList[key].matches
    }
  })
})

const {t} = useI18n()
const route = useRoute()
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true
})
const title = computed(() => t(route.meta.title ?? 'TBD') + '| Insan')

await Promise.all([
  await settingsStore.getSettings()
])
</script>

<template>
  <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
  <Head>
    <Title>{{ title }}</Title>
    <template v-for="link in head.link" :key="link.id">
      <Link :id="link.id" :rel="link.rel" :href="link.href" :hreflang="link.hreflang" />
    </template>
    <template v-for="meta in head.meta" :key="meta.id">
      <Meta :id="meta.id" :property="meta.property" :content="meta.content" />
    </template>
  </Head>
  <n-message-provider>
    <Body>
    <n-config-provider preflight-style-disabled :theme-overrides="themeOverrides">
      <n-modal-provider>
        <NuxtLoadingIndicator />
        <header-base />
        <slot />
        <footer-base />
      </n-modal-provider>
    </n-config-provider>
    </Body>
  </n-message-provider>
  </Html>
</template>

<style lang="scss">

</style>