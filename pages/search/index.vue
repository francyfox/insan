<script setup lang="ts">
import SectionCommon from '~/components/sections/common/SectionCommon.vue';

definePageMeta({
  title: 'pages.title.search',
})
</script>

<template>
  <section-common>
    <template #header>
      {{ $t('pages.title.search')}}
    </template>
  </section-common>
  <div class="container">
    <lazy-insane-search-form />
  </div>
</template>

<style scoped lang="scss">

</style>