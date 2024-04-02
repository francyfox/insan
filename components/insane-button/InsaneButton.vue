<script setup lang="ts">
import { useAttrs } from 'vue'
import type { InsaneButtonProps } from '~/components/insane-button/insane-button.type'

const attr = useAttrs()
const props = withDefaults(defineProps<InsaneButtonProps>(), {
  isLink: false,
  isActive: false
})
</script>

<template>
  <NuxtLink v-if="isLink"
            v-bind="attr"
            :class="[variant, { active: isActive }]"
            class="insane-button card-shadow-md"
  >
    <slot/>
  </NuxtLink>
  <button v-else
          v-bind="attr"
          :class="[variant, { active: isActive }]"
          class="insane-button card-shadow-md"
  >
    <slot/>
  </button>
</template>

<style scoped lang="scss">
@import "insane-button.style";
</style>