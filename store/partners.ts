import { defineStore } from 'pinia'
export const usePartnersStore = defineStore('partners', () => {
  const { locale } = useI18n()
  async function getPartners(page: number, per_page: number): Promise<any>{
    const response = await useApi('/partners', {
      method: 'GET',
      headers: {
        'Accept-Language': locale.value,
      },
      query: {
        page,
        per_page
      }
    })

    return response
  }

  return {
    getPartners
  }
})