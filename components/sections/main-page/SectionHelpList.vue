<script setup lang="ts">
import { useListNeed } from '~/store/list-need';
import { useMessage } from 'naive-ui';

const store = useListNeed()
const { getActiveListNeed } = store
const message = useMessage()
const isLoading = ref(true)
const responseData = ref(Array.from({ length: 8}, () => null))

const getData = async () => {
  const { data, error, pending } = await getActiveListNeed(0, 9)

  if (error.value) {
    message.error('Не удалось получить список нуждающихся')
  }

  isLoading.value = pending.value
  return data.value?.fundraisings
}

responseData.value = await getData()

if (responseData.value[0] === null) {
  responseData.value = await getData()
}
</script>

<template>
  <section class="section section-help">
    <div class="container">
      <div class="help-list col">
        <div class="main-page-header row">
          <div class="title-h1">
            {{ $t('help.section.title')}}
          </div>

          <nuxt-link to="/help"
                     class="link"
          >
            {{ $t('help.section.buttonText')}}
          </nuxt-link>
        </div>
        <div class="help-list-body">
          <lazy-insane-card v-for="(item, index) in responseData"
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