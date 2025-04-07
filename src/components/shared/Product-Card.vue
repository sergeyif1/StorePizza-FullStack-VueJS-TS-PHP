<script lang="ts" setup>
import { withDefaults, defineProps } from "vue";
import { Plus } from "lucide-vue-next";
import { RouterLink } from "vue-router";
import Title from "../Title.vue";
import Button from "../ui/button/Button.vue";

interface Props {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  className?: string;
}

const props = withDefaults(defineProps<Props>(), {
  className: "",
});
</script>

<template>
  <div :class="className">
    <RouterLink :to="`/product/${id}`">
      <div class="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
        <img :src="imageUrl" :alt="name" class="w-[215px]" />
      </div>

      <Title :text="name" size="sm" class="mb-1 mt-3 font-bold" />

      <p class="text-sm text-gray-400">
        Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус
        альфредо, чеснок
      </p>
    </RouterLink>

    <div class="flex justify-between items-center mt-4">
      <span class="text-[20px]"
        >от <b>{{ price }} ₴</b></span
      >

      <Button variant="secondary">
        <Plus class="w-5 h-5 mr-1" />
        Добавить
      </Button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "ProductCard",
};
</script>
