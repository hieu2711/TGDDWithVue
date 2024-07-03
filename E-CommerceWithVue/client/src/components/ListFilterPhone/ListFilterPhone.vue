<template>
  <div class="flex gap-3">
    <Button 
    v-for="(filter, index) in filters"
    :key="index"  
    :name="filter.name" 
    :stylecss="{ fontSize: '0.8rem'}" 
    className="btn btn btn-light"  
    icon="fa-solid fa-caret-down ml-3"/>
  </div>
</template>

<script setup>
import Button from '../Button/Button.vue';
const props = defineProps({
    filters: {
        type: Array,
        required: true
    }
})
</script>

<style>

</style>