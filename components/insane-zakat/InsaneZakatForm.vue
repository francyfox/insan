<script setup lang="ts">

</script>

<template>
  <n-form class="zakat-from">
    <div class="zakat-from__heading">
      <h3>Рассчитать закят</h3>
      <p>Нисаб: <span>453</span></p>
    </div>


    <div class="zakat-from__action">
      <insane-button variant="primary" type="submit" @click="" style="width: 100%">
        Помочь
      </insane-button>

      <insane-button variant="primary" type="submit" @click="" style="width: 100%">
        Рассчитать
      </insane-button>
    </div>
  </n-form>
</template>

<style scoped lang="scss">
.zakat-from {
  max-width: 462px;
  width: 100%;
  height: 100%;

  border-radius: 36px;
  padding: 60px 40px;
  box-shadow: 0 0 48px 0 rgba(49, 79, 124, 0.12);
  background: #fff;

  @media (max-width: 1200px) {
    padding: 60px 20px;
    max-width: unset;
  }

  &__heading {
    margin-bottom: 40px;

    h3 {
      font-weight: 500;
      font-size: 28px;
      line-height: 105%;
      letter-spacing: -0.01em;
      margin-bottom: 20px;

      @media (max-width: 100px) {
        font-size: 24px;
      }
    }

    p {
      font-weight: 500;
      font-size: 18px;

      span {
        font-weight: 300;
      }
    }
  }

  &__action {
    display: flex;
    gap: 10px;
  }
}
</style>