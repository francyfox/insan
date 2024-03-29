<script setup lang="ts">
import type { InsaneBreadcrumbsProps } from '~/components/insane-breadcrumbs/insane-breadcrumbs.type';

const links = await useBreadcrumbItems()

</script>

<template>
  <nav class="breadcrumbs-list">
    <template  v-for="(item, index) in links"
               :key="index">
      <nuxt-link v-bind="item"
                 class="breadcrumbs-list-item"
      >
        {{ item.ariaLabel }}
      </nuxt-link>
      <span v-if="links.length - 1 !== index">
        /
      </span>
    </template>
  </nav>
</template>

<style scoped lang="scss">

</style>