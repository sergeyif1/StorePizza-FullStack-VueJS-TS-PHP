<script setup lang="ts">
import { ref, computed, defineProps, withDefaults } from "vue";
import FiltersCheckbox from "./FiltersCheckbox.vue";
import Input from "@/components/ui/Input.vue";

// Интерфейс для элементов фильтра
interface FilterCheckboxProps {
  text: string;
  value: string;
  endAdornment?: object;
  checked: boolean;
}

// Определяем пропсы с дефолтными значениями
interface Props {
  title: string;
  items: FilterCheckboxProps[];
  defaultItems: FilterCheckboxProps[];
  limit?: number;
  searchInputPlaceholder?: string;
  className?: string;
}

const props = withDefaults(defineProps<Props>(), {
  limit: undefined,
  searchInputPlaceholder: "Поиск...",
  className: "",
});

// Реактивное состояние
const showAll = ref(false);
const searchValue = ref("");

// Фильтруем элементы по введенному значению
const filteredItems = computed(() => {
  const search = searchValue.value.trim().toLowerCase();
  return search
    ? props.defaultItems.filter((item) =>
        item.text.toLowerCase().includes(search)
      )
    : props.defaultItems;
});

// Вычисляемый список элементов (либо все, либо ограниченное количество)
const list = computed(() =>
  showAll.value
    ? filteredItems.value
    : filteredItems.value.slice(0, props.limit)
);

// Проверяем, нужно ли показывать кнопку "Показать все"
const shouldShowButton = computed(
  () => filteredItems.value.length > (props.limit || 0)
);

// Функция переключения состояния
const toggleShowAll = () => {
  showAll.value = !showAll.value;
};
</script>

<template>
  <div :class="props.className">
    <p class="font-bold mb-3">{{ props.title }}</p>

    <!-- Поле поиска отображается только если showAll === true -->
    <div v-if="showAll" class="mb-5">
      <Input
        v-model="searchValue"
        :placeholder="props.searchInputPlaceholder"
        class="bg-gray-50 border-none" />
    </div>

    <!-- Список чекбоксов -->
    <div class="flex flex-col gap-4 max-h-96 mt-5 pr-2 overflow-auto scrollbar">
      <FiltersCheckbox
        v-for="(item, index) in list"
        :key="index"
        :text="item.text"
        :value="item.value"
        :endAdornment="item.endAdornment"
        :checked="item.checked" />
    </div>

    <!-- Кнопка переключения списка -->
    <div v-if="shouldShowButton" class="border-t border-neutral-200 pt-4">
      <button @click="toggleShowAll" class="mt-3 text-primary">
        {{ showAll ? "Скрыть" : "Показать все" }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "CheckboxFiltersGroup",
};
</script>
