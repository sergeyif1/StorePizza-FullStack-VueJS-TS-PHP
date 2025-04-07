<script setup lang="ts">
import { withDefaults, defineProps } from "vue";
import { cn } from "@/lib/utils";
import Title from "../Title.vue";
import ProductCard from "./Product-Card.vue";

interface Props {
  title: string;
  items: any[];
  ListClassName?: string;
  categoryId: number;
  className?: string;
}

const props = withDefaults(defineProps<Props>(), {
  title: undefined,
  items: undefined,
  ListClassName: undefined,
  categoryId: undefined,
  className: undefined,
});
</script>

<template>
  <div :class="className">
    <Title :text="title" size="lg" class="font-extrabold mb-5" />

    <div :class="cn('grid grid-cols-3 gap-[50px]', ListClassName)">
      <ProductCard
        v-for="(product, i) in items"
        :key="product.id"
        :id="product.id"
        :name="product.name"
        :imageUrl="product.imageUrl"
        :price="product.items[0]?.price" />
    </div>
  </div>
</template>
