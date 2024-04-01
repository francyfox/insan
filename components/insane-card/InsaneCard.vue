<script setup lang="ts">
import type { InsaneCardProps } from '~/components/insane-card/insane-card.type'
import { NCarousel } from 'naive-ui'

const props = defineProps<InsaneCardProps>()
</script>

<template>
  <div class="col card card-shadow-md">
    <n-carousel draggable
                class="card-carousel"
    >
      <nuxt-img v-for="(item, index) in data.images"
                :key="index"
                :src="item"
                class="card-carousel-slide img-cover"
      />
    </n-carousel>

    <div class="card-body">
      <div class="card-body-title font-montserrat">
        {{ data.title }}
      </div>

      <insane-slider :data="data"
                     class="card-body-slider"
      />
      
      <div class="col card-body-actions">
        <insane-button variant="secondary">
          Рассказать о сборе
        </insane-button>

        <insane-button variant="primary">
          Помочь
        </insane-button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "insane-card.style";
</style>