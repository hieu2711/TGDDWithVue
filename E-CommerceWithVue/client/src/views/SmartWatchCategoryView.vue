<template>
    <div>
      <Header />
      <div class="container">
        <div>
          <div>
            <CarouselBanner :listImage="listImageSmartWatch" :isShow="false"/>
          </div>
          <ListButtonBrand class="mt-3 mb-3" :filters="filterBrandSmartWatch" @brandSelected="handleBrandSelected"/>
          <div class="mt-5 ">
            <ContainerCate  :categories="categorySmartWatchList" className="bg-white rounded-lg p-2" />
         </div>
         <div class="mt-3">
            <button @click="handleSetAllProduct" class=" border-1 border-gray-300 p-1.5 rounded-md hover:border-blue-500 hover:text-blue-500 mr-3">Tất cả</button>
            <span v-if="countProduct > 0" class="font-semibold">{{ countProduct }} Đồng hồ thông minh</span>
            <span v-else class="font-semibold text-center">Không có sản phẩm để hiển thị</span>
          </div>
         <div class="mt-4">
            <ListItemProduct v-if="countProduct > 0" :listProduct="listSmartWatch" itemWidth="235px" color="bg-[none]" :isShow="false" srcImage="https://cdn.tgdd.vn/2024/03/banner/hotsale-1200x90-1.png"/>
            <ListItemProduct :listProduct="listSortPrice" class="mt-4"  itemWidth="235px" color="bg-[#397ed7]" :isShow="false" srcImage="https://cdn.tgdd.vn/2024/04/banner/MOI-RA-MAT-1200x90.png"/>
            <ListItemProduct :listProduct="listAppleWatch" class="mt-4"  itemWidth="235px" color="bg-[none]" :isShow="true" srcImage="https://cdn.tgdd.vn/2024/04/banner/thoi-trang-sanh-dieu-1200x200.png"/>
            <ListItemProduct :listProduct="listGarmin" class="mt-4"  itemWidth="235px" color="bg-[none]" :isShow="true" srcImage="https://cdn.tgdd.vn/2024/04/banner/thoi-trang-sanh-dieu-copy-1200x200.png"/>
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
  import { filterPhone, filterBrandLaptop, filterBrandSmartWatch } from '../utils/filter'
  import { listImageSmartWatch } from '../utils/category'
  import ListItemProduct from '@/components/ListItemProduct/ListItemProduct.vue';
  import { categorySmartWatchList } from '../utils/category'
import ContainerCate from '@/components/ContainerCate/ContainerCate.vue';
import { onMounted, ref } from 'vue';
import { fetchCountProduct, fetchProductByBrandAndCategory, fetchProductByCategory, fetchProductSort } from '@/Hooks/FetchProductLimit';
const listSmartWatch = ref([])
const listSortPrice = ref([])
const listAppleWatch = ref([])
const listGarmin = ref([])
const countProduct = ref(0)
const category = ref('smartwatch')
const brand = ref('')
const limit = ref(10)

  onMounted(async() =>{
    await fetchProductSort(listSmartWatch, category.value, limit.value,'discount-desc');
    await fetchProductSort(listSortPrice, category.value, limit.value,'price-desc');
    await fetchProductByBrandAndCategory(listAppleWatch,category.value,'Apple')
    await fetchProductByBrandAndCategory(listGarmin,category.value,'Garmin')
    fetchCountProduct(countProduct,category.value)
  })
  const handleBrandSelected = async (selectedBrand) => {
  brand.value = selectedBrand;
  await fetchProductByBrandAndCategory(listSmartWatch,category.value,brand.value)
  await fetchCountProduct(countProduct,category.value, brand.value)
};

const handleSetAllProduct = () =>{
  brand.value = ''
  fetchProductByCategory(listSmartWatch,category.value,limit.value)
  fetchCountProduct(countProduct,category.value)
}
  </script>
  
  <style>
  
  </style>