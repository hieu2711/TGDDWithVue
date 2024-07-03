<template>
  <div>
    <Header />
    <div class="container">
      <div>
        <div>
          <CarouselBanner :listImage="listImagePhone" />
        </div>
        <ListFilterPhone class="mt-2" :filters="filterPhone"/>
        <ListButtonBrand class="mt-2 mb-3" :filters="filterBrandPhone"/>
        <div>
          <span class="font-semibold">50 Điện thoại</span>
          <ListItemProduct :itemCount="20" itemWidth="240px" color="bg-[none]" :isShow="true" />
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
import { listImagePhone } from '../utils/category'
import ListItemProduct from '@/components/ListItemProduct/ListItemProduct.vue';
</script>

<style>

</style>