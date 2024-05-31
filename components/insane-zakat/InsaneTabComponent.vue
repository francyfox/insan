<script setup lang="ts">
const props = defineProps(['currentTab']);
</script>

<template>
  <div class="tabs-wrapper">
    <div class="tab content-body" v-html="currentTab.description"></div>
  </div>
</template>

<style lang="scss">
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

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 15px;
  }

  p {
    padding: 0 0 10px 0;
    line-height: 150%;
  }

  ul {
    list-style: square;
    padding-left: 20px;
  }

  ol {
    list-style: decimal;
    padding-left: 20px;
  }

  img {
    &[align="center"] {
      margin: 0 auto;
      padding: 15px 0;
    }

    &[align="left"] {
      padding-top: 5px;
      padding-right: 15px;
    }

    &[align="right"] {
      padding-top: 5px;
      padding-left: 15px;
    }
  }

  &__item {
    margin-bottom: 40px;

    span {
      display: inline-block;
      font-weight: 600;
      margin-bottom: 20px;
    }

    ol {
      list-style: decimal;
      padding-left: 20px;
    }
  }


  &--alms {
    span {
      margin-bottom: 0;
    }
  }
}

</style>