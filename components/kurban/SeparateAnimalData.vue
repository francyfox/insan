<script setup lang="ts">
import type { FormInst } from 'naive-ui';

interface Props {
  animalIndex: number
}

const formRef = ref<FormInst | null>(null)

const props = defineProps<Props>();

const info = ref({
  number: 1,
  name: '',
  kurban_place: 'fitr_dag',
  part: 'none',
  address_data: {
    value: '',
    floor: null,
    flat: null,
    entrance: null,
    comment: '',
  }
});

const disabled = ref(false)
const emits = defineEmits(['addNewPosition']);

function addNewPosition(event: Event) {
  const mainForm = document.getElementById('donationInfo') as HTMLFormElement
  formRef.value?.reportValidity()
  mainForm?.reportValidity()

  const isValid = formRef.value?.checkValidity() && mainForm?.checkValidity()

  if (isValid) {
    disabled.value = true;
    event.target!.classList.add('button-pay--disabled');
    emits('addNewPosition', info.value);
  }
}

</script>

<template>
  <form ref="formRef">
    <div class="info">
      <h3 class="title title-h3 info__title">{{ animalIndex }} животное</h3>
      <div class="info__item">
        <div class="info__heading">
          <h5 class="title title-h5">За кого закалывать?</h5>
          <span>Для жертвоприношения обязательно имя и отчество!</span>
        </div>

        <div class="info__action donation-item">
          <input
              v-model="info.name"
              :id="`itemForm-${animalIndex}`"
              type="text"
              class="input donation-item__input"
              :disabled="disabled"
              required>
          <label
              :for="`itemForm-${animalIndex}`"
              class="donation-item__label">
            Имя и отчество
          </label>
        </div>
      </div>
    </div>

    <div class="info__item info__item--cutting">
      <h5 class="title title-h5 info__subtitle">Где резать?</h5>

      <div class="info__action">
        <div class="info__action__radio-buttons">
          <button
              @click.prevent="info.kurban_place = 'fitr_mekka'"
              :class="{'button-radio--active': info.kurban_place === 'fitr_mekka'}"
              class="button button-radio"
              type="button"
              :disabled="disabled"
          >
            В Мекке
          </button>

          <button
              @click.prevent="info.kurban_place = 'fitr_dag'"
              :class="{'button-radio--active': info.kurban_place === 'fitr_dag'}"
              class="button button-radio"
              type="button"
              :disabled="disabled"
          >
            В Махачкале
          </button>
        </div>
      </div>
    </div>

    <div class="info__item info__item--part-body">
      <h5 class="title title-h5 info__subtitle">Какую часть заберёте себе?</h5>


      <div class="info__action__radio-buttons">
        <button
            @click.prevent="info.part = 'none'"
            :class="{'button-radio--active': info.part === 'none'}"
            class="button button-radio"
            type="button"
            :disabled="disabled"
        >
          Не забираю
        </button>

        <button
            @click.prevent="info.part = 'half'"
            :class="{'button-radio--active': info.part === 'half'}"
            class="button button-radio"
            type="button"
            :disabled="disabled"
        >
          Половина туши
        </button>

        <button
            @click.prevent="info.part = 'leg'"
            :class="{'button-radio--active': info.part === 'leg'}"
            class="button button-radio"
            type="button"
            :disabled="disabled"
        >
          Задняя нога
        </button>
      </div>
    </div>

    <div v-if="info.kurban_place === 'fitr_dag' && info.part !== 'none'"  class="data__item address">
      <div class="data__heading address__heading">
        <h5 class="title title-h5 address__title">Введите адрес доставки</h5>
        <span>Доставка осуществляется только по г. Махачкала</span>
      </div>


      <div class="address__actions">
        <div class="donation-item">
          <input
              v-model="info.address_data.value"
              :id="`address-${animalIndex}`"
              type="text"
              class="input donation-item__input"
              required
              :disabled="disabled"
          >
          <label :for="`address-${animalIndex}`" class="donation-item__label">Адрес</label>
        </div>


        <div class="donation-item__wrapper">
          <div class="donation-item">
            <input
                v-model="info.address_data.floor"
                :id="`floor-${animalIndex}`"
                type="number"
                class="input donation-item__input"
                required
                :disabled="disabled"
            >
            <label :for="`floor-${animalIndex}`" class="donation-item__label">Этаж</label>
          </div>
          <div class="donation-item">
            <input
                v-model="info.address_data.entrance"
                :id="`underpass-${animalIndex}`"
                type="number"
                class="input donation-item__input"
                required
                :disabled="disabled"
            >
            <label :for="`underpass-${animalIndex}`" class="donation-item__label">Подьезд</label>
          </div>
        </div>

        <div class="donation-item">
          <input
              v-model="info.address_data.comment"
              :id="`message-${animalIndex}`"
              type="text"
              class="input donation-item__input"
              required
              :disabled="disabled"
          >
          <label :for="`message-${animalIndex}`" class="donation-item__label">Прочее</label>
        </div>

      </div>
    </div>

    <button @click.prevent="addNewPosition($event)"
            class="button button-pay"
            type="submit"
            :disabled="disabled"
    >
      Сохранить
    </button>
  </form>
</template>

<style scoped lang="scss">
.info {
  display: flex;
  flex-direction: column;

  &__title {
    margin-bottom: 30px;
  }

  &__subtitle {
    margin-bottom: 30px;

    @media (max-width: 390px) {
      margin-bottom: 20px;
    }
  }

  &__item {
    margin-bottom: 30px;

    &__action {
      display: flex;
      align-items: center;
      gap: 10px;

      @media (max-width: 425px) {
        flex-wrap: wrap;
      }
    }
  }

  &__heading {
    margin-bottom: 10px;

    span {
      font-size: 14px;
      color: #f00;

      @media (max-width: 390px) {
        font-size: 12px;
      }
    }
  }

  &__action {
    &__radio-buttons {
      display: flex;
      align-items: center;
      gap: 20px;

      @media (max-width: 390px) {
        gap: 10px;
        flex-wrap: wrap;
      }
    }
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
    &:valid + .donation-item__label,
    &:disabled + .donation-item__label {
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
    cursor: pointer;
    font-weight: 400;
    font-size: 20px;
    color: #9f9f9f;

    font-family: 'Sofia Pro', sans-serif;
    position: absolute;
    top: 20px;
    left: 12px;
    z-index: 5;

    transition: all .3s ease-in-out;

    @media (max-width: 440px) {
      font-size: 16px;
    }
  }
}


.button-radio {
  border-radius: 8px;
  padding: 12px;
  background-color: #f0f2f6;
  transition: all .3s ease-in-out;
  border: 1px solid #f0f2f6;

  &--active {
    border: 1px solid #3784d2;
  }

  @media (max-width: 390px) {
    font-size: 14px;
  }
}

label {
  cursor: pointer;
}

input[type="radio"] {
  display: none;
}


input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

input[type='number'] {
  -moz-appearance: textfield;
}


.address {
  &__heading {
    margin-bottom: 20px;

    span {
      color: #9f9f9f;

      @media (max-width: 430px) {
        font-size: 12px;
      }
    }
  }

  &__actions {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}


.button-pay {
  border-radius: 13px;
  padding: 12px 19px;
  color: #FFFFFF;
  max-width: 300px;
  margin-right: auto;
  font-size: 18px;
  background: linear-gradient(90deg, #50b3b1 0%, #3681b9 100%);
  margin-top: 30px;

  transition: all .3s ease-in-out;

  &:active {
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--primary) 70%, transparent);
  }

  &--disabled {
    pointer-events: none;
    color: #b7b7b7;
    background: linear-gradient(90deg, #929d9c 0%, #88949f 100%);
  }
}
</style>