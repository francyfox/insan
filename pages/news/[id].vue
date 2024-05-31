<script setup lang="ts">
import { NSkeleton, useMessage } from 'naive-ui';
import { useArticlesStore } from '~/store/articles';
import SectionCommon from '~/components/sections/common/SectionCommon.vue';
import type { Ref } from 'vue';

const store = useArticlesStore()
const { getArticle } = store
const route = useRoute()
const id = route.params.id as string
const isLoading = ref(false)
const responseData: Ref<any> = ref([])

const getData = async (): Promise<any> => {
  const { data, error, pending } = await getArticle(parseInt(id), parseInt(route.query.page))

  if (error.value) {
    showError({
      fatal: true,
      statusCode: error.value.statusCode,
      statusMessage: 'Не удалось загрузить новость'
    })
  }

  isLoading.value = pending.value
  return data.value
}

responseData.value = await getData()

definePageMeta({
  validate: async (route) => {
    // Check if the id is made up of digits
    return typeof route.params.id === 'string' && /^\d+$/.test(route.params.id)
  }
})

useSeoMeta({
  title: responseData.value.data.title || 'Новость',
  description: responseData.value.data.seo.description,
  ogDescription: responseData.value.data.seo.description,
  ogImage: responseData.value.data.seo.image,
  keywords: responseData.value.data.seo.keywords
})
</script>

<template>
  <div>
    <section-common>
      <template #header>
        {{ responseData.data.title  }}
      </template>

      <template #seoH1>
        {{ responseData.data.seo.h1  }}
      </template>
    </section-common>

    <div class="section section-articles">
      <div class="container">
        <insane-content>

          <n-skeleton v-if="isLoading"
                      :repeat="3"
                      text
          />
          <aside v-else v-html="responseData.data.description" />

<!--          <div class="row">-->
<!--            <insane-button variant="primary"-->
<!--                           :is-link="true"-->
<!--                           to="/"-->
<!--            >-->
<!--              Помочь-->
<!--            </insane-button>-->
<!--          </div>-->
        </insane-content>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.content .insane-button {
  width: 292px;
  margin-top: 60px;
}
</style>