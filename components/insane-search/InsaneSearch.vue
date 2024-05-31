<script setup lang="ts">
import { NForm, NButton } from 'naive-ui'
function onSubmit() {

}
</script>

<template>
  <n-form action="/"
          @submit="onSubmit"
          class="search-form"
  >
    <nuxt-link to="/search" class="search-form-button">
      <svgo-icon-search class="icon" />
    </nuxt-link>
  </n-form>
</template>

<style scoped lang="scss">
.search-form {
  @media (max-width: 980px) {
    order: 3;
  }

  &-button {
    display: flex;

    @media (max-width: 980px) {
      margin-left: 20px;
    }
  }
}
</style>