<script setup lang="ts">
import { NForm, NButton } from 'naive-ui'
function onSubmit() {

}
</script>

<template>
  <n-form action="/" @submit="onSubmit">
    <n-button text>
      <svgo-icon-search class="icon" />
    </n-button>
  </n-form>
</template>

<style scoped lang="scss">

</style>