<script setup lang="ts">
import type { InsaneProgramProps } from '~/components/insane-program/insane-program.type';
import { NSkeleton } from 'naive-ui';

const localePath = useLocalePath()

defineProps<InsaneProgramProps>()
</script>

<template>
  <div class="card card-shadow-md col">
    <div class="col">
      <div class="card-title">
        <n-skeleton v-if="isLoading"
                    text
        />
        <span v-else>{{ data?.title }}</span>
      </div>
      <div class="card-description">
        <n-skeleton v-if="isLoading"
                    text
                    :repeat="4"
        />
        <span v-else>{{ data?.short }}</span>
      </div>
    </div>

    <insane-button variant="gray"
                   :is-link="true"
                   :to="localePath(`/program/${data?.id}`)"
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
    height: 40px;
    margin-bottom: 38px;
    font-size: var(--fz-smx);
    color: var(--light-400);
    line-height: 1.24;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .insane-button {
    width: 60px;
    height: 40px;
  }
}
</style>