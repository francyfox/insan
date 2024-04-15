<script setup lang="ts">
import type {
  InsaneDirectionsItem,
} from '~/components/insane-directions/insane-directions.type';

defineProps<{
  data: {
    title: string
    description: string
    mainDirections: InsaneDirectionsItem[]
  }
}>()
</script>

<template>
  <section class="section section-direction">
    <div class="container">
      <div class="direction-list col">
        <div class="direction-list-item">
          <div class="direction-list-item-header col">
            <div v-if="data.title"
                 class="direction-list-item-title title-h2"
            >
              {{ data.title }}
            </div>

            <div v-if="data.description"
                 class="direction-list-item-description"
            >
              {{ data.description }}
            </div>
          </div>
        </div>

        <div class="direction-list-item">
          <insane-directions :data="data.mainDirections" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">

</style>