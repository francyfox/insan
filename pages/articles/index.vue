<script setup lang="ts">
import { createArticleList } from '~/server/app/module/faker/faker.articles'

definePageMeta({
  title: 'Новости и события',
  breadcrumb: {
    ariaLabel: 'Новости и события'
  }
})

const route = useRoute()
const pageCount = ref(20)
const isLoading = ref(false)

const data = createArticleList(6)
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
            <insane-article v-for="(item, index) in data"
                            :key="index"
                            :data="item"
                            :is-loading="isLoading"
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