<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import { Check } from "lucide-vue-next";

const props = defineProps({
  modelValue: Boolean,
  className: String,
});

const emit = defineEmits(["update:modelValue"]);

const toggle = () => {
  emit("update:modelValue", !props.modelValue);
};
</script>

<template>
  <div
    @click="toggle"
    class="h-4 w-4 shrink-0 bg-gray-100 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-md flex items-center justify-center cursor-pointer transition-all"
    :class="modelValue ? 'bg-primary text-primary-foreground' : ''">
    <Check v-if="modelValue" class="h-4 w-4" stroke-width="3" />
  </div>
</template>

<script lang="ts">
export default {};
</script>
