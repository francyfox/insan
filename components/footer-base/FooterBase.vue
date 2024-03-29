<script setup lang="ts">
import FooterList from '~/components/footer-base/footer-list/FooterList.vue';
import FooterBrands from '~/components/footer-base/footer-brands/FooterBrands.vue';
</script>

<template>
  <footer class="section section-footer">
    <div class="container bg-light card-shadow-md">
      <div class="col">
        <footer-list />
        <footer-brands />
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
@import "footer-base.style";
</style>