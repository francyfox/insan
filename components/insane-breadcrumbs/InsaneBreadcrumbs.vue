<script setup lang="ts">
import { useMetaStore } from '~/store/meta';

const store = useMetaStore()
const { breadcrumbs } = store
const breads = useBreadcrumbItems()
</script>

<template>
  <ul class="breadcrumbs-list font-arial">
    <li v-for="(item, index) in breadcrumbs(breads)"
               :key="index"
        class="breadcrumbs-list-item"
        :class="{ 'active': breadcrumbs(breads).length - 1 === index }"
    >
      <nuxt-link v-bind="item"

      >
        {{ item.ariaLabel }}
      </nuxt-link>
      <span v-if="breadcrumbs(breads).length - 1 !== index"
            :class="{ 'active': breadcrumbs(breads).length - 2 === index }"
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
    pointer-events: none;
    color: color-mix(in srgb, var(--dark-900) 40%, transparent);
  }
}
</style>