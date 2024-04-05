<script setup lang="ts">
import { type FormInst, type FormRules, NForm, NFormItem, NInput, NUpload, useMessage } from 'naive-ui';

const message = useMessage()
const formRef = ref<FormInst | null>(null)
const formEmpty = {
  name: '',
  phone: '',
  email: '',
  body: '',
  file: '',
}
const formValue = ref(formEmpty)
const rules: FormRules = {
  name: {
    required: true,
    message: 'Пожалуйста заполните поле',
    trigger: 'blur'
  },
  phone: {
    required: true,
    pattern: "(\\+7\\s?[(]{0,1}[0-9]{3}[)]{0,1}\\s?\\d{3}[-]{0,1}\\d{2}[-]{0,1}\\d{2})",
    message: 'Пожалуйста заполните поле',
    trigger: ['input'],
  },
  email: {
    required: true,
    pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$',
    message: 'Пожалуйста заполните поле',
    trigger: ['input']
  },
  body: {
    required: true,
    message: 'Пожалуйста заполните поле',
    trigger: ['input']
  },
}

function handleSubmit(e: Event) {
  e.preventDefault()
  formRef.value?.validate((errors) => {
    if (!errors) {
      message.warning('Форма заполнена верно. Отправляем данные...')
    } else {
      console.log(errors)
      message.error('Форма заполнена не верно')
    }
  })
}
</script>

<template>
  <n-form ref="formRef"
          :model="formValue"
          :rules="rules"
          class="feedback-form"
          @submit="handleSubmit"
  >
    <n-form-item :show-label="false" path="name">
      <n-input v-model:value="formValue.name"
               placeholder="Фамилия Имя Отчество"
      />
    </n-form-item>

    <n-form-item :show-label="false" path="phone">
      <n-input v-model:value="formValue.phone"
               placeholder="Номер телефона"
               v-maska
               :input-props="{ type: 'tel', 'data-maska': '+7 (###) ###-##-##'}"
      />

    </n-form-item>

    <n-form-item :show-label="false" path="email">
      <n-input v-model:value="formValue.email"
               placeholder="Электронная почта"
               :input-props="{ type: 'email' }"
      />
    </n-form-item>

    <n-form-item :show-label="false" path="body">
      <n-input v-model:value="formValue.body"
               placeholder="Почему вам нужна помощь"
               minlength="10"
               type="textarea"
      />
    </n-form-item>

    <div class="row">
      <n-upload
          accept="image/png, image/jpeg"
      >
        <insane-button variant="gray">
          Выбрать фото
        </insane-button>
      </n-upload>


      <insane-button variant="primary"
                     type="submit"
                     @click=""
      >
        Отправить заявку
      </insane-button>
    </div>
  </n-form>
</template>

<style lang="scss">
.feedback-form {
  .insane-button {
    flex-shrink: 0;
  }

  .n-input .n-input-wrapper {
    padding: 8.5px 10px;
  }
}
</style>