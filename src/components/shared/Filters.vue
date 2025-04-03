<script setup lang="ts">
import { ref, defineProps } from "vue";
import Title from "../Title.vue";
import FilterCheckbox from "./FiltersCheckbox.vue";
import Input from "../ui/Input.vue";
import RangeSlider from "../ui/Slider.vue";
import CheckboxFiltersGroup from "./Сheckbox-Filters-Group.vue";

// Типизация пропсов
const props = defineProps({
  className: String,
});

// Значения для слайдера
const sliderValue = ref([0, 5000]);

const defaultItemsIngreedients = [
  { text: "Сырный соус", value: "1", checked: false },
  { text: "Моцарелла", value: "2", checked: false },
  { text: "Чеснок", value: "3", checked: false },
  { text: "Соленые огурчики", value: "4", checked: false },
  { text: "Сырный соус", value: "5", checked: false },
  { text: "Моцарелла", value: "6", checked: false },
  { text: "Чеснок", value: "7", checked: false },
  { text: "Соленые огурчики", value: "8", checked: false },
];

const itemsIngreedients = [
  { text: "Сырный соус", value: "1", checked: false },
  { text: "Моцарелла", value: "2", checked: false },
  { text: "Чеснок", value: "3", checked: false },
  { text: "Соленые огурчики", value: "4", checked: false },
  { text: "Сырный соус", value: "5", checked: false },
  { text: "Моцарелла", value: "6", checked: false },
  { text: "Чеснок", value: "7", checked: false },
  { text: "Соленые огурчики", value: "8", checked: false },
  { text: "Сырный соус", value: "1", checked: false },
  { text: "Моцарелла", value: "2", checked: false },
  { text: "Чеснок", value: "3", checked: false },
  { text: "Соленые огурчики", value: "4", checked: false },
  { text: "Сырный соус", value: "5", checked: false },
  { text: "Моцарелла", value: "6", checked: false },
  { text: "Чеснок", value: "7", checked: false },
  { text: "Соленые огурчики", value: "8", checked: false },
];
</script>

<template>
  <div :class="props.className">
    <!-- Заголовок -->
    <Title text="Фильтрация" size="sm" class="mb-5 font-bold" />

    <!-- Фильтры с чекбоксами -->
    <div class="flex flex-col gap-4">
      <FilterCheckbox text="Можно собирать" value="1" />
      <FilterCheckbox text="Новинки" value="2" />
    </div>

    <!-- Слайдер для цены -->
    <div class="mt-5 border-y border-y-neutral-100 py-6 pb-7">
      <p class="font-bold m-3">Цена от и до:</p>
      <div class="flex gap-3 mb-5">
        <Input
          type="number"
          placeholder="0"
          :min="0"
          :max="1000"
          v-model="sliderValue[0]" />
        <Input
          type="number"
          :min="100"
          :max="1000"
          placeholder="1000"
          v-model="sliderValue[1]" />
      </div>

      <!-- Слайдер для диапазона -->
      <RangeSlider :min="0" :max="500" :step="10" v-model="sliderValue" />
    </div>
    <CheckboxFiltersGroup
      title="Ингридиенты"
      :class="'mt-5'"
      :limit="5"
      :defaultItems="defaultItemsIngreedients"
      :items="itemsIngreedients" />
  </div>
</template>
