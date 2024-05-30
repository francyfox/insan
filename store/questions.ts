import { defineStore } from 'pinia'
export const useQuestionsStore = defineStore('questions', () => {
  const { locale } = useI18n()
  const questions = ref([])
  const isLoading = reactive({
    faq: true,
    form: false,
  })

  const getQuestions = async () => {
    const { data, error, pending } = await useApi('/faq', {
      method: 'GET',
      headers: {
        'Accept-Language': locale.value,
      },
    })

    if (error.value) {
      showError({
        fatal: true,
        statusCode: error.value.statusCode,
      })
    }

    isLoading.faq = pending.value
    questions.value = data.value.data
  }

  const sendFormQuestions = async (body: any) => {
    const response = await useApi('/add-question', {
      method: 'POST',
      body
    })

    isLoading.form = false

    return response
  }

  return {
    questions,
    isLoading,
    getQuestions,
    sendFormQuestions
  }
})