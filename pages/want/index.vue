<script setup lang="ts">
import InsanePaymentForm from '~/components/insane-payment-form/InsanePaymentForm.vue';
import SectionCommon from '~/components/sections/common/SectionCommon.vue';

definePageMeta({
  title: 'pages.title.want',
})
</script>

<template>
  <div>
    <section-common>
      <template #header>
        {{ $t('pages.title.want')}}
      </template>
    </section-common>
    <section class="section help">
      <div class="container">
        <insane-payment-form />
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.help {
  margin-bottom: 100px;

  .container {
    display: block;
  }

  &__heading {
    margin-bottom: 60px;
  }
}

</style>