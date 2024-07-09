<template>
    <div class="mt-3">
      <a-radio-group v-model:value="value" @change="handleTabChange">
        <a-radio value="all">Nổi bật</a-radio>
        <a-radio value="sale">Giảm nhiều</a-radio>
        <a-radio value="sort">Giá thấp đến cao</a-radio>
      </a-radio-group>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue';
  
  const props = defineProps({
    currentTab: String,
  });
  
  const emits = defineEmits(['tabChange']);
  
  const value = ref(props.currentTab);
  
  watch(() => props.currentTab, (newValue) => {
    value.value = newValue;
  });
  
  const handleTabChange = (event) => {
    const newTab = event.target.value;
    emits('tabChange', newTab);
  };
  </script>
  
  <style scoped>

  
  </style>
  