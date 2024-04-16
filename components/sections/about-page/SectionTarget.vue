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
        <nuxt-img v-bind="data.image" class="img-cover" />
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

  &-item {
    &.card-shadow-md {
      padding: 40px;
      background: var(--light-100);
      border-radius: var(--radius-xl);
    }

    &-title {
      margin-bottom: 20px;
    }

    &-content {
      font-size: var(--fz-sm);

      p {
        margin-bottom: 20px;
        line-height: 1.5;
        font-weight: 300;
      }
    }
  }
}
</style>