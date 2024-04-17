<script setup lang="ts">
import { createQaAccordionList } from '~/server/app/module/faker/faker.qa';

definePageMeta({
  title: 'Вопрос-ответ',
  breadcrumb: {
    ariaLabel: 'Вопрос-ответ'
  }
})

const qaData = createQaAccordionList(5)
</script>

<template>
  <NuxtLayout>
    <template #header>
      Вопрос-ответ
    </template>

    <section class="section section-qa">
      <div class="container">
        <div class="qa-list row">
          <div class="qa-list-item">
            <insane-accordion :data="qaData" />
          </div>
          <div class="qa-list-item card-shadow-md">
            <div class="qa-list-item-title">
              Задайте свой вопрос
            </div>
            <question-form />
          </div>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>

<style scoped lang="scss">
.section-qa {
  margin-bottom: 100px;
}

.qa-list {
  gap: 30px;
  align-items: flex-start;

  @media (max-width: 1280px) {
    gap: 20px;
  }

  @media (max-width: 980px) {
    flex-direction: column-reverse;
  }

  &-item {
    &:first-child {
      width: 100%;
      max-width: 768px;
    }

    &:last-child{
      padding: 60px 82px 80px;
      flex-grow: 1;
      background: var(--light-100);
      border-radius: var(--radius-sm);

      @media (max-width: 1280px) {
        padding: 40px 54px 60px;
      }
    }

    &-title {
      margin-bottom: 40px;
      font-size: var(--fz-x);
      font-weight: 500;
      letter-spacing: -1px;

      @media (max-width: 1280px) {
        font-size: 28px;
      }
    }
  }
}
</style>