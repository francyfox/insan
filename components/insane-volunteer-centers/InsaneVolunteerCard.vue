<script setup lang="ts">
const props = defineProps(['cardData']);
</script>

<template>
  <div class="volunteer-card">
    <p class="volunteer-card__title">{{ cardData?.regionName }}</p>

    <div class="volunteer-card__info">
      <svgo-icon-phone-gradient class="icon--phone"/>
      <p>{{cardData?.contactPerson}} - {{cardData?.contactNumber}}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.volunteer-card {
  border-radius: 20px;
  padding: 20px 30px;
  box-shadow: 0 0 46px 0 rgba(49, 79, 124, 0.12);
  background: #fff;

  &__info {
    display: flex;
    gap: 12px;

    font-size: 14px;
  }

  &__title {
    font-weight: 600;
    font-size: 24px;
    margin-bottom: 20px;
  }
}

.icon--phone {
  width: 24px;
  height: 24px;
}

</style>