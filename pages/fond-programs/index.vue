<script setup lang="ts">
import { createProgramList } from '~/server/app/module/faker/faker.programs';
import SectionCommon from '~/components/sections/common/SectionCommon.vue';

definePageMeta({
  title: 'Программы фонда',
})

const route = useRoute()
const pageCount = ref(20)

const data = createProgramList(6)

</script>

<template>
  <div>
    <section-common>
      <template #header>
        Программы фонда
      </template>
    </section-common>

    <section class="section section-programs">
      <div class="container">
        <div class="program col">
          <div class="program-list">
            <lazy-insane-program v-for="(item, index) in data"
                                 :key="index"
                                 :data="item"
                                 class="program-list-item"
            />
          </div>

          <insane-pagination v-model="route.query.page"
                             :page-count="pageCount"
                             class="program-pagination"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
.program {
  &-list {
    margin-bottom: 50px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 12px;

    @media (max-width: 1280px) {
      grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 576px) {
      grid-template-columns: 1fr;
    }

    &-item {
      .insane-button {
        width: 60px;
        height: 40px;
      }
    }
  }
}

</style>