<script setup>
import Header from '../components/Header/Header.vue'
import Banner from '../components/Banner/Banner.vue'
import ButtonSale from '../components/ButtonSale/ButtonSale.vue'
import ListItemProduct from '../components/ListItemProduct/ListItemProduct.vue'
import ContainerCate from '../components/ContainerCate/ContainerCate.vue'
import { categorySale, categoryList } from '@/utils/category'
import { fetchProduct, fetchProductByCategory} from '@/Hooks/FetchProductLimit'
import Footer from '../components/Footer/Footer.vue'
import { onMounted, provide, ref } from 'vue'
import axios from 'axios'
import { endpoints } from '@/configs'
import { useRouter } from 'vue-router';

const router = useRouter();
const productList = ref([]);
const phoneList = ref([]);
const laptopList = ref([]);
const listCate = ref([]);
const limit = ref(12)
const limit2 = ref(10)
const phoneCate = ref('phone')
const laptopCate = ref('laptop')
const currentCategory = ref('all');
const activeButton = ref('Cho bạn');


const handleButtonClick = async (category) => {
  currentCategory.value = category;
  switch (category) {
    case 'all':
      await fetchProduct(limit2.value, listCate,endpoints.getAllProducts);
      break;
    case 'laptop':
      await fetchProductByCategory(listCate, 'laptop', limit2.value);
      break;
    case 'accessories':
      await fetchProductByCategory(listCate, 'accessories', limit2.value);
      break;
    case 'tablet':
      await fetchProductByCategory(listCate, 'tablet', limit2.value);
      break;
    default:
      break;
  }
};

onMounted(() => {
  fetchProduct(limit.value, productList,endpoints.getPromotion);
  fetchProduct(limit2.value, listCate,endpoints.getAllProducts);
  fetchProductByCategory(phoneList, phoneCate.value, 5)
  fetchProductByCategory(laptopList, laptopCate.value, 5)
});


const setActiveButton = (name) => {
  activeButton.value = name;
};

provide('activeButton', activeButton);
provide('setActiveButton', setActiveButton);

const handleLimitUpdate = async  (newLimit) => {
  limit2.value = newLimit; 
  await  fetchProduct(limit2.value, listCate,endpoints.getAllProducts);
};
</script>

<template>
  <div>
    <Header />
    <Banner />
    <div class="flex mt-[120px] container gap-3 w-full">
      <ButtonSale redirect="/phone" class="w-1/4" name="Smartphone đặc quyền" srcImage="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/Group-427320176--1--240x240.png" />
      <ButtonSale redirect="/accessories" class="w-1/4" name="Phụ kiện giảm đến 50%" srcImage="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/Group-2085661307-120x120.png" />
      <ButtonSale redirect="/laptop" class="w-1/4" name="Laptop xả kho giảm đến 35%" srcImage="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/Icon-Laptop-gia-re-120x120-2.png" />
      <ButtonSale redirect="/flash-sale" class="w-1/4" name="Giảm đến 50%++" srcImage="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/icon-100x100-100x100-28.png" />
    </div>
    <div class="container flex justify-center mt-[2rem] w-full">
      <img class="w-full" src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2024/05/banner/Frame-30-1200x100.png" />
    </div>
    <div class="container flex justify-center mt-5">
      <ListItemProduct :listProduct="productList" :itemCount="limit.value" itemWidth="200px" color="bg-[#E00710]" :isShow="false" srcImage="https://cdn.tgdd.vn/2024/06/campaign/Macdinh-1-1200x120-1.gif" />
    </div>
    <div class="container flex justify-center mt-5">
      <ListItemProduct :listProduct="phoneList" color="bg-[#FFCF11]"
      :isShow="true" :isShowAll="true"
      srcImage="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2024/06/banner/Destop-1200x120-1.png"
      redirect="/phone" />
    </div>
    <div class="container flex justify-center mt-5">
      <ListItemProduct :listProduct="laptopList" color="bg-[#b1262f]" :isShow="false" srcImage="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2024/06/campaign/Frame-1-1200x120-4.png" />
    </div>
    <div class="container mt-5">
      <ContainerCate text="Xu hướng mua sắm" :categories="categorySale" className="bg-orange-200 rounded-lg p-2" />
    </div>
    <div class="container mt-5">
      <ContainerCate text="Danh mục nổi bật" :categories="categoryList" className="bg-white rounded-lg p-2" />
    </div>
    <div class="container mt-[30px]">
      <h2>Gợi ý hôm nay</h2>
      <div class="flex gap-3 w-full">
        <ButtonSale @click="handleButtonClick('all')" class="w-1/4" name="Cho bạn" srcImage="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/mwgcart/mwgcore/ContentMwg/images/homev2/goiy-1.png" />
        <ButtonSale @click="handleButtonClick('laptop')" class="w-1/4" name="Laptop Gaming" srcImage="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/05/campaign/icon-laptop-gaming-desk-50x50-50x50-50x50-1.png" />
        <ButtonSale @click="handleButtonClick('accessories')" class="w-1/4" name="Phụ kiện giảm sốc" srcImage="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/01/campaign/pk-50-50x50-50x50-2.webp" />
        <ButtonSale @click="handleButtonClick('tablet')" class="w-1/4" name="Tablet giá rẻ" srcImage="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/05/campaign/desk11-50x50-1-50x50-1-50x50.png" />
      </div>
    </div>
    <div class="container">
      <ListItemProduct :listProduct="listCate"  itemWidth="240px" color="bg-[none]" :currentTab="currentCategory"
       :isShow="true"  :isShowAll="true"   @updateLimit="handleLimitUpdate"  :limitValue="limit2" />
    </div>
    <Footer />
  </div>
</template>
