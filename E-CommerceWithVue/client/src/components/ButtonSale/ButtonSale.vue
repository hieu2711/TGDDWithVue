<template>
    <div @click="handleClick">
      <div class="button text-2xl flex gap-4 items-center p-3 rounded-xl cursor-pointer" :class="{ active: isActive }">
        <img :src="srcImage" class="w-[70px] height-[70px]" />
        {{ name }}
      </div>
    </div>
  </template>
  
  <script setup>
  import router from '@/router';
import { inject, computed } from 'vue';
  
  const props = defineProps({
    name: String,
    srcImage: String,
    redirect: String
  });
  
  const activeButton = inject('activeButton');
  const setActiveButton = inject('setActiveButton');
  
  const isActive = computed(() => activeButton.value === props.name);
  
  const handleClick = () => {
    setActiveButton(props.name);
    if(props.redirect){
      router.push(props.redirect)
    }
  };
  </script>
  
  <style scoped>
  .button {
    background-color: #fff;
  }
  .button.active {
    background-color: #feb70b;
  }
  </style>
  