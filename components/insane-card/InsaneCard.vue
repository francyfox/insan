<script setup lang="ts">
import type { InsaneCardProps } from '~/components/insane-card/insane-card.type'
import { NCarousel, NSkeleton } from 'naive-ui'

const isLoadingImage = ref(true)
const imgRef = ref<HTMLImageElement | null>(null)
const props = defineProps<InsaneCardProps>()

function onLoad() {
  isLoadingImage.value = false
}

onMounted(() => {
  if (imgRef.value!.complete) {
    onLoad()
  }
})
</script>

<template>
  <div class="col card card-shadow-md">
    <n-carousel draggable
                class="card-carousel"
    >

      <transition-group tag="picture">
        <n-skeleton v-if="isLoading || isLoadingImage"
                    width="100%"
                    height="334px"
        />
        <nuxt-img v-show="!(isLoading || isLoadingImage)"
                  ref="imgRef"
                  v-for="(item, index) in data?.images"
                  :key="index"
                  :src="item"
                  width="321"
                  height="334"
                  :alt="data?.title"
                  class="card-carousel-slide img-cover"
                  loading="lazy"
                  format="webp"
                  placeholder
                  @load="onLoad"
        />
      </transition-group>

    </n-carousel>

    <div class="card-body">
      <div class="card-body-title font-montserrat">
        <n-skeleton v-if="isLoading"
                    text
                    :repeat="2"
        />
        <span v-else>
            {{ data?.title }}
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
                       :is-link="true"
                       :to="`/list-need/${data?.id}`"
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