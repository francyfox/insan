<script setup lang="ts">

</script>

<template>
  <nuxt-link to="/" class="logo link" :title="$t('header.logoAlt')">
    <svgo-icon-logo fill="currentColor" class="link" />
  </nuxt-link>
</template>

<style lang="scss">
.logo svg {
  fill: currentColor;
  width: 158px;
  height: 32px;

  @media (max-width: 980px) {
    width: 100px;
    height: 20px;
  }

  * {
    fill: currentColor;
  }
}
</style>