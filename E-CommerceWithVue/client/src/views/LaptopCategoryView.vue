<template>
    <div>
      <Header />
      <div class="container">
        <div>
          <div>
            <CarouselBanner :listImage="listImageLaptop" :isShow="false" />
          </div>
          <div class="bg-gray-200 p-3 rounded-lg mt-3">
            <ListButtonBrand  :filters="filterBrandLaptop"/>
          </div>
          <div>
            <ListItemProduct :itemCount="5" itemWidth="235px" color="bg-[#EC165A]" :isShow="true" srcImage="https://cdn.tgdd.vn/2024/06/banner/frame-deal-desk-1920x144.png"/>
            <ListItemProduct class="mt-4" :itemCount="10" itemWidth="235px" color="bg-[#25304b]" :isShow="true" srcImage="https://cdn.tgdd.vn/2024/06/banner/Dem-Nha-via-Gaming-Desk-min-1200x200-1.png"/>
            <ListItemProduct class="mt-4" :itemCount="10" itemWidth="235px" color="bg-[none]" :isShow="true" srcImage="https://cdn.tgdd.vn/2023/11/banner/macbook-desk-2-1200x200.png"/>
            <ListItemProduct class="mt-4" :itemCount="10" itemWidth="235px" color="bg-[none]" :isShow="true" srcImage="	https://cdn.tgdd.vn/2023/07/banner/banner-do-hoa-desk-min-1200x200.png"/>
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
  </script>
  
  <style>
  
  </style>