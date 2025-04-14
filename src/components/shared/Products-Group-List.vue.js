import { ref, withDefaults, defineProps } from "vue";
import { useIntersectionObserver } from "@vueuse/core";
import { cn } from "@/lib/utils";
import Title from "../Title.vue";
import ProductCard from "./Product-Card.vue";
import { useCategoryStore } from "@/store/category"; // импорт стора
const props = withDefaults(defineProps(), {
    title: undefined,
    items: undefined,
    ListClassName: undefined,
    categoryId: undefined,
    className: undefined,
});
const containerRef = ref(null);
// Используем стор
const categoryStore = useCategoryStore();
// Отслеживаем появление компонента в зоне видимости
useIntersectionObserver(containerRef, ([{ isIntersecting }]) => {
    if (isIntersecting) {
        console.log("🔍 Intersected (immediate check):", props.title, "→ categoryId:", props.categoryId);
        categoryStore.setActiveId(Number(props.categoryId));
    }
}, {
    threshold: 0.4,
    immediate: true, // 👈 ОБЯЗАТЕЛЬНО
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_withDefaultsArg = (function (t) { return t; })({
    title: undefined,
    items: undefined,
    ListClassName: undefined,
    categoryId: undefined,
    className: undefined,
});
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: (__VLS_ctx.className) },
    id: (__VLS_ctx.title),
    ref: "containerRef",
});
/** @type {typeof __VLS_ctx.containerRef} */ ;
/** @type {[typeof Title, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(Title, new Title({
    text: (__VLS_ctx.title),
    size: "lg",
    ...{ class: "font-extrabold mb-5" },
}));
const __VLS_1 = __VLS_0({
    text: (__VLS_ctx.title),
    size: "lg",
    ...{ class: "font-extrabold mb-5" },
}, ...__VLS_functionalComponentArgsRest(__VLS_0));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: (__VLS_ctx.cn('grid grid-cols-3 gap-[50px]', __VLS_ctx.ListClassName)) },
});
for (const [product, i] of __VLS_getVForSourceType((__VLS_ctx.items))) {
    /** @type {[typeof ProductCard, ]} */ ;
    // @ts-ignore
    const __VLS_3 = __VLS_asFunctionalComponent(ProductCard, new ProductCard({
        key: (product.id),
        id: (product.id),
        name: (product.name),
        imageUrl: (product.imageUrl),
        price: (product.items[0]?.price),
    }));
    const __VLS_4 = __VLS_3({
        key: (product.id),
        id: (product.id),
        name: (product.name),
        imageUrl: (product.imageUrl),
        price: (product.items[0]?.price),
    }, ...__VLS_functionalComponentArgsRest(__VLS_3));
}
/** @type {__VLS_StyleScopedClasses['font-extrabold']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-5']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            cn: cn,
            Title: Title,
            ProductCard: ProductCard,
            containerRef: containerRef,
        };
    },
    __typeProps: {},
    props: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeProps: {},
    props: {},
});
; /* PartiallyEnd: #4569/main.vue */
