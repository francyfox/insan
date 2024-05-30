import type {Ref, UnwrapRef} from "vue";

export const useTeamStore = defineStore('team', () => {
    const teamList: Ref<UnwrapRef<Array<{ id: number, name: string, position: string, img: string }>>> = ref([]);

    const fetchTeamList = async (): Promise<void> => {
        const {data} = await useApi('/employees', {
            method: "GET",
            lazy: true,
        });

        //@ts-ignore
        teamList.value = data.value;
    }

    return {
        teamList,
        fetchTeamList,
    }
})