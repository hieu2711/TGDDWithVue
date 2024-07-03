<template>
    <div class="w-full">
        <img class="w-full"  :src="srcImage" />
        <div :class="['pb-3 flex flex-col gap-4 items-center',color]">
          <div class="flex gap-3 justify-center pt-4 flex-wrap">
            <!-- Sử dụng vòng lặp để render số lượng ItemProduct -->
            <ItemProduct v-for="index in itemCount" :key="index" :width="itemWidth" />
          </div>
          <Button  v-if="isShow" :stylecss="{ fontSize: '0.8rem'}" className="btn btn-light px-5" name="Xem tất cả" icon="fa-solid fa-chevron-right ml-3"/>
        </div>
    </div>
  </template>
  
  <script setup>
  import Button from '../Button/Button.vue';
  import ItemProduct from '../ItemProduct/ItemProduct.vue';
  
  // Define props
  const props = defineProps({
    itemCount: {
      type: Number,
      required: true,
      default: 5
    },
    itemWidth: {
    type: String,
    required: true,
    default: '225px' 
  },
    srcImage:String,
    color:String,
    isShow:Boolean
  });
  </script>
  
  <style scoped>
  /* Các style cho component cha */
  </style>
  