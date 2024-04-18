<script setup lang="ts">
const props = defineProps<InsaneVolunteerLetter>();

interface InsaneVolunteerLetter {
  letter: string
}
</script>

<template>
  <div class="letter">
    <p>
      {{ letter }}
    </p>
  </div>
</template>

<style scoped lang="scss">
.letter {
  max-width: 55px;
  width: 100%;
  height: 55px;

  border-radius: 55px;
  padding: 10px 20px;
  box-shadow: 0 0 46px 0 rgba(49, 79, 124, 0.12);
  background: #fff;

  p {
    font-weight: 500;
    font-size: 24px;
  }
}
</style>