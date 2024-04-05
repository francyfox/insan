<script setup lang="ts">
import { type FormInst, NForm, NFormItem, NInput, NUpload } from 'naive-ui';

const formRef = ref<FormInst | null>(null)
const formEmpty = {
  name: '',
  phone: '',
  email: '',
  body: '',
  file: '',
}
const formValue = ref(formEmpty)
</script>

<template>
  <n-form ref="formRef"
          :model="formValue"
  >
    <n-form-item :show-label="false">
      <n-input v-model:value="formValue.name"
               placeholder="Фамилия Имя Отчество"
      />
    </n-form-item>

    <n-form-item :show-label="false">
      <n-input v-model:value="formValue.phone"
               placeholder="Номер телефона"
               :input-props="{ type: 'tel' }"
      />
    </n-form-item>

    <n-form-item :show-label="false">
      <n-input v-model:value="formValue.email"
               placeholder="Электронная почта"
               :input-props="{ type: 'email' }"
      />
    </n-form-item>

    <n-form-item :show-label="false">
      <n-input v-model:value="formValue.body"
               placeholder="Почему вам нужна помощь"
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
      >
        Отправить заявку
      </insane-button>
    </div>
  </n-form>
</template>

<style scoped lang="scss">
.insane-button {
  flex-shrink: 0;
}
</style>