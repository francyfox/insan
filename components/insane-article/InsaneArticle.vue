<script setup lang="ts">
import type { InsaneArticleProps } from '~/components/insane-article/insane-article.type';

defineProps<InsaneArticleProps>()
</script>

<template>
  <article class="article col card-shadow-md">
    <nuxt-img loading="lazy"
              :src="data.image"
              class="article-image img-cover"
    />
    
    <div class="article-body col">
      <div class="article-body-title">
        {{ data.title }}
      </div>

      <div class="article-text">
        {{ data.description }}
      </div>

      <insane-button variant="primary">
        Подробнее
      </insane-button>
    </div>
  </article>
</template>

<style scoped lang="scss">
.article {
  gap: 20px;
  background: var(--light-100);
  border-radius: var(--radius-lg);
  overflow: hidden;

  &-image {
    height: 550px;
    border-radius: var(--radius-lg);
    overflow: hidden;
  }

  &-body {
    padding: 20px 30px 30px;
    gap: 20px
  }
}
</style>