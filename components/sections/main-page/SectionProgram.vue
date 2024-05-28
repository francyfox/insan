<script setup lang="ts">
import { useMessage } from 'naive-ui';
import { useProgramsStore } from '~/store/programs';

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

</script>

<template>
<section class="section section-program">
  <div class="container">
    <div class="program-list col">
      <div class="main-page-header row">
        <div class="title-h1">
          Программы фонда
        </div>

        <nuxt-link to="/program"
                   class="link"
        >
          Все программы
        </nuxt-link>
      </div>

      <div class="program-list-body">
        <lazy-insane-program v-for="(item, index) in programs"
                        :key="index"
                        :data="item"
                        :is-loading="isLoading"
        />
      </div>
    </div>
  </div>
</section>
</template>

<style lang="scss">
.section-program {
  margin-bottom: 60px;
}

.program-list-body {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 12px;

  @media (max-width: 1280px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  .card {
    &:nth-child(n + 7) {
      display: none;
    }

    &:nth-child(n + 5) {
      @media (max-width: 1280px) {
        display: none;
      }
    }

    &:nth-child(n + 3) {
      @media (max-width: 768px) {
        display: none;
      }
    }

    &-title {
      @media (max-width: 1280px) {
        font-size: 28px;
      }
    }

    &-description {
      @media (max-width: 768px) {
        font-size: var(--fz-xs);
      }
    }

    .insane-button {
      width: 60px;
      height: 40px;
    }
  }
}
</style>