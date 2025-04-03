<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  modelValue: [String, Number],
  type: {
    type: String,
    default: "text",
  },
  className: String,
  placeholder: String,
  disabled: Boolean,
});

const emit = defineEmits(["update:modelValue"]);

// Функция для безопасного обновления modelValue
const updateValue = (event: Event) => {
  const target = event.target as HTMLInputElement; // Явно указываем, что target — это <input>
  if (target) {
    emit("update:modelValue", target.value);
  }
};
</script>

<script lang="ts">
export default {};
</script>

<template>
  <input
    :type="type"
    :class="`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm 
            ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none 
            focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 
            disabled:cursor-not-allowed disabled:opacity-50 ${className}`"
    :placeholder="placeholder"
    :disabled="disabled"
    :value="modelValue"
    @input="updateValue" />
</template>
