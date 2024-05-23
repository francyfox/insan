<script setup lang="ts">
import { closeAllOpenedMenu, menuHandler, mountFlexMenu } from '~/components/header-menu/header-menu.service';
import { onClickOutside } from '@vueuse/core';
import HeaderMenuData from '~/components/header-menu/header-menu.data'

const { data } = await useAsyncData(() => HeaderMenuData)
const menuRef = ref()
const showMenu = ref(false)

onMounted(() => {
  setTimeout(() => {
    data.value = mountFlexMenu(HeaderMenuData, menuRef.value)

    showMenu.value = true
    window.onresize = () => {
      data.value = mountFlexMenu(HeaderMenuData, menuRef.value)
    }
  }, 0)
})

onClickOutside(menuRef, _ => closeAllOpenedMenu(menuRef.value))
</script>

<template>
  <header class="section section-header">
    <div class="container">
      <div class="row header-list">
        <insane-logo />

        <div ref="menuRef"
             class="menu-wrapper"
             :class="showMenu ? 'mounted' : ''"
        >
          <header-menu :data="data"/>
        </div>

        <insane-city-select />
        <insane-search />
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "header-base.style";
</style>