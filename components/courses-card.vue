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
  <div class="w-full">
    <NuxtImg :src="img" />
    <div class="flex">
      <h4>{{ title }}</h4>
      <span>{{ duration }}</span>
    </div>
    <p>{{ description }}</p>
    <div class="flex">
      <Button>{{ button }}</Button>
      <p>{{ price }}</p>
    </div>
  </div>
</template>
