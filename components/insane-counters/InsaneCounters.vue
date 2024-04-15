<script setup lang="ts">
import type { InsaneCountersProps } from '~/components/insane-counters/insane-counters.type';

defineProps<InsaneCountersProps>()
</script>

<template>
  <div class="counter-list">
    <div v-for="(item, index) in data" class="counter-list-item">
      <div class="counter-list-item-title">
        {{ item.counter.toString() }}
        {{ item.subTitle }}
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

</style>