<script setup lang="ts">
import type { InsaneSliderProps } from '~/components/insane-slider/insane-slider.type';
import { formatPrice } from '~/server/app/util';

defineProps<InsaneSliderProps>()
</script>

<template>
  <div class="col slider font-montserrat">
    <div class="row">
      <address>
        {{ data.city }}
      </address>

      <div class="slider-people">
        <svgo-icon-people width="22" height="15" />
        <i>
          {{ data.number_of_people_helping }}
        </i>
      </div>
    </div>

    <progress :value="data.collect_money" :max="data.end_money"></progress>

    <div class="row slider-price">
      <strong>
        {{ formatPrice(data.collect_money) }}
      </strong>

      <strong>
        {{ formatPrice(data.end_money) }}
      </strong>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "insane-slider.style";
</style>