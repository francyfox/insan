import { defineStore } from 'pinia'
export const useSectionsStore = defineStore('sections', () => {
  const { locale } = useI18n()
  const mainPageBanner = ref([null])

  async function getMainPageBanner () {
    const response = await useApi('/sliders', {
      headers: {
        'Accept-Language': locale.value,
      },
      method: 'GET',
    })

    return response
  }

  return {
    mainPageBanner,
    getMainPageBanner
  }
})