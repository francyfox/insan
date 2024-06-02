import { defineStore } from 'pinia'

export const useZakatTabsStore = defineStore('zakatTabs', () => {
  const { locale } = useI18n()
  const zakatTabs = ref([])

    async function getZakatTabs() {
    const { data, error, pending } = await useApi('/pay', {
      method: 'GET',
      headers: {
        'Accept-Language': locale.value,
      },
    })

    if (error.value) {
      showError({
        fatal: true,
        statusCode: error.value.statusCode,
      })
    }

    zakatTabs.value = (data.value as any)?.texts
  }

  return {
    zakatTabs,
    getZakatTabs
  }
})