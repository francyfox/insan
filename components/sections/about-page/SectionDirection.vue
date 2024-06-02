<script setup lang="ts">
interface Props {
  directionData: {
    title: string
    desc: string
    collections: Array<{ icon: string, value: string }>
  }
}

defineProps<Props>()
</script>

<template>
  <section class="section section-direction">
    <div class="container">
      <div class="direction-list col">
        <div class="direction-list-item">
          <div class="direction-list-item-header col">
            <div class="direction-list-item-title title-h1">
              {{ directionData?.title }}
            </div>

            <div class="direction-list-item-description font-montserrat">{{ directionData?.desc }}</div>
          </div>
        </div>

        <div class="direction-list-item">
          <insane-directions :directions-list="directionData?.collections"/>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.section-direction {
  margin-bottom: 100px;
}

.direction-list {
  gap: 80px;

  &-item {
    &-header {
      margin: 0 auto;
      max-width: 768px;
      gap: 24px;
      text-align: center;
    }

    &-title {
      letter-spacing: -0.5px;
    }

    &-description {
      padding: 0 23px;
      font-size: var(--fz-sm);
      line-height: 1.5;
    }
  }
}
</style>