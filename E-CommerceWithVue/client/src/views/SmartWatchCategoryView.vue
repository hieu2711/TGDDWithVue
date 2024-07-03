<template>
    <div>
      <Header />
      <div class="container">
        <div>
          <div>
            <CarouselBanner :listImage="listImageSmartWatch" :isShow="false"/>
          </div>
          <ListButtonBrand class="mt-3 mb-3" :filters="filterBrandSmartWatch"/>
          <div class="mt-5 ">
            <ContainerCate  :categories="categorySmartWatchList" className="bg-white rounded-lg p-2" />
         </div>
         <div class="mt-4">
            <ListItemProduct :itemCount="5" itemWidth="235px" color="bg-[none]" :isShow="false" srcImage="https://cdn.tgdd.vn/2024/03/banner/hotsale-1200x90-1.png"/>
            <ListItemProduct class="mt-4" :itemCount="5" itemWidth="235px" color="bg-[#397ed7]" :isShow="false" srcImage="https://cdn.tgdd.vn/2024/04/banner/MOI-RA-MAT-1200x90.png"/>
            <ListItemProduct class="mt-4" :itemCount="10" itemWidth="235px" color="bg-[none]" :isShow="true" srcImage="https://cdn.tgdd.vn/2024/04/banner/thoi-trang-sanh-dieu-1200x200.png"/>
            <ListItemProduct class="mt-4" :itemCount="10" itemWidth="235px" color="bg-[none]" :isShow="true" srcImage="https://cdn.tgdd.vn/2024/04/banner/thoi-trang-sanh-dieu-copy-1200x200.png"/>
            <ListItemProduct class="mt-4" :itemCount="5" itemWidth="235px" color="bg-[none]" :isShow="true" srcImage="https://cdn.tgdd.vn/2024/04/banner/thoi-trang-sanh-dieu-copy-3-1200x200.png"/>
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
  </script>
  
  <style>
  
  </style>