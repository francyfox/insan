<script setup lang="ts">
const props = defineProps(['tabData', 'currentTab']);
</script>

<template>
  <div class="tab" v-if="currentTab === tabData?.title">
    <p>
      {{ tabData?.content }}
    </p>
  </div>
</template>s

<style scoped lang="scss">
.tab {
  box-shadow: 0 0 48px 0 rgba(49, 79, 124, 0.12);
  background: #fff;
  border-radius: 36px;
  padding: 60px;

  font-weight: 300;
  font-size: 16px;

  max-width: 839px;
  width: 100%;


  @media (max-width: 1200px) {
    padding: 60px 40px;
  }
  
  @media (max-width: 430px) {
    max-width: unset;
    padding: 60px 20px;
  }
}

</style>