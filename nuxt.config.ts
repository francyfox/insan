// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true
  },
  modules: [
    ['@pinia/nuxt', {}],
    ['@nuxtjs/google-fonts', {
      families: {
        Poppins: [500],
        Montserrat: [400, 500, 600, 700, 800, 900]
      }
    }]
  ],
  alias: {
    '#/': "./",
    '#components/': './components/',
    '#assets/': './assets/',
    '#pages/': './pages/'
  }
})
