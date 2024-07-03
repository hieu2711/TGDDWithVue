<template>
  <div class="flex flex-col items-center justify-center">
    <img :height="height" :width="width" :src="srcImage" />
    <span class="text-center font-semibold">{{ name }}</span>
    <p class="text-center text-blue-700 font-semibold">{{ price }}</p>
  </div>
</template>


<script setup>
const props = defineProps({
    height: String,
    width: String,
    srcImage: String,
    name: String,
    price:String
})
</script>

<style>

</style>