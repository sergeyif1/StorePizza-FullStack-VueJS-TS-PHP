<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useCategoryStore } from "@/store/category";
import { watch } from "vue";

const props = defineProps({
  className: String,
});

// Список категорий
const cats = ref([
  { id: 1, name: "Пиццы" },
  { id: 2, name: "Салаты" },
  { id: 3, name: "Напитки" },
  { id: 4, name: "Коктейли" },
  { id: 5, name: "Закуски" },
  { id: 6, name: "Комбо" },
  { id: 7, name: "Десерты" },
]);

const categoryStore = useCategoryStore();
const { activeId: categoryActiveId } = storeToRefs(categoryStore);

watch(categoryActiveId, (newVal) => {
  console.log("📦 categoryActiveId updated:", newVal);
});

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
</script>

<template>
  <div :class="cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)">
    <a
      v-for="(cat, index) in cats"
      :key="cat.id"
      :class="
        cn(
          'flex items-center font-bold h-11 rounded-2xl px-5',
          index + 1 === categoryActiveId &&
            'bg-white shadow-md shadow-gray-200 text-primary'
        )
      ">
      <button>{{ cat.name }}</button>
    </a>
  </div>
</template>
<!-- :href="`#${cat.name}`" -->
