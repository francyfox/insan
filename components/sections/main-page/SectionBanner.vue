<script setup lang="ts">
import { useSectionsStore } from '~/store/sections';
import { NSkeleton } from 'naive-ui';

const store = useSectionsStore()
const { mainPageBanner } = storeToRefs(store)
const { getMainPageBanner } = store
const isLoading = ref(true)

const getData = async () => {
  const { data, error, pending } = await getMainPageBanner()

  if (error.value) {
    showError({
      fatal: true,
      statusCode: error.value.statusCode,
      statusMessage: 'Не удалось получить баннер'
    })
  }

  isLoading.value = pending.value
  return data.value
}

mainPageBanner.value = await getData() as any

if (mainPageBanner.value[0] === null) {
  mainPageBanner.value = await getData()
}

const img = useImage()
const backgroundStyles = (bg: string) => {
  const imgUrl = img(bg, { width: 1320, height: 567, format: 'webp' })
  return { backgroundImage: `url('${imgUrl}')` }
}
</script>

<template>
  <section class="section section-banner">
    <div class="container">
      <n-skeleton v-if="isLoading"
                  width="100%"
                  height="550px"
                  class="banner"
      />
      <n-carousel v-if="!isLoading"
                  style="width: 100%"
      >
        <div v-for="slide in mainPageBanner"
             class="banner"
             :style="backgroundStyles(slide?.img)"
             :draggable="mainPageBanner?.length > 1"
        >
          <div class="banner-list col">
            <h1 class="banner-list-title title-h1" v-html="slide?.name"></h1>

            <main class="banner-list-description" v-html="slide?.desc"></main>

            <div class="row">
              <insane-button variant="hero"
                             class="banner-list-button"
                             :is-link="true"
                             :to="slide?.link"
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
  </section>
</template>

<style lang="scss">
.section-banner {
  padding-bottom: 40px;
}

.banner {
  position: relative;
  padding: 82px 42px 62px;
  width: 100%;
  height: auto;
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: var(--radius-xl);
  background-color: var(--light-300);
  overflow: hidden;

  @media (max-width: 980px) {
    padding: 100px 14px 87px;
  }

  &:after {
    @media (max-width: 980px) {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
    }
  }

  &-list {
    position: relative;
    justify-content: space-between;
    box-sizing: border-box;
    z-index: 1;

    &-title {
      margin-bottom: 53px;
      max-width: 604px;
      color: var(--light-100) !important;
      line-height: 1.1;

      @media (max-width: 768px) {
        margin-bottom: 60px;
      }
    }

    &-description {
      margin-bottom: 60px;
      max-width: 550px;
      color: var(--light-100);
      font-size: 21px;
      line-height: 1.3;

      @media (max-width: 768px) {
        margin-bottom: 40px;
        font-size: var(--fz-smx);
      }
    }

    &-button {
      width: 100%;
      max-width: 248px;

      @media (max-width: 980px) {
        max-width: 200px;
      }


      .icon {
        width: 28px;
        height: 28px;
        fill: transparent;
        stroke: currentColor;

        * {
          fill: transparent;
          stroke: currentColor;
        }
      }
    }
  }
}
</style>