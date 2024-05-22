import { defineStore } from 'pinia'

export const usePrograms = defineStore('programs', () => {
  const programs = ref([])

  async function getPrograms () {
    const response = await useApi('/programs', {
      method: 'GET'
    })

    return response
  }
})