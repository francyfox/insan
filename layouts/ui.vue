<script setup lang="ts">
import '@unocss/reset/tailwind-compat.css'
import '#assets/scss/base.scss'
</script>

<template>
  <div class="ui-kit">
    <slot />
  </div>
</template>

<style scoped lang="scss">
  .ui-kit {
    padding: 40px 0;
  }
</style>