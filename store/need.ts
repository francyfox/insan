import { defineStore } from 'pinia'

export const useNeedStore = defineStore('need', () => {
  const sendNeedForm = async (body: any) => {
    const response = await useApi('/need', {
      method: 'POST',
      body
    })

    return response
  }

  return {
    sendNeedForm
  }
})