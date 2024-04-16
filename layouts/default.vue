<script setup lang="ts">
import '@unocss/reset/tailwind-compat.css'
import '@fontsource/montserrat'
import '#assets/scss/base.scss'

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
          <h1 class="title-h1">
            <slot name="header" />
          </h1>

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