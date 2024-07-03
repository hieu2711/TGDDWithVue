<template>
   <div class="mt-4 flex" >
      <div id="carouselExampleControls" class="carousel slide"
      :class="[isShow ? 'w-4/6' : 'w-full']" 
       data-bs-ride="carousel">
        <div class="carousel-inner">
            <div 
          v-for="(image, index) in listImage" 
          :key="index" 
          :class="['carousel-item', { active: index === 0 }]">
          <img :src="image.src" class="d-block w-100" alt="Image slide">
        </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div  v-if="isShow"  class="flex flex-col ml-2 w-2/6">
        <img src="https://cdn.tgdd.vn/2024/06/banner/M54-390x97.jpg" />
        <img src="https://cdn.tgdd.vn/2024/05/banner/390x97-390x97-2.png"  />
      </div>
    </div>
</template>

<script setup>
const props = defineProps({
    listImage:{
        type: Array,
        required: true
    },
    isShow: {
        type: Boolean,
        default: true
    }
})
</script>

<style>

</style>