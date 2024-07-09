<template>
  <div class="w-full">
    <img class="w-full" :src="srcImage"  />
    <ButtonFilter v-show="isShowFilter"  :currentTab="currentTab" 
    @tabChange="handleTabChange"/>
    <div :class="['pb-3 flex flex-col gap-4 items-center', color]">

      <div class="flex gap-3 justify-center pt-4 flex-wrap">
        <!-- Sử dụng vòng lặp để render số lượng ItemProduct -->
        <ItemProduct
          v-for="(product) in listProduct"
          :key="product._id"
          :product="product"
          :width="itemWidth"
        />
      </div>
      <Button
          v-if="isShow && showViewAllButton"
        :stylecss="{ fontSize: '0.8rem' }"
        class="btn btn-light px-5"
        name="Xem tất cả"
        icon="fa-solid fa-chevron-right ml-3"
         @click="handleViewAllClick"
      />
    </div>
  </div>
</template>

<script setup>
import router from '@/router';
import Button from '../Button/Button.vue';
import ItemProduct from '../ItemProduct/ItemProduct.vue';
import { ref, watch} from 'vue';
import ButtonFilter from '../ButtonFilter/ButtonFilter.vue';

// Define props
const props = defineProps({
  itemCount: {
    type: Number,
    required: true,
    default: 5,
  },
  itemWidth: {
    type: String,
    required: true,
    default: '225px',
  },
  limitValue: {
    type: Number,
    required: true,
    default: 10,
  },
  currentTab: {
    type: String,
    required: true,
    default: 'Cho bạn',
  },
  srcImage: String,
  color: String,
  isShow: Boolean,
  listProduct: Array,
  isShowAll: Boolean,
  redirect: String,
  isShowFilter:{
    type: Boolean,
    default: false
  },
  currentTab: {
    type: String,
    required: true,
    default: 'all',
  },
});
const limit = ref(props.limitValue);
const showViewAllButton = ref(props.isShowAll);
const emits = defineEmits(['updateLimit', 'tabChange']);
const handleViewAllClick = () => {
  if (props.redirect) {
    router.push(props.redirect);
  } else {
    if(props.currentTab === 'all'){
      limit.value += 30;
      emits('updateLimit', limit.value);
      showViewAllButton.value = false;
    }
    if(props.currentTab === 'laptop'){
      router.push('/laptop')
    }
    if(props.currentTab === 'accessories'){
      router.push('/accessories')
    }
    if(props.currentTab === 'tablet'){
      router.push('/tablet')

    }
  }
};
watch(() => props.limitValue, (newValue) => {
  console.log('Thay đổi từ ' + props.limitValue + ' đến ' + newValue);
  limit.value = newValue; // Theo dõi sự thay đổi của props.limitValue
});
watch(() => props.currentTab, (newTab) => {
  console.log('Con tabChange: ', newTab);
});
const handleTabChange = (newTab) => {
  emits('tabChange', newTab);
};

</script>
