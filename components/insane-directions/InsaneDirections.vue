<script setup lang="ts">
interface Props {
  directionsList: Array<{ icon: string, value: string }>
}

defineProps<Props>()
</script>

<template>
  <div class="main-direction-list">
    <div v-for="direction of directionsList"
         class="main-direction-list-item col"
    >
      <nuxt-img style="max-width: 95px; width: 100%; height: 80px" :src="direction.icon" :alt="direction?.value"/>

      <div class="main-direction-list-item-title">
        {{ direction.value }}
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