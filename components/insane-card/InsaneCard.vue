<script setup lang="ts">
import type { InsaneCardProps } from '~/components/insane-card/insane-card.type'
import { NCarousel, NSkeleton } from 'naive-ui'

const props = defineProps<InsaneCardProps>()
</script>

<template>
  <div class="col card card-shadow-md">
    <n-carousel draggable
                class="card-carousel"
    >
      <n-skeleton v-if="isLoading"
                  width="100%"
                  height="334px"
      />
      <nuxt-img v-else
                v-for="(item, index) in data.images"
                :key="index"
                :src="item"
                class="card-carousel-slide img-cover"
      />
    </n-carousel>

    <div class="card-body">
      <div class="card-body-title font-montserrat">
        <n-skeleton v-if="isLoading"
                    text
                    :repeat="2"
        />
        <span v-else>
            {{ data.title }}
        </span>
      </div>

      <insane-slider :data="data"
                     class="card-body-slider"
                     :is-loading="isLoading"
      />
      
      <div class="col card-body-actions">
        <insane-button variant="secondary"
                       :class="{ disabled: isLoading }"
        >
          Рассказать о сборе
        </insane-button>

        <insane-button variant="primary"
                       :class="{ disabled: isLoading }"
        >
          Помочь
        </insane-button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "insane-card.style";
</style>