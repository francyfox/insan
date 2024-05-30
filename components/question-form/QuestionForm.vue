<script setup lang="ts">
import { type FormInst, type FormRules, useMessage, NForm, NFormItem, NInput } from 'naive-ui';
import { useQuestionsStore } from '~/store/questions';

const store = useQuestionsStore()
const { sendFormQuestions } = store
const {t} = useI18n()
const message = useMessage()
const formRef = ref<FormInst | null>(null)
const formValue = ref({
  'QuestionForm[name]': '',
  'QuestionForm[question]': ''
})

const rules: FormRules = {
  'QuestionForm[name]': {
    required: true,
    message: t('form.required'),
    trigger: 'blur'
  },
  'QuestionForm[question]': {
    required: true,
    message: t('form.required'),
    trigger: 'blur'
  }
}

function handleSubmit (e: Event) {
  e.preventDefault()
  formRef.value?.validate(async (errors) => {
    if (!errors) {
      message.warning(t('form.sending'))

      const { data, error } = await sendFormQuestions(formValue.value)

      if (error.value) {
        message.error(t('form.error'))
      }

      message.success(t('form.success'))
    } else {
      message.error(t('form.invalid'))
    }
  })

  formValue.value = {
    'QuestionForm[name]': '',
    'QuestionForm[question]': ''
  }
}
</script>

<template>
  <n-form ref="formRef"
          :model="formValue"
          :rules="rules"
          class="question-form"
          @submit="handleSubmit"
  >
    <n-form-item :show-label="false" path="QuestionForm[name]">
      <n-input v-model:value="formValue['QuestionForm[name]']"
               :placeholder="t('form.feedback.fullname.placeholder')"
      />
    </n-form-item>
    <n-form-item :show-label="false" path="QuestionForm[question]">
      <n-input v-model:value="formValue['QuestionForm[question]']"
               type="textarea"
               :placeholder="t('form.feedback.question.placeholder')"
      />
    </n-form-item>

    <insane-button variant="primary"
                   type="submit"
    >
      {{ $t('form.submit') }}
    </insane-button>
  </n-form>
</template>

<style lang="scss">
.question-form {
  .n-input .n-input-wrapper {
    padding: 8.5px 10px;
  }

  .insane-button {
    width: 100%;
  }
}
</style>