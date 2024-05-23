<script setup lang="ts">
import type { InsaneArticleProps } from '~/components/insane-article/insane-article.type'
import { NSkeleton } from 'naive-ui'

defineProps<InsaneArticleProps & { url: string }>()
</script>

<template>
  <article class="article col card-shadow-md">
    <n-skeleton v-if="isLoading"
                width="100%"
                height="550px"
                class="article-image"
    />
    <nuxt-img v-else
              loading="lazy"
              :src="data.image"
              class="article-image img-cover"
              format="webp"
              placeholder
              width="426"
              height="550"
              :alt="data?.title"
    />
    
    <div class="article-body col">
      <div class="article-body-title">

        <n-skeleton v-if="isLoading"
                    :repeat="2"
                    text
        />
        <span v-else>
          {{ data.title }}
        </span>
      </div>

      <div class="article-body-text">
        <n-skeleton v-if="isLoading"
                    :repeat="3"
                    text
        />
        <template v-else>
          {{ data.short }}
        </template>
      </div>

      <insane-button variant="primary"
                     :is-link="true"
                     :to="url"
                     :class="{ disabled: isLoading }"
      >
        Подробнее
      </insane-button>
    </div>
  </article>
</template>

<style scoped lang="scss">
.article {
  gap: 20px;
  justify-content: flex-end;
  background: var(--light-100);
  border-radius: var(--radius-lg);
  overflow: hidden;

  &-image {
    margin-bottom: auto;
    height: 550px;
    border-radius: var(--radius-lg);
    overflow: hidden;

    @media (max-width: 980px) {
      height: 400px;
    }

    @media (max-width: 768px) {
      height: 300px;
    }
  }

  &-body {
    padding: 20px 30px 30px;
    gap: 20px;

    @media (max-width: 980px) {
      padding: 20px 21px;
    }

    @media (max-width: 560px) {
      padding: 24px 24px 26px;
    }

    &-title {
      height: 100%;
      min-height: 74px;
      font-size: var(--fz-lg);
      font-weight: 600;
      color: var(--dark-900);

      @media (max-width: 980px) {
        font-size: var(--fz-sm);
      }

      @media (max-width: 560px) {
        display: none;
      }
    }

    &-text {
      font-size: var(--fz-sm);
      color: var(--darl-700);
    }
  }
}
</style>