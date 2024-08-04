<template>
  <div class="flex flex-col p-4 space-y-4">
    <div class="p-4 bg-primary inline">{{ "0" + (+num + 1) }}</div>
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  num: string;
  title: string;
  description: string;
}>();
</script>
