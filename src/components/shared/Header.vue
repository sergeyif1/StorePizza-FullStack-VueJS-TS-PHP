<script setup lang="ts">
import { computed } from "vue";
import Container from "@/components/shared/Container.vue";
import Button from "../ui/button/Button.vue";
import { ShoppingCart, ArrowRight, UserIcon } from "lucide-vue-next";

interface Props {
  className?: string;
}

const props = defineProps<Props>();

const computedClass = computed(
  () => `border border-b ${props.className || ""}`
);
</script>

<template>
  <header :class="computedClass">
    <Container class="flex item-container justify-between py-8">
      <!-- Левая часть -->
      <RouterLink to="/vue-router">
        <div class="flex items-center gap-4">
          <img src="@/logo.png" alt="Logo" width="35" height="35" />
          <div>
            <h1 class="text-2xl uppercase font-black">Vite + Vue + TS Pizza</h1>
            <p class="text-sm text-gray-400 leading-3">вкусней уже некуда</p>
          </div>
        </div>
      </RouterLink>

      <!-- Правая часть -->
      <div class="flex items-center gap-3">
        <Button variant="outline" class="flex items-center gap-1">
          <UserIcon :size="16" />
          Войти
        </Button>
        <div>
          <Button class="group relative">
            <b>520 S</b>
            <span :class="'h-full w-[1px] bg-gray-300 mx-3'" />
            <div
              class="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
              <ShoppingCart class="h-4 w-4 relative" :stroke-width="2" />
              <b>3</b>
            </div>
            <ArrowRight
              class="w-5 absolute right-5 transition duration-300 transform -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
          </Button>
        </div>
      </div>
    </Container>
  </header>
</template>
