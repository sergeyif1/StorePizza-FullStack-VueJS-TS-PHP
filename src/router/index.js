import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
const routes = [
  {
    path: "/product/:id",
    name: "Product",
    component: HomeView,
  },
  { path: "/", component: HomeView, name: "home" },
  { path: "/about", component: AboutView, name: "about" },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
