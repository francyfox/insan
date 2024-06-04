<script setup lang="ts">
defineProps<{
  name: string
}>()
</script>

<template>
  <label for="agreement" class="custom-checkbox">
    <input type="checkbox"
           name="agreement"
           disabled
           checked
    />

    <span>
              Я уполномочиваю Благотворительный фонд «Инсан» в лице генерального директора Магомедова Магомедрасула Мисирбеговича выполнить ряд услуг (купить, распределить среди тех, кому полагается и тд.) по совершению обряда (желательного) жертвоприношения (Курбан) за {{ name }} с правом переуполномочить других лиц.
            </span>
  </label>
</template>

<style scoped lang="scss">
.custom-checkbox {
  margin-top: 20px;
  display: flex;
  position: relative;
  gap: 20px;

  &::after {
    top: 0;
    left: 0;
    position: absolute;
    width: 26px;
    height: 26px;
    content: '';
    display: block;
    background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjYiIGhlaWdodD0iMjYiIHZpZXdCb3g9IjAgMCAyNiAyNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSIyNSIgaGVpZ2h0PSIyNSIgcng9IjcuNSIgc3Ryb2tlPSIjMzc4NEQyIi8+CjxwYXRoIGQ9Ik0xOC44MDAyIDguMzY2NDZMMTAuODI1MiAxNy42MzM1TDcuMjAwMiAxMy40MjEyIiBzdHJva2U9IiM0NjlFQjUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=");
  }

  span {
    font-size: 16px;
    color: #9F9F9F;
  }

  input {
    display: block;
    flex-shrink: 0;
    width: 26px;
    height: 26px;
    opacity: 0;
  }
}
</style>