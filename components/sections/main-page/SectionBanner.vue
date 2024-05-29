<script setup lang="ts">
import { useSectionsStore } from '~/store/sections';

const { locale } = useI18n()
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
watch(locale, async () => {
  mainPageBanner.value = await getData() as any
});
</script>

<template>
  <section class="section section-banner">
    <div class="container">
      <lazy-insane-main-banner
          :data="mainPageBanner"
          :is-loading="isLoading"
      />
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