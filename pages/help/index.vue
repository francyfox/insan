<script setup lang="ts">
import InsaneSortList from '~/components/insane-sort-list/InsaneSortList.vue';
import SectionCommon from '~/components/sections/common/SectionCommon.vue';
import {useListNeed} from '~/store/list-need';
import {useMessage} from 'naive-ui';

const {t} = useI18n()

definePageMeta({
  title: 'help.title',
})

const store = useListNeed();

const allListNeed = computed(() => {
  if (activeSortIndex.value === 0) {
    return store.allListNeed;
  } else if (activeSortIndex.value === 1) {
    return store.allListNeed.filter((item) => item?.finish === 1)
  } else {
    return store.allListNeed.filter((item) => item?.finish === 0)
  }
});

const sortList = [
  t('help.tabs.all'),
  t('help.tabs.complete'),
  t('help.tabs.help'),
]

const activeSortIndex = ref(0)

const isLoading = ref(false);

await store.getAllListNeed();

function changeActiveSortIndex(value: number) {
  console.log(value)
}
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
          <insane-sort-list
              v-model="activeSortIndex"
              :data="sortList"
              @changeActiveSortIndex="changeActiveSortIndex"
          />

          <div class="card-list">
            <insane-card v-for="(item, index) in allListNeed"
                         :key="index"
                         :data="item"
                         :is-loading="isLoading"
                         class="card-list-item"
            />
          </div>
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