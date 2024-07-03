<template>
  <div :class="className">
    <h3>
        {{ text }}
    </h3>
    <div class="flex gap-2 items-center justify-around cursor-pointer">
      <ItemCategory
          v-for="(category, index) in categories"
          :key="index"
          :width="category.width"
          :height="category.height"
          :srcImage="category.srcImage"
          :name="category.name"
          :price="category.price"
        />
    </div>
  </div>
</template>

<script setup>
import ItemCategory from "../ItemCategory/ItemCategory.vue"
const props = defineProps({
    text: String,
    className: String,
    categories: {
      type: Array,
      required: true,
    },
})
</script>

<style>

</style>