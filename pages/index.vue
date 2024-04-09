<script setup lang="ts">
import SectionBanner from '~/components/main-page/SectionBanner.vue';
import SectionAdvantages from '~/components/main-page/SectionAdvantages.vue';
import SectionHelpList from '~/components/main-page/SectionHelpList.vue';
import SectionProgram from '~/components/main-page/SectionProgram.vue';
import SectionApp from '~/components/main-page/SectionApp.vue';
import SectionArticles from '~/components/main-page/SectionArticles.vue';

definePageMeta({
  title: 'Главная',
})

useSeoMeta({
  title: 'Инсан',
  description: 'Инсан',
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://insan.dev',
    site_name: 'Инсан',
  },
})
</script>

<template>
  <NuxtLayout>
    <section-banner />
    <section-advantages />
    <section-help-list />
    <section-program />
    <section-app />
    <section-articles />
  </NuxtLayout>
</template>

<style lang="scss">
section.section-header {
  display: none;
}

header.section-header {
  padding: 0 !important;
}

.main-page-header {
  margin-bottom: 60px;
  align-items: flex-end;

  .title-h1 {
    line-height: 0.7;
  }

  .link {
    font-size: var(--fz-lg);
    font-weight: 500;
    line-height: 0.8;
  }
}
</style>