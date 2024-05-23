<script setup lang="ts">

export interface SectionTargetData {
  title: string;
  description: string;
  image: {
    alt: string;
    src: string;
    width: number;
    height: number;
  }
}
export interface SectionTargetProps {
  data: SectionTargetData;
}

defineProps<SectionTargetProps>()
</script>

<template>
<section class="section section-target">
  <div class="container">
    <div class="target-list">
      <div class="target-list-item">
        <nuxt-img v-bind="data.image"
                  class="img-cover"
                  format="webp"
        />
      </div>

      <div class="target-list-item col card-shadow-md">
        <div v-if="data.title" class="target-list-item-title title-h1">
          {{ data.title }}
        </div>

        <aside v-html="data.description" class="target-list-item-content"></aside>
      </div>
    </div>
  </div>
</section>
</template>

<style lang="scss">
.section-target {
  margin-bottom: 100px;
}

.target-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 63px;

  @media (max-width: 980px) {
    display: flex;
    flex-direction: column-reverse;
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

    &-content {
      font-size: var(--fz-sm);

      @media (max-width: 1280px) {
        font-size: 16px;
      }

      @media (max-width: 768px) {
        font-size: 14px;
      }

      p {
        margin-bottom: 20px;
        line-height: 1.5;
        font-weight: 300;
      }
    }
  }
}
</style>