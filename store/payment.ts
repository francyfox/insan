import { defineStore } from 'pinia'
export const usePaymentStore = defineStore('payment', () => {
  const sendPaymentForm = async (body: any) => {
    const response = await useApi('/send-payment', {
      method: 'POST',
      body
    })

    return response
  }

  return {
    sendPaymentForm
  }
})