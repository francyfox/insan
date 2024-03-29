<script setup lang="ts">
import '@unocss/reset/tailwind-compat.css'
import '@fontsource/montserrat'
import '#assets/scss/base.scss'
</script>

<template>
  <header-base />
  <section>
    <div class="container">
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

<style lang="scss">

</style>