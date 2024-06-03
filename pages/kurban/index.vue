<script setup lang="ts">
import {useKurbanStore} from "~/store/kurban";
import PaymentForm from "~/components/kurban/PaymentForm.vue";
import type {Ref, UnwrapRef} from "vue";
import SeparateAnimalData from "~/components/kurban/SeparateAnimalData.vue";
import PaymentFormModal from "~/components/kurban/PaymentFormModal.vue";
import { useMessage, useModal } from 'naive-ui';
import { usePaymentStore } from '~/store/payment';

const {t} = useI18n()
const message = useMessage()

const modal = useModal()

const store = useKurbanStore();

const paymentStore = usePaymentStore()

const kurbanPageMeta = store.pageMeta;

const paymentFormMobileVisible: Ref<UnwrapRef<boolean>> = ref(false);

const payIsDisabled = ref(true)

const formRef: Ref<null | HTMLFormElement> = ref(null)

let formData: Ref<UnwrapRef<KurbanUserDataType>> = ref({
  name: '',
  phone: '',
  animals: 1,
  kurbans: []
});

function addNewPosition(position: SeparateAnimalDataType) {
  formRef.value?.checkValidity()
  const isValid = formRef.value?.reportValidity()

  if (isValid) {
    formRef.value?.querySelector('.button-pay')!.classList.add('button-pay--disabled');
    payIsDisabled.value = false
    formData.value.kurbans.push(position);
  }
}

async function createKurbanRequest() {
  formRef.value?.checkValidity()
  const isValid = formRef.value?.reportValidity()

  if (isValid) {
    const body = formData.value

    body.phone = body.phone.replaceAll(/\D/g, "")
    body['device_id'] = body.phone

    const { data, errors, pending } = await store.createKurbanRequest(body)

    if (!data.value?.status) {
      message.error(t("form.error"));
    } else {
      const { order_id } = data

      let totalPrice = 0;

      formData.value.kurbans.forEach((position) => {
        position.kurban_place === 'fitr_mekka' ? totalPrice += 10000 : totalPrice += 12000;
      })

      const response = await paymentStore.sendPaymentForm({
        'device': body.phone,
        'helpId': 10,
        'helpClass': 'Program',
        'donat': totalPrice,
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
        message.error(t("form.error"));
      }
    }
  } else {
    message.success(t('form.invalid'))
  }
}

function changePaymentFormMobileVisible() {
  paymentFormMobileVisible.value = !paymentFormMobileVisible.value;

  paymentFormMobileVisible.value ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset'
}

useSeoMeta({
  title: () => kurbanPageMeta?.title,
  description: () => kurbanPageMeta?.description,
});
</script>

<template>
  <Transition>
    <PaymentFormModal
        v-if="paymentFormMobileVisible"
        :form-data="formData"
        @changePaymentFormMobileVisible="changePaymentFormMobileVisible"
    />
  </Transition>

  <main class="main kurban">

    <section class="hero section">
      <img class="hero__image" src="/img/kurban/kurban-text.svg" alt="قربان">

      <h1 class="title title-h1 hero__title">Курбан-байрам или <br> Ид аль-адха</h1>

      <p class="hero__description">
        Исламский праздник окончания хаджа, отмечаемый через 70 дней <br> после праздника Ураза-байрам, в 10-й день
        месяца
        Зуль-хиджа
      </p>

      <NuxtLink to="#donation" class="button button__send about__button">
        Оставить заявку

        <svgo-icon-arrow-circle width="44" height="44"/>
      </NuxtLink>
    </section>

    <section class="about section">
      <div class="about__preview">
        <img src="/img/kurban/kurban-about.png" alt="Курбан-байрам">
      </div>

      <div class="about__content">
        <h2 class="title title-h2 about__title">О Курбане</h2>
        <p class="about__text">
          Курбан-байрам начинают праздновать через 70 дней после Ураза-байрама, на десятый день мусульманского месяца
          Зуль-хиджа. В отличие от многих других дат, Курбан-байрам отмечают несколько дней подряд. В исламских
          странах празднование может затянуться на две недели (Саудовская Аравия), где-то его отмечают пять дней, а
          где-то — три.
        </p>
        <p class="about__text">
          В 2024 году Ид аль-Адха начинается в ночь с 15 на 16 июня, и главные торжества намечены на 16 июня.
        </p>


        <NuxtLink to="#donation" class="button button__send about__button">
          Пожертвовать

          <svgo-icon-arrow-circle width="44" height="44"/>
        </NuxtLink>
      </div>
    </section>

    <section class="donation section">
      <h2 class="title title-h2 donation__title">Сделать пожертвование</h2>

      <form ref="formRef" method="post" action="#"  id="donation" class="donation-content" onsubmit="(e) => e.preventDefault()">
        <div class="donation-content__left">
          <div class="donation-content__item">
            <h3 class="title title-h3 donation-content__subtitle">Номер для связи</h3>

            <div class="donation-item__wrapper">
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
            </div>
          </div>


          <div v-for="(item, index) in formData.animals" class="donation-content__item">
            <SeparateAnimalData
                :key="index"
                :animal-index="item"
                @addNewPosition="addNewPosition"
            />
          </div>


          <button @click.prevent="formData.animals++"
                  class="button button-add-animal font-sofia-pro"
                  type="button"
          >
            Добавить животное
          </button>
        </div>


        <button @click.prevent="changePaymentFormMobileVisible"
                class="button button-next-step font-sofia-pro"
                type="button"
        >
          Продолжить
        </button>

        <div class="donation-content__right">
          <PaymentForm :form-data="formData"
                       @createKurbanRequest="createKurbanRequest"
                       :disabled="payIsDisabled"
          />
        </div>

      </form>
    </section>
  </main>
</template>

<style scoped lang="scss">
.kurban {
  max-width: 1350px;
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
}

.hero {
  position: relative;

  padding: 118px 40px;
  border-radius: 38px;
  box-shadow: 0 0 48px 0 rgba(49, 79, 124, 0.12);
  background: center / cover no-repeat url("/img/kurban/kurban-preview.png");

  margin-bottom: 100px;

  &__title {
    font-weight: 700;
    font-size: 62px;
    line-height: 110%;
    letter-spacing: -0.01em;
    margin-bottom: 50px;

    @media (max-width: 390px) {
      margin-bottom: 20px;
    }
  }

  &__description {
    font-weight: 500;
    font-size: 21px;
    line-height: 130%;
    letter-spacing: -0.01em;
    margin-bottom: 45px;

    @media (max-width: 390px) {
      font-size: 16px;
      margin-bottom: 40px;

      br {
        display: none;
      }
    }
  }

  &__image {
    position: absolute;
    top: 25%;
    right: 80px;

    max-width: 415px;
    width: 100%;
    height: 198px;

    @media (max-width: 1204px) {
      display: none;
    }
  }

  @media (max-width: 390px) {
    padding: 80px 16px;
    margin-bottom: 80px;
  }
}

.about {
  display: flex;
  gap: 20px;
  align-items: stretch;
  margin-bottom: 100px;

  &__preview {
    max-width: 650px;
    width: 100%;
    box-shadow: 0 0 46px 0 rgba(49, 79, 124, 0.12);
    border-radius: 30px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;

      object-fit: cover;
      object-position: center;
    }

    @media (max-width: 768px) {
      max-width: 100%;
    }
  }

  &__content {
    border-radius: 36px;
    padding: 60px 40px 80px;
    box-shadow: 0 0 46px 0 rgba(49, 79, 124, 0.12);
    background: #fff;

    max-width: 650px;
    width: 100%;

    @media (max-width: 768px) {
      max-width: 100%;
    }

    @media (max-width: 390px) {
      padding: 40px 16px;
    }
  }

  &__title {
    margin-bottom: 20px;
  }

  &__text {
    font-weight: 300;
    font-size: 18px;
    line-height: 150%;
    margin-bottom: 20px;

    @media (max-width: 1000px) {
      font-size: 16px;
    }

    @media (max-width: 390px) {
      font-size: 14px;
    }
  }

  &__button {
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

  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (max-width: 390px) {
    margin-bottom: 80px;
  }
}

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


.list-enter-active,
.list-leave-active {
  transition: all .3s ease-in-out;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
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
</style>