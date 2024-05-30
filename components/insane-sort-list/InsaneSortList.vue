<script setup lang="ts">
defineProps<{
  data: string[]
}>()
const active = defineModel({default: 0})

const emits = defineEmits(['changeActiveSortIndex']);

function changeActiveSortIndex(value: number) {
  active.value = value;
  emits('changeActiveSortIndex', value);
}

</script>

<template>
  <div class="sort-list">
    <insane-button v-for="(item, index) in data"
                   :key="index"
                   variant="menu"
                   :is-active="active === index"
                   @click="changeActiveSortIndex(index)"
                   class="sort-list-item"
    >
      {{ item }}
    </insane-button>
  </div>
</template>

<style scoped lang="scss">
.sort-list {
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;

  &-item {
    @media (max-width: 560px) {
      padding: 8px 12px !important;
      font-size: var(--fz-xxs) !important;
    }
  }
}
</style>