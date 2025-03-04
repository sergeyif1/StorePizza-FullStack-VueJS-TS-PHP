<script setup lang="ts">
interface Props {
  size?: string;
}

const props = defineProps<Props>();
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    :width="size"
    :height="size">
    <!-- SVG содержимое иконки пользователя -->
  </svg>
</template>
