<script setup lang="ts">
import { createNeedHelpPerson } from '~/server/app/module/faker/faker.help-list';
import SectionCommon from '~/components/sections/common/SectionCommon.vue';

const data = createNeedHelpPerson()
const isLoading = ref(false)
</script>

<template>
  <div>
    <section-common>
      <template #header>
        Мечеть
      </template>
    </section-common>

    <section class="section section-help">
      <div class="container">
        <div class="section-help-container row">
          <insane-content class="help-content">
            <aside v-html="data.description"></aside>
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
                  Мечеть
                </span>
              </div>
            </div>

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
    align-items: flex-start;
    gap: 30px;

    @media (max-width: 768px) {
      flex-wrap: wrap;
    }

    .content {
      margin-bottom: 0;

      @media (max-width: 1320px) {
        padding: 60px 40px;
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
    gap: 54px;

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
      font-weight: 600;
      font-size: 40px;

      @media (max-width: 1320px) {
        font-size: var(--fz-xl);
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