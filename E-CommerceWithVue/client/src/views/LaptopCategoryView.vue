<template>
    <div>
      <Header />
      <div class="container">
        <div>
          <div>
            <CarouselBanner :listImage="listImageLaptop" :isShow="false" />
          </div>
          <div class="bg-gray-200 p-3 rounded-lg mt-3">
            <ListButtonBrand  :filters="filterBrandLaptop" @brandSelected="handleBrandSelected"/>
          </div>
          <div class="mt-3">
            <button @click="handleSetAllProduct" class=" border-1 border-gray-300 p-1.5 rounded-md hover:border-blue-500 hover:text-blue-500 mr-3">Tất cả</button>
            <span v-if="countProduct > 0" class="font-semibold">{{ countProduct }} Laptop</span>
            <span v-else class="font-semibold text-center">Không có sản phẩm để hiển thị</span>
          </div>
          <div class="flex flex-col gap-4 mt-4">
            <ListItemProduct v-if="countProduct > 0" :listProduct="listLaptop"  itemWidth="235px" color="bg-[#EC165A]" :isShow="true" srcImage="https://cdn.tgdd.vn/2024/06/banner/frame-deal-desk-1920x144.png"/>
            <ListItemProduct :listProduct="listMac" class="mt-4" :itemCount="10" itemWidth="235px" color="bg-[none]" :isShow="true" srcImage="https://cdn.tgdd.vn/2024/07/banner/1200x200-1200x200-2.png"/>
            <ListItemProduct :listProduct="listHp" class="mt-4" :itemCount="10" itemWidth="235px" color="bg-[none]" :isShow="true" srcImage="	https://cdn.tgdd.vn/2023/07/banner/banner-do-hoa-desk-min-1200x200.png"/>
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
  import { filterPhone, filterBrandLaptop, filterBrandPhone } from '../utils/filter'
  import { listImageLaptop } from '../utils/category'
  import ListItemProduct from '@/components/ListItemProduct/ListItemProduct.vue';
import { onMounted, ref } from 'vue';
import { fetchCountProduct, fetchProductByBrandAndCategory, fetchProductByCategory, fetchProductSort } from '@/Hooks/FetchProductLimit';
const listLaptop = ref([])
const listMac = ref([])
const listHp = ref([])
const countProduct = ref(0)
const category = ref('laptop')
const brandMac = ref('Apple')
const brandHp = ref('HP')
const brand = ref('')
const limit = ref(10)

  onMounted(async() =>{
    await fetchProductSort(listLaptop, category.value, limit.value,'discount-desc');
    fetchProductByBrandAndCategory(listMac,category.value,brandMac.value)
    fetchProductByBrandAndCategory(listHp,category.value,brandHp.value)
    fetchCountProduct(countProduct,category.value)
  })
  const handleBrandSelected = async (selectedBrand) => {
  brand.value = selectedBrand;
  await fetchProductByBrandAndCategory(listLaptop,category.value,brand.value)
  await fetchCountProduct(countProduct,category.value, brand.value)
};

const handleSetAllProduct = () =>{
  brand.value = ''
  fetchProductByCategory(listLaptop,category.value,limit.value)
  fetchCountProduct(countProduct,category.value)
}
  </script>
  
  <style>
  
  </style>