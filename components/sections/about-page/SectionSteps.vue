<script setup lang="ts">
export interface SectionStepsData {
  title: string;
  description: string;
  caption: string;
  steps: [];
}
defineProps<{
  data: SectionStepsData
}>()
</script>

<template>
  <section class="section section-steps">
    <div class="container">
      <div class="steps-list row">
        <div class="steps-list-item col">
          <div class="col">
            <div class="steps-list-item-title title-h2">
              {{ data.title }}
            </div>

            <div class="steps-list-item-description">
              {{ data.description }}
            </div>
          </div>

          <div class="steps-list-item-caption">
            {{ data.caption }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">

</style>