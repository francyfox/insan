<script setup>
import { NForm, NFormItem, NInput, NInputNumber, useMessage } from 'naive-ui'
import InsaneSelect from "~/components/insane-select/InsaneSelect.vue";
import { useProgramsStore } from '~/store/programs'
import { usePaymentStore } from '~/store/payment'
import { formatCurrency, parseCurrency } from '~/server/app/util'
import { useListNeed } from '~/store/list-need'

const message = useMessage()
const paymentStore = usePaymentStore()
const { donateType } = storeToRefs(paymentStore)
const store = useProgramsStore()
const { programs, currentProgram } = storeToRefs(store)
const { getPrograms } = store

const storeListNeed = useListNeed()
const { activeListNeed, currentNeed } = storeToRefs(storeListNeed)

if (activeListNeed.value.length === 0) {
  await storeListNeed.getAllListNeed()
}

if (currentNeed.value === null) {
  currentNeed.value = activeListNeed.value[0].id
}

const {t} = useI18n()
const rate = ref(0);

const formRef = ref()
const formEmpty = {
  phone: null,
  amount: null,
}

const formValue = ref(formEmpty);
const rates = [
  {
    label: t('form.donate.rates.0'),
    value: 0
  },
  {
    label: t('form.donate.rates.1'),
    value: 86400
  },
  {
    label: t('form.donate.rates.2'),
    value: 2592000
  },
]
const rules = {
  phone: {
    required: true,
    pattern: "(\\+7\\s?[(]{0,1}[0-9]{3}[)]{0,1}\\s?\\d{3}[-]{0,1}\\d{2}[-]{0,1}\\d{2})",
    message: t('form.required'),
    trigger: ['input'],
  },
  amount: {
    required: true,
    message: t('form.required'),
  }
}
const donateSelect = [
  {
    title: t('form.donate.type.0'),
    value: 1
  },
  {
    title: t('form.donate.type.1'),
    value: 2
  },
  {
    title: t('form.donate.type.2'),
    value: 3
  }
]

const programData = async () => {
  const { data } = await getPrograms()

  if (!currentProgram.value) {
    currentProgram.value = data.value[0].id
  }

  return data.value
}

programs.value = await programData()

const programSelect = computed(() => programs.value.map((i) => {
  return {
    title: i?.title,
    value: i?.id
  }
}))

const needSelect = computed(() => activeListNeed.value.map((i) => {
  return {
    title: i?.title,
    value: i?.id
  }
}))

function setRate(val) {
  rate.value = val
}

const img = useImage()
const backgroundStyles = computed(() => {
  const imgUrl = img('/img/png/Wallet.png', { format: 'webp' })
  return { backgroundImage: `url('${imgUrl}')` }
})

const submitHandler = async (e) => {
  e.preventDefault()
  formRef.value?.validate(async (errors) => {
    if (!errors) {
      message.warning(t('form.sending'))
      const { data, error } = await paymentStore.sendPaymentForm({
        "device": formValue.value.phone,
        "helpId": currentProgram.value,
        "helpClass": "Program",
        "donat": formValue.value.amount,
        "expire": rates[rate.value],
        "publicId": "pk_b983cb8a0964bd445894362ad58b8",
        "phone": formValue.value.phone,
        "payment_type": "sberpay",
        "name": "",
        "os": "web",
      })

      window.open(data.value?.form_url, '_blank')

      if (error.value) {
        message.error(t('form.error'))
      } else {
        message.success(t('form.success'))

        formValue.value = {
          phone: null,
          amount: null,
        }
      }
    } else {
      message.error(t('form.invalid'))
    }
  })
}

</script>

<template>
  <n-form ref="formRef"
          :model="formValue"
          :rules="rules"
          class="donations-form"
          :style="backgroundStyles"
          @submit="submitHandler"
  >

    <div class="donations-form__main">
      <ul class="rate-list">
        <li v-for="(item, value, index) in rates" :key="index">
          <button class="rate-list__button"
                  type="button"
                  :class="{'rate-active': rate === value}"
                  @click="setRate(value)">
            {{ item.label }}
          </button>
        </li>
      </ul>

      <n-form-item :show-label="false" path="phone">
        <n-input v-model:value="formValue.phone"
                 :placeholder="$t('form.payment.phone.placeholder')"
                 v-maska
                 :input-props="{ type: 'tel', 'data-maska': '+7 (###) ###-##-##'}"
        />
      </n-form-item>

      <n-form-item :show-label="false" path="amount">
        <n-input-number v-model:value="formValue.amount"
                        :placeholder="$t('form.payment.donation.placeholder')"
                        :input-props="{ inputmode: 'numeric' }"
                        :show-button="false"
                        :format="formatCurrency"
                        :parse="parseCurrency"
        />
      </n-form-item>
    </div>

    <div class="donations-form__action">
      <div class="action-item">
        <span>{{ $t('form.payment.donationType.label')}}</span>
        <InsaneSelect v-model="donateType"
                      :list="donateSelect"
        />
      </div>

      <div class="action-item">
        <suspense>
          <keep-alive>
            <div class="action-item-container">
              <template v-if="donateType === 1">
                <span>{{ $t('form.payment.program.label')}}</span>
                <InsaneSelect v-model="currentProgram"
                              :list="programSelect"/>
              </template>
              <template v-if="donateType === 3">
                <span>{{ $t('form.payment.program.label')}}</span>
                <InsaneSelect v-model="currentNeed"
                              :list="needSelect"/>
              </template>
            </div>
          </keep-alive>
        </suspense>
      </div>


      <insane-button variant="primary"
                     class="donations-form__button"
                     type="submit"
      >
        {{ $t('help.card.secondaryButtonText')}}
      </insane-button>

    </div>


    <div class="donations-form__description">
      <span>{{ $t('form.payment.download')}}</span>
      <div class="donations-form__download">
        <svgo-icon-file-form style="max-width: 14px; height: 16px;"/>
        <a class="blank-download"
           target="_blank"
           href="https://fondinsan.ru/uploads/store/Configs/Config52/b23c3b.pdf" download>{{ $t('form.payment.blank')}}</a>
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
  background-repeat: no-repeat;
  background-position: right 60px top 60px;

  background-size: 140px;


  @media (max-width: 825px) {
    background: none;
    padding: 60px 20px;
  }

  :deep(.n-form-item .n-form-item-blank > div) {
    width: 100%;
    max-width: 382px;
  }
  :deep(.n-input .n-input-wrapper) {
    padding: 8.5px 10px;
  }

  :deep(.n-form-item .n-form-item-label) {
    color: #9ca3af;
  }

  &__action {
    display: grid;
    grid-template-columns: 1fr 1fr 216px;
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