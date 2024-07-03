<template>
    <div>
        <div class="bg-[#fff] text-2xl flex gap-4 items-center p-3 rounded-xl cursor-pointer  active:bg-[#feb70b] ">
            <img :src="srcImage" class="w-[70px] height-[70px]" />
                {{ name }}
        </div>
    </div>
</template>

<script setup>
defineProps({
    name:String,
    srcImage: String
})
</script>

<style>

</style>