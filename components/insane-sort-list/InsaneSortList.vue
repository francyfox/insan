<script setup lang="ts">
defineProps<{
  data: string[]
}>()
const active = defineModel({ default: 0 })
</script>

<template>
  <div class="sort-list">
    <insane-button v-for="(item, index) in data"
                   :key="index"
                   variant="menu"
                   :is-active="active === index"
                   @click="active = index"
                   class="sort-list-item"
    >
      {{ item }}
    </insane-button>
  </div>
</template>

<style scoped lang="scss">
.sort-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
</style>