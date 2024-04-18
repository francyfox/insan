<script setup lang="ts">
import type { InsaneTabsProps } from '~/components/insane-tabs/insane-tabs.type';
import { NTabs, NTabPane } from 'naive-ui'
import { h } from 'vue'
import { InsaneButton } from '#components';

defineProps<InsaneTabsProps>()

const tabContent = () => h(InsaneButton, { variant: 'menu', class: 'card-shadow-md' }, () => 'sss')
</script>

<template>
  <n-tabs type="line"
  >
    <n-tab-pane v-for="(item, index) in data"
                :name="index"
                :tab="tabContent"
    >
      <aside v-html="item.content"></aside>
    </n-tab-pane>
  </n-tabs>
</template>

<style scoped lang="scss">

</style>