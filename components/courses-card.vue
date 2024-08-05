<script setup lang="ts">
defineProps<{
  img: string;
  title: string;
  duration: string;
  description: string;
  button: string;
  price: string;
}>();
</script>

<template>
  <div class="w-full bg-[#f7f7f7] h-[500px]">
    <img :src="img" class="h-1/2 object-cover"/>
    <div class="w-full h-1/2 p-4 flex flex-col justify-between">
      <div class="flex justify-between">
        <h4>{{ title }}</h4>
        <span>{{ duration }}</span>
      </div>
      <p>{{ description }}</p>
      <div class="flex">
        <Button>{{ button }}</Button>
        <p>{{ price }}</p>
      </div>
    </div>
  </div>
</template>
