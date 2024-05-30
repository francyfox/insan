<script setup>
const model = defineModel({ default: 0 })
const props = defineProps(['list']);
const emit = defineEmits(['update:modelValue'])

const isShowOptions = ref(false)

const title = computed(() => props.list.find((i) => i.value === model.value)?.title)

function changeSelectedItem() {
  isShowOptions.value = !isShowOptions.value;
}

function setItem(val) {
  emit('update:modelValue', val)
}
</script>

<template>
  <div @click="changeSelectedItem" class="select">
    <button class="select-button" type="button">
      <img v-if="list[model]?.icon" :src="list[model]?.icon" :alt="list[model]?.title">

      {{ title }}

      <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
              d="M6.85815 6.96028C6.63847 7.17996 6.28237 7.17996 6.0627 6.96028L0.327837 1.22541C0.108169 1.00573 0.108169 0.649631 0.327837 0.429956L0.593007 0.164756C0.812674 -0.0549187 1.16883 -0.0549187 1.3885 0.164756L6.46042 5.23671L11.5324 0.164757C11.752 -0.0549181 12.1081 -0.0549181 12.3278 0.164757L12.593 0.429957C12.8127 0.649632 12.8127 1.00573 12.593 1.22541L6.85815 6.96028Z"
              fill="black"/>
      </svg>
    </button>

    <TransitionGroup>
      <div v-if="isShowOptions" id="selectListWrapper" class="select__list--wrapper">
        <ul class="select__list">
          <li v-for="(item, index) in list" :key="index" class="select__item">
            <button @click="setItem(item.value)"
                    class="select__value"
                    type="button"
            >
              {{ item?.title }}
            </button>
          </li>
        </ul>
      </div>
    </TransitionGroup>

  </div>
</template>

<style scoped lang="scss">
.select {
  width: 270px;

  border-radius: 25px;
  background: #ecedee;
  padding: 12px 24px;
  position: relative;
  color: var(--dark-900);
  height: 48px;

  @media (max-width: 825px) {
    width: 100%;
  }

  @media (max-width: 430px) {
    font-size: 14px;
  }

  &__list {
    overflow: auto;
    transform: scaleX(-1);
    padding-right: 7px;

    &::-webkit-scrollbar {
      width: 3px;
      border-radius: 3px;
    }

    &::-webkit-scrollbar-button {
      width: 0;
      height: 0;
    }

    &::-webkit-scrollbar-thumb {
      background: #8d8d8d;
      border-radius: 3px;
      opacity: 0.4;
    }


    &::-webkit-scrollbar-track {
      border-radius: 3px;
      border: 0 none #ffffff;
    }

    &--wrapper {
      border-radius: 25px;
      padding: 20px;
      background: #ecedee;

      width: 100%;
      position: absolute;
      top: 110%;
      z-index: 20;
      left: 0;
    }

    max-height: 216px;

  }

  &__item {
    display: flex;
    align-items: center;
    gap: 5px;

    margin-bottom: 7px;
    transform: scaleX(-1);

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__value {
    width: 100%;
    text-align: left;
    border-radius: 60px;
    background: transparent;
    padding: 10px 16px;

    transition: background .2s ease-in-out;

    &:hover {
      box-shadow: 0 0 48px 0 rgba(49, 79, 124, 0.12);
      background: #fff;
    }
  }
}

.select-button {
  display: flex;
  align-items: center;
  gap: 5px;
  width: 100%;
  justify-content: space-between;

  text-align: left;
}


.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>