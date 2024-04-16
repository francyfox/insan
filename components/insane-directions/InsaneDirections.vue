<script setup lang="ts">
import type { InsaneDirectionsProps } from '~/components/insane-directions/insane-directions.type';

defineProps<InsaneDirectionsProps>()
</script>

<template>
  <div class="main-direction-list">
    <div v-for="(item, index) of data"
         class="main-direction-list-item col"
    >
      <nuxt-img v-bind="item.icon" />

      <div class="main-direction-list-item-title">
        {{ item.title }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.main-direction-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }

  &-item {
    gap: 24px;
    align-items: center;

    &-title {
      font-size: 28px;
      color: var(--dark-700);
      font-weight: 700;
      text-align: center;

      @media (max-width: 1280px) {
        font-size: 24px;
      }

      @media (max-width: 768px) {
        font-size: 18px;
      }
    }
  }
}
</style>