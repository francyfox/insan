import { defineStore } from 'pinia'
export const usePartnersStore = defineStore('partners', () => {
  async function getPartners(page: number, per_page: number): Promise<any>{
    const response = await useApi('/partners', {
      method: 'GET',
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