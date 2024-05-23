<script setup lang="ts">
import { useMessage } from 'naive-ui';
import SectionCommon from '~/components/sections/common/SectionCommon.vue';
import { useArticlesStore } from '~/store/articles';

definePageMeta({
  title: 'Новости и события',
  breadcrumb: {
    ariaLabel: 'Новости и события'
  }
})

const store = useArticlesStore()
const { getArticles } = store

const route = useRoute()
const currentPage = computed(() => route.query.page ? Number(route.query.page) : 1)
const pageCount = ref(1)
const isLoading = ref(true)
const message = useMessage()
const responseData = ref(Array.from({ length: 6 }, () => null))

const getData = async () => {
  const { data, error, pending } = await getArticles(currentPage.value, 6)

  if (error.value) {
    message.error('Не удалось получить список новости')
  }

  pageCount.value = data.value?.num_pages

  isLoading.value = pending.value
  return data.value?.data
}

responseData.value = await getData()

watch(route.query, async () => {
  responseData.value = await getData()
}, { deep: true })
</script>

<template>
  <section-common>
    <template #header>
      Новости и события
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
                          :url="`/articles/${item?.id}?page=${currentPage}`"
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