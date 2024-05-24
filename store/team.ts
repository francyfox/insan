export const useTeamStore = defineStore('team', () => {
    const teamList = ref([]);

    const fetchTeamList = async (): Promise<void> => {
        const { data } = await useApi('/teams', {
            method: "GET",
            lazy: true,
        });

        teamList.value = data.value;
    }

    return {
        teamList,
        fetchTeamList,
    }
})