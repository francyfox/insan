<script setup lang="ts">
import { NSkeleton, useModal } from 'naive-ui';
import type { InsaneMainBannerProps } from '~/components/insane-main-banner/insane-main-banner.type';
import { h } from 'vue';
import { InsanePayment } from '#components';
import { usePaymentStore } from '~/store/payment';
defineProps<InsaneMainBannerProps>()

const {t} = useI18n()
const modal = useModal()
const storePayment = usePaymentStore()
const { donateType } = storeToRefs(storePayment)
const img = useImage()
const backgroundStyles = (bg: string) => {
  const imgUrl = img(bg, { width: 1320, height: 567, format: 'webp' })
  return { backgroundImage: `url('${imgUrl}')` }
}

function openPaymentForm(hasLink: boolean) {
  if (!hasLink) {
    donateType.value = 2
    modal.create({
      title: t('payment.buttonText'),
      content: () => h(InsanePayment, {}, {}),
      preset: 'card',
      class: 'insane-modal',
    })
  }

}
</script>

<template>
  <div class="main-banner">
    <n-skeleton v-if="isLoading"
                width="100%"
                height="550px"
                class="banner"
    />
    <n-carousel v-if="!isLoading"
                style="width: 100%"
    >
      <div v-for="slide in data"
           class="banner"
           :style="backgroundStyles(slide?.img)"
           :draggable="data?.length > 1"
      >
        <div class="banner-list col">
          <h1 class="banner-list-title title-h1" v-html="slide?.name"></h1>

          <main class="banner-list-description" v-html="slide?.desc"></main>

          <div class="row">
            <insane-button variant="hero"
                           class="banner-list-button"
                           :is-link="!!slide?.link"
                           :to="slide?.link"
                           @click="openPaymentForm(!!slide?.link)"
            >
                <span>
                  {{ slide?.btn_text }}
                </span>
              <svgo-icon-care class="icon" />
            </insane-button>
          </div>
        </div>
      </div>
    </n-carousel>
  </div>
</template>

<style scoped lang="scss">
.main-banner {
  width: 100%;
}
</style>