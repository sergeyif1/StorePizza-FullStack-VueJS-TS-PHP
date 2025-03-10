<script setup>
import { defineProps } from "vue";
import { cn } from "@/lib/utils";
import Container from "./Container.vue";
import Categories from "./Categories.vue";
import SortPopup from "./Sort-popup.vue";

const props = defineProps({
  className: String,
});
</script>

<template>
  <div
    :class="
      cn(
        'sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10',
        props.className
      )
    ">
    <Container class="flex items-center justify-between">
      <Categories />
      <SortPopup />
    </Container>
  </div>
</template>
