<script setup lang="ts">
import { useRoute } from 'vue-router';
import type { InsanePaginationProps } from '~/components/insane-pagination/insane-pagination.type';

const props = defineProps<InsanePaginationProps>()
const model = defineModel({ default: 1 })

const route = useRoute()

const showBullets = (chunkSize: number) => {
  const bullets = Array.from(Array(props.pageCount).keys())
  const preChunkSize = Math.floor(chunkSize / 2)
  const startIndex = Number(model.value) - preChunkSize - 1
  const endIndex = Number(model.value) + preChunkSize

  return bullets.slice(
      startIndex < 0 ? 0 : startIndex,
      endIndex > props.pageCount ? props.pageCount : endIndex
  )
}
</script>

<template>
  <nav class="pagination">
    <nuxt-link :to="{
                 name: route.name,
                 query: { page: (Number(model) - 1).toString() }
               }"
               :class="{ disabled: model - 1 < 0}"
               class="pagination-item prev card-shadow-md"
    >
      <svgo-icon-arrow class="icon" />
    </nuxt-link>

    <nuxt-link v-for="(item, index) in showBullets(3)"
               :key="index"
               :to="{
                 name: route.name,
                 query: { page: item + 1 }
               }"
               :class="{ active: item + 1 == model }"
               class="pagination-item card-shadow-md"
    >
      {{ item + 1 }}
    </nuxt-link>

    <nuxt-link :to="{
                 name: route.name,
                 query: { page: (Number(model) + 1).toString() }
               }"
               :class="{ disabled: Number(model) + 1 < pageCount }"
               class="pagination-next card-shadow-md"
    >
      <svgo-icon-arrow class="icon" />
    </nuxt-link>
  </nav>
</template>

<style scoped lang="scss">
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  &-item {
    width: 47px;
    height: 47px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--light-100);
    border-radius: 100%;
    font-weight: 600;
    font-size: var(--fz-smx);

    &.disabled {
      pointer-events: none;
      opacity: 0.5;
    }

    &.active {
      pointer-events: none;
      color: var(--light-100);
      background: var(--gradient-primary);
    }
  }

  &-next svg {
    transform: rotate(-180deg);
  }
}
</style>