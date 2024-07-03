<template>
    <div class="hover:shadow-md bg-white flex flex-col rounded-md gap-1" :style="{ width: width }">
      <div class="cursor-pointer pb-7">
        <a > 
          <div class="mx-2 my-3">
            <span class="bg-[#f3f3f3] p-1 text-[0.8rem]">Trả góp 0%</span>
          </div>
          <div class="hover:-translate-y-1 transition-transform duration-300">
            <img 
              alt="iPhone 15 Pro Max 256GB" 
              width="207" 
              height="207" 
              src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-thumbnew-600x600.jpg"
            >
            </div>
            <div class="ml-3 mt-3">
          <h6 >iPhone 15 Pro Max 256GB</h6>
          <strong class="text-xl text-red-600">
            29.790.000đ
            <small class="bg-[#fff0e9] rounded-sm p-1 text-xs">-14%</small>
          </strong>
          <p class="text-[#fb6e2e] text-sm">
            <b>3.9</b>
            <i class="fa-solid fa-star ml-2 mr-3"></i>(146)
          </p>
        </div>
        </a>
    </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    width: String
  })
  </script>
  