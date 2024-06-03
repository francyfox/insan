<script setup lang="ts">

interface Props {
  formData: KurbanUserDataType
}

const props = defineProps<Props>();

const emits = defineEmits(['createKurbanRequest', 'changePaymentFormMobileVisible']);

function createKurbanRequest() {
  emits('createKurbanRequest');
  emits('changePaymentFormMobileVisible');
}

function setTotalPrice() {
  let totalPrice = 0;

  props.formData.collection.forEach((position) => {
    position.cuttingSite === 'mecca' ? totalPrice += 10000 : totalPrice += 12000;
  })

  return String(totalPrice).replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
}

const setCityPrice = computed(() => {
  let result = {};

  props.formData.collection.forEach((item) => {
    //@ts-ignore
    if (!result[item.cuttingSite]) {
      //@ts-ignore
      result[item.cuttingSite] = item.cuttingSite === 'mecca' ? 10000 : 12000
    } else {
      //@ts-ignore
      result[item.cuttingSite] += item.cuttingSite === 'mecca' ? 10000 : 12000
    }
  })

  return result;
})

</script>

<template>
  <div class="modal" @click="emits('changePaymentFormMobileVisible')">
    <div class="payment-form" @click.stop>
      <h5 class="title title-h5 payment-form__title">Выберите способ оплаты</h5>

      <div class="payment-form__methods">
        <img class="payment-method__icon" src="/img/kurban/sberpay-icon.svg" alt="SberPay">
        <span>SberPay</span>
      </div>

      <div v-for="(item, value, index) in setCityPrice" :key="index" class="payment-form__row payment-form__row--grey">
        <p>{{ value === 'mecca' ? 'В Мекке' : 'В Махачкале' }}</p>
        <p>{{ item }}</p>
      </div>

      <div class="payment-form__row">
        <p>Итого</p>
        <p>{{ setTotalPrice() }} ₽</p>
      </div>

      <button @click="createKurbanRequest" class="button button-pay">Оплатить {{ setTotalPrice() }} ₽</button>
    </div>
  </div>

</template>

<style scoped lang="scss">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  width: 100%;
  height: 100vh;

  background-color: rgba(0, 0, 0, .9);

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
}

.payment-form {
  width: 100%;
  border-radius: 20px;
  padding: 40px 30px;
  box-shadow: 0 0 48px 0 rgba(49, 79, 124, 0.12);
  background: #fff;

  &__methods {
    display: flex;
    align-items: center;
    gap: 10px;

    width: 100%;

    border: 1px solid #3784d2;
    border-radius: 8px;
    padding: 12px;

    margin-bottom: 40px;
  }

  &__row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;

    p {
      font-weight: 700;
      font-size: 18px;
      color: #000;
    }

    &--grey {
      p {
        font-weight: 500;
        font-size: 16px;
        color: #9f9f9f;
      }
    }
  }

  &__title {
    margin-bottom: 20px;
  }

}

.button-pay {
  border-radius: 13px;
  padding: 12px 19px;
  color: #FFFFFF;
  width: 100%;
  font-size: 18px;
  background: linear-gradient(90deg, #50b3b1 0%, #3681b9 100%);
  margin-top: 20px;

  &:active {
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--primary) 70%, transparent);
  }
}
</style>