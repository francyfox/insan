import type {Ref, UnwrapRef} from "vue";

export const useKurbanStore = defineStore('kurban', () => {
    const userRequestNumber: Ref<UnwrapRef<number | undefined>> = ref();

    const pageMeta = {
        title: 'Курбан-байрам вместе с благотворительным фондом - Инсан',
        description: 'Курбан-байрам вместе с благотворительным фондом - Инсан. Через 70 дней после Ураза-байрама, на десятый день мусульманского месяца Зуль-хиджа. В 2024 году Ид аль-Адха начинается в ночь с 15 на 16 июня, и главные торжества намечены на 16 июня. Свяжитесь с нами уже сейчас: +7 (800) 600 09-91'
    }

    const createKurbanRequest = async (body: any): Promise<any> => useApi('/add-kurban-application', {
        method: "POST",
        body
    })

    return {
        pageMeta,
        createKurbanRequest
    }
})