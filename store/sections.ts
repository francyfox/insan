import { defineStore } from 'pinia'
export const useSectionsStore = defineStore('sections', () => {
  const { locale } = useI18n()
  const mainPageBanner = ref([null])

  async function getMainPageBanner () {
    const { data, error } = await useApi('/sliders', {
      headers: {
        'Accept-Language': locale.value,
      },
      method: 'GET',
    })

    if (error.value) {
      showError({
        fatal: true,
        statusCode: error.value.statusCode,
      })
    }

    mainPageBanner.value = (data.value as any)
  }

  return {
    mainPageBanner,
    getMainPageBanner
  }
})