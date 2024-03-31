<script setup lang="ts">
import type { InsaneCardProps } from '~/components/insane-card/insane-card.type'
import { NCarousel } from 'naive-ui'

const props = defineProps<InsaneCardProps>()
</script>

<template>
  <div class="card card-shadow-md">
    <n-carousel>
      <nuxt-img v-for="(item, index) in data.images"
                :key="index"
                :src="item"
                class="card-slide"
      />
    </n-carousel>

    <div class="card-body">
      <div class="card-body-title">
        Фатиме необходимо пройти курс
        реабилитации, а так же новые протезы
      </div>
      
      <div class="col">
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

</style>