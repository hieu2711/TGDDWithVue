<template>
  <div>
    <Header />
    <div class="container">
      <div>
        <div>
          <CarouselBanner :listImage="listImagePhone" />
        </div>
        <ListFilterPhone class="mt-2" :filters="filterPhone"/>
        <ListButtonBrand class="mt-2 mb-3" :filters="filterBrandPhone" @brandSelected="handleBrandSelected"/>
        <ListFilterPrice @filterPrice="handleFilterPrice"/>
        <div>
          <div>
            <button @click="handleSetAllProduct" class=" border-1 border-gray-300 p-1.5 rounded-md hover:border-blue-500 hover:text-blue-500 mr-3">Tất cả</button>
            <span v-if="countProduct > 0" class="font-semibold">{{ countProduct }} Điện thoại</span>
            <span v-else class="font-semibold text-center">Không có sản phẩm để hiển thị</span>
        </div>
          <ListItemProduct :listProduct="listPhone"  itemWidth="240px" color="bg-[none]"
          :isShow="true"  :isShowAll="true"   @updateLimit="handleLimitUpdate"  :limitValue="limit" />
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
import { fetchCountProduct, fetchProductByBrandAndCategory, fetchProductByCategory, fetchProductByPriceAndCategory } from '@/Hooks/FetchProductLimit';
import ListFilterPrice from '@/components/ListFilterPrice/ListFilterPrice.vue'
import { onMounted, ref, watch } from 'vue';
const countProduct = ref(0)
const listPhone = ref([])
const limit = ref(10)
const category = ref('phone')
const brand = ref('')
const filterPrice = ref()

onMounted(() =>{
  fetchCountProduct(countProduct,category.value)
  fetchProductByCategory(listPhone,category.value,limit.value)
})
const handleLimitUpdate = async  (newLimit) => {
  limit.value = newLimit; 
  await  fetchProductByCategory(listPhone,category.value,limit.value);
};
const handleBrandSelected = async (selectedBrand) => {
  brand.value = selectedBrand;
  await fetchProductByBrandAndCategory(listPhone,category.value,brand.value)
  await fetchCountProduct(countProduct,category.value, brand.value)
};
const handleSetAllProduct = () =>{
  brand.value = ''
  fetchProductByCategory(listPhone,category.value,limit.value)
  fetchCountProduct(countProduct,category.value)
}
const handleFilterPrice = async (price) => {
  filterPrice.value = price
  fetchProductByPriceAndCategory(listPhone,countProduct,category.value,filterPrice.value)
}
</script>

<style>

</style>