<script setup lang="ts">
import InsaneSortList from '~/components/insane-sort-list/InsaneSortList.vue';

definePageMeta({
  title: 'Список нуждающихся',
  breadcrumb: {
    ariaLabel: 'Список нуждающихся'
  }
})

const sortList = ['Все списки', 'Кому нужна помощь', 'Кому уже помогли']
const activeSortIndex = ref(0)
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
            <insane-card class="card-list-item"/>
          </div>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>

<style scoped lang="scss">

</style>