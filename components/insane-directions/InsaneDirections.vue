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

</style>