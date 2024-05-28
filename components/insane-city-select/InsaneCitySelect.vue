<script setup lang="ts">
import { NSelect } from 'naive-ui'
import { useAttrs } from 'vue';

const attrs = useAttrs()
</script>

<template>
  <client-only>
    <n-select v-bind="attrs"
              placeholder="Выберете язык"
              class="city-select"
    />
  </client-only>
</template>

<style scoped lang="scss">
.city-select {
  max-width: 72px;
  font-size: var(--fz-sm);

  :deep(.n-base-selection .n-base-selection-label .n-base-selection-input .n-base-selection-input__content) {
    font-size: var(--fz-sm);
  }

  :deep(.n-base-select-menu .n-base-select-option) {
    font-size: var(--fz-sm);
  }
}
</style>