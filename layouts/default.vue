<script setup lang="ts">
import '@unocss/reset/tailwind-compat.css'
import '@fontsource/montserrat'
import '#assets/scss/base.scss'
</script>

<template>
  <header-base />
  <section class="section section-header">
    <div class="container">
      <insane-breadcrumbs />
      <div class="row">
        <h1 class="title-h1">
          <slot name="header" />
        </h1>

        <slot name="right-side" />
      </div>
    </div>
  </section>
  <slot name="default" />
  <footer-base />
</template>

<style scoped lang="scss">
.section-header {
  padding: 0 0 60px;
}
</style>