<script setup lang="ts">
import SectionBanner from '~/components/sections/main-page/SectionBanner.vue';
import SectionAdvantages from '~/components/sections/main-page/SectionAdvantages.vue';
import SectionHelpList from '~/components/sections/main-page/SectionHelpList.vue';
import SectionProgram from '~/components/sections/main-page/SectionProgram.vue';
import SectionApp from '~/components/sections/main-page/SectionApp.vue';
import SectionArticles from '~/components/sections/main-page/SectionArticles.vue';

definePageMeta({
  title: 'Главная',
})

useSeoMeta({
  title: 'Главная',
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
  <NuxtLayout class="main-page">
    <section-banner />
    <section-advantages />
    <section-help-list />
    <section-program />
    <section-app />
    <section-articles />
  </NuxtLayout>
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