<script setup lang="ts">
import InsaneSortList from '~/components/insane-sort-list/InsaneSortList.vue';
import SectionCommon from '~/components/sections/common/SectionCommon.vue';
import { useListNeed } from '~/store/list-need';
import { useMessage } from 'naive-ui';
const { t } = useI18n()

definePageMeta({
  title: 'help.title',
})

const store = useListNeed()
const { getActiveListNeed, getFinalListNeed } = store
const message = useMessage()

const sortList = [
  t('help.tabs.all'),
  t('help.tabs.complete'),
  t('help.tabs.help'),
]

const activeSortIndex = ref(1)

const route = useRoute()
const page = computed(() => route.query.page ? Number(route.query.page) : 0)
const pageCount = ref(20)
const isLoading = ref(true)
const responseData = ref(Array.from({ length: 9 }, () => null))

const getData = async (tab: number) => {
  const response = async () => {
    switch (tab) {
      case 0:
        return await getActiveListNeed(page.value, 9, false)
      case 1:
        return await getFinalListNeed(page.value, 9, false)
      default:
        return await getActiveListNeed(page.value, 9, false)
    }
  }

  const { data, error, pending } = await response()

  if (error.value) {
    message.error('Не удалось получить список нуждающихся')
  }

  isLoading.value = pending.value
  return (tab === 0 ) ? data.value?.fundraisings : data.value
}

responseData.value = await getData(activeSortIndex.value)

watch(activeSortIndex, async () => {
  responseData.value = await getData(activeSortIndex.value)
})

watch(route.query, async () => {
  responseData.value = await getData(activeSortIndex.value)
})
</script>

<template>
  <div>
    <section-common>
      <template #header>
        Список нуждающихся
      </template>
    </section-common>
    <section class="section section-need">
      <div class="container">
        <div class="col">
          <insane-sort-list v-model="activeSortIndex"
                            :data="sortList"
          />

          <div class="card-list">
            <insane-card v-for="(item, index) in responseData"
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
  </div>
</template>

<style lang="scss">
.card-list {
  margin-bottom: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr 1fr;
    gap: 12px 4px;
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}

.pagination {
  margin-bottom: 50px;
}

</style>