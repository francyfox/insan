<script setup lang="ts">
import type { InsaneProgramProps } from '~/components/insane-program/insane-program.type';

defineProps<InsaneProgramProps>()
</script>

<template>
  <div class="card card-shadow-md col">
    <div class="col">
      <div class="card-title">
        {{ data.title }}
      </div>
      <div class="card-description">
        {{ data.description }}
      </div>
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
  padding: 39px 25px ;
  background: var(--light-100);
  border-radius: var(--radius-lg);

  > .col {
    margin-bottom: auto;
  }

  &-title {
    margin-bottom: 28px;
    font-size: var(--fz-xl);
    font-weight: 500;
    color: var(--dark-900);
    line-height: 1.33;
  }

  &-description {
    margin-bottom: 38px;
    font-size: var(--fz-smx);
    color: var(--light-400);
    line-height: 1.24;
  }
}
</style>