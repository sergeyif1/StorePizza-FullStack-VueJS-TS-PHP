<script setup>
import { computed, defineProps } from "vue";

const props = defineProps({
  size: {
    type: String,
    default: "sm",
    validator: (value) => ["xs", "sm", "md", "lg", "xl", "2xl"].includes(value),
  },
  className: {
    type: String,
    default: "",
  },
  text: {
    type: String,
    required: true,
  },
});

const mapTagBySize = {
  xs: "h5",
  sm: "h4",
  md: "h3",
  lg: "h2",
  xl: "h1",
  "2xl": "h1",
};

const mapClassNameBySize = {
  xs: "text-[16px]",
  sm: "text-[22px]",
  md: "text-[26px]",
  lg: "text-[32px]",
  xl: "text-[40px]",
  "2xl": "text-[48px]",
};

const tag = computed(() => mapTagBySize[props.size]);
const computedClass = computed(() =>
  `${mapClassNameBySize[props.size]} ${props.className}`.trim()
);
</script>

<script>
export default {
  name: "Title",
};
</script>

<template>
  <component :is="tag" :class="computedClass">{{ text }}</component>
</template>
