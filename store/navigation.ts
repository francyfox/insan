import { defineStore } from 'pinia';
export const useNavigationStore = defineStore('navigation', () => {
  const { locale } = useI18n()
  const navigation = ref([])
  const headerNav = ref([])
  const footerNav = computed(() => {
    return {
      first: navigation.value.slice(0, 5),
      second: navigation.value.slice(5, 10)
    }
  })

  async function getNavigation(type: number) {
    const response = await useApi('/navigations', {
      method: 'GET',
      headers: {
        'Accept-Language': locale.value,
      },
      query: {
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