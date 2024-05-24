<script setup lang="ts">
import { type FormInst, type FormRules, NForm, NFormItem, NInput, NInputNumber, useMessage, useModal } from 'naive-ui';
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
  },
  deposit: {
    required: true,
    message: 'Пожалуйста заполните поле',
  },
  profit: {
    required: true,
    message: 'Пожалуйста заполните поле',
  },
  metals: {
    required: true,
    message: 'Пожалуйста заполните поле',
  },
}

const parseCurrency = (input: string) => {
  const nums = input.replace(/(,|\₽|\s)/g, '').trim()
  if (/^\d+(\.(\d+)?)?$/.test(nums)) return Number(nums)
  return nums === '' ? null : Number.NaN
}

const formatCurrency = (value: number | null) => {
  if (value === null) return ''
  return `${value.toLocaleString('en-US')} ₽`
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
          class="zakat-form"
          @submit="handleCalculate"
  >
    <n-form-item label="Наличные" path="cash">
      <n-input-number v-model:value="formValue.cash"
                      placeholder="0₽"
                      :input-props="{ inputmode: 'numeric' }"
                      :show-button="false"
                      :format="formatCurrency"
                      :parse="parseCurrency"
      />
    </n-form-item>

    <n-form-item label="Деньги в банке" path="deposit">
      <n-input-number v-model:value="formValue.deposit"
                      placeholder="0₽"
                      :input-props="{ inputmode: 'numeric' }"
                      :show-button="false"
                     :format="formatCurrency"
                     :parse="parseCurrency"
      />
    </n-form-item>

    <n-form-item label="Товары и доходы" path="profit">
      <n-input-number v-model:value="formValue.profit"
                      placeholder="0₽"
                      :input-props="{ inputmode: 'numeric' }"
                      :show-button="false"
                      :format="formatCurrency"
                      :parse="parseCurrency"
      />
    </n-form-item>

    <n-form-item label="Золото и серебро" path="profit">
      <n-input-number v-model:value="formValue.metals"
                      placeholder="0₽"
                      :input-props="{ inputmode: 'numeric' }"
                      :show-button="false"
                      :format="formatCurrency"
                      :parse="parseCurrency"
      />
    </n-form-item>

    <div class="row">
      <insane-button variant="primary" type="button">
        Помочь
      </insane-button>

      <insane-button variant="secondary-form" type="submit">
        Рассчитать
      </insane-button>
    </div>
  </n-form>
</template>

<style scoped lang="scss">
.zakat-form {

  .row {
    gap: 10px;

    .insane-button {
      width: 100%;
    }
  }

  :deep(.n-form-item .n-form-item-blank > div) {
    width: 100%;
  }
  :deep(.n-input .n-input-wrapper) {
    padding: 8.5px 10px;
  }

  :deep(.n-form-item .n-form-item-label) {
    color: #9ca3af;
  }
}
</style>