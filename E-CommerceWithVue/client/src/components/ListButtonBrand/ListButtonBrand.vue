<template>
  <div class="flex gap-2">
    <ButtonBrand 
      class="rounded-xl" 
      v-for="(filter, index) in filters" 
      :key="index" 
      :srcImage="filter.srcImage" 
      :style-css="'rounded-xl cursor-pointer'" 
    />
  </div>
</template>

<script setup>
import ButtonBrand from '../ButtonBrand/ButtonBrand.vue'

const props = defineProps({
  filters: {
    type: Array,
    required: true
  }
})
</script>

<style>
/* Thêm các kiểu dáng cần thiết */
</style>
