<script setup lang="ts">
import { ref, withDefaults, defineProps } from "vue";
import { useIntersectionObserver } from "@vueuse/core";
import { cn } from "@/lib/utils";
import Title from "../Title.vue";
import ProductCard from "./Product-Card.vue";
import { useCategoryStore } from "@/store/category"; // импорт стора

// Пропсы
interface Props {
  title: string;
  items: any[];
  ListClassName?: string;
  categoryId: string;
  className?: string;
}

const props = withDefaults(defineProps<Props>(), {
  title: undefined,
  items: undefined,
  ListClassName: undefined,
  categoryId: undefined,
  className: undefined,
});

const containerRef = ref<HTMLElement | null>(null);

// Используем стор
const categoryStore = useCategoryStore();

// Отслеживаем появление компонента в зоне видимости
useIntersectionObserver(
  containerRef,
  ([{ isIntersecting }]) => {
    if (isIntersecting) {
      console.log(
        "🔍 Intersected (immediate check):",
        props.title,
        "→ categoryId:",
        props.categoryId
      );
      categoryStore.setActiveId(Number(props.categoryId));
    }
  },
  {
    threshold: 0.4,
    immediate: true,
  }
);
</script>

<template>
  <div :class="className" :id="title" ref="containerRef">
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
