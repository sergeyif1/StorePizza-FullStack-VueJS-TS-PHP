<script setup lang="ts">
import { ref, defineProps, defineExpose, watch } from "vue";
import { SliderRoot, SliderTrack, SliderRange, SliderThumb } from "radix-vue";

// Деструктурируем пропсы
const props = defineProps<{
  className?: string;
  min?: number;
  max?: number;
  step?: number;
  modelValue: number[];
}>();

// Локальное значение слайдера
const sliderValue = ref([...props.modelValue]);

// Следим за изменением пропса и обновляем локальное состояние
watch(
  () => props.modelValue,
  (newValue) => {
    sliderValue.value = [...newValue];
  }
);

// Экспортируем ref (аналог forwardRef в React)
defineExpose({ sliderValue });
</script>

<script lang="ts">
export default {};
</script>

<template>
  <SliderRoot
    v-model="sliderValue"
    :min="min"
    :max="max"
    :step="step"
    :class="[
      'relative flex w-full touch-none select-none items-center',
      className,
    ]">
    <SliderTrack
      class="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
      <SliderRange class="absolute h-full bg-primary" />
    </SliderTrack>

    <!-- Два ползунка (левый и правый) -->
    <SliderThumb
      v-for="(value, index) in sliderValue"
      :key="index"
      class="block w-5 h-5 bg-white shadow-[0_2px_10px] shadow-blackA7 rounded-[10px] hover:bg-violet-300 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-blackA8"
      aria-label="Volume" />
  </SliderRoot>

  <!-- Отображение значений под ползунками -->
  <div class="flex justify-between mt-2 text-sm text-gray-700">
    <span>{{ sliderValue[0] }}</span>
    <span>{{ sliderValue[1] }}</span>
  </div>
</template>
