<script setup lang="ts">
import { NPagination } from 'naive-ui'
import type { InsanePaginationProps } from '~/components/insane-pagination/insane-pagination.type';

const props = defineProps<InsanePaginationProps>()
const model = defineModel({ default: 1 })
</script>

<template>
  <nav class="pagination">
    <nuxt-link :to="{
                 name: 'list-need',
                 query: { page: model - 2 }
               }"
               :class="{ disabled: model - 2 !== 0}"
               class="pagination-item prev card-shadow-md"
    >
      <svgo-icon-arrow class="icon" />
    </nuxt-link>

    <!--  TODO: - 2 если нету след стр  -->

    <nuxt-link v-if="model - 1 !== 0"
               :to="{
                 name: 'list-need',
                 query: { page: model - 1 }
               }"
    >
      {{ model - 1 }}
    </nuxt-link>

    <nuxt-link class="pagination-item active"
               :to="{
                 name: 'list-need',
                 query: { page: model }
               }"
    >
      {{ model }}
    </nuxt-link>

    <nuxt-link v-if="model + 1 < pageCount"
               :to="{
                 name: 'list-need',
                 query: { page: model + 1 }
               }"
               class="pagination-item"
    >
      {{ model + 1 }}
    </nuxt-link>

<!--  TODO: + 2 если нету предыдущий стр  -->

    <nuxt-link v-if="model + 2 < pageCount"
               :to="{
                 name: 'list-need',
                 query: { page: model + 2 }
               }"
               class="pagination-next"
    >
      <svgo-icon-arrow class="icon" />
    </nuxt-link>
  </nav>
  <n-pagination />
</template>

<style scoped lang="scss">
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;

  .disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  &-current {
    pointer-events: none;
    background: var(--gradient-primary);
  }

  &-next svg {
    transform: rotate(-180deg);
  }

  a {
    width: 47px;
    height: 47px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--light-100);
  }
}
</style>