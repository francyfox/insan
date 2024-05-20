<script setup lang="ts">
import { useMetaStore } from '~/store/meta'
import { crumbsReplaceSlug } from '~/server/app/util';
import TestContent from '~/pages/articles/test-content';
import { useMessage } from 'naive-ui';

const message = useMessage()
const storeMeta = useMetaStore()
const { breadcrumbs } = storeToRefs(storeMeta)

const route = useRoute()
const id = route.params.id as string
const isLoading = ref(false)

const getData = async (): Promise<any> => {
  const response = await useApi('/news', {
    method: 'GET',
    params: {
      id
    }
  })

  console.log(response)

  isLoading.value = false

  if (response.error.value) {
    message.error('Не удалось загрузить новости')
  }

  return response
}

const responseData = ref(await getData())
// breadcrumbs.value = crumbsReplaceSlug(breadcrumbs.value, slug, title)

useSeoMeta({
  title: responseData.value.data.title || 'Новость',
})
</script>

<template>
  <NuxtLayout>
    <template #header>
      {{ responseData.data.title }}
    </template>

    <div class="section section-articles">
      <div class="container">
        <insane-content>

          <aside v-html="responseData.data.description" />

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