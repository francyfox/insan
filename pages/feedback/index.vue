<script setup lang="ts">
import FeedbackForm from '~/components/feedback-form/feedback-form.vue';
import Content from '~/pages/feedback/content';

definePageMeta({
  title: 'Мне нужна помощь',
  breadcrumb: {
    ariaLabel: 'Мне нужна помощь'
  }
})
</script>

<template>
  <NuxtLayout>
    <template #header>
      Мне нужна помощь
    </template>

    <section class="section section-feedback">
      <div class="container">
        <div class="feedback-list row">
          <div class="feedback-list-item card-shadow-md">
            <div class="title-h4">
              Нужна помощь
            </div>

            <div class="row">
              <div class="col">
                <feedback-form />
              </div>
              <div class="col">
                <nuxt-img src="/img/png/Heart.png"
                          width="210"
                          height="164"
                          alt="heart"
                />
              </div>
            </div>
          </div>
          <div class="feedback-list-item col card-shadow-md">
            <div class="title-h4">
              Обращение к нуждающимся
            </div>

            <aside v-html="Content"
                   class="font-montserrat"
            />
          </div>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>

<style lang="scss">
.feedback-list {
  margin-bottom: 100px;
  gap: 20px;

  &-item {
    width: 100%;
    padding: 46px 60px 46px 33px;
    background: var(--light-100);
    border-radius: var(--radius-xl);

    .title-h4 {
      margin-bottom: 40px;
    }

    &:last-child {
      max-width: 550px;
    }

    img {
      margin-left: auto;
    }

    aside {
      p {
        margin-bottom: 25px;
      }
    }
  }
}
</style>