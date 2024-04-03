<script setup lang="ts">
import { createArticle } from '~/server/app/module/faker/faker.articles'
import { useMetaStore } from '~/store/meta'
import { crumbsReplaceSlug } from '~/server/app/util';
import TestContent from '~/pages/articles/test-content';
import { h } from 'vue'

const storeMeta = useMetaStore()
const { breadcrumbs } = storeToRefs(storeMeta)
const data = createArticle()

const route = useRoute()

const slug = route.params.slug as string
const title: string = data.title

// breadcrumbs.value = crumbsReplaceSlug(breadcrumbs.value, slug, title)

useSeoMeta({
  title,
})

const contentNode = h('aside', { innerHTML: TestContent })
</script>

<template>
  <NuxtLayout>
    <template #header>
      {{ data.title }}
    </template>

    <div class="section section-articles">
      <div class="container">
        <insane-content>

          <content-node />

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