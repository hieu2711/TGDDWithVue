<template>
  <div class="flex gap-2 mb-3">
    <button @click="handleFilterPrice('below4')" class=" border-1 border-gray-300 p-1.5 rounded-md hover:border-blue-500 hover:text-blue-500">Dưới 4 triệu</button>
    <button @click="handleFilterPrice('from4to7')" class=" border-1 border-gray-300 p-1.5 rounded-md hover:border-blue-500 hover:text-blue-500">Từ 4 - 7 triệu</button>
    <button @click="handleFilterPrice('from7to13')" class=" border-1 border-gray-300 p-1.5 rounded-md hover:border-blue-500 hover:text-blue-500">Từ 7 - 13 triệu</button>
    <button @click="handleFilterPrice('from13to25')" class=" border-1 border-gray-300 p-1.5 rounded-md hover:border-blue-500 hover:text-blue-500">Từ 13 - 25 triệu</button>
    <button @click="handleFilterPrice('above25')" class=" border-1 border-gray-300 p-1.5 rounded-md hover:border-blue-500 hover:text-blue-500">Trên 25 triệu</button>
  </div>
</template>

<script setup>
const emit = defineEmits(['filterPrice'])

const handleFilterPrice = (price) => {
  emit('filterPrice', price)
}
</script>

<style>

</style>