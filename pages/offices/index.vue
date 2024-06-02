<script setup>
import InsaneVolunteerColumn from "~/components/insane-volunteer-centers/InsaneVolunteerColumn.vue";
import SectionCommon from '~/components/sections/common/SectionCommon.vue'
import { useOfficesStore } from '~/store/offices'

const store = useOfficesStore()
const { offices } = storeToRefs(store)
const { getOffices } = store
const columnByLetter = ref([]);


await getOffices()
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

  columnByLetter.value = [...Array.from(cardData)].sort((a, b) => a[0].localeCompare(b[0]));
}

getLettersByRegion(offices.value);

definePageMeta({
  title: 'pages.title.offices',
})
</script>

<template>
  <div>
    <section-common>
      <template #header>
        {{ $t('pages.title.offices')}}
      </template>
    </section-common>
    <section class="volunteer-centers section">
      <div class="container">
        <div class="volunteer-list">
          <InsaneVolunteerColumn v-for="(column, index) in columnByLetter" :key="index"
                                 :column-data="column"/>
        </div>
      </div>
    </section>
  </div>
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