<script setup lang="ts">

const formData = ref({
  name: '',
  phone: '',
  animals: 1
});

const emit = defineEmits(['createKurbanRequest']);

function createKurbanRequest() {
  emit('createKurbanRequest', formData.value)
}
</script>

<template>
  <div class="kurban-form">
    <div class="kurban-form__content">
      <div class="kurban-form__item kurban-form__item--info">
        <h3 class="title title-h3 kurban-form__item__title">Номер для связи</h3>

        <div class="form-actions">
          <div class="form-actions__item form-actions__item--name">
            <input v-model="formData.name" id="userName" type="text" class="input kurban-form__input">
            <label for="userName" class="form-actions__item__label">ФИО</label>
          </div>

          <div class="form-actions__item form-actions__item--phone">
            <input v-model="formData.phone" id="userPhone" type="text" class="input kurban-form__input">
            <label for="userPhone" class="form-actions__item__label">Номер телефона</label>
          </div>
        </div>
      </div>

      <div class="kurban-form__item kurban-form__item--info">
        <h3 class="title title-h3 kurban-form__item__title">Сколько жертвенных животных закалывать?</h3>

        <kurban-select v-if="false"/>
      </div>

      <div class="kurban-form__item kurban-form__item--info">
        <h3 class="title title-h3 kurban-form__item__title">{{ formData?.animals }} животное</h3>
      </div>
    </div>

    <aside class="kurban-form__aside">
      <h5 class="title title-h5 kurban-form__aside__title">Выберите способ оплаты</h5>
    </aside>
  </div>
</template>

<style scoped lang="scss">
.kurban-form {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  display: flex;
  align-items: flex-start;
  gap: 30px;

  &__content {
    display: flex;
    flex-direction: column;
    gap: 20px;

    flex: 62%;
  }

  &__aside {
    position: sticky;
    top: 0;
    right: 0;

    flex: 36%;

    border-radius: 20px;
    padding: 40px 30px;
    box-shadow: 0 0 48px 0 rgba(49, 79, 124, 0.12);
    background: #fff;

    &__title {
      margin-bottom: 20px;
    }
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

    &:focus-visible + .form-actions__item__label {
      top: 5px;
      font-size: 14px;
    }
  }
}


.kurban-form__item {
  border-radius: 20px;
  padding: 40px 30px;
  box-shadow: 0 0 48px 0 rgba(49, 79, 124, 0.12);
  background: #fff;

  &__title {
    margin-bottom: 30px;
  }
}

.form-actions {
  display: flex;
  align-items: center;
  gap: 10px;

  &__item {
    position: relative;
    z-index: 4;
    width: 100%;

    &__label {
      font-weight: 400;
      font-size: 20px;
      color: #9f9f9f;

      font-family: 'Sofia Pro', sans-serif;
      position: absolute;
      top: 20px;
      left: 12px;
      z-index: 5;
      cursor: text;

      transition: all .3s ease-in-out;
    }
  }
}

</style>