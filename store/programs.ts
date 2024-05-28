import { defineStore } from 'pinia'

export const useProgramsStore = defineStore('programs', () => {
  const { locale } = useI18n()
  const programs = ref([])

  async function getPrograms () {
    const response = await useApi('/program', {
      headers: {
        'Accept-Language': locale.value,
      },
      method: 'GET',
    })

    return response
  }

  async function getProgramById (id: number) {
    const response = await useApi('/program-by-id', {
      headers: {
        'Accept-Language': locale.value,
      },
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