<script setup lang="ts">
defineProps<{ className?: string }>();
</script>

<template>
  <div :class="['container mx-auto px-4', className]">
    <slot />
  </div>
</template>
