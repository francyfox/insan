<script setup>
import InsaneVolunteerColumn from "~/components/insane-volunteer-centers/InsaneVolunteerColumn.vue";

const volunteers = [
  {
    regionName: 'Агульский район',
    contactPerson: 'Лотов Абдулла',
    contactNumber: '8928 516 64 13'
  },
  {
    regionName: 'А',
    contactPerson: 'Лотов Абдулла',
    contactNumber: '8928 516 64 13'
  },
  {
    regionName: 'Бгульский район',
    contactPerson: 'Лотов Абдулла',
    contactNumber: '8928 516 64 13'
  },
  {
    regionName: 'Бгул район',
    contactPerson: 'Лотов Абдулла',
    contactNumber: '8928 516 64 13'
  },
  {
    regionName: 'Бгу район',
    contactPerson: 'Лотов Абдулла',
    contactNumber: '8928 516 64 13'
  },
  {
    regionName: 'Вгульский район',
    contactPerson: 'Лотов Абдулла',
    contactNumber: '8928 516 64 13'
  },
  {
    regionName: 'Ггульский район',
    contactPerson: 'Лотов Абдулла',
    contactNumber: '8928 516 64 13'
  },
  {
    regionName: 'Дгульский район',
    contactPerson: 'Лотов Абдулла',
    contactNumber: '8928 516 64 13'
  },
  {
    regionName: 'Егульский район',
    contactPerson: 'Лотов Абдулла',
    contactNumber: '8928 516 64 13'
  },
  {
    regionName: 'Егульский район',
    contactPerson: 'Лотов Абдулла',
    contactNumber: '8928 516 64 13'
  },
  {
    regionName: 'Егкий район',
    contactPerson: 'Лотов Абдулла',
    contactNumber: '8928 516 64 13'
  },
  {
    regionName: 'Ёгульский район',
    contactPerson: 'Лотов Абдулла',
    contactNumber: '8928 516 64 13'
  }, {
    regionName: 'Жгульский район',
    contactPerson: 'Лотов Абдулла',
    contactNumber: '8928 516 64 13'
  },
  {
    regionName: 'Згульский район',
    contactPerson: 'Лотов Абдулла',
    contactNumber: '8928 516 64 13'
  },
  {
    regionName: 'Згу район',
    contactPerson: 'Лотов Абдулла',
    contactNumber: '8928 516 64 13'
  },
  {
    regionName: 'Згульскasmdkий район',
    contactPerson: 'Лотов Абдулла',
    contactNumber: '8928 516 64 13'
  },
  {
    regionName: 'Игульский район',
    contactPerson: 'Лотов Абдулла',
    contactNumber: '8928 516 64 13'
  },
  {
    regionName: 'Кгульский район',
    contactPerson: 'Лотов Абдулла',
    contactNumber: '8928 516 64 13'
  },
  {
    regionName: 'Лгульский район',
    contactPerson: 'Лотов Абдулла',
    contactNumber: '8928 516 64 13'
  },
];

const columnByLetter = ref([]);

function getLettersByRegion(volunteers) {
  let cardData = new Map();

  for (let i = 0; i < volunteers?.length; i++) {
    let letter = volunteers[i]?.regionName[0];

    if (!cardData.has(letter)) {
      cardData.set(
          letter,
          volunteers.filter(item => item?.regionName[0] === letter)
      )
    }
  }

  columnByLetter.value = [...Array.from(cardData)];
}


onMounted(() => {
  getLettersByRegion(volunteers);
})

definePageMeta({
  title: 'Волонтёрские центры',
  breadcrumb: {
    ariaLabel: 'Волонтёрские центры'
  }
})
</script>

<template>
  <NuxtLayout>
    <section class="volunteer-centers section">
      <div class="container">
        <div class="volunteer-list">
          <InsaneVolunteerColumn v-for="(column, index) in columnByLetter" :key="index"
                                 :column-data="column"/>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>

<style scoped lang="scss">
.volunteer-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px 17px;
  margin-bottom: 100px;


  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 64px 20px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 430px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 40px;
  }
}
</style>