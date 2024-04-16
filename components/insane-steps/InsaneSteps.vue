<script setup lang="ts">
import type { InsaneStepsProps } from '~/components/insane-steps/insane-steps.type';

defineProps<InsaneStepsProps>()
</script>

<template>
  <div class="story-list">
    <div v-for="(item, index) in data" class="story-list-item">
      <nuxt-img v-bind="item.icon" />

      <div class="col">

      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>