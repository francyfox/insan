<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <NuxtPage />
  </n-config-provider>
</template>
<script setup lang="ts">
import { NConfigProvider } from 'naive-ui'
import type { GlobalThemeOverrides } from 'naive-ui'
import { useDeviceStore } from '~/store/device';

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
}

onMounted(() => {
  const matchMediaList = {
    twoXl: window.matchMedia('(max-width: 1320px)'),
    xl: window.matchMedia('(max-width: 1280px)'),
    lg: window.matchMedia('(max-width: 980px)'),
    md: window.matchMedia('(max-width: 768px)'),
    sm: window.matchMedia('(max-width: 576px)'),
    xs: window.matchMedia('(max-width: 360px)'),
    xxs: window.matchMedia('(max-width: 320px)'),
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
</script>