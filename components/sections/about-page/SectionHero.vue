<script setup lang="ts">

</script>

<template>
  <section class="section section-hero">
    <div class="container">
      <div class="hero-list row">
        <div class="hero-list-item col">
          <div class="hero-list-item-title title-h2">
            Руководитель фонда
            Магомедов Магомедрасул
          </div>

          <div class="hero-list-item-description">
            С 2012 года БФ «Инсан» делает обычных людей участниками благотворительных проектов. Наша главная цель — объединить тех, кто хочет помогать.
          </div>
          
          <insane-button variant="outline"
          >
            <span>{{ $t('about.banner.buttonText')}}</span>

            <svgo-icon-arrow-circle width="44"
                                    height="44"
            />
          </insane-button>
        </div>
        <div class="hero-list-item">
          <nuxt-img width="391"
                    src="/img/png/hero.png"
                    alt="руководитель"
                    format="webp"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.section-hero {
  margin-bottom: 100px;

  .container {
    padding: 0 106px 0;
    background: url("/img/svg/hero-bg.svg") no-repeat left bottom, #F7F9FA;
    min-height: 466px;
    border-radius: var(--radius-md);

    @media (max-width: 1320px) {
      padding: 0 29px;
    }
  }
}

.hero-list {
  &-item {
    padding: 70px 0 40px;
    max-width: 560px;
    gap: 49px;

    &:last-child {
      padding: 0;
      display: flex;
      align-items: flex-end;

      @media (max-width: 980px) {
        display: none;
      }
    }

    &-title {
      font-size: 40px;
      font-weight: 500;

      @media (max-width: 1280px) {
        font-size: 32px;
      }
    }

    &-description {
      font-size: var(--fz-sm);
      font-weight: 500;
    }

    .insane-button {
      max-width: 260px;
      margin-top: auto;

      span {
        top: 2px;
        position: relative;
      }

      svg {
        width: 44px;
        height: 44px;
        transform: rotate(-45deg);
      }
    }
  }
}
</style>