<script setup>
import { ref, onMounted } from "vue";
import Header from "@/components/shared/Header.vue";
import Title from "@/components/Title.vue";
import Container from "@/components/shared/Container.vue";
import TopBar from "@/components/shared/TopBar.vue";
import Filters from "@/components/shared/Filters.vue";

const fontClass = ref("");

onMounted(() => {
  // Загрузка шрифта Nunito с нужными параметрами
  const link = document.createElement("link");
  link.href =
    "https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap";
  link.rel = "stylesheet";
  document.head.appendChild(link);

  // Установка класса для применения шрифта
  fontClass.value = "font-nunito antialiased";
});
</script>

<style scoped>
.font-nunito {
  font-family: "Nunito", sans-serif;
}
</style>

<template>
  <div :class="fontClass">
    <Header />
    <Container class="mt-5">
      <Title text="Все пиццы" size="lg" class="font-extrabold" />
    </Container>
    <TopBar />

    <main class="min-h-screen">
      <Container class="mt-10 pb-14">
        <div class="flex gap-[100px]">
          <!-- Фильтрация -->
          <div class="w-[250px]">
            <Filters />
          </div>
          <!-- Список товаров -->
          <div class="flex-1">
            <div class="flex flex-wrap gap-16">Список товаров</div>
          </div>
        </div>
      </Container>
      <slot />
    </main>
  </div>
</template>
