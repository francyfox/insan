<script setup lang="ts">
const links = await useBreadcrumbItems()

</script>

<template>
  <ul class="breadcrumbs-list font-arial">
    <li v-for="(item, index) in links"
               :key="index"
        class="breadcrumbs-list-item"
        :class="{ 'active': links.length - 1 === index }"
    >
      <nuxt-link v-bind="item"

      >
        {{ item.ariaLabel }}
      </nuxt-link>
      <span v-if="links.length - 1 !== index"
            :class="{ 'active': links.length - 2 === index }"
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
    gap: 5px
  }

  .active {
    color: color-mix(in srgb, var(--dark-900) 40%, transparent);
  }
}
</style>