<script setup lang="ts">
import InsaneSortList from '~/components/insane-sort-list/InsaneSortList.vue';
import { createNeedHelpPersons } from '~/server/app/module/faker/faker.help-list';

definePageMeta({
  title: 'Список нуждающихся',
  breadcrumb: {
    ariaLabel: 'Список нуждающихся'
  }
})

const sortList = ['Все списки', 'Кому нужна помощь', 'Кому уже помогли']
const activeSortIndex = ref(0)

const route = useRoute()
const pageCount = ref(20)
const isLoading = ref(false)

const data = createNeedHelpPersons(9)
</script>

<template>
  <NuxtLayout>
    <template #header>
      Список нуждающихся
    </template>
    <section class="section section-need">
      <div class="container">
        <div class="col">
          <insane-sort-list v-model="activeSortIndex"
                            :data="sortList"
          />

          <div class="card-list">
            <insane-card v-for="(item, index) in data"
                         :key="index"
                         :data="item"
                         :is-loading="isLoading"
                         class="card-list-item"
            />
          </div>


          <insane-pagination v-model="route.query.page"
                             :page-count="pageCount"
                             class="card-list-pagination"
          />

        </div>
      </div>
    </section>
  </NuxtLayout>
</template>

<style lang="scss">
.sort-list {
  margin-bottom: 20px;
  justify-content: center;
}

.card-list {
  margin-bottom: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
}

.pagination {
  margin-bottom: 50px;
}

</style>