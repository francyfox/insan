<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <NuxtPage />
  </n-config-provider>
</template>
<script setup lang="ts">
import { NConfigProvider } from 'naive-ui'
import type { GlobalThemeOverrides } from 'naive-ui'

const themeOverrides: GlobalThemeOverrides = {
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
</script>