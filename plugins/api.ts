export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const $api = $fetch.create({
    baseURL: 'https://www.fondinsan.ru/api',
    parseResponse: JSON.parse,
    // retry: 3,
    // retryDelay: 500,
    // timeout: 3000,
  })

  return {
    name: 'insane-api',
    provide: {
      api: $api
    }
  }
})