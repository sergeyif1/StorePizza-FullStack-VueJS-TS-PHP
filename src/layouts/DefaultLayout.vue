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
            <div ref="containerRef" class="flex flex-wrap gap-16">
              <ProductsGroupList
                title="Пицца"
                categoryId="1"
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
                    name: 'Гавайская',
                    imageUrl: '/1325588gfgfd.jpg',
                    price: 280,
                    items: [{ price: 280 }],
                  },
                  {
                    id: 9,
                    name: 'Пицца с морепродуктами',
                    imageUrl: '/1325588gfgfd.jpg',
                    price: 300,
                    items: [{ price: 300 }],
                  },
                  {
                    id: 10,
                    name: 'Пицца с грибами',
                    imageUrl: '/1325588gfgfd.jpg',
                    price: 220,
                    items: [{ price: 220 }],
                  },
                  {
                    id: 11,
                    name: 'Пицца с ананасами',
                    imageUrl: '/1325588gfgfd.jpg',
                    price: 240,
                    items: [{ price: 240 }],
                  },
                  {
                    id: 12,
                    name: 'Пицца с курицей',
                    imageUrl: '/1325588gfgfd.jpg',
                    price: 260,
                    items: [{ price: 260 }],
                  },
                ]" />
              <ProductsGroupList
                title="Салаты"
                categoryId="2"
                :items="[
                  {
                    id: 1,
                    name: 'Цезарь',
                    imageUrl: '/salat/11ef8d3bc9e84fb7b5cfb7f47c6fb334.avif',
                    price: 150,
                    items: [{ price: 150 }],
                  },
                  {
                    id: 2,
                    name: 'Греческий',
                    imageUrl: '/salat/11ef8d3bc9e84fb7b5cfb7f47c6fb334.avif',
                    price: 130,
                    items: [{ price: 130 }],
                  },
                  {
                    id: 3,
                    name: 'Овощной',
                    imageUrl: '/salat/11ef8d3bc9e84fb7b5cfb7f47c6fb334.avif',
                    price: 120,
                    items: [{ price: 120 }],
                  },
                  {
                    id: 4,
                    name: 'Тунец',
                    imageUrl: '/salat/11ef8d3bc9e84fb7b5cfb7f47c6fb334.avif',
                    price: 160,
                    items: [{ price: 160 }],
                  },
                  {
                    id: 5,
                    name: 'Куриный',
                    imageUrl: '/salat/11ef8d3bc9e84fb7b5cfb7f47c6fb334.avif',
                    price: 140,
                    items: [{ price: 140 }],
                  },
                ]" />
              <ProductsGroupList
                title="Напитки"
                categoryId="3"
                :items="[
                  {
                    id: 1,
                    name: 'Кока-Кола',
                    imageUrl: '/drink/01959617dc25776d8cbf65dd4af4ea60.avif',
                    price: 50,
                    items: [{ price: 50 }],
                  },
                  {
                    id: 2,
                    name: 'Фанта',
                    imageUrl: '/drink/0194b76f2778790e920584c191edd032.avif',
                    price: 50,
                    items: [{ price: 50 }],
                  },
                  {
                    id: 3,
                    name: 'Спрайт',
                    imageUrl: '/drink/0194b770601f78a99d9671579a5fb301.avif',
                    price: 50,
                    items: [{ price: 50 }],
                  },
                  {
                    id: 4,
                    name: 'Экспрессо',
                    imageUrl: '/drink/0195961733e974ee8f11929fc2a0e0a8.avif',
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
