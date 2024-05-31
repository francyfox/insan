<script setup lang="ts">
import { InsanePayment } from '#components'
import { type FormInst, type FormRules, NForm, NFormItem, NInput, NInputNumber, useMessage, useModal } from 'naive-ui';
import { h } from 'vue';
import { formatCurrency, formatPrice, parseCurrency } from '~/server/app/util';

const props = defineProps<{
  data: {
    nisab: number
    tax: number
  }
}>()
const {t} = useI18n()
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
    message: t('form.required'),
  },
  deposit: {
    required: true,
    message: t('form.required'),
  },
  profit: {
    required: true,
    message: t('form.required'),
  },
  metals: {
    required: true,
    message: t('form.required'),
  },
}

const noZakyatTemplate = () => `<div class="pay-form__note title-h6"><span>${t('form.zakat.template.0')}</span> ${t('form.zakat.template.1')}</div><strong class="title-h6">${t('form.zakat.template.2')}</strong>`
const hasZakyatTemplate = (count: number) => `<div class="pay-form__note title-h6"><span>${t('form.zakat.template.0')}</span> ${t('form.zakat.template.1')}</div><strong class="title-h4">${formatPrice(count)}</strong>`
function handleCalculate(e: Event) {
  e.preventDefault()

  const { cash, deposit, profit, metals } = formValue.value

  if (!cash ||!deposit ||!profit ||!metals) {
    message.error(t('form.error'))
    return
  }

  const sum = cash + deposit + profit + metals
  const count = sum * props.data.tax

  if (sum < props.data.nisab) {
    modal.create({
      title: t('form.zakat.title'),
      content: () => h('div', { innerHTML: noZakyatTemplate() }),
      preset: 'dialog',
      class: 'insane-modal',
    })
  } else {
    modal.create({
      title: t('form.zakat.title'),
      content: () => h('div', { innerHTML: hasZakyatTemplate(count) }),
      preset: 'dialog',
      class: 'insane-modal',
    })
  }
}

function openPaymentForm() {
  modal.create({
    title: t('payment.buttonText'),
    content: () => h(InsanePayment, {}, {}),
    preset: 'card',
    class: 'insane-modal',
  })
}
</script>

<template>
  <n-form ref="formRef"
          :model="formValue"
          :rules="rules"
          class="zakat-form"
          @submit="handleCalculate"
  >
    <n-form-item :label="t('form.zakat.cash.label')" path="cash">
      <n-input-number v-model:value="formValue.cash"
                      placeholder="0₽"
                      :input-props="{ inputmode: 'numeric' }"
                      :show-button="false"
                      :format="formatCurrency"
                      :parse="parseCurrency"
      />
    </n-form-item>

    <n-form-item :label="t('form.zakat.bank.label')" path="deposit">
      <n-input-number v-model:value="formValue.deposit"
                      placeholder="0₽"
                      :input-props="{ inputmode: 'numeric' }"
                      :show-button="false"
                     :format="formatCurrency"
                     :parse="parseCurrency"
      />
    </n-form-item>

    <n-form-item :label="t('form.zakat.another.label')" path="profit">
      <n-input-number v-model:value="formValue.profit"
                      placeholder="0₽"
                      :input-props="{ inputmode: 'numeric' }"
                      :show-button="false"
                      :format="formatCurrency"
                      :parse="parseCurrency"
      />
    </n-form-item>

    <n-form-item :label="t('form.zakat.metal.label')" path="profit">
      <n-input-number v-model:value="formValue.metals"
                      placeholder="0₽"
                      :input-props="{ inputmode: 'numeric' }"
                      :show-button="false"
                      :format="formatCurrency"
                      :parse="parseCurrency"
      />
    </n-form-item>

    <div class="row">
      <insane-button variant="primary" type="button" @click.prevent="openPaymentForm">
        {{ $t('form.zakat.primaryButtonText')}}
      </insane-button>

      <insane-button variant="secondary-form" type="submit">
        {{ $t('form.zakat.secondaryButtonText')}}
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