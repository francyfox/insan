<script setup lang="ts">

import {NFormItem, NInput} from "naive-ui";

const formEmpty = ref({
  cash: '',
  bankMoney: '',
  goodsAndRevenues: '',
  goldAndSilver: ''
})

const formValue = ref(formEmpty);


</script>

<template>
  <n-form :model="formValue" class="zakat-form">
    <n-form-item :label="$t('form.zakat.cash.label')" :show-label="true">
      <n-input v-model:value="formValue.cash"
               class="input"
               placeholder="0₽"
      />
    </n-form-item>

    <n-form-item :label="$t('form.zakat.bank.label')" :show-label="true">
      <n-input v-model:value="formValue.bankMoney"
               class="input"
               placeholder="0₽"
      />
    </n-form-item>

    <n-form-item :show-label="true" :label="$t('form.zakat.another.label')">
      <n-input v-model:value="formValue.goodsAndRevenues"
               class="input"
               placeholder="0₽"
      />
    </n-form-item>

    <n-form-item :label="$t('form.zakat.metal.label')" :show-label="true">
      <n-input v-model:value="formValue.goldAndSilver"
               class="input"
               placeholder="0₽"
      />
    </n-form-item>


    <div class="zakat-from__action">
      <insane-button variant="primary" type="submit" @click="" style="width: 100%">
        {{ $t('form.zakat.primaryButtonText')}}
      </insane-button>

      <insane-button variant="primary" type="submit" @click="" style="width: 100%">
        {{ $t('form.zakat.secondaryButtonText')}}
      </insane-button>
    </div>
  </n-form>
</template>

<style scoped lang="scss">
.zakat-form {
  background: #000;
  .n-input .n-input-wrapper {
    padding: 8.5px 10px;
  }
}
</style>