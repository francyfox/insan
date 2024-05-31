<script setup lang="ts">
import SectionBanner from '~/components/sections/main-page/SectionBanner.vue';
import SectionAdvantages from '~/components/sections/main-page/SectionAdvantages.vue';
import SectionHelpList from '~/components/sections/main-page/SectionHelpList.vue';
import SectionProgram from '~/components/sections/main-page/SectionProgram.vue';
import SectionApp from '~/components/sections/main-page/SectionApp.vue';
import SectionArticles from '~/components/sections/main-page/SectionArticles.vue';

import { useCommonStore } from '~/store/common';
import { useSectionsStore } from '~/store/sections';

const store = useCommonStore()
const storeSections = useSectionsStore()
const { common } = storeToRefs(store)

await Promise.all([
  await store.getCommon(),
  await storeSections.getMainPageBanner()
])

const title = computed(() => (common.value?.seo?.title) ? common.value?.seo?.title : 'pages.title.index')

useSeoMeta({
  title,
  description: common.value?.seo?.description,
  keywords: common.value?.seo?.keywords
})
</script>

<template>
  <div>
    <section-banner />
    <section-advantages />
    <section-help-list />
    <section-program />
    <section-app />
    <section-articles />
  </div>
</template>

<style lang="scss">
.main-page-header {
  margin-bottom: 60px;
  align-items: flex-end;

  .title-h1 {
    line-height: 0.7;
  }

  .link {
    color: var(--primary-light);
    font-size: var(--fz-lg);
    font-weight: 500;
    line-height: 0.8;

    @media (max-width: 768px) {
      font-size: var(--fz-smx);
    }

    &:hover {
      color: var(--primary);
    }
  }
}
</style>