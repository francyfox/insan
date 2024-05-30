import { defineStore } from 'pinia';
export const useOfficesStore = defineStore('offices', () => {
  const { locale } = useI18n()
  const offices = ref([])

  const getOffices = async () => {
    const { data, error, pending } = await useApi('/v1/offices', {
      method: 'GET',
      query: {
        'access-token':'0xRs6obpvPOx4lkGLYxepBOcMju'
      },
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

    const formatOffice = data.value.map((i) => {
      return {
        regionName: i.name,
        contactPerson: i.phone.split(' -')[0],
        contactNumber: i.phone.replaceAll(/^\D+/g, '')
      }
    })

    offices.value = formatOffice
  }

  return {
    offices,
    getOffices
  }
})