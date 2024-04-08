<script setup lang="ts">
import type { InsaneProgramProps } from '~/components/insane-program/insane-program.type';

defineProps<InsaneProgramProps>()
</script>

<template>
  <div class="card card-shadow-md">
    <div class="card-title">
      {{ data.title }}
    </div>
    <div class="card-description">
      {{ data.description }}
    </div>

    <insane-button variant="gray"
                   :is-link="true"
                   to="/"
    >
      <svgo-icon-big-arrow width="22" height="12" />
    </insane-button>
  </div>
</template>

<style scoped lang="scss">
.card {
  background: var(--light-100);
  border-radius: var(--radius-lg);

  &-title {
    margin-bottom: 28px;
    font-size: var(--fz-xl);
    color: var(--dark-900);
  }

  &-description {
    margin-bottom: 38px;
    font-size: var(--fz-smx);
    color: var(--light-400);
  }
}
</style>