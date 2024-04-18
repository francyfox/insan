<script setup>
import InsaneVolunteerLetter from "~/components/insane-volunteer-centers/InsaneVolunteerLetter.vue";
import InsaneVolunteerCard from "~/components/insane-volunteer-centers/InsaneVolunteerCard.vue";

const props = defineProps(['columnData']);
</script>

<template>
  <div class="volunteer-column">
    <InsaneVolunteerLetter :letter="columnData[0]"/>
    <InsaneVolunteerCard v-for="(place, index) in columnData[1]" :key="index" :card-data="place"/>
  </div>
</template>

<style scoped lang="scss">
.volunteer-column {
  display: flex;
  gap: 24px;
  flex-direction: column;
}
</style>