<script setup lang="ts">
import { type FormInst, type FormRules, NForm, NFormItem, NInputNumber, useMessage, useModal } from 'naive-ui';
import { h } from 'vue';
import { formatPrice } from '~/server/app/util';

const props = defineProps<{
  data: {
    nisab: number
    tax: number
  }
}>()
const message = useMessage()
const modal = useModal()
const formRef = ref<FormInst | null>(null)
const formEmpty = {
  cash: null,
  deposit: null,
  profit: null,
  metals: null
}
const formValue = ref(formEmpty)

const rules: FormRules = {
  cash: {
    required: true,
    message: 'Пожалуйста заполните поле',
    pattern: '\d*',
    trigger: ['input'],
  },
  deposit: {
    required: true,
    message: 'Пожалуйста заполните поле',
    pattern: '\d*',
    trigger: ['input'],
  },
  profit: {
    required: true,
    message: 'Пожалуйста заполните поле',
    pattern: '\d*',
    trigger: ['input'],
  },
  metals: {
    required: true,
    message: 'Пожалуйста заполните поле',
    pattern: '\d*',
    trigger: ['input'],
  },
}

const noZakyatTemplate = () => '<div class="pay-form__note"><span>Ваш закят</span> (0.025 x Облагаемую закятом сумму)</div><strong class="title-h6">Ваш достаток меньше минимального нисаба, закят выплачивать не нужно.</strong>'
const hasZakyatTemplate = (count: number) => '<div class="pay-form__note"><span>Ваш закят</span> (0.025 x Облагаемую закятом сумму)</div><strong class="title-h4">' + formatPrice(count) + '</strong>'
function handleCalculate(e: Event) {
  e.preventDefault()

  const { cash, deposit, profit, metals } = formValue.value

  if (!cash ||!deposit ||!profit ||!metals) {
    message.error('Пожалуйста заполните все поля')
    return
  }

  const sum = cash + deposit + profit + metals
  const count = sum * props.data.tax

  if (sum < props.data.nisab) {
    modal.create({
      title: 'Закят',
      content: () => h('div', { innerHTML: noZakyatTemplate() }),
      preset: 'dialog',
      class: 'insane-modal',
    })
  } else {
    modal.create({
      title: 'Закят',
      content: () => h('div', { innerHTML: hasZakyatTemplate(count) }),
      preset: 'dialog',
      class: 'insane-modal',
    })
  }
}
</script>

<template>
  <n-form ref="formRef"
          :model="formValue"
          :rules="rules"
          class="feedback-form"
          @submit="handleCalculate"
  >
    <n-form-item :show-label="false" path="cash">
      <n-input-number v-model:value="formValue.cash"
                      placeholder="Наличные"
                      :input-props="{ inputmode: 'numeric' }"
                      :show-button="false"
      />
    </n-form-item>

    <n-form-item :show-label="false" path="deposit">
      <n-input-number v-model:value="formValue.deposit"
                      placeholder="Деньги в банке"
                      :input-props="{ inputmode: 'numeric' }"
                      :show-button="false"
      />
    </n-form-item>

    <n-form-item :show-label="false" path="profit">
      <n-input-number v-model:value="formValue.profit"
                      placeholder="Товары и доходы"
                      :input-props="{ inputmode: 'numeric' }"
                      :show-button="false"
      />
    </n-form-item>

    <n-form-item :show-label="false" path="profit">
      <n-input-number v-model:value="formValue.metals"
                      placeholder="Золото и серебро"
                      :input-props="{ inputmode: 'numeric' }"
                      :show-button="false"
      />
    </n-form-item>

    <div class="row">
      <insane-button variant="primary">
        Помочь
      </insane-button>

      <insane-button variant="hero" type="submit">
        Рассчитать
      </insane-button>
    </div>
  </n-form>
</template>

<style scoped lang="scss">

</style>