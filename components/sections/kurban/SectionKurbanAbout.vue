<script setup lang="ts">

</script>

<template>
  <section class="about section">
    <div class="about__preview">
      <img src="/img/kurban/kurban-about.png" alt="Курбан-байрам">
    </div>

    <div class="about__content">
      <h2 class="title title-h2 about__title">О Курбане</h2>
      <p class="about__text">
        Курбан-байрам начинают праздновать через 70 дней после Ураза-байрама, на десятый день мусульманского месяца
        Зуль-хиджа. В отличие от многих других дат, Курбан-байрам отмечают несколько дней подряд. В исламских
        странах празднование может затянуться на две недели (Саудовская Аравия), где-то его отмечают пять дней, а
        где-то — три.
      </p>
      <p class="about__text">
        В 2024 году Ид аль-Адха начинается в ночь с 15 на 16 июня, и главные торжества намечены на 16 июня.
      </p>


      <NuxtLink to="#donation" class="button button__send primary__button">
        Пожертвовать

        <svgo-icon-arrow-circle width="44" height="44"/>
      </NuxtLink>
    </div>
  </section>
</template>

<style scoped lang="scss">
.about {
  display: flex;
  gap: 20px;
  align-items: stretch;
  margin-bottom: 100px;

  &__preview {
    max-width: 650px;
    width: 100%;
    box-shadow: 0 0 46px 0 rgba(49, 79, 124, 0.12);
    border-radius: 30px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;

      object-fit: cover;
      object-position: center;
    }

    @media (max-width: 768px) {
      max-width: 100%;
    }
  }

  &__content {
    border-radius: 36px;
    padding: 60px 40px 80px;
    box-shadow: 0 0 46px 0 rgba(49, 79, 124, 0.12);
    background: #fff;

    max-width: 650px;
    width: 100%;

    @media (max-width: 768px) {
      max-width: 100%;
    }

    @media (max-width: 390px) {
      padding: 40px 16px;
    }
  }

  &__title {
    margin-bottom: 20px;
  }

  &__text {
    font-weight: 300;
    font-size: 18px;
    line-height: 150%;
    margin-bottom: 20px;

    @media (max-width: 1000px) {
      font-size: 16px;
    }

    @media (max-width: 390px) {
      font-size: 14px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (max-width: 390px) {
    margin-bottom: 80px;
  }
}
</style>