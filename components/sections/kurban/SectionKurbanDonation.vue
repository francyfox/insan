<script setup lang="ts">
import PaymentForm from '~/components/kurban/PaymentForm.vue';
import SeparateAnimalData from '~/components/kurban/SeparateAnimalData.vue';
import type { Ref } from 'vue';
import { useKurbanStore } from '~/store/kurban';
import { useMessage } from 'naive-ui';
import { usePaymentStore } from '~/store/payment';
import InsaneAgreement from '~/components/insane-agreement/InsaneAgreement.vue';

const {t} = useI18n()
const store = useKurbanStore();
const {
  isDisabled,
  formData,
  paymentFormMobileVisible,
  order
} = storeToRefs(store)
const formRef: Ref<null | HTMLFormElement> = ref(null)
const message = useMessage()
const paymentStore = usePaymentStore()

function addAnimal() {
  isDisabled.value = true
  formData.value.animals++
}

function addNewPosition(position: SeparateAnimalDataType) {
  const invalidForms = document.querySelectorAll('.donation-content__left form:invalid')

  if (invalidForms.length === 0) {
    formData.value.kurbans.push(position);
    isDisabled.value = false
  }
}

async function createKurbanRequest() {
  const invalidForms = document.querySelectorAll('.donation-content__left form:invalid')

  if (invalidForms.length === 0) {
    const body = formData.value

    isDisabled.value = false

    body.phone = body.phone.replaceAll(/\D/g, "")
    body['device_id'] = body.phone

    const { data } = await store.createKurbanRequest(body)

    if (!data.value?.status) {
      message.error(t("form.error"));
    } else {
      console.log(data)
      const { order_id, totalSum } = data.value
      order.value = order_id

      const response = await paymentStore.sendPaymentForm({
        'device': body.phone,
        'helpId': 10,
        'helpClass': 'Program',
        'donat': totalSum,
        'expire': 0,
        "publicId": "pk_b983cb8a0964bd445894362ad58b8",
        'phone': body['device_id'],
        "payment_type": "sberpay",
        'name': body.name,
        "os": "web",
        'kurban_order_id': order_id
      })

      if (response.data.value?.form_url) {
        window.open(response.data.value?.form_url, '_blank')

        formData.value = {
          name: '',
          phone: '',
          animals: 1,
          kurbans: []
        }
      } else {
        message.error(t("form.error"))
      }
    }
  } else {
    message.error(t('form.invalid'))
  }
}
</script>

<template>
  <section class="donation section">
    <h2 class="title title-h2 donation__title">Заявка на курбан</h2>

    <div id="donation" class="donation-content">
      <div class="donation-content__left">
        <div class="donation-content__item">
          <h3 class="title title-h3 donation-content__subtitle">Номер для связи</h3>

          <form id="donationInfo" ref="formRef" method="post" action="#" class="donation-item__wrapper">
            <div class="donation-item">
              <input v-model="formData.name" id="userName" type="text" class="input donation-item__input" required>
              <label for="userName" class="donation-item__label">ФИО</label>
            </div>

            <div class="donation-item">
              <input v-model="formData.phone"
                     id="userPhone"
                     type="tel"
                     class="input donation-item__input"
                     required
                     v-maska
                     data-maska="+7 (###) ###-##-##"
              >
              <label for="userPhone" class="donation-item__label">Номер телефона</label>
            </div>
          </form>
        </div>


        <div v-for="(item, index) in formData.animals" class="donation-content__item">
          <SeparateAnimalData
              :key="index"
              :animal-index="item"
              @addNewPosition="addNewPosition"
          />
        </div>


        <button @click.prevent="addAnimal"
                class="button button-add-animal font-sofia-pro"
                type="button"
        >
          Добавить животное
        </button>

        <insane-agreement :name="formData.name" />
      </div>

      <button @click.prevent="paymentFormMobileVisible = true"
              class="button button-next-step font-sofia-pro"
              type="button"
      >
        Продолжить
      </button>

      <div class="donation-content__right">
        <PaymentForm :form-data="formData"
                     @createKurbanRequest="createKurbanRequest"
                     :disabled="isDisabled"
                     :order="order"
        />

        <insane-agreement :name="formData.name" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.donation {
  margin-bottom: 125px;

  &__title {
    margin-bottom: 60px;
    text-align: center;


    @media (max-width: 430px) {
      margin-bottom: 40px;
    }
  }
}

.donation-content {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  display: flex;
  align-items: flex-start;
  gap: 30px;

  position: relative;

  &__item {
    border-radius: 20px;
    padding: 40px 30px;
    box-shadow: 0 0 48px 0 rgba(49, 79, 124, 0.12);
    background: #fff;
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }

    &__title {
      margin-bottom: 30px;

      @media (max-width: 430px) {
        margin-bottom: 20px;
      }
    }

    @media (max-width: 430px) {
      padding: 30px 16px;
    }
  }

  &__left {
    flex: 62%;

    .custom-checkbox {
      display: none;

      @media (max-width: 768px) {
        display: flex;
      }
    }

    @media (max-width: 768px) {
      flex: unset;
      width: 100%;
    }
  }

  &__right {
    position: sticky;
    top: 20px;
    right: 0;

    flex: 36%;

    @media (max-width: 768px) {
      flex: unset;
      width: 100%;
      display: none;
    }
  }

  &__subtitle {
    margin-bottom: 30px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (max-width: 390px) {
    gap: 40px;
  }
}

.donation-item {
  position: relative;
  z-index: 4;
  width: 100%;

  &__wrapper {
    display: flex;
    align-items: center;
    gap: 10px;

    @media (max-width: 390px) {
      flex-direction: column;
    }
  }

  &__input {
    width: 100%;
    font-size: 20px;
    padding: 20px 12px;
    border-radius: 8px;
    background: #f7f8fa;
    transition: box-shadow .2s ease-in-out;

    &:focus-visible {
      outline: none;
      box-shadow: 0 0 0 3px color-mix(in srgb, var(--primary) 70%, transparent);
    }

    &:focus-visible + .donation-item__label,
    &:valid + .donation-item__label {
      top: 3px;
      font-size: 14px;
    }

    &:focus:invalid {
      box-shadow: 0 0 0 3px color-mix(in srgb, #f00 70%, transparent);
    }

    @media (max-width: 440px) {
      padding: 16px 12px 13px;
    }
  }

  &__label {
    font-weight: 400;
    font-size: 20px;
    color: #9f9f9f;

    font-family: 'Sofia Pro', sans-serif;
    position: absolute;
    top: 20px;
    left: 12px;
    z-index: 5;
    cursor: text;

    transition: all .3s ease-in-out;

    @media (max-width: 440px) {
      font-size: 16px;
    }
  }
}
</style>