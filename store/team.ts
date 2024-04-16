export const useTeamStore = defineStore('team', () => {
    const teamList = ref([]);

    const fetchTeamList = async (): Promise<void> => {
        const data = await useApi('/teams', {
            method: "GET"
        });

        // TODO тут получается в запросе нужно вытащить список всей команды, и уже прокидывать в переменную
        teamList.value = data;
    }

    return {
        teamList: computed(() => teamList.value),
        fetchTeamList,
    }
})