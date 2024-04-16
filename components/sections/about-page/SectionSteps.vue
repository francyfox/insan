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
          <div class="steps-list-item-header col">
            <div class="steps-list-item-title title-h1">
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

        <div class="steps-list-item">
          <insane-steps :data="data.steps" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.section-steps {
  margin-bottom: 100px;
}

.steps-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }

  &-item {
    &-header {
      margin-bottom: auto;
    }

    &-title {
      margin-bottom: 30px;
    }

    &-description {
      font-size: var(--fz-xs);
      font-weight: 300;
    }

    &-caption {
      font-size: var(--fz-smx);
      font-weight: 500;

      @media (max-width: 980px) {
        display: none;
      }
    }

  }
}
</style>