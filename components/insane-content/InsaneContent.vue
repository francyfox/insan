<script setup lang="ts">

</script>

<template>
  <div class="content card-shadow-md">
    <main class="content-body">
      <slot />
    </main>
  </div>
</template>

<style lang="scss">
.content {
  margin-bottom: 100px;
  padding: 60px;
  width: 100%;
  background: var(--light-100);
  border-radius: var(--radius-xl);
  font-size: var(--fz-sm);

  @media (max-width: 1280px) {
    padding: 60px 40px;
    font-size: var(--fz-smx);
  }

  @media (max-width: 560px) {
    padding: 60px 15px;
    font-size: var(--fz-xs);
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
}
</style>