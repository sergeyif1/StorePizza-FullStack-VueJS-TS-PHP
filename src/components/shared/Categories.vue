<script setup>
import { ref } from "vue";

const props = defineProps({
  className: String,
});

const cats = ref([
  { id: 1, name: "Пиццы" },
  { id: 2, name: "Комбо" },
  { id: 3, name: "Закуски" },
  { id: 4, name: "Коктейли" },
  { id: 5, name: "Кофе" },
  { id: 6, name: "Напитки" },
  { id: 7, name: "Десерты" },
]);

const activeIndex = ref(0);

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
</script>

<template>
  <div :class="cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)">
    <a
      v-for="(cat, index) in cats"
      :key="cat.id"
      :class="
        cn('flex items-center font-bold h-11 rounded-2xl px-5', {
          'bg-white shadow-md shadow-gray-200 text-primary':
            activeIndex === index,
        })
      ">
      <button>{{ cat.name }}</button>
    </a>
  </div>
</template>
