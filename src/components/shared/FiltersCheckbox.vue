<script setup lang="ts">
import { ref, defineProps, defineEmits } from "vue";
import Checkbox from "@/components/ui/Checkbox.vue";

export interface FilterCheckboxProps {
  text: string;
  value: string;
  endAdornment?: object;
  checked: boolean;
}

// const props = defineProps<FilterCheckboxProps>();

const props = defineProps({
  text: String,
  value: String,
  endAdornment: Object,
  checked: Boolean,
});

const emit = defineEmits<{
  (event: "update:checked", value: boolean): void;
}>();
</script>

<template>
  <div class="flex items-center space-x-2">
    <Checkbox
      :checked="checked"
      :value="value"
      class="rounded-[8px] w-6 h-6"
      :id="`checkbox-${String(value)}`"
      @update:checked="emit('update:checked', $event)" />
    <label
      :for="`checkbox-${String(value)}`"
      class="leading-none cursor-pointer flex-1">
      {{ text }}
    </label>
    <slot name="endAdornment">{{ endAdornment }}</slot>
  </div>
</template>

<script lang="ts">
export default {};
</script>
