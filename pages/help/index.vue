<script setup lang="ts">

import InsaneDonationsForm from "~/components/insane-donations-form/InsaneDonationsForm.vue";

definePageMeta({
  title: 'Хочу помочь',
  breadcrumb: {
    ariaLabel: 'Хочу помочь'
  }
})
</script>

<template>
  <NuxtLayout>
    <section class="section help">
      <div class="container">
        <div class="help__heading">
          <h1 class="title-h1">Хочу помочь</h1>
        </div>

        <div class="help__content">
          <div class="help-tabs">
            <button class="button button--method">
              <svgo-icon-bank-card class="icon--bank-card"/>
              Банковская карта
            </button>
            <button class="button button--method">
              <svgo-icon-sber-pay class="icon--sber-pay"/>
              SberPay
            </button>
            <button class="button button--method">
              <svgo-icon-yandex-money class="icon--yandex-money"/>
              Яндекс Деньги
            </button>
            <button class="button button--method">
              <svgo-icon-web-money class="icon--web-money"/>
              Web Money
            </button>
            <button class="button button--method">
              <svgo-icon-mobile-pay class="icon--mobile-pay"/>
              Мобильный телефон
            </button>
          </div>

          <InsaneDonationsForm/>
        </div>
      </div>
    </section>
  </NuxtLayout>
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
    box-shadow: 0 0 48px 0 rgba(49, 79, 124, 0.12);
    background: #fff;

    font-weight: 400;
    font-size: 14px;
  }
}
</style>