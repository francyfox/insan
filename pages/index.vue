<script setup lang="ts">
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
    <h1 class="title-h1">test</h1>
  </NuxtLayout>
</template>

<style scoped>

</style>