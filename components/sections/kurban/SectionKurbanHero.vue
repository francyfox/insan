<script setup lang="ts">

</script>

<template>
  <section class="hero section">
    <img class="hero__image" src="/img/kurban/kurban-text.svg" alt="قربان">

    <h1 class="title title-h1 hero__title">Курбан-байрам или <br> Ид аль-адха</h1>

    <p class="hero__description">
      Исламский праздник окончания хаджа, отмечаемый через 70 дней <br> после праздника Ураза-байрам, в 10-й день
      месяца
      Зуль-хиджа
    </p>

    <NuxtLink to="#donation" class="button button__send primary__button">
      Оставить заявку

      <svgo-icon-arrow-circle width="44" height="44"/>
    </NuxtLink>
  </section>
</template>

<style scoped lang="scss">
.hero {
  position: relative;

  padding: 118px 40px;
  border-radius: 38px;
  box-shadow: 0 0 48px 0 rgba(49, 79, 124, 0.12);
  background: center / cover no-repeat url("/img/kurban/kurban-preview.png");

  margin-bottom: 100px;

  &__title {
    font-weight: 700;
    font-size: 62px;
    line-height: 110%;
    letter-spacing: -0.01em;
    margin-bottom: 50px;

    @media (max-width: 390px) {
      margin-bottom: 20px;
    }
  }

  &__description {
    font-weight: 500;
    font-size: 21px;
    line-height: 130%;
    letter-spacing: -0.01em;
    margin-bottom: 45px;

    @media (max-width: 390px) {
      font-size: 16px;
      margin-bottom: 40px;

      br {
        display: none;
      }
    }
  }

  &__image {
    position: absolute;
    top: 25%;
    right: 80px;

    max-width: 415px;
    width: 100%;
    height: 198px;

    @media (max-width: 1204px) {
      display: none;
    }
  }

  @media (max-width: 390px) {
    padding: 80px 16px;
    margin-bottom: 80px;
  }
}
</style>