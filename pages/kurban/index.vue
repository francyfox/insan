<script setup lang="ts">
import {useKurbanStore} from "~/store/kurban";
import PaymentForm from "~/components/kurban/PaymentForm.vue";
import { useMessage, NModal } from 'naive-ui';
import { usePaymentStore } from '~/store/payment';
import SectionKurbanHero from '~/components/sections/kurban/SectionKurbanHero.vue';
import SectionKurbanAbout from '~/components/sections/kurban/SectionKurbanAbout.vue';
import SectionKurbanDonation from '~/components/sections/kurban/SectionKurbanDonation.vue';

const {t} = useI18n()
const message = useMessage()
const store = useKurbanStore();
const {
  isDisabled,
  formData,
  paymentFormMobileVisible,
  order
} = storeToRefs(store)
const paymentStore = usePaymentStore()
const kurbanPageMeta = store.pageMeta;

// TODO: Убрать дубликат в будущем
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

useSeoMeta({
  title: () => kurbanPageMeta?.title,
  description: () => kurbanPageMeta?.description,
});
</script>

<template>
  <n-modal v-model:show="paymentFormMobileVisible">
    <payment-form :form-data="formData"
                 @createKurbanRequest="createKurbanRequest"
                 :disabled="isDisabled"
                 :order="order"
    />
  </n-modal>

  <main class="main kurban">
    <section-kurban-hero />
    <section-kurban-about />
    <section-kurban-donation />
  </main>
</template>

<style lang="scss">


.kurban {
  max-width: 1350px;
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;

  .button__send {
    max-width: 244px;
    width: 100%;
    width: fit-content;

    @media (max-width: 768px) {
      max-width: 100%;
      width: 100%;
      gap: 0;
      justify-content: space-between;
    }
  }
  .button-add-animal {
    width: 100%;
    border-radius: 13px;
    padding: 12px 19px;
    background: #f0f2f6;
    font-size: 18px;
    color: #3681b8;
  }
  .button-next-step {
    display: none;

    border-radius: 13px;
    padding: 12px 19px;
    color: #FFFFFF;
    width: 100%;
    font-size: 18px;
    background: linear-gradient(90deg, #50b3b1 0%, #3681b9 100%);

    &:active {
      box-shadow: 0 0 0 3px color-mix(in srgb, var(--primary) 70%, transparent);
    }

    @media (max-width: 768px) {
      display: block;
    }
  }
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
}

.primary__button {
  display: flex;
  align-items: center;
  border-radius: 56px;
  padding: 13px 13px 13px 30px;
  background-color: transparent;
  gap: 23px;

  line-height: 130%;
  letter-spacing: -0.01em;
  color: #3784d2;

  border: 1px solid #3784d2;

  margin-top: 40px;

  svg {
    transition: transform .2s ease-in-out;
  }

  &:hover {
    svg {
      transform: rotate(-45deg);
    }

    @media (max-width: 768px) {
      transform: rotate(0);
    }
  }

  &:active {
    color: var(--light-100);
    background: var(--primary);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--primary) 70%, transparent);
  }

  @media (max-width: 390px) {
    margin-top: 20px;
  }
}



.list-enter-active,
.list-leave-active {
  transition: all .3s ease-in-out;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
}


</style>