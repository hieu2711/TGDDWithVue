<template>
  <div>
    <button :style="[stylecss, buttonStyle]" :class="['common-button', className]">
      <span class="button-text">{{ name }}</span>
      <i :class="icon"></i>
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  className: String,
  name: String,
  icon: String,
  stylecss: Object,
});

const buttonStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '42px',
  padding: '0 10px',
  textAlign: 'center',
};
</script>

<style scoped>
.common-button {
  line-height: 1.2; 
}

.button-text {
  display: inline-block;
  max-width: 100%; 
  text-align: center;
  white-space: normal;
  word-break: break-word;
}
</style>
