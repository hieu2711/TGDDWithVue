<template>
  <div class="flex gap-2">
    <ButtonBrand 
      class="rounded-xl" 
      v-for="(filter, index) in filters" 
      :key="index" 
      :srcImage="filter.srcImage" 
      :style-css="'rounded-xl cursor-pointer'"
      @click="handleClick(filter.brand)"
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
const emit = defineEmits(['brandSelected'])

const handleClick = (brand) => {
  emit('brandSelected', brand)
}
</script>

<style>
/* Thêm các kiểu dáng cần thiết */
</style>
