<script setup lang="ts">
import { useDeviceStore } from '~/store/device';

const { locale, setLocale } = useI18n()
import { closeAllOpenedMenu, mountFlexMenu } from '~/components/header-menu/header-menu.service';
import { onClickOutside } from '@vueuse/core';
import { useNavigationStore } from '~/store/navigation';
const { t } = useI18n()

const storeDevice = useDeviceStore()
const { mediaQuery } = storeToRefs(storeDevice)
const store = useNavigationStore()
const { navigation, headerNav } = storeToRefs(store)
const isLoading = ref(true)
const { getNavigation } = store
const menuRef = ref()
const showMenu = ref(false)
const currentLocale = ref('ru')
const languageOptions = [
  { value: 'ru', label: 'RU' },
  { value: 'en', label: 'EN' },
]

currentLocale.value = locale.value

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

// onMounted(() => {
//   setTimeout(() => {
//     headerNav.value = mountFlexMenu(navigation.value, menuRef.value, t('header.flexMenu'))
//
//     showMenu.value = true
//   }, 0)
// })

onClickOutside(menuRef, _ => closeAllOpenedMenu(menuRef.value))

watch(currentLocale, () => {
  setLocale(currentLocale.value)
  // setTimeout(() => window.location.reload(), 1) // TODO: убрать потом
})

watch(locale, async () => {
  navigation.value = await getData()
  headerNav.value = mountFlexMenu(navigation.value, menuRef.value, t('header.flexMenu'))
});

watch(mediaQuery, async () => {
  headerNav.value = mountFlexMenu(navigation.value, menuRef.value, t('header.flexMenu'))
  showMenu.value = true
}, { deep: true })

const route = useRoute()
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
          <suspense>
            <header-menu :data="headerNav"/>
          </suspense>
        </div>

        <insane-city-select v-model:value="currentLocale"
                            :options="languageOptions"
        />
        <insane-search />
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "header-base.style";
</style>