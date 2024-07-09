<template>
    <div>
      <Header />
      <div class="w-full h-full">
        <img src="https://cdn.tgdd.vn/2024/07/campaign/MHD-1920x550-3.jpg" alt="banner"/>
      </div>
      <div class="container">
        <div>
          <div class="flex flex-col gap-3 mt-4">
            <ListItemProduct :listProduct="listSale" itemWidth="235px" color="bg-[#FE7A00]" :isShow="true" 
            srcImage="https://cdn.tgdd.vn/2024/07/campaign/flashsale-1200x120-1.png"/>
            <ListItemProduct  :listProduct="listAccessory" class="mt-4"  itemWidth="235px"  :currentTab="currentTab"
            @tabChange="handleTabChange" 
            color="bg-[none]" :isShow="true" :isShowAll="true" redirect="/accessories" :isShowFilter="true" 
            srcImage="https://cdn.tgdd.vn/2024/07/campaign/pk-1200x120-1.png"/>
            <ListItemProduct :listProduct="listWatch" class="mt-4"   :currentTab="currentTab"
            @tabChange="handleTabChange"
            itemWidth="235px" color="bg-[none]" :isShow="true" :isShowAll="true" redirect="/watch" :isShowFilter="true"
            srcImage="https://cdn.tgdd.vn/2024/07/campaign/dhtt-1200x120-1.png"/>
            <ListItemProduct :listProduct="listSmartWatch" class="mt-4"   :currentTab="currentTab"
            @tabChange="handleTabChange"
            itemWidth="235px" color="bg-[none]" :isShow="true" :isShowAll="true"  redirect="/smartwatch" :isShowFilter="true"
            srcImage="https://cdn.tgdd.vn/2024/07/campaign/smw-1200x120-2.png"/>
            <ListItemProduct :listProduct="listLaptop" class="mt-4"   :currentTab="currentTab"
            @tabChange="handleTabChange"
            itemWidth="235px" color="bg-[none]" :isShow="true" :isShowAll="true" redirect="/laptop" :isShowFilter="true"
            srcImage="https://cdn.tgdd.vn/2024/07/campaign/lt-1200x120-1.png"/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref, watch } from 'vue';
  import Header from '@/components/Header/Header.vue';
  import Footer from '@/components/Footer/Footer.vue';
  import ListItemProduct from '@/components/ListItemProduct/ListItemProduct.vue';
  import { fetchProduct, fetchProductByCategory, fetchProductSort } from '@/Hooks/FetchProductLimit';
  import { endpoints } from '@/configs';
  
  const listSale = ref([]);
  const listAccessory = ref([]);
  const listWatch = ref([]);
  const listSmartWatch = ref([]);
  const listLaptop = ref([]);
  const limit = ref(5);
  const limit2 = ref(10);
  const currentTab = ref('all');
  
  onMounted(async () => {
    await fetchProduct(limit.value, listSale, endpoints.getPromotion);
    await handleButtonClick(currentTab.value);
  });
  
  const handleButtonClick = async (category) => {
    switch (category) {
      case 'all':
        await fetchProductByCategory(listAccessory, 'accessories', limit2.value);
        await fetchProductByCategory(listLaptop, 'laptop', limit2.value);
        await fetchProductByCategory(listWatch, 'watch', limit2.value);
        await fetchProductByCategory(listSmartWatch, 'smartwatch', limit2.value);
        break;
      case 'sale':
        await fetchProductSort(listAccessory, 'accessories', limit2.value,'discount-desc');
        await fetchProductSort(listLaptop, 'laptop', limit2.value,'discount-desc');
        await fetchProductSort(listWatch, 'watch', limit2.value,'discount-desc');
        await fetchProductSort(listSmartWatch, 'smartwatch', limit2.value,'discount-desc');
        
        break;
      case 'sort':
        await fetchProductSort(listAccessory, 'accessories', limit2.value,'price-asc');
        await fetchProductSort(listLaptop, 'laptop', limit2.value,'price-asc');
        await fetchProductSort(listWatch, 'watch', limit2.value,'price-asc');
        await fetchProductSort(listSmartWatch, 'smartwatch', limit2.value,'price-asc');
        break;
      default:
        break;
    }
  };
  
  const handleTabChange = (newTab) => {
    currentTab.value = newTab;
    console.log(`Tab changed to: ${newTab}`);
  };
  
  watch(currentTab, async (newTab) => {
    await handleButtonClick(newTab);
  });
  </script>
  
  <style>
  /* Add your styles here */
  </style>
  