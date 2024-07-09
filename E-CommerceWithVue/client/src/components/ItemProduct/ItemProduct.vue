<template>
    <div class="hover:shadow-md bg-white flex flex-col rounded-md gap-1" :style="{ width: width }">
      <div class="cursor-pointer pb-7">
        <a > 
          <div class="mx-2 my-3">
            <span class="bg-[#f3f3f3] p-1 text-[0.8rem]">Trả góp 0%</span>
          </div>
          <div class="hover:-translate-y-1 transition-transform duration-300">
            <img 
              :alt="product.name" 
              width="207" 
              height="207" 
              :src="product.image"
            >
            </div>
            <div class="ml-3 mt-3">
          <h6 class=" h-[2rem]">{{ product.name }}</h6>
          <strong class="text-xl text-red-600">
            {{ formatCurrency(product.price) }}
            <small class="bg-[#fff0e9] rounded-sm p-1 text-xs">{{ product.discount }}%</small>
          </strong>
          <p class="text-[#fb6e2e] text-sm">
            <b>{{ product.rating }}</b>
            <i class="fa-solid fa-star ml-2 mr-3"></i>({{ product.numReviews }})
          </p>
        </div>
        </a>
    </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    width: String,
    product:Object
  })
  const formatCurrency = (price) => {
  const formatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });
  return formatter.format(price);
};
  </script>

  