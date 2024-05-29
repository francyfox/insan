<script setup lang="ts">
import type {InsaneCardProps} from '~/components/insane-card/insane-card.type'
import {NCarousel, NSkeleton} from 'naive-ui'
import {h} from 'vue';
import {InsanePaymentForm} from '#components';
import {useModal} from 'naive-ui'

const {t} = useI18n()
const modal = useModal()
const imgRef = ref<HTMLImageElement | null>(null)
const props = defineProps<InsaneCardProps>()

const localePath = useLocalePath()
function openPaymentForm() {
  modal.create({
    title: t('payment.buttonText'),
    content: () => h(InsanePaymentForm, {}, {}),
    preset: 'card',
    class: 'insane-modal',
  })
}
</script>

<template>
  <div class="col card card-shadow-md">
    <n-skeleton v-if="isLoading"
                width="100%"
                height="334px"
    />
    <n-carousel v-show="!(isLoading)"
                :autoplay="true"
                :draggable="data?.images?.length > 1"
                class="card-carousel"
    >
      <nuxt-img ref="imgRef"
                v-for="(item, index) in data?.images"
                :key="index"
                :src="item"
                width="321"
                height="334"
                :alt="data?.title"
                class="card-carousel-slide img-cover"
                loading="lazy"
                format="webp"
      />
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
                       :is-link="true"
                       :to="localePath(`/help/${data?.id}`)"
                       :class="{ disabled: isLoading }"
        >
          {{ $t('help.card.primaryButtonText') }}
        </insane-button>

        <insane-button variant="primary"
                       :class="{ disabled: isLoading }"
                       @click.prevent="openPaymentForm"
        >
          {{ $t('help.card.secondaryButtonText') }}
        </insane-button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "insane-card.style";
</style>