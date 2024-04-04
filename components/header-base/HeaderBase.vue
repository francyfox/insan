<script setup lang="ts">
import { closeAllOpenedMenu, menuHandler } from '~/components/header-menu/header-menu.service';
import { onClickOutside } from '@vueuse/core';
import { useDeviceStore } from '~/store/device';
import type { Ref } from 'vue';
import type { HeaderMenuItem } from '~/components/header-menu/header-menu.type';
import HeaderMenuData from '~/components/header-menu/header-menu.data';

const menuData: Ref<HeaderMenuItem[]> = ref(HeaderMenuData) // TODO: not see on server side
const storeDevice = useDeviceStore()
const { mediaQuery } = storeToRefs(storeDevice)
const menuRef = ref()
const flexMenuIndex = computed(() => menuData.value.length - 1)

onMounted(() => {
  const menuChildren = menuRef.value.querySelectorAll('a')
  menuHandler(menuChildren)

  if (!mediaQuery.value.twoXl) {
    menuData.value[unref(flexMenuIndex)].children = menuData.value.splice(-2, 1)
  } else if (!mediaQuery.value.lg) {
    menuData.value[unref(flexMenuIndex)].children = menuData.value.splice(-2, 2)
  } else if (!mediaQuery.value.md) {
    menuData.value[unref(flexMenuIndex)].children = menuData.value.splice(-2, 3)
  } else {
    menuData.value[unref(flexMenuIndex)].children = menuData.value.slice(0, unref(flexMenuIndex))
  }
})

onClickOutside(menuRef, event => closeAllOpenedMenu(menuRef.value))
</script>

<template>
  <header class="section section-header">
    <div class="container">
      <div class="row header-list">
        <insane-logo />
        <div ref="menuRef" class="menu-wrapper">
          <header-menu :data="menuData"/>
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