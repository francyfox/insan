<script setup lang="ts">
const route = useRoute()
const breadCrumbsExcludedPages: string[] = ['/']
const slots = useSlots()

const isExcluded = breadCrumbsExcludedPages.find(i => i === route.path)
</script>

<template>
  <header-base />
  <section v-if="!isExcluded" class="section section-header">
    <div class="container">
      <div class="col">
        <insane-breadcrumbs />
        <div v-if="slots['header']" class="row">
          <h1 v-show="!slots['seoH1']" class="title-h1">
            <slot v-if="slots['seoH1']" name="seoH1" />
            <slot v-else name="header" />
          </h1>

          <div v-if="slots['seoH1']" class="title-h1">
            <slot name="header" />
          </div>

          <slot name="right-side" />
        </div>
      </div>
    </div>
  </section>
  <slot name="default" />
  <footer-base />
</template>

<style scoped lang="scss">
.section-header {
  padding: 0 0 60px;

  @media (max-width: 768px) {
    padding: 0 0 40px;
  }

  .container > .col {
    gap: 50px
  }
}
</style>