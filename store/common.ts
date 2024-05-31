import { defineStore } from 'pinia'

export const useCommonStore = defineStore('common', () => {
  const { locale } = useI18n()
  const common = ref(null)

  async function getCommon() {
    const { data, error, pending } = await useApi('/site-settings', {
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

    common.value = data.value as any
  }

  return {
    common,
    getCommon
  }
})