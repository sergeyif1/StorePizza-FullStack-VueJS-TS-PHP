import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useCategoryStore } from "@/store/category";
import { watch } from "vue";
const props = defineProps({
    className: String,
});
// Список категорий
const cats = ref([
    { id: 1, name: "Пиццы" },
    { id: 2, name: "Салаты" },
    { id: 3, name: "Напитки" },
    { id: 4, name: "Коктейли" },
    { id: 5, name: "Закуски" },
    { id: 6, name: "Комбо" },
    { id: 7, name: "Десерты" },
]);
const categoryStore = useCategoryStore();
const { activeId: categoryActiveId } = storeToRefs(categoryStore);
watch(categoryActiveId, (newVal) => {
    console.log("📦 categoryActiveId updated:", newVal);
});
function cn(...classes) {
    return classes.filter(Boolean).join(" ");
}
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: (__VLS_ctx.cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', __VLS_ctx.className)) },
});
for (const [cat, i] of __VLS_getVForSourceType((__VLS_ctx.cats))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
        key: (cat.id),
        ...{ class: (__VLS_ctx.cn('flex items-center font-bold h-11 rounded-2xl px-5', {
                'bg-white shadow-md shadow-gray-200 text-primary': cat.id === __VLS_ctx.categoryActiveId,
            })) },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({});
    (cat.name);
}
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            cats: cats,
            categoryActiveId: categoryActiveId,
            cn: cn,
        };
    },
    props: {
        className: String,
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        className: String,
    },
});
; /* PartiallyEnd: #4569/main.vue */
