<script setup lang="ts">
import InsaneDonationsForm from '~/components/insane-donations-form/InsaneDonationsForm.vue';
import {paymentOptions} from '~/components/insane-payment/insane-payment.data';

const paymentOption = ref({
  label: 'SberPay',
  value: 'sberPay',
  icon: '/img/payment-options-images/icon-sber-pay.svg',
});
</script>

<template>
  <div class="help__content">
    <div class="help-tabs help-tabs--desktop">
      <button
          v-for="(item, index) in paymentOptions"
          :key="index"
          class="button button--method"
          :class="{'button--active-tab': paymentOption.value === item?.value}"
      >

        <svgo-icon-card width="28" height="28" />
        <span>Банковская карта</span>

      </button>
    </div>

    <InsaneDonationsForm/>
  </div>
</template>

<style scoped lang="scss">
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