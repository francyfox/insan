import { defineStore } from 'pinia';
import type { Ref } from 'vue';
export const useNavigationStore = defineStore('navigation', () => {
  const navigation = ref([])
  const headerNav = ref([])
  const footerNav = computed(() => {
    return {
      first: navigation.value.slice(0, 5),
      second: navigation.value.slice(5, 10)
    }
  })

  async function getNavigation(type: number, locale: string = 'ru') {
    const response = await useApi('/navigations', {
      method: 'GET',
      query: {
        'Accept-Language': locale,
        type,
      },
    })

    return response
  }

  return {
    navigation,
    headerNav,
    footerNav,
    getNavigation
  }
})