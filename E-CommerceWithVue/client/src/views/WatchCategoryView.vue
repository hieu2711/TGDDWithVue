<template>
    <div>
      <Header />
      <div class="container">
        <div>
          <div>
            <CarouselBanner :listImage="listImageWatch" :isShow="false" />
          </div>
          <div class="bg-[#fff3ec]">
            <div class="bg-white mt-3">
                <ListButtonBrand class="mt-2 mb-3" :filters="filterBrandWatch" @brandSelected="handleBrandSelected"/>
            </div>
            <div class="mt-3">
            <button @click="handleSetAllProduct" class=" border-1 border-gray-300 p-1.5 rounded-md hover:border-blue-500 hover:text-blue-500 mr-3">Tất cả</button>
            <span v-if="countProduct > 0" class="font-semibold">{{ countProduct }} Đồng hồ thông minh</span>
            <span v-else class="font-semibold text-center">Không có sản phẩm để hiển thị</span>
          </div>
            <div class="m-4">
                <ListItemProduct v-if="countProduct > 0" :listProduct="listWatch" itemWidth="235px" color="bg-[#fcbe75]" :isShow="false" srcImage="https://cdn.tgdd.vn/2024/06/campaign/DMX---Banner-Flash-sale-1200x120-7.png"/>
            </div>
        </div>
        </div>
      </div>
      <Footer />
    </div>
  </template>
  
  <script setup>
  import Header from '@/components/Header/Header.vue';
  import Footer from '@/components/Footer/Footer.vue';
  import ListFilterPhone from '@/components/ListFilterPhone/ListFilterPhone.vue';
  import ListButtonBrand from '@/components/ListButtonBrand/ListButtonBrand.vue';
  import CarouselBanner from '@/components/CarouselBanner/CarouselBanner.vue';
  import {  filterBrandLaptop, filterBrandWatch } from '../utils/filter'
  import { listImageWatch } from '../utils/category'
  import ListItemProduct from '@/components/ListItemProduct/ListItemProduct.vue';
  import { onMounted, ref } from 'vue';
import { fetchCountProduct, fetchProductByBrandAndCategory, fetchProductByCategory, fetchProductSort } from '@/Hooks/FetchProductLimit';
const listWatch = ref([])
const listGarmin = ref([])
const countProduct = ref(0)
const category = ref('watch')
const brand = ref('')
const limit = ref(10)

  onMounted(async() =>{
    await fetchProductSort(listWatch,category.value, limit.value,'discount-desc');
    fetchCountProduct(countProduct,category.value)
  })
  const handleBrandSelected = async (selectedBrand) => {
  brand.value = selectedBrand;
  await fetchProductByBrandAndCategory(listWatch,category.value,brand.value)
  await fetchCountProduct(countProduct,category.value, brand.value)
};

const handleSetAllProduct = () =>{
  brand.value = ''
  fetchProductByCategory(listWatch,category.value,limit.value)
  fetchCountProduct(countProduct,category.value)
}
  </script>
  
  <style>
  
  </style>