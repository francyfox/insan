<script setup lang="ts">
import { useMetaStore } from '~/store/meta';

const store = useMetaStore()
const { breadcrumbs } = storeToRefs(store)
breadcrumbs.value = await useBreadcrumbItems()
</script>

<template>
  <ul class="breadcrumbs-list font-arial">
    <li v-for="(item, index) in breadcrumbs.value"
               :key="index"
        class="breadcrumbs-list-item"
        :class="{ 'active': breadcrumbs.value.length - 1 === index }"
    >
      <nuxt-link v-bind="item"

      >
        {{ item.ariaLabel }}
      </nuxt-link>
      <span v-if="breadcrumbs.value.length - 1 !== index"
            :class="{ 'active': breadcrumbs.value.length - 2 === index }"
      >
        /
      </span>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.breadcrumbs-list {
  display: flex;
  flex-flow: row wrap;
  gap: 5px;

  &-item {
    display: flex;
    font-size: var(--fz-xs);
    gap: 5px;
    transition: color .2s ease-in-out;

    &:hover {
      color: var(--primary-light);
    }
  }

  .active {
    color: color-mix(in srgb, var(--dark-900) 40%, transparent);
  }
}
</style>