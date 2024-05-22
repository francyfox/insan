import { defineStore } from 'pinia'

export const useListNeed = defineStore('listNeed', () => {
  const activeListNeed = ref([])
  const finalListNeed = ref([])
  const getActiveListNeed = async (page: number, number: number, location: string = ''): Promise<any> => {
    const response = await useApi('/help', {
      method: "GET",
      query: {
        page,
        number
      }
    })

    return response
  }

  const getFinalListNeed = async (page: number, number: number, location: string = ''): Promise<any> => {
    const response = await useApi('/help-end', {
      method: "GET",
      query: {
        page,
        number,
      }
    })

    return response
  }

  return {
    getActiveListNeed,
    getFinalListNeed,
    activeListNeed,
    finalListNeed
  }
})