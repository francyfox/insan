<script setup lang="ts">
import { NButton } from 'naive-ui'
</script>

<template>
  <header class="section section-header">
    <div class="container">
      <div class="row header-list">
        <a href="/" class="header-list-logo" title="Вернуться домой">
          <svgo-icon-logo class="link" />
        </a>

        <nav class="header-menu">
          <NuxtLink href="#"
                    class="header-menu-item"
          >
            <n-button>Default</n-button>
          </NuxtLink>
        </nav>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "header-base.style";
</style>