import {defineStore} from 'pinia'

export const useListNeed = defineStore('listNeed', () => {
    const {locale} = useI18n()
    const activeListNeed = ref([])
    const finalListNeed = ref([])
    const allListNeed = ref([])
    const getActiveListNeed = async (page: number, number: number): Promise<any> => useApi('/help', {
        lazy: true,
        method: "GET",
        headers: {
            'Accept-Language': locale.value,
        },
        query: {
            page,
            number
        }
    })

    const getFinalListNeed = async (page: number, number: number): Promise<any> => useApi('/help-end', {
        lazy: true,
        method: "GET",
        headers: {
            'Accept-Language': locale.value,
        },
        query: {
            page,
            number,
        }
    })

    const getAllListNeed = async (): Promise<any> => {
        const {data} = await useApi('/help-main', {
            method: "GET"
        });

        allListNeed.value = data.value;
    }

    const getPersonById = async (id: number): Promise<any> => useApi('/help-one', {
        method: "GET",
        headers: {
            'Accept-Language': locale.value,
        },
        query: {
            id
        }
    })

    return {
        getPersonById,
        getActiveListNeed,
        getFinalListNeed,
        getAllListNeed,
        activeListNeed,
        finalListNeed,
        allListNeed
    }
})