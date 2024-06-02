<script setup lang="ts">
import { useArticlesStore } from '~/store/articles';
import { useMessage } from 'naive-ui'

const route = useRoute()
const id = parseInt(route.params.id)

const message = useMessage()
const store = useArticlesStore()
const { getArticles } = store
const isLoading = ref(true)
const responseData = ref(Array.from({ length: 6}, () => null))
const localePath = useLocalePath()

const getData = async () => {
  const { data, error, pending } = await getArticles(id, 6)

  if (error.value) {
    message.error('Не удалось получить список новостей')
  }

  isLoading.value = pending.value
  return data.value?.data
}

responseData.value = await getData()
</script>

<template>
  <section class="section section-articles">
    <div class="container">
      <div class="articles col">
        <div class="main-page-header row">
          <div class="title-h1">
            {{ $t('news.section.title')}}
          </div>

          <nuxt-link class="link"
                     to="/news"
          >
            {{ $t('news.section.buttonText')}}
          </nuxt-link>
        </div>

        <client-only>
          <div class="articles-body">
            <lazy-insane-article v-for="(item, index) in responseData"
                                 :key="index"
                                 :data="item"
                                 :is-loading="isLoading"
                                 :url="localePath(`/news/${(item as any)?.id}`)"
            />
          </div>
        </client-only>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.section-articles {
  margin-bottom: 100px;
}

.articles {
  &-body {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;

    @media (max-width: 980px) {
      grid-template-columns: 1fr;
    }

    .article {
      gap: 0;

      &:nth-child(n + 3) {
        @media (max-width: 980px) {
          display: none;
        }
      }

      &-image {
        @media (max-width: 1280px) {
          height: 261px !important;
        }

        @media (max-width: 768px) {
          height: 302px !important;
        }
      }

      &-body {
        padding: 17px 14px 23px;

        @media (max-width: 768px) {
          padding: 23px 24px;
        }

        &-text, .insane-button {
          display: none !important;
        }

        &-title {
          display: block !important;
          font-size: var(--fz-md);
          color: var(--dark-800);
          font-weight: 400;
          min-height: initial;


          @media (max-width: 768px) {
            font-size: var(--fz-smx);
          }
        }
      }
    }

    .article-image {
      height: 360px;
    }
  }
}
</style>