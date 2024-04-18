<script setup lang="ts">
//TODO Доделать после завершения дизайна
</script>

<template>
  <n-form class="donations-form">
    <div class="donations-form__main">

    </div>

    <div class="donations-form__action">
      <insane-button variant="primary" type="submit" @click="">Помочь</insane-button>
    </div>
  </n-form>
</template>

<style scoped lang="scss">
.donations-form {
  border-radius: 36px;
  padding: 60px;
  box-shadow: 0 0 48px 0 rgba(49, 79, 124, 0.12);

  display: block;

  background-image: url("/img/png/wallet.png");
  background-repeat: no-repeat;
  background-position: right 60px top 60px;

  background-size: 140px;

  &__action {
    display: flex;
    gap: 30px;
  }
}
</style>