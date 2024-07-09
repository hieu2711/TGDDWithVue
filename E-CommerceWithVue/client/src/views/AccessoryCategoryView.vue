<template>
    <div>
      <Header />
      <div class="container">
        <div>
          <div>
            <CarouselBanner :listImage="listImageAccessory" />
          </div>
          <div class="flex gap-2 mt-3 ">
              <ButtonSale class="w-1/4" name="Ngày vàng giá sốc" srcImage="https://cdn.tgdd.vn/content/flash-sale-1-200x200.png" />
              <ButtonSale class="w-1/4" name="Camera chỉ từ 390.000" srcImage="https://cdn.tgdd.vn/content/icon-camera-0506-200x200-1-200x200.png" />
              <ButtonSale class="w-1/4" name="Ốp lưng Iphone 15" srcImage="https://cdn.tgdd.vn/content/Frame-482131-200x200-5.png" />
              <ButtonSale class="w-1/4" name="Sạc dự phòng rẻ" srcImage="https://cdn.tgdd.vn/content/icon-1-200x200-5.png" />
              <ButtonSale class="w-1/4" name="Loa chỉ từ 90.000" srcImage="https://cdn.tgdd.vn/content/Frame-482135-200x200.png" />
            </div>
            <div class="flex gap-2 mt-3">
              <ButtonSale class="w-1/4" name="Phụ kiện điện thoại" srcImage="https://cdn.tgdd.vn/content/Phone-90x110.png" />
              <ButtonSale class="w-1/4" name="Phụ kiện laptop" srcImage="https://cdn.tgdd.vn/content/PC-90x110.png" />
              <ButtonSale class="w-1/4" name="Thiết bị thông minh" srcImage="https://cdn.tgdd.vn/content/Nha-thong-minh-90x110.png" />
              <ButtonSale class="w-1/4" name="Âm thanh" srcImage="https://cdn.tgdd.vn/content/Loa-90x110.png" />
              <ButtonSale class="w-1/4" name="Phụ kiện đã sử dụng" srcImage="https://cdn.tgdd.vn/content/pk-cu-90x110.png" />
            </div>
            <div class="mt-5">
            <ContainerCate text="Phụ kiện nổi bật" :categories="categoryAccessoryList" className="bg-white rounded-lg p-2" />
         </div>
         <div class="bg-gray-200 p-3 mt-3">
            <ListButtonBrand  :filters="filterBrandAccessory"  @brandSelected="handleBrandSelected"/>
          </div>
          <div>
            <div class="mt-3">
            <button @click="handleSetAllProduct" class=" border-1 border-gray-300 p-1.5 rounded-md hover:border-blue-500 hover:text-blue-500 mr-3">Tất cả</button>
            <span v-if="countProduct > 0" class="font-semibold">{{ countProduct }} Phụ kiện</span>
            <span v-else class="font-semibold text-center">Không có sản phẩm để hiển thị</span>
        </div>
            <ListItemProduct :listProduct="listAccessory" itemWidth="240px" color="bg-[none]"  :isShow="true"  
            :isShowAll="true"   @updateLimit="handleLimitUpdate"  :limitValue="limit" />
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
  import {  filterBrandAccessory} from '../utils/filter'
  import { listImageAccessory } from '../utils/category'
  import ListItemProduct from '@/components/ListItemProduct/ListItemProduct.vue';
  import ButtonSale from '@/components/ButtonSale/ButtonSale.vue';
  import ContainerCate from '@/components/ContainerCate/ContainerCate.vue';
  import { categoryAccessoryList } from '../utils/category'
  import { ref, provide } from 'vue';
  
import { onMounted, watch } from 'vue';
import { fetchCountProduct, fetchProductByBrandAndCategory, fetchProductByCategory } from '@/Hooks/FetchProductLimit';
const countProduct = ref(0)
const listAccessory = ref([])
const limit = ref(10)
const category = ref('accessories')
const brand = ref('')
const activeButton = ref(null);
const setActiveButton = (buttonName) => {
  activeButton.value = buttonName;
};

provide('activeButton', activeButton);
provide('setActiveButton', setActiveButton);

onMounted(() =>{
  fetchCountProduct(countProduct,category.value)
  fetchProductByCategory(listAccessory,category.value,limit.value)
})
const handleLimitUpdate = async  (newLimit) => {
  limit.value = newLimit; 
  await  fetchProductByCategory(listAccessory,category.value,limit.value);
};
const handleBrandSelected = async (selectedBrand) => {
  brand.value = selectedBrand;
  await fetchProductByBrandAndCategory(listAccessory,category.value,brand.value)
  await fetchCountProduct(countProduct,category.value, brand.value)
};
const handleSetAllProduct = () =>{
  brand.value = ''
  fetchProductByCategory(listAccessory,category.value,limit.value)
  fetchCountProduct(countProduct,category.value)
}
  </script>
  
  <style>
  
  </style>