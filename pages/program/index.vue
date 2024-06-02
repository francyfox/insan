<script setup lang="ts">
import { useMessage } from 'naive-ui';
import { useProgramsStore } from '~/store/programs';
import SectionCommon from '~/components/sections/common/SectionCommon.vue';

const store = useProgramsStore()
const { programs } = storeToRefs(store)
const { getPrograms } = store
const isLoading = ref(true)
const message = useMessage()

programs.value = Array.from({ length: 6 }, () => null)

const getData = async () => {
  const { data, error, pending } = await getPrograms()

  if (error.value) {
    message.error('Не удалось получить список программ')
  }

  isLoading.value = pending.value
  return data.value
}

if (programs.value[0] === null) {
  programs.value = await getData()
}

definePageMeta({
  title: 'pages.title.program',
})


</script>

<template>
  <div>
    <section-common>
      <template #header>
        {{ $t('pages.title.program') }}
      </template>
    </section-common>

    <section class="section section-programs">
      <div class="container">
        <div class="program col">
          <div class="program-list">
            <lazy-insane-program v-for="(item, index) in programs"
                                 :key="index"
                                 :data="item"
                                 class="program-list-item"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.program-list {
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

</style>