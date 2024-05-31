import { defineStore } from 'pinia'

export const useSearchStore = defineStore('search', () => {
  const { locale } = useI18n()
  const searchData = ref([])
  const totalCount = ref(null)

  async function getSearch(query: string) {
    const { data, error, pending } = await useApi('/search', {
      method: 'GET',
      headers: {
        'Accept-Language': locale.value,
      },
      query: {
        query
      }
    })

    if (error.value) {
      showError({
        fatal: true,
        statusCode: error.value.statusCode,
      })
    }

    totalCount.value = data.value['total_count']
    searchData.value = data.value.data
  }

  return {
    getSearch,
    totalCount,
    searchData
  }
})