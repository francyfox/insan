<script setup lang="ts">
export interface SectionRequisitesData {
  title: string;
  requisites: string;
  contacts: string;
}

defineProps<{
  data: SectionRequisitesData
}>()
</script>

<template>
  <section class="section section-requisites">
    <div class="container">
      <div class="requisites-list col">
        <div class="requisites-list-item">
          <div class="requisites-list-item-title title-h2">
            {{ data.title }}
          </div>
        </div>
        
        <div class="requisites-list-item">
          <div class="requisites-content">
            <div class="requisites-content-item">
              <aside v-html="data.requisites"></aside>
            </div>

            <div class="requisites-content-item">
              <aside v-html="data.contacts"></aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.section-requisites {
  margin-bottom: 100px;
}

.requisites-list {
  gap: 140px;

  &-item {
    &-title {
      margin: 0 auto;
      max-width: 820px;
      text-align: center;
      font-weight: 500;
    }
  }
}

.requisites-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  &-item {
    &:last-child {
      margin-left: auto;
      max-width: 488px;
    }

    aside {
      font-size: var(--fz-sm);
    }
  }
}
</style>