<script setup lang="ts">
import { useMessage, useModal } from 'naive-ui';
import { useProgramsStore } from '~/store/programs';
import SectionCommon from '~/components/sections/common/SectionCommon.vue';
import { h, type Ref } from 'vue';
import { InsanePayment } from '#components';
import { usePaymentStore } from '~/store/payment';

const modal = useModal()
const route = useRoute()
const id = parseInt(route.params.id)
const message = useMessage()
const store = useProgramsStore()
const paymentStore = usePaymentStore()
const { donateType } = storeToRefs(paymentStore)
const { getProgramById } = store
const { currentProgram } = storeToRefs(store)

const data: Ref<any> = ref(null)
const isLoading = ref(false)

const getData = async () => {
  const { data, error, pending } = await getProgramById(id)

  if (error.value) {
    message.error('Не удалось получить программу')
  }

  isLoading.value = pending.value
  return data.value
}

data.value = await getData()

const {t} = useI18n()
function openPaymentForm(id: number) {
  currentProgram.value = id
  donateType.value = 1
  modal.create({
    title: t('payment.buttonText'),
    content: () => h(InsanePayment, {}, {}),
    preset: 'card',
    class: 'insane-modal',
  })
}

useSeoMeta({
  title: data.value?.title
})
</script>

<template>
  <div>
    <section-common>
      <template #header>
        {{ data?.title }}
      </template>
    </section-common>

    <section class="section section-help">

      <div class="container">
        <div class="section-help-container row">
          <insane-content class="help-content">
            <aside v-if="data?.description"
                   v-html="data?.description">
            </aside>

            <div v-else
                 class="title-h6"
            >
              Not filled
            </div>
          </insane-content>

          <div class="card col card-shadow-md">
            <div class="card-caption row">
              <nuxt-img src="/img/png/wallet.png"
                        width="72"
                        height="80"
                        class="card-caption-icon"
                        format="webp"
              />

              <div class=" col">
                <span class="card-caption-title">
                  {{ $t('payment.title')}}
                </span>
                <span class="card-caption-subtitle">
                    {{ data?.title }}
                </span>
              </div>
            </div>

            <insane-button variant="primary"
                           class="card-body-button"
                           :class="{ disabled: isLoading }"
                           @click.prevent="openPaymentForm(data?.id)"
            >
              {{ $t('help.card.secondaryButtonText')}}
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
      line-height: normal;

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