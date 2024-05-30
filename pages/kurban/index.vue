<script setup lang="ts">
import {useKurbanStore} from "~/store/kurban";

const store = useKurbanStore();

const kurbanPageMeta = store.pageMeta;

useSeoMeta({
  title: () => kurbanPageMeta?.title,
  description: () => kurbanPageMeta?.description,
});

function createKurbanRequest(value: {}) {
  console.log(value)
}
</script>

<template>
  <main class="main kurban">

    <section class="hero section">
      <img class="hero__image" src="/img/kurban/kurban-text.svg" alt="قربان">

      <h1 class="title title-h1 hero__title">Курбан-байрам или <br> Ид аль-адха</h1>

      <p class="hero__description">
        Исламский праздник окончания хаджа, отмечаемый через 70 дней <br> после праздника Ураза-байрам, в 10-й день
        месяца
        Зуль-хиджа
      </p>

      <button class="button button__send about__button">
        Оставить заявку

        <svgo-icon-arrow-circle width="44" height="44"/>
      </button>
    </section>

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


        <button class="button button__send about__button">
          Пожертвовать

          <svgo-icon-arrow-circle width="44" height="44"/>
        </button>
      </div>
    </section>

    <section class="donation section">
      <h2 class="title title-h2 donation__title">Сделать пожертвование</h2>

      <kurban-form
          @create-kurban-request="createKurbanRequest"
      />
    </section>

  </main>
</template>

<style scoped lang="scss">
.kurban {
  max-width: 1350px;
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
}


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

  &__button {
    display: flex;
    align-items: center;
    border-radius: 56px;
    padding: 13px 13px 13px 30px;
    background-color: transparent;
    gap: 23px;

    line-height: 130%;
    letter-spacing: -0.01em;
    color: #3784d2;

    border: 1px solid #3784d2;

    margin-top: 40px;

    svg {
      transition: transform .2s ease-in-out;
    }

    &:hover {
      svg {
        transform: rotate(-45deg);
      }

      @media (max-width: 768px) {
        transform: rotate(0);
      }
    }

    &:active {
      color: var(--light-100);
      background: var(--primary);
      box-shadow: 0 0 0 3px color-mix(in srgb, var(--primary) 70%, transparent);
    }

    @media (max-width: 390px) {
      margin-top: 20px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (max-width: 390px) {
    margin-bottom: 80px;
  }
}

.donation {
  margin-bottom: 125px;

  &__title {
    margin-bottom: 60px;
    text-align: center;
  }
}


.button__send {
  @media (max-width: 768px) {
    width: 100%;
    gap: 0;
    justify-content: space-between;
  }
}
</style>