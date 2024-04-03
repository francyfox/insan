<script setup lang="ts">
import { h } from 'vue'
import { createNeedHelpPerson } from '~/server/app/module/faker/faker.help-list';

const data = createNeedHelpPerson()
const contentNode = h('aside', {}, data.description ) // escape html content

const isLoading = ref(false)
</script>

<template>
  <NuxtLayout>
    <template #header>
      Помощь
    </template>

    <section class="section section-help">
      <div class="container">
        <div class="section-help-container row">
          <insane-content class="help-content">
            <nuxt-img :src="data.preview"
                      class="help-content-image img-cover"
                      loading="lazy"
            />

            <h2 class="title-h2">
              {{ data.title }}
            </h2>

            <span class="sub-title">
              РАС
              <!--   TODO: Что здесь?    -->
            </span>

            <content-node />
          </insane-content>
          
          <div class="card col card-shadow-md">
            <div class="card-caption row">
              <nuxt-img src="/img/png/wallet.png"
                        width="72"
                        height="80"
                        class="card-caption-icon"
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

            <insane-slider :data="data"
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
  </NuxtLayout>
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
  }
}

.card {
  width: 100%;
  max-width: 453px;
  padding: 60px;
  background: var(--light-100);
  border-radius: var(--radius-lg);

  &-caption {
    margin-bottom: 60px;
    align-items: center;
    gap: 40px;

    &-title {
      font-weight: 300;
      font-size: var(--fz-xs);
    }

    &-subtitle {
      font-weight: 400;
      font-size: var(--fz-md);
    }
  }

  &-body {
    &-slider {
      margin-bottom: 20px;
    }
  }
}
</style>