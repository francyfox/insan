<script setup>
import {NFormItem, NInput} from "naive-ui";
import InsaneSelect from "~/components/insane-select/InsaneSelect.vue";

const rate = ref('oneTime');

const formEmpty = {
  phone: '',
  amount: ''
}

const formValue = ref(formEmpty);

const rates = {
  oneTime: 'единовременно',
  daily: 'ежедневно',
  monthly: 'ежемесячно'
}

const rules = {
  phone: {
    required: true,
    pattern: "(\\+7\\s?[(]{0,1}[0-9]{3}[)]{0,1}\\s?\\d{3}[-]{0,1}\\d{2}[-]{0,1}\\d{2})",
    message: 'Пожалуйста заполните поле',
    trigger: ['input'],
  },
}

const selectList = ref([
  {
    label: 'Закят',
    value: 'zakat'
  },
  {
    label: 'Новый дом',
    value: 'newHome'
  },
  {
    label: 'Помоги больным',
    value: 'helpSick'
  },
  {
    label: 'Я опекун',
    value: 'guardian'
  },
  {
    label: 'Шатер Рамадана',
    value: 'ramadanTent'
  },
  {
    label: 'Закят',
    value: 'zakat'
  },
  {
    label: 'Новый дом',
    value: 'newHome'
  },
  {
    label: 'Помоги больным',
    value: 'helpSick'
  },
  {
    label: 'Я опекун',
    value: 'guardian'
  },
  {
    label: 'Шатер Рамадана',
    value: 'ramadanTent'
  },
  {
    label: 'Закят',
    value: 'zakat'
  },
  {
    label: 'Новый дом',
    value: 'newHome'
  },
  {
    label: 'Помоги больным',
    value: 'helpSick'
  },
  {
    label: 'Я опекун',
    value: 'guardian'
  },
  {
    label: 'Шатер Рамадана',
    value: 'ramadanTent'
  },
  {
    label: 'Закят',
    value: 'zakat'
  },
  {
    label: 'Новый дом',
    value: 'newHome'
  },
  {
    label: 'Помоги больным',
    value: 'helpSick'
  },
  {
    label: 'Я опекун',
    value: 'guardian'
  },
  {
    label: 'Шатер Рамадана',
    value: 'ramadanTent'
  },

])

function setRate(val) {
  rate.value = val
}

</script>

<template>
  <n-form class="donations-form">

    <div class="donations-form__main">
      <ul class="rate-list">
        <li v-for="(item, value, index) in rates" :key="index">
          <button class="rate-list__button" :class="{'rate-active': rate === value}" @click="setRate(value)">{{
              item
            }}
          </button>
        </li>
      </ul>

      <n-form-item :show-label="false" path="phone">
        <n-input class="input" v-model:value="formValue.phone"
                 placeholder="Номер телефона"
                 v-maska
                 :input-props="{ type: 'tel', 'data-maska': '+7 (###) ###-##-##'}"
        />
      </n-form-item>

      <n-form-item :show-label="false">
        <n-input v-model:value="formValue.amount"
                 class="input"
                 placeholder="Сумма пожертвования"
        />
      </n-form-item>
    </div>

    <div class="donations-form__action">
      <div class="action-item">
        <span>Тип пожертвования</span>
        <InsaneSelect :list="selectList"/>
      </div>

      <div class="action-item">
        <span>Выберите программу</span>
        <InsaneSelect :list="selectList"/>
      </div>


      <insane-button variant="primary" class="donations-form__button" type="submit" @click="">Помочь</insane-button>

    </div>


    <div class="donations-form__description">
      <span>{{ $t('form.payment.download')}}</span>
      <div class="donations-form__download">
        <svgo-icon-file-form style="max-width: 14px; height: 16px;"/>
        <a class="blank-download" href="#">{{ $t('form.payment.blank')}}</a>
      </div>
      <span>{{ $t('form.payment.caption')}}</span>
    </div>
  </n-form>
</template>

<style scoped lang="scss">
.donations-form {
  max-width: 936px;
  width: 100%;

  border-radius: 36px;
  padding: 60px;
  box-shadow: 0 0 48px 0 rgba(49, 79, 124, 0.12);

  display: block;

  background-image: url("/img/png/wallet.png");
  background-repeat: no-repeat;
  background-position: right 60px top 60px;

  background-size: 140px;


  @media (max-width: 825px) {
    background: none;
    padding: 60px 20px;
  }

  &__action {
    display: flex;
    align-items: flex-end;
    gap: 30px;

    @media (max-width: 430px) {
      gap: 15px;
    }

    @media (max-width: 825px) {
      flex-direction: column;

      margin-bottom: 30px;
    }
  }

  .input {
    max-width: 382px;
    width: 100%;

    @media (max-width: 825px) {
      max-width: unset;
    }
  }

  &__button {
    height: fit-content;
    width: 100%;
  }

  &__description {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 30px;
    line-height: 1.2;

    @media (max-width: 430px) {
      justify-content: center;
      text-align: center;
    }

    span {
      font-weight: 500;
      font-size: 14px;
      line-height: 105%;
      color: rgba(151, 152, 157, 0.57);

      &:last-child {
        font-style: italic;
      }
    }
  }

  &__download {
    display: flex;
    gap: 4px;
    align-items: center;

    svg {
      top: -2px;
      position: relative;
    }
  }
}

.rate-list {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 40px;
  gap: 20px;

  &__button {
    background: transparent;

    font-weight: 500;
    font-size: 18px;
    line-height: 105%;
    letter-spacing: -0.01em;
    text-transform: uppercase;
    color: #1a1a1a;

    position: relative;


    @media (max-width: 600px) {
      font-size: 14px;
    }

    &::before {
      position: absolute;
      left: 0;
      bottom: -4px;
      content: "";
      width: 100%;
      height: 1px;
      background: #c4c4c7;
      transition: background 0.2s ease-in-out;
    }
  }
}

.rate-active {
  &:before {
    background: linear-gradient(90deg, rgba(80, 179, 177, 1) 0%, rgba(0, 212, 255, 1) 100%);
  }
}

.blank-download {
  top: -1px;
  font-weight: 700;
  font-size: 12px;
  position: relative;

  &:before {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    content: "";
    background: #3883b9;
  }
}

.action-item {

  @media (max-width: 825px) {
    width: 100%;
  }

  span {
    display: inline-block;
    font-weight: 500;
    font-size: 14px;
    line-height: 105%;
    letter-spacing: -0.01em;
    color: rgba(151, 152, 157, 0.57);

    margin-bottom: 12px;
  }
}
</style>