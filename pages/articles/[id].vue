<script setup lang="ts">
import { useMessage } from 'naive-ui';
import { useArticlesStore } from '~/store/articles';

const message = useMessage()

const store = useArticlesStore()
const { getArticle } = store
const route = useRoute()
const id = route.params.id as string
const isLoading = ref(false)

const getData = async (): Promise<any> => {
  const response = await getArticle(parseInt(id), parseInt(route.query.page))

  isLoading.value = false

  if (response.error.value) {
    message.error('Не удалось загрузить новости')
  }

  return response
}

const responseData = ref(await getData())

useSeoMeta({
  title: responseData.value.data.data.title || 'Новость',
})
</script>

<template>
  <NuxtLayout>
    <template #header>
      {{ responseData.data.data.title  }}
    </template>

    <template #seoH1>
      {{ responseData.data.data.seo.h1  }}
    </template>

    <div class="section section-articles">
      <div class="container">
        <insane-content>

          <aside v-html="responseData.data.data.description" />

          <div class="row">
            <insane-button variant="primary"
                           :is-link="true"
                           to="/"
            >
              Помочь
            </insane-button>
          </div>
        </insane-content>
      </div>
    </div>
  </NuxtLayout>
</template>

<style scoped lang="scss">
.content .insane-button {
  width: 292px;
  margin-top: 60px;
}
</style>