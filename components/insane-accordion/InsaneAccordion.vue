<script setup lang="ts">
import { NCollapse, NCollapseItem } from 'naive-ui'
import type { InsaneAccordionProps } from '~/components/insane-accordion/insane-accordion.type'

defineProps<InsaneAccordionProps>()
</script>

<template>
  <n-collapse arrow-placement="right"
              class="accordion"
  >
    <template #arrow>
      <n-icon>
        <svgo-icon-plus class="accordion-item-icon"/>
      </n-icon>
    </template>
    <n-collapse-item v-for="(item, index) in data"
                     :title="item.question"
                     :name="index.toString()"
                     class="accordion-item card-shadow-md"
    >
      <div class="accordion-item-body" v-html="item.answer"></div>
    </n-collapse-item>
  </n-collapse>
</template>

<style lang="scss">
.accordion {
  &-item {
    padding: 20px 24px;
    background: var(--light-100);
    border-radius: 20px;
    font-weight: var(--fz-sm);

    &-icon {
      width: 32px;
      height: 32px;
    }
  }
}
.n-collapse .n-collapse-item .n-collapse-item__header .n-collapse-item__header-main {
  justify-content: space-between;
  gap: 20px;
}
</style>