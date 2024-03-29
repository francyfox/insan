<script setup lang="ts">
import { NSpace } from 'naive-ui'
</script>

<template>
  <NuxtLayout name="ui">
    <div class="section">
      <div class="container">
        <div class="col">
          <h1 class="title-h1">
            UI KIT
          </h1>

          <n-space align="center">
            <insane-button variant="menu">Text</insane-button>
            <insane-button variant="banner">Text</insane-button>
          </n-space>

        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<style scoped lang="scss">
.n-space {
  width: 100%;
  margin: 20px 0;
}
</style>