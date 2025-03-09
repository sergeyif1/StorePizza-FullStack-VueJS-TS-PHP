<!-- src/layouts/DefaultLayout.vue -->
<script setup>
import { ref, onMounted } from "vue";
import Header from "@/components/shared/Header.vue";
import Title from "../components/Title.vue";
import Categories from "../components/shared/Categories.vue";
import Container from "../components/shared/Container.vue";

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

<script>
export default {
  name: "DefaultLayout",
};
</script>

<style scoped>
.font-nunito {
  font-family: "Nunito", sans-serif;
}
</style>

<template>
  <div :class="fontClass">
    <Header />
    <Container className="mt-5">
      <Title text="Все пиццы" size="lg" className="font-extrabold" />
    </Container>
    <Categories />
    <main class="min-h-screen">
      <slot />
    </main>
  </div>
</template>
