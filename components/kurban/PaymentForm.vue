<script setup lang="ts">
import { useSettingsStore } from '~/store/settings';

interface Props {
  formData: KurbanUserDataType
  disabled: boolean
}

const props = defineProps<Props>();

const store = useSettingsStore()
const { settings } = storeToRefs(store)

const emits = defineEmits(['createKurbanRequest']);

function createKurbanRequest() {
  emits('createKurbanRequest');
}

const priceKurban = computed(() => {
  return {
    meka: Number(settings.value?.kurban_price_setting[1]?.price) ?? 0,
    mahachkala: Number(settings.value?.kurban_price_setting[0]?.price) ?? 0
  }
})

function setTotalPrice() {
  let totalPrice = 0;

  props.formData.kurbans.forEach((position) => {
    position.kurban_place === 'fitr_mekka' ? totalPrice += priceKurban.value.meka : totalPrice += priceKurban.value.mahachkala;
  })

  return String(totalPrice).replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
}

const setCityPrice = computed(() => {
  let result = {};

  props.formData.kurbans.forEach((item) => {
    //@ts-ignore
    if (!result[item.cuttingSite]) {
      //@ts-ignore
      result[item.cuttingSite] = item.kurban_place === 'fitr_mekka' ? priceKurban.value.meka : priceKurban.value.mahachkala
    } else {
      //@ts-ignore
      result[item.cuttingSite] += item.kurban_place === 'fitr_mekka' ? priceKurban.value.meka : priceKurban.value.mahachkala
    }
  })

  return result;
})

</script>

<template>
  <aside class="payment-form">
    <h5 class="title title-h5 payment-form__title">Выберите способ оплаты</h5>

    <div class="payment-form__methods">
      <svgo-icon-card width="26"
                      height="26"
                      class="payment-method__icon"
      />
      <span>Банковская карта</span>
    </div>

    <div v-for="(item, value, index) in setCityPrice" :key="index"
         class="payment-form__row payment-form__row--grey">
      <p>{{ value === 'fitr_mekka' ? 'В Мекке' : 'В Махачкале' }}</p>
      <p>{{ item }}</p>
    </div>

    <div class="payment-form__row">
      <p>Итого</p>
      <p>{{ setTotalPrice() }} ₽</p>
    </div>

    <button @click.prevent="createKurbanRequest"
            class="button button-pay"
            :disabled="disabled"
    >
      Оплатить {{ setTotalPrice() }} ₽
    </button>
  </aside>
</template>

<style scoped lang="scss">
.payment-form {
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

  &:active:not(:disabled) {
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--primary) 70%, transparent);
  }

  &:disabled {
    opacity: 0.5;
  }
}
</style>