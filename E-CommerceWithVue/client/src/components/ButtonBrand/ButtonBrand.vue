<template>
  <div class="bg-white ">
        <img :src="srcImage" :class="styleCss"/>
  </div>
</template>

<script setup>
const props = defineProps({
    srcImage: String,
    styleCss: String
})
</script>

<style>

</style>