<script setup lang="ts">
interface Props {
  stepsData: {
    title: string
    desc: string
    caption: string
    collections: Array<{ title: string, desc: string, icon: string }>
  }
}

defineProps<Props>();
</script>

<template>
  <section class="section section-steps">
    <div class="container">
      <div class="steps-list row">
        <div class="steps-list-item col">
          <div class="steps-list-item-header col">
            <div class="steps-list-item-title title-h1">
              {{ stepsData?.title }}
            </div>

            <div class="steps-list-item-description">
              {{ stepsData?.desc }}
            </div>
          </div>

          <div class="steps-list-item-caption">
            {{ stepsData?.caption }}
          </div>
        </div>

        <div class="steps-list-item">
          <insane-steps :collections="stepsData?.collections"/>
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

  @media (max-width: 768px) {
    gap: 60px;
  }

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }

  &-item {
    &-header {
      margin-bottom: auto;
    }

    &-title {
      margin-bottom: 30px;

      line-height: 58px;

      @media (max-width: 768px) {
        margin-bottom: 16px;
      }
    }

    &-description {
      font-size: var(--fz-xs);
      font-weight: 300;
      line-height: 27px;
    }

    &-caption {
      font-size: var(--fz-smx);
      font-weight: 500;
      text-shadow: 0 0 black;

      @media (max-width: 980px) {
        display: none;
      }
    }

  }
}
</style>