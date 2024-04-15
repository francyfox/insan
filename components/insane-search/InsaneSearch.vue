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
    <n-button class="search-form-button" text>
      <svgo-icon-search class="icon" />
    </n-button>
  </n-form>
</template>

<style scoped lang="scss">
.search-form {
  &-button {
    @media (max-width: 980px) {
      margin-left: 20px;
    }
  }
}
</style>