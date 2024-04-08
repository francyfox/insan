<script setup lang="ts">
import SectionBanner from '~/components/main-page/SectionBanner.vue';
import SectionAdvantages from '~/components/main-page/SectionAdvantages.vue';
import SectionHelpList from '~/components/main-page/SectionHelpList.vue';
import SectionProgram from '~/components/main-page/SectionProgram.vue';

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
  </NuxtLayout>
</template>

<style lang="scss">
section.section-header {
  display: none;
}

header.section-header {
  padding: 0 !important;
}
</style>