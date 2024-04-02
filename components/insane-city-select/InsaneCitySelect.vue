<script setup lang="ts">
import { NSelect } from 'naive-ui'
import { useAttrs } from 'vue';

const attrs = useAttrs()
</script>

<template>
  <client-only>
    <n-select v-bind="attrs"
              placeholder="Выберете регион"
              class="city-select"
    />
  </client-only>
</template>

<style scoped lang="scss">
.city-select {
  max-width: 158px;
}
</style>