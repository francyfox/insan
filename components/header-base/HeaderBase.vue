<script setup lang="ts">
import { closeAllOpenedMenu, menuHandler, mountFlexMenu } from '~/components/header-menu/header-menu.service';
import { onClickOutside } from '@vueuse/core';
import { useNavigationStore } from '~/store/navigation';

const store = useNavigationStore()
const { navigation, headerNav } = storeToRefs(store)
const isLoading = ref(true)
const { getNavigation } = store
const menuRef = ref()
const showMenu = ref(false)

const getData = async () => {
  const { data, error, pending } = await getNavigation(1)

  if (error.value) {
    showError({
      fatal: true,
      statusCode: error.value.statusCode,
      statusMessage: 'Не удалось загрузить новость'
    })
  }

  isLoading.value = pending.value
  return data.value
}

navigation.value = await getData()
headerNav.value = navigation.value

onMounted(() => {
  setTimeout(() => {
    headerNav.value = mountFlexMenu(navigation.value, menuRef.value)

    showMenu.value = true
    window.onresize = () => {
      headerNav.value = mountFlexMenu(navigation.value, menuRef.value)
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
          <header-menu :data="headerNav"/>
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