<script setup lang="ts">
import type { InsaneSliderProps } from '~/components/insane-slider/insane-slider.type';
import { formatPrice } from '~/server/app/util';
import { NSkeleton } from 'naive-ui';

defineProps<InsaneSliderProps>()
</script>

<template>
  <div class="col slider font-montserrat">
    <div class="row">
      <n-skeleton v-if="isLoading"
                  width="100px"
                  text
      />
      <address v-else>
        {{ data.city }}
      </address>

      <div class="slider-people">
        <svgo-icon-people width="22" height="15" />

        <n-skeleton v-if="isLoading"
                    width="20px"
                    text
        />
        <i v-else>
          {{ data.number_of_people_helping }}
        </i>
      </div>
    </div>

    <n-skeleton v-if="isLoading"
                width="100%"
                height="4px"
                round
    />
    <progress v-else
              :value="data.collect_money"
              :max="data.end_money">
    </progress>

    <div class="row slider-price">
      <n-skeleton v-if="isLoading"
                  width="100px"
                  text
      />
      <strong v-else>
        {{ formatPrice(data.collect_money) }}
      </strong>

      <n-skeleton v-if="isLoading"
                  width="100px"
                  text
      />
      <strong v-else>
        {{ formatPrice(data.end_money) }}
      </strong>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "insane-slider.style";
</style>