import { defineStore } from 'pinia'

export const useArticlesStore = defineStore('articles', () => {
  const articles = ref()
  async function getArticles(page: number, per_page: number): Promise<any>{
    const response = await useApi('/news', {
      lazy: true,
      method: 'GET',
      params: {
        page,
        per_page
      }
    })

    return response
  }

  async function getArticle(id: number, page: number): Promise<any>{
    const response = await useApi('/news', {
      method: 'GET',
      params: {
        page,
        id
      }
    })

    return response
  }

  return {
    getArticles,
    getArticle
  }
})