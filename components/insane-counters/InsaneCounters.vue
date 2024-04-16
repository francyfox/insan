<script setup lang="ts">
import type { InsaneCountersProps } from '~/components/insane-counters/insane-counters.type';

defineProps<InsaneCountersProps>()
</script>

<template>
  <div class="counter-list">
    <div v-for="(item, index) in data" class="counter-list-item">
      <div class="counter-list-item-title">
        {{ item.counter.toString() }}{{ item.subTitle }}
      </div>

      <div v-if="item.description"
           class="counter-list-item-description"
      >
        {{ item.description }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.counter-list {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;

  &-item {
    gap: 8px;

    &-title {
      font-size: 48px;
      font-weight: 600;
      line-height: 1.2;
      color: var(--dark-700);

      @media (max-width: 1280px) {
        font-size: 32px;
      }

      @media (max-width: 768px) {
        font-size: 24px;
      }
    }

    &-description {
      font-size: var(--fz-xs);
      color: #8B8B8B;
    }
  }
}
</style>