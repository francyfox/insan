<script setup lang="ts">
import { useListNeed } from '~/store/list-need';
import { useLocalePath } from '#i18n';

const localePath = useLocalePath()
const store = useListNeed()
const isLoading = ref(false)

const activeListNeed = computed(() => store.allListNeed.filter((item) => item?.finish === 0).slice(0, 8))


await store.getAllListNeed();
</script>

<template>
  <section class="section section-help">
    <div class="container">
      <div class="help-list col">
        <div class="main-page-header row">
          <div class="title-h1">
            {{ $t('help.section.title')}}
          </div>

          <nuxt-link :to="localePath('/help')"
                     class="link"
          >
            {{ $t('help.section.buttonText')}}
          </nuxt-link>
        </div>

        <div class="help-list-body">
          <lazy-insane-card v-for="(item, index) in activeListNeed"
                            :key="index"
                            :data="item"
                            :is-loading="isLoading"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.section-help {
  margin-bottom: 100px;
}

.help-list {
  &-body {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 12px;

    @media (max-width: 1320px) {
      grid-template-columns: 1fr 1fr 1fr;
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }

    .card {
      background: transparent;
      box-shadow: none;

      &:nth-child(n + 9) {
        display: none;
      }

      &:nth-child(n + 7) {
        @media (max-width: 1320px) {
          display: none;
        }
      }

      &:nth-child(n + 3) {
        @media (max-width: 768px) {
          display: none;
        }
      }

      &-carousel {
        height: 260px;
      }

      &-body {
        padding: 8px 13px;

        &-title {
          font-size: var(--fz-xs);
        }
      }
    }
  }
}
</style>