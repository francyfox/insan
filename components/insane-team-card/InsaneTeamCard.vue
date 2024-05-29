<script setup lang="ts">
import type {InsaneTeamCardType} from "~/components/insane-team-card/insane-team-card.type";
import { NSkeleton } from 'naive-ui';

const props = defineProps<InsaneTeamCardType>();
</script>

<template>
  <div class="card">
    <div class="card__preview">
      <nuxt-img v-if="employee?.img"
                :src="employee?.img"
                :alt="employee?.name"
                format="webp"
                :width="304"
                :height="304"
                loading="lazy"
      />
      <n-skeleton v-else
                  width="100%"
                  height="304px"
      />
    </div>

    <div class="card__description">
      <p>{{ employee?.name }} </p>
      <span>{{ employee?.position }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  box-shadow: 0 0 46px 0 rgba(49, 79, 124, 0.12);
  background: #fff;
  border-radius: 20px;
  padding-bottom: 20px;

  &__preview {
    max-width: 304px;
    width: 100%;
    aspect-ratio: 1 / 1;

    border-radius: 20px;
    overflow: hidden;
    margin-bottom: 24px;

    @media (max-width: 768px) {
      max-width: unset;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }

  &__description {
    text-align: center;

    p {
      font-weight: 700;
      font-size: 20px;
    }

    span {
      font-weight: 400;
      font-size: 18px;
    }
  }

  &__action {
    display: flex;
    justify-content: center;

    ul {
      display: flex;
      align-items: center;
      gap: 16px;
    }
  }
}

.card-link {
  transition: opacity .2s ease-in-out;
  opacity: 1;

  &:hover {
    opacity: .8;
  }

  @media (max-width: 768px) {
    &:hover {
      opacity: 1;
    }

    &:active {
      opacity: .8;
    }
  }
}
</style>