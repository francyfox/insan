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
            <span>Прочитать подробней</span>

            <svgo-icon-arrow-circle width="44"
                                    height="44"
            />
          </insane-button>
        </div>
        <div class="hero-list-item">
          <nuxt-img width="391"
                    src="/img/png/hero.png"
                    alt="руководитель"
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
    padding: 70px 106px 40px;
    background: url("/img/svg/hero-bg.svg") no-repeat left bottom, #F7F9FA;
    min-height: 466px;
    border-radius: var(--radius-md);
  }
}

.hero-list {
  &-item {
    max-width: 560px;
    gap: 49px;

    &-title {
      font-size: 40px;
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