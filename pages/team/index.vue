<script setup lang="ts">
import {useTeamStore} from "~/store/team";

const teamStore = useTeamStore();
// TODO тут получаем список из стора, там тоже комментарий оставил, можешь посмотреть
const teamList = teamStore?.teamList;

onMounted(() => {
  teamStore?.fetchTeamList();
})

definePageMeta({
  title: 'Команда',
  breadcrumb: {
    ariaLabel: 'Команда'
  }
})
</script>

<template>
  <NuxtLayout>
    <section class="section team">
      <div class="container">
        <div class="team__heading">
          <h1 class="title-h1">Наша команда</h1>
        </div>
        <div class="team__content">
          <div class="team__list">
            <InsaneTeamCard
                v-for="(employee, index) in teamList"
                :key="index"
                :employee="employee"
            />
          </div>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>

<style scoped lang="scss">
.container {
  display: block;
}

.team {
  margin-bottom: 100px;

  &__heading {
    margin-bottom: 60px;
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 64px 32px;


    @media (max-width: 1000px) {
      grid-template-columns: repeat(3, 1fr);
      gap: 64px 20px;
    }

    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 64px 20px;
    }

    @media (max-width: 430px) {
      grid-template-columns: repeat(1, 1fr);
      gap: 20px;
    }
  }
}

</style>