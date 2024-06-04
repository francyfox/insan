<script setup lang="ts">
import { NSkeleton, NCarousel, useModal } from 'naive-ui';
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
  const imgUrl = img(bg, { width: 1340, height: 567, format: 'png', quality: 100 })
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
                :show-arrow="data?.length > 1"
                :autoplay="true"
                :draggable="data?.length > 1"
                :loop="false"
                class="banner"
    >
      <div v-for="(slide, index) in data"
           :key="index"
           :style="backgroundStyles(slide?.img)"
           :draggable="data?.length > 1"
           class="banner-wrapper-item"
      >
        <div class="banner-list col">
          <div class="banner-list-title title-h1" v-html="slide?.name"></div>

          <div class="banner-list-description" v-html="slide?.desc"></div>

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
      <template #arrow="{ prev, next, currentIndex, total }">
        <div class="custom-arrow">
          <button type="button" class="custom-arrow--left"
                  :class="{ 'disabled': currentIndex === 0 }"
                  @click="prev"
          >
            <svgo-icon-slider-arrow width="60" height="60" />
          </button>
          <button type="button" class="custom-arrow--right"
                  :class="{ 'disabled': currentIndex - 1 === 0 }"
                  @click="next"
          >
            <svgo-icon-slider-arrow width="60" height="60" />
          </button>
        </div>
      </template>
      <template #dots="{ total, currentIndex, to }">
        <ul class="custom-dots">
          <li
              v-for="index of total"
              :key="index"
              :class="{ ['is-active']: currentIndex === index - 1 }"
              @click="to(index - 1)"
          />
        </ul>
      </template>
    </n-carousel>
  </div>
</template>

<style scoped lang="scss">
.main-banner {
  width: 100%;
}

.custom-arrow {
  padding: 0 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: calc(50% - 30px);

  &--left {
    transform: rotate(180deg) !important;
  }
}

.custom-arrow button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  margin-right: 12px;
  color: #fff;
  background: transparent;
  border-width: 0;
  border-radius: 8px;
  transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &.disabled {
    opacity: 0.5;
  }
}

.custom-arrow button:hover {
  opacity: 0.5;
}

.custom-arrow button:active {
  transform: scale(0.95);
  transform-origin: center;
}

.custom-dots {
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 20px;
}

.custom-dots li {
  display: inline-block;
  width: 50px;
  height: 4px;
  margin: 0 3px;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.4);
  transition: width 0.3s, background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.custom-dots li.is-active {
  background: #fff;
}
</style>