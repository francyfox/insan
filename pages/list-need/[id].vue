<script setup lang="ts">
import SectionCommon from '~/components/sections/common/SectionCommon.vue';
import { useMessage } from 'naive-ui';
import { useListNeed } from '~/store/list-need';
import type { Ref } from 'vue';

const route = useRoute()
const id = parseInt(route.params.id)

const store = useListNeed()
const { getPersonById } = store

const message = useMessage()
const isLoading = ref(true)
const responseData: Ref<any> = ref(null)

const getData = async () => {
  const { data, error, pending } = await getPersonById(id)

  if (error.value) {
    message.error('Не удалось получить')
  }

  isLoading.value = pending.value
  return data.value
}

responseData.value = await getData()

useSeoMeta({
  title: responseData.value?.title
})
</script>

<template>
  <div>
    <section-common>
      <template #header>
        {{ responseData?.title }}
      </template>
    </section-common>

    <section class="section section-help">
      <div class="container">
        <div class="section-help-container row">
          <insane-content class="help-content">
            <nuxt-img :src="responseData?.preview"
                      class="help-content-image img-cover"
                      loading="lazy"
                      format="webp"
            />

            <h2 class="title-h2">
              {{ responseData?.title }}
            </h2>

            <span class="sub-title">
              {{ responseData?.name }}
            </span>

            <aside v-html="responseData?.description"></aside>
          </insane-content>
          
          <div class="card col card-shadow-md">
            <div class="card-caption row">
              <nuxt-img src="/img/png/wallet.png"
                        width="72"
                        height="80"
                        class="card-caption-icon"
                        alt="wallet"
                        format="webp"
              />

              <div class=" col">
                <span class="card-caption-title">
                  Программа фонда:
                </span>
                <span class="card-caption-subtitle">
                  Перечислить средства
                </span>
              </div>
            </div>

            <insane-slider :data="responseData"
                           class="card-body-slider"
                           :is-loading="isLoading"
            />

            <insane-button variant="primary"
                           class="card-body-button"
                           :class="{ disabled: isLoading }"
            >
              Помочь
            </insane-button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.help-content {
  &-image {
    margin-bottom: 20px;
    width: 100%;
    height: 354px;
    border-radius: var(--radius-lg);
  }

  .title-h2 {
    margin-bottom: 10px;
    line-height: 1;
  }

  .sub-title {
    display: flex;
    margin-bottom: 40px;
    color: var(--light-400);
    font-size: var(--fz-lg);
  }
}

.section-help {
  &-container {
    padding-bottom: 100px;
    align-items: flex-start;
    gap: 30px;

    @media (max-width: 768px) {
      flex-wrap: wrap;
    }

    .content {
      @media (max-width: 1320px) {
        padding: 60px 40px;
      }

      @media (max-width: 768px) {
        margin-bottom: 0;
      }

      &-body img {
        @media (max-width: 1320px) {
          display: none;
        }
      }
    }
  }
}

.card {
  width: 100%;
  max-width: 453px;
  padding: 60px;
  background: var(--light-100);
  border-radius: var(--radius-lg);

  @media (max-width: 1320px) {
    padding: 40px;
    max-width: 309px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }

  &-caption {
    margin-bottom: 60px;
    align-items: center;
    gap: 12px;

    &-title {
      font-weight: 300;
      font-size: var(--fz-xs);
    }

    &-icon {
      @media (max-width: 1320px) {
        width: 43px;
        height: 48px;
      }
    }

    &-subtitle {
      font-weight: 400;
      font-size: var(--fz-md);

      @media (max-width: 1320px) {
        font-size: var(--fz-smx);
      }
    }
  }

  &-body {
    &-slider {
      margin-bottom: 20px;
    }
  }
}
</style>