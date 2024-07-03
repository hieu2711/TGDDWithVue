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
                <ListButtonBrand class="mt-2 mb-3" :filters="filterBrandWatch"/>
            </div>
            <div class="m-4">
                <ListItemProduct :itemCount="5" itemWidth="235px" color="bg-[#fcbe75]" :isShow="false" srcImage="https://cdn.tgdd.vn/2024/06/campaign/DMX---Banner-Flash-sale-1200x120-7.png"/>
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
  </script>
  
  <style>
  
  </style>