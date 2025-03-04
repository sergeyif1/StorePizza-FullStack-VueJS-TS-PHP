<script setup lang="ts">
interface Props {
  className?: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div :class="['container mx-auto px-4', className]">
    <slot />
  </div>
</template>
