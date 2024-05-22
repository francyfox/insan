<script setup lang="ts">
import { useMessage } from 'naive-ui';
import { useArticlesStore } from '~/store/articles';

const store = useArticlesStore()
const { getArticles } = store
const route = useRoute()
const message = useMessage()
const currentPage = computed(() => parseInt(route.query.page) || 1)
const isLoading = ref(true)
const responseData = ref([])

const getData = async (): Promise<any> => {
  const { data, error, pending } = await getArticles(currentPage.value, 10)

  if (error.value) {
    message.error('Не удалось загрузить новости')
  }

  isLoading.value = pending.value
  return data.value
}

responseData.value = await getData()

definePageMeta({
  title: 'Новости и события',
  breadcrumb: {
    ariaLabel: 'Новости и события'
  }
})
const pageCount = ref(responseData.value.num_pages)

watch(currentPage, async () => {
  isLoading.value = true
  responseData.value = await getData()
})
</script>

<template>
  <NuxtLayout>
    <template #header>
      Новости и события
    </template>

    <div class="section section-articles">
      <div class="container">
        <div class="col">
          <div class="article-list">
            <lazy-insane-article v-for="(item, index) in responseData.data"
                            :key="index"
                            :data="item"
                            :is-loading="isLoading"
                            :url="`/articles/${item.id}?page=${currentPage}`"
                            class="article-list-item"
            />
          </div>

          <lazy-insane-pagination v-model="currentPage"
                             :page-count="pageCount"
                             class="card-list-pagination"
          />
        </div>
      </div>
    </div>
  </NuxtLayout>
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