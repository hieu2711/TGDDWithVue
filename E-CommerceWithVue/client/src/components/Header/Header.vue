<template >
    <div>
    <Carousel />
    <div class="bg-[#ffd400]" style=" padding: 8px;">
        <div class="container w-full flex">
            <div class="flex items-center gap-3 w-1/3">
                <router-link to="/">
                    <img style="width: 228px;height: 60px; object-fit: cover; " src="https://img-cache.coccoc.com/image2?i=1&l=74/85802101" alt="logo" />
                </router-link>
                <Button  :stylecss="{ fontSize: '0.8rem'}" className="btn btn-warning" name="Xem giá tồn kho" icon="fa-solid fa-caret-down ml-3"/>
            </div>
            <div class="flex items-center gap-3 w-1/3 ">
                <a-input-search
                    placeholder="Bạn đang tìm gì"
                />
                <Button :stylecss="{ fontSize: '0.8rem' }" className="btn btn-warning" name="Tài khoản & đơn hàng"/>
            </div>
            <div class="flex items-center gap-3 w-1/3 ml-5">
                <Button :stylecss="{ fontSize: '0.8rem', fontWeight:'bold', padding:'10px' }" className="btn btn-warning" name="Giỏ hàng" icon="fa-solid fa-cart-shopping ml-3"/>
                <Item name="Công nghệ"/>
                <div class="bordercol"></div>
                <Item name="Hỏi đáp"/>
                <div class="bordercol"></div>
                <Item name="Game App"/>
            </div>
        </div>
        <div class="flex container mt-3 mb-3">
           <Item width="130px" v-for="(item, index) in category" :key="index" :name="item.categoryName"
            :icon="item.icon"  :params="item.params" @itemClick="navigateToCategory"/>
        </div>
    </div>
    </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
import Carousel from '../Carousel/Carousel.vue';
import Button from '../Button/Button.vue'
import Item from '../Item/Item.vue'
import { category } from '@/utils/category';

const router = useRouter();

const navigateToCategory = (params) => {
    router.push(params);
};
</script>
<style>
.bordercol {
    background-color: #ffe56c;
    height: 32px;
    width: 1px;
}
</style>