import {defineStore} from 'pinia'

export const useListNeed = defineStore('listNeed', () => {
    const {locale} = useI18n()
    const activeListNeed = computed(() => allListNeed.value.filter((item: any) => item?.finish === 0))
    const finalListNeed = ref([])
    const allListNeed = ref([])
    const currentNeed = ref(null)
    const getActiveListNeed = async (page: number, number: number): Promise<any> => useApi('/help', {
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
            headers: {
                'Accept-Language': locale.value,
            },
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
        allListNeed,
        currentNeed
    }
})