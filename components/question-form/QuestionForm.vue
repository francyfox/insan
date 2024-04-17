<script setup lang="ts">
import { type FormInst, type FormRules, useMessage, NForm, NFormItem, NInput } from 'naive-ui';

const message = useMessage()
const formRef = ref<FormInst | null>(null)
const formEmpty = {
  'QuestionForm[name]': '',
  'QuestionForm[question]': ''
}
const formValue = ref(formEmpty)

const rules: FormRules = {
  'QuestionForm[name]': {
    required: true,
    message: 'Пожалуйста заполните поле',
    trigger: 'blur'
  },
  'QuestionForm[question]': {
    required: true,
    message: 'Пожалуйста заполните поле',
    trigger: 'blur'
  }
}

function handleSubmit (e: Event) {
  e.preventDefault()
  formRef.value?.validate((errors) => {
    if (!errors) {
      message.warning('Форма  заполнена верно. Отправляем данные...')

      // const { data, error } = useApi('/question/default/send', {
      //   method: 'POST',
      //   body: formValue.value
      // })


      message.success('Форма отправлена')
    } else {
      message.error('Форма заполнена не верно')
    }
  })
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
               placeholder="Фамилия Имя Отчество"
      />
    </n-form-item>
    <n-form-item :show-label="false" path="QuestionForm[question]">
      <n-input v-model:value="formValue['QuestionForm[question]']"
               type="textarea"
               minlength="10"
               placeholder="Сообщение"
      />
    </n-form-item>

    <insane-button variant="primary"
                   type="submit"
    >
      Отправить
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