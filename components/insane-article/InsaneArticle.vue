<script setup lang="ts">
import type { InsaneArticleProps } from '~/components/insane-article/insane-article.type'
import { NSkeleton } from 'naive-ui'

defineProps<InsaneArticleProps>()
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

      <div class="article-text">
        <n-skeleton v-if="isLoading"
                    :repeat="3"
                    text
        />
        <template v-else>
          {{ data.description }}
        </template>
      </div>

      <insane-button variant="primary"
                     :is-link="true"
                     :to="data.url"
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
    gap: 20px;

    &-title {
      min-height: 74px;
      font-size: var(--fz-lg);
      font-weight: 600;
      color: var(--dark-900);
    }

    &-text {
      font-size: var(--fz-sm);
      color: var(--darl-700);
    }
  }
}
</style>