<script setup lang="ts">
import { formatCount } from '~/server/app/util';
import { useCommonStore } from '~/store/common';

const storeCommon = useCommonStore()
const { common } = storeToRefs(storeCommon)

const data = computed(() => {
  return (common.value) ? common.value['main-page-infographics'] : []
})
</script>

<template>
  <section class="section section-advantages">
    <div class="container">
      <div class="advantage-list row">
        <div v-for="(item, index) in data"
             :key="index"
             class="advantage-list-item row card-shadow-md"
        >
          <nuxt-img :src="item?.icon"
                    :alt="item?.title"
                    width="71"
                    height="70"
                    fit="contain"
          />

          <div class="col">
            <div class="advantage-list-item-title">
              {{ typeof item?.value === 'number' ? formatCount(item?.value) : item?.value }}
            </div>
            <div class="advantage-list-item-description">
              {{ item?.title }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.section-advantages {
  margin-bottom: 100px;
}

.advantage-list {
  gap: 4px;

  @media (max-width: 980px) {
    gap: 20px;
    flex-direction: column;
  }

  &-item {
    padding: 15px 24px;
    gap: 18px;
    background: var(--light-100);
    border-radius: var(--radius-xl);

    @media (max-width: 980px) {
      gap: 40px;
    }

    img {
      flex-shrink: 0;
      min-width: 71px;
      object-fit: contain;
    }

    &-title {
      font-size: 33px;
      font-weight: 600;
      color: var(--dark-700);
    }

    &-description {
      font-size: var(-fz-sm);
      color: var(--light-400);
      font-weight: 500;
    }

    .col {
      justify-content: center;
    }
  }
}
</style>