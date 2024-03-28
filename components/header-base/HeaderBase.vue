<script setup lang="ts">
import HeaderBaseData from '~/components/header-base/header-base.data'
</script>

<template>
  <header class="section section-header">
    <div class="container">
      <div class="row header-list">
        <insane-logo />

        <nav class="header-menu">
          <insane-button v-for="(item, index) in HeaderBaseData"
                         :key="index"
                         :to="item.path"
                         :is-link="true"
                         class="header-menu-item"
                         variant="menu"
          >
            {{ item.name }}
          </insane-button>
        </nav>

        <insane-search />
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "header-base.style";
</style>