<script setup lang="ts">
const isShowOptions = ref(false);

const currentValue = ref(1);


function showOptions() {
  isShowOptions.value = !isShowOptions.value;
}
</script>

<template>
  <div class="select">
    <button @click="showOptions" class="select-button">
      {{ currentValue }}
      <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
              d="M6.85815 6.96028C6.63847 7.17996 6.28237 7.17996 6.0627 6.96028L0.327837 1.22541C0.108169 1.00573 0.108169 0.649631 0.327837 0.429956L0.593007 0.164756C0.812674 -0.0549187 1.16883 -0.0549187 1.3885 0.164756L6.46042 5.23671L11.5324 0.164757C11.752 -0.0549181 12.1081 -0.0549181 12.3278 0.164757L12.593 0.429957C12.8127 0.649632 12.8127 1.00573 12.593 1.22541L6.85815 6.96028Z"
              fill="black"/>
      </svg>
    </button>

    <TransitionGroup>
      <div v-if="isShowOptions" class="select__list--wrapper">
        <ul class="select__list">
          <li v-for="(item, index) in 5" :key="index" class="select__item">
            <button class="select__value">{{ item + 1 }}</button>
          </li>
        </ul>
      </div>
    </TransitionGroup>
  </div>
</template>

<style scoped lang="scss">
.select-button {
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 20px 37px;
  width: 100%;
  border-radius: 8px;
  background-color: #f7f8fa;

  font-weight: 400;
  font-size: 20px;
  color: #0f0f0f;
}

.select {
  position: relative;

  &__list {
    position: absolute;
    top: 110%;
    left: 0;
    width: 100%;
    overflow: hidden;
    border-radius: 15px;
    padding: 0 10px;

    background-color: #f7f8fa;
  }

  &__item {
    width: 100%;
    padding: 20px 37px;
    border-bottom: .5px solid #9F9F9F;

    &:last-child {
      border-bottom: none;
    }
  }

  &__value {
    width: 100%;
    background-color: transparent;
    text-align: left;


  }
}
</style>