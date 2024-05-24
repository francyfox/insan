import { defineStore } from 'pinia'

export const useProgramsStore = defineStore('programs', () => {
  const programs = ref([])

  async function getPrograms () {
    const response = await useApi('/program', {
      lazy: true,
      method: 'GET',
    })

    return response
  }

  async function getProgramById (id: number) {
    const response = await useApi('/program-by-id', {
      method: 'GET',
      params: {
        id
      }
    })

    return response
  }

  return {
    programs,
    getPrograms,
    getProgramById
  }
})