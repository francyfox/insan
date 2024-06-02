export const usePagesStore = defineStore('pages', () => {
    const pageContent = ref({});

    const { locale } = useI18n();

    const getPageContent = async (slug: string) => {
        const {data} = await useApi('/page', {
            method: "GET",
            query: {
                slug: slug
            },
            headers: {
                'Accept-Language': locale.value,
            },
        })

        //@ts-ignore
        pageContent.value = data?.value;
    }

    return {
        pageContent: computed(() => pageContent.value),
        getPageContent
    }
})