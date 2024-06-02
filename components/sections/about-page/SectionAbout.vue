<script setup lang="ts">
interface Props {
  aboutData: {
    title: string
    desc: string
    img: string
    collections: Array<{ label: string, value: string }>
  }
}

defineProps<Props>();
</script>

<template>
  <section class="section section-about">
    <div class="container">
      <div class="about-list">
        <Suspense>
          <div class="about-list-item col card-shadow-md">
            <h1 class="about-list-item-title title-h1" v-html="aboutData?.title"></h1>

            <main class="about-list-item-description" v-html="aboutData?.desc"></main>

            <insane-counters :counter-data="aboutData?.collections"/>
          </div>
        </Suspense>

        <div class="about-list-item">
          <nuxt-img width="630"
                    height="640"
                    class="img-cover"
                    :src="aboutData?.img"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.section-about {
  padding-bottom: 100px;
}

.about-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 60px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }

  &-item {
    &.card-shadow-md {
      padding: 40px;
      background: var(--light-100);
      border-radius: var(--radius-xl);

      @media (max-width: 980px) {
        padding: 40px 16px;
      }
    }

    &-title {
      margin-bottom: 20px;
    }

    &-description {
      margin-bottom: 36px;
      line-height: 1.5;
      font-size: var(--fz-sm);

      @media (max-width: 1280px) {
        font-size: 16px;
      }

      @media (max-width: 768px) {
        font-size: 14px;
      }

      p {
        margin-bottom: 20px;
      }
    }

    img {
      width: 100%;
      height: auto;
    }
  }
}
</style>