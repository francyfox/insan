<script setup lang="ts">
import InsaneDonationsForm from "~/components/insane-donations-form/InsaneDonationsForm.vue";

const paymentOptions = [
  {
    label: 'Банковская карта',
    value: 'bankCard',
    icon: '/img/payment-options-images/icon-bank-card.svg',
  },
  {
    label: 'SberPay',
    value: 'sberPay',
    icon: '/img/payment-options-images/icon-sber-pay.svg',
  },
  {
    label: 'Яндекс Деньги',
    value: 'yandexMoney',
    icon: '/img/payment-options-images/icon-yandex-money.svg',
  },
  {
    label: 'Web Money',
    value: 'webMoney',
    icon: '/img/payment-options-images/icon-web-money.svg',
  },
  {
    label: 'Мобильный телефон',
    value: 'mobilePhone',
    icon: '/img/payment-options-images/icon-mobile-pay.svg',
  }
]

const paymentOption = ref('');

onMounted(() => {
  if (!paymentOption.value) {
    paymentOption.value = paymentOptions[0]?.value
  }
})

definePageMeta({
  title: 'Хочу помочь',
  breadcrumb: {
    ariaLabel: 'Хочу помочь'
  }
})
</script>

<template>
  <div>
    <section class="section help">
      <div class="container">
        <div class="help__heading">
          <h1 class="title-h1">Хочу помочь</h1>
        </div>

        <div class="help__content">
          <div class="help-tabs help-tabs--desktop">
            <button
                v-for="(item, index) in paymentOptions"
                :key="index"
                @click="paymentOption = item?.value"
                class="button button--method"
                :class="{'button--active-tab': paymentOption === item?.value}"
            >

              <img :src="`${item?.icon}`" :alt="item?.label">
              {{ item?.label }}

            </button>

          </div>

          <InsaneSelect class="help-tabs help-tabs--mobile" :list="paymentOptions"/>

          <InsaneDonationsForm/>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.help {
  margin-bottom: 100px;

  .container {
    display: block;
  }

  &__heading {
    margin-bottom: 60px;
  }
}

.help-tabs {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;

  margin-bottom: 20px;

  &--desktop {
    @media (max-width: 948px) {
      display: none;
    }
  }

  &--mobile {
    display: none;

    @media (max-width: 948px) {
      display: block;
    }
  }
}

.icon {
  width: 100%;

  &--bank-card {
    width: 37px;
  }

  &--sber-pay {
    width: 28px;
  }

  &--yandex-money {
    width: 33px;
  }

  &--web-money {
    width: 30px;
  }

  &--mobile-pay {
    width: 21px;
  }
}

.button {
  &--method {
    display: flex;
    align-items: center;
    gap: 10px;

    border-radius: 60px;
    padding: 16px 20px;
    background: rgba(255, 255, 255, 0.5);

    font-weight: 400;
    font-size: 14px;
  }

  &--active-tab {
    background: #FFFFFF;
    box-shadow: 0 0 46px 0 rgba(49, 79, 124, 0.12);
  }
}
</style>