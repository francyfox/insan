<script setup lang="ts">
import { useMessage } from 'naive-ui';

const route = useRoute()
const message = useMessage()
const currentPage = computed(() => route.query.page || 1)
const isLoading = ref(true)

const getData = async (): Promise<any> => {
  const response = await useApi('/news', {
    method: 'GET',
    params: {
      page: currentPage.value,
      per_page: 10
    }
  })

  isLoading.value = false

  if (response.error.value) {
    message.error('Не удалось загрузить новости')
  }

  return response
}

const responseData = ref(await getData())

definePageMeta({
  title: 'Новости и события',
  breadcrumb: {
    ariaLabel: 'Новости и события'
  }
})
const pageCount = ref(20)

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
                            :url="`/articles/${item.id}`"
                            class="article-list-item"
            />
          </div>

          <insane-pagination v-model="currentPage"
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