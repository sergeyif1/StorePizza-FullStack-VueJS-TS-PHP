<script setup>
import { ref, onMounted } from "vue";
import Header from "@/components/shared/Header.vue";
import Title from "@/components/Title.vue";
import Container from "@/components/shared/Container.vue";
import TopBar from "@/components/shared/TopBar.vue";
import Filters from "@/components/shared/Filters.vue";
import ProductsGroupList from "@/components/shared/Products-Group-List.vue";

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
            <div class="flex flex-wrap gap-16">
              <ProductsGroupList
                title="Пицца"
                :items="[
                  {
                    id: 1,
                    name: 'Пепперони',
                    imageUrl: '/1325588gfgfd.jpg',
                    price: 200,
                    items: [{ price: 200 }],
                  },
                  {
                    id: 2,
                    name: 'Маргарита',
                    imageUrl: '/1325588gfgfd.jpg',
                    price: 180,
                    items: [{ price: 180 }],
                  },
                  {
                    id: 3,
                    name: 'Четыре сыра',
                    imageUrl: '/1325588gfgfd.jpg',
                    price: 250,
                    items: [{ price: 250 }],
                  },
                  {
                    id: 4,
                    name: 'Мясная',
                    imageUrl: '/1325588gfgfd.jpg',
                    price: 300,
                    items: [{ price: 300 }],
                  },
                  {
                    id: 5,
                    name: 'Вегетарианская',
                    imageUrl: '/1325588gfgfd.jpg',
                    price: 220,
                    items: [{ price: 220 }],
                  },
                  {
                    id: 6,
                    name: 'Греческая',
                    imageUrl: '/1325588gfgfd.jpg',
                    price: 240,
                    items: [{ price: 240 }],
                  },
                  {
                    id: 7,
                    name: 'Капричоза',
                    imageUrl: '/1325588gfgfd.jpg',
                    price: 260,
                    items: [{ price: 260 }],
                  },
                  {
                    id: 8,
                    name: 'Сырная',
                    imageUrl: '/1325588gfgfd.jpg',
                    price: 230,
                    items: [{ price: 230 }],
                  },
                  {
                    id: 9,
                    name: 'Овощная',
                    imageUrl: '/1325588gfgfd.jpg',
                    price: 210,
                    items: [{ price: 210 }],
                  },
                  {
                    id: 10,
                    name: 'Морская',
                    imageUrl: '/1325588gfgfd.jpg',
                    price: 280,
                    items: [{ price: 280 }],
                  },
                  {
                    id: 11,
                    name: 'Пицца с грибами',
                    imageUrl: '/1325588gfgfd.jpg',
                    price: 240,
                    items: [{ price: 240 }],
                  },
                  {
                    id: 12,
                    name: 'Пицца с ананасами',
                    imageUrl: '/1325588gfgfd.jpg',
                    price: 250,
                    items: [{ price: 250 }],
                  },
                  {
                    id: 13,
                    name: 'Пицца с курицей',
                    imageUrl: '/1325588gfgfd.jpg',
                    price: 270,
                    items: [{ price: 270 }],
                  },
                  {
                    id: 14,
                    name: 'Пицца с беконом',
                    imageUrl: '/1325588gfgfd.jpg',
                    price: 290,
                    items: [{ price: 290 }],
                  },
                  {
                    id: 15,
                    name: 'Пицца с ветчиной',
                    imageUrl: '/1325588gfgfd.jpg',
                    price: 260,
                    items: [{ price: 260 }],
                  },
                  {
                    id: 16,
                    name: 'Пицца с креветками',
                    imageUrl: '/1325588gfgfd.jpg',
                    price: 320,
                    items: [{ price: 320 }],
                  },
                  {
                    id: 17,
                    name: 'Пицца с тунцом',
                    imageUrl: '/1325588gfgfd.jpg',
                    price: 300,
                    items: [{ price: 300 }],
                  },
                  {
                    id: 3,
                    name: 'Гавайская',
                    imageUrl: '/1325588gfgfd.jpg',
                    price: 220,
                    items: [{ price: 220 }],
                  },
                ]" />
              <ProductsGroupList
                title="Салаты"
                :items="[
                  {
                    id: 1,
                    name: 'Цезарь',
                    imageUrl: '/1325588gfgfd.jpg',
                    price: 150,
                    items: [{ price: 150 }],
                  },
                  {
                    id: 2,
                    name: 'Греческий',
                    imageUrl: '/1325588gfgfd.jpg',
                    price: 130,
                    items: [{ price: 130 }],
                  },
                  {
                    id: 3,
                    name: 'Овощной',
                    imageUrl: '/1325588gfgfd.jpg',
                    price: 120,
                    items: [{ price: 120 }],
                  },
                ]" />
              <ProductsGroupList
                title="Напитки"
                :items="[
                  {
                    id: 1,
                    name: 'Кока-Кола',
                    imageUrl: '/1325588gfgfd.jpg',
                    price: 50,
                    items: [{ price: 50 }],
                  },
                  {
                    id: 2,
                    name: 'Фанта',
                    imageUrl: '/1325588gfgfd.jpg',
                    price: 50,
                    items: [{ price: 50 }],
                  },
                  {
                    id: 3,
                    name: 'Спрайт',
                    imageUrl: '/1325588gfgfd.jpg',
                    price: 50,
                    items: [{ price: 50 }],
                  },
                ]" />
            </div>
          </div>
        </div>
      </Container>
      <slot />
    </main>
  </div>
</template>
