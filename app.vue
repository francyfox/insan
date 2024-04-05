<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <n-modal-provider>
      <n-message-provider>
        <NuxtPage />
      </n-message-provider>
    </n-modal-provider>
  </n-config-provider>
</template>
<script setup lang="ts">
import { NConfigProvider, NMessageProvider, NModalProvider } from 'naive-ui'
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
</script>