<script setup lang="ts">
import { useRoute } from 'vue-router';
import type { InsanePaginationProps } from '~/components/insane-pagination/insane-pagination.type';

const localePath = useLocalePath()
const paginationRef = ref()
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

const scrollToTop = () => {
  window.scrollTo({ top: 0 })
}

onMounted(() => {
  scrollToTop()
})

const toRoute = (page: number): string => localePath(`${route.path}?page=${page.toString()}`)
</script>

<template>
  <nav ref="paginationRef" class="pagination">
    <nuxt-link :to="toRoute((Number(model) - 1))"
               :class="{ disabled: Number(model) - 1 <= 0 }"
               class="pagination-item prev card-shadow-md"
    >
      <svgo-icon-arrow class="icon" />
    </nuxt-link>


    <nuxt-link v-for="(item, index) in showBullets(3)"
               :key="index"
               :to="toRoute(item + 1)"
               :class="{ active: item + 1 == model }"
               class="pagination-item card-shadow-md"
               @click="scrollToTop"
    >
      {{ item + 1 }}
    </nuxt-link>

    <nuxt-link :to="toRoute(Number(model) + 1)"
               :class="{ disabled: Number(model) + 1 >= pageCount }"
               class="pagination-item next card-shadow-md"
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
    user-select: none;

    &.disabled {
      pointer-events: none;
      opacity: 0.5;
    }

    &.active {
      pointer-events: none;
      color: var(--light-100);
      background: var(--gradient-primary);
    }

    &.next svg {
      transform: rotate(-180deg);
    }
  }
}
</style>