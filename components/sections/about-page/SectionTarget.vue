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
    <div class="target-list row">
      <div class="target-list-item">
        <nuxt-img v-bind="data.image" />
      </div>

      <div class="target-list-item card-shadow-md">
        <div v-if="data.title" class="title-h2">
          {{ data.title }}
        </div>

        <aside v-html="data.description" class="target-list-item-content"></aside>
      </div>
    </div>
  </div>
</section>
</template>

<style scoped lang="scss">

</style>