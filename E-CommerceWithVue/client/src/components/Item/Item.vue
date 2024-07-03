<template>
  <div @click="handleClick" :style="{ width }" class="text-[0.9rem] text-center flex gap-2 items-center font-semibold cursor-pointer">
    <i :class="icon"></i>
    <a>{{ name }}</a>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  name: String,
  icon: String,
  width: String,
  params: String
});

const emits = defineEmits(['itemClick']);

const handleClick = () => {
  emits('itemClick', props.params);
};
</script>

<style>

</style>
