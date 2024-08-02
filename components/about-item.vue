<template>
  <div
    class="flex flex-col gap-4 border-2 p-3 sm:p-4 md:p-6 items-center justify-center text-center"
  >
    <div class="rounded-full w-52 h-52 bg-secondary grid place-content-center">
      <img :src="icon" alt="" width="100" />
    </div>
    <p>
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  icon: string;
  description: string;
}>();
</script>
