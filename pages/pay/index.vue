<script setup lang="ts">
import TestContent from '~/pages/articles/test-content';
import SectionCommon from '~/components/sections/common/SectionCommon.vue';

definePageMeta({
  title: 'Оплата'
})
</script>

<template>
  <div>
    <section-common>
      <template #header>
        Оплата
      </template>
    </section-common>

    <div class="section section-pay">
      <div class="container">
        <insane-content>
          <aside v-html="TestContent" />
        </insane-content>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.section-pay {
  margin-bottom: 100px;

  .content {
    margin: 0;
  }
}
</style>