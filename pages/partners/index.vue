<script setup lang="ts">
const partners = [
  {
    preview: '/img/partners/partners-logo-1.svg',
    title: 'Министерство здравоохранения РД',
  },
  {
    preview: '/img/partners/partners-logo-1.svg',
    title: 'Исламский Портал',
  },
  {
    preview: '/img/partners/partners-logo-1.svg',
    title: 'Вещательная Компания',
  },
  {
    preview: '/img/partners/partners-logo-1.svg',
    title: 'Радио Ватан',
  },
  {
    preview: '/img/partners/partners-logo-1.svg',
    title: 'Исламский Портал',
  },
  {
    preview: '/img/partners/partners-logo-1.svg',
    title: 'Министерство здравоохранения РД',
  },
  {
    preview: '/img/partners/partners-logo-1.svg',
    title: 'Радио Ватан',
  },
  {
    preview: '/img/partners/partners-logo-1.svg',
    title: 'Исламский Портал',
  }
]

definePageMeta({
  title: 'Партнеры',
  breadcrumb: {
    ariaLabel: 'Партнеры'
  }
})
</script>

<template>
  <NuxtLayout>
    <section class="partners section">
      <div class="container">
        <div class="partners__heading">
          <h1 class="title-h1">Партнеры</h1>
        </div>
        <div class="partners__content">
          <ul class="partners__list">
            <li v-for="(partner, index) in partners" :key="index" class="partners-card partners__item">
              <div class="partners-card__preview">
                <img :src="partner?.preview" :alt="partner?.title">
              </div>

              <div class="partners-card__title">
                <p>
                  {{ partner?.title }}
                </p>
              </div>
            </li>
          </ul>
          <InsanePagination :page-count="10"/>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>

<style scoped lang="scss">
.partners {
  margin-bottom: 100px;

  .container {
    display: block;
  }

  &__heading {
    margin-bottom: 60px;

    @media (max-width: 430px) {
      margin-bottom: 40px;
    }
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 24px;

    margin-bottom: 116px;

    @media (max-width: 1000px) {
      grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 430px) {
      grid-template-columns: repeat(1, 1fr);
      gap: 20px;
      width: 100%;
    }

  }
}

.partners-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  box-shadow: 0 0 46px 0 rgba(49, 79, 124, 0.12);
  background: #fff;
  border-radius: 20px;
  padding: 75px 19px;

  @media (max-width: 1000px) {
    padding: 75px 12px;
  }

  @media (max-width: 430px) {
    width: 100%;
  }

  &__preview {
    max-width: 170px;
    width: 100%;

    img {
      width: 100%;
      height: 100%;
    }
  }

  &__title {
    text-align: center;
    font-weight: 500;
    font-size: 18px;
    line-height: 150%;
  }
}
</style>