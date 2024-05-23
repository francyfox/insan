import { defineStore } from 'pinia'

export const useListNeed = defineStore('listNeed', () => {
  const activeListNeed = ref([])
  const finalListNeed = ref([])
  const allListNeed = ref([])
  const getActiveListNeed = async (page: number, number: number, lazy: boolean = true): Promise<any> => useApi('/help', {
    lazy: true,
    method: "GET",
    query: {
      page,
      number
    }
  })

  const getFinalListNeed = async (page: number, number: number, lazy: boolean = true): Promise<any> => useApi('/help-end', {
    lazy: true,
    method: "GET",
    query: {
      page,
      number,
    }
  })

  const getPersonById = async (id: number): Promise<any> => useApi('/help-one', {
    method: "GET",
    query: {
      id
    }
  })

  return {
    getPersonById,
    getActiveListNeed,
    getFinalListNeed,
    activeListNeed,
    finalListNeed
  }
})