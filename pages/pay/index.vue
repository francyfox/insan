<script setup lang="ts">
import TestContent from '~/pages/articles/test-content';

definePageMeta({
  title: 'Оплата'
})
</script>

<template>
  <NuxtLayout>
    <template #header>
      Оплата
    </template>

    <div class="section section-pay">
      <div class="container">
        <insane-content>
          <aside v-html="TestContent" />
        </insane-content>
      </div>
    </div>
  </NuxtLayout>
</template>

<style scoped lang="scss">
.section-pay {
  margin-bottom: 100px;

  .content {
    margin: 0;
  }
}
</style>