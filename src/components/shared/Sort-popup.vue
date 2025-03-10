<script setup>
import { defineProps } from "vue";
import { ArrowUpDown } from "lucide-vue-next";
import { cn } from "@/lib/utils.js";

const props = defineProps({
  className: String,
});
</script>

<template>
  <div
    :class="
      cn(
        'inline-flex items-center gap-1 bg-gray-50 px-5 h-[52px] rounded-2xl cursor-pointer',
        props.className
      )
    ">
    <ArrowUpDown class="w-4 h-4" />
    <b>Сортировка</b>
    <b class="text-primary">популярное</b>
  </div>
</template>
