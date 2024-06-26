<script setup lang="ts">
import SectionCommon from '~/components/sections/common/SectionCommon.vue';
import { useArticlesStore } from '~/store/articles';

definePageMeta({
  title: 'pages.title.news',
})

const store = useArticlesStore()
const { getArticles } = store

const route = useRoute()
const currentPage = computed(() => route.query.page ? Number(route.query.page) : 1)
const pageCount = ref(1)
const isLoading = ref(true)
const responseData = ref(Array.from({ length: 6 }, () => null))

const getData = async () => {
  const { data, error, pending } = await getArticles(currentPage.value, 6)

  if (error.value) {
    showError({
      fatal: true,
      statusCode: error.value.statusCode,
      statusMessage: 'Не удалось получить список новостей'
    })
  }

  pageCount.value = data.value?.num_pages

  isLoading.value = pending.value
  return data.value?.data
}

responseData.value = await getData()

watch(currentPage, async () => {
  responseData.value = await getData()
})
</script>

<template>
  <section-common>
    <template #header>
      {{ $t('pages.title.news') }}
    </template>
  </section-common>
  <div class="section section-articles">
    <div class="container">
      <div class="col">
        <div class="article-list">
          <insane-article v-for="(item, index) in responseData"
                          :key="index"
                          :data="item"
                          :is-loading="isLoading"
                          :url="`/news/${item?.id}?page=${currentPage}`"
                          class="article-list-item"
          />
        </div>

        <insane-pagination v-model="route.query.page"
                           :page-count="pageCount"
                           class="card-list-pagination"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.article-list {
  padding-bottom: 80px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px 20px;

  @media (max-width: 980px) {
    gap: 20px;
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
}
</style>