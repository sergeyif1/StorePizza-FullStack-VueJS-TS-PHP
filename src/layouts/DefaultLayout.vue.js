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
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: (__VLS_ctx.fontClass) },
});
/** @type {[typeof Header, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(Header, new Header({}));
const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
/** @type {[typeof Container, typeof Container, ]} */ ;
// @ts-ignore
const __VLS_3 = __VLS_asFunctionalComponent(Container, new Container({
    ...{ class: "mt-5" },
}));
const __VLS_4 = __VLS_3({
    ...{ class: "mt-5" },
}, ...__VLS_functionalComponentArgsRest(__VLS_3));
__VLS_5.slots.default;
/** @type {[typeof Title, ]} */ ;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent(Title, new Title({
    text: "Все пиццы",
    size: "lg",
    ...{ class: "font-extrabold" },
}));
const __VLS_7 = __VLS_6({
    text: "Все пиццы",
    size: "lg",
    ...{ class: "font-extrabold" },
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
var __VLS_5;
/** @type {[typeof TopBar, ]} */ ;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent(TopBar, new TopBar({}));
const __VLS_10 = __VLS_9({}, ...__VLS_functionalComponentArgsRest(__VLS_9));
__VLS_asFunctionalElement(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({
    ...{ class: "min-h-screen" },
});
/** @type {[typeof Container, typeof Container, ]} */ ;
// @ts-ignore
const __VLS_12 = __VLS_asFunctionalComponent(Container, new Container({
    ...{ class: "mt-10 pb-14" },
}));
const __VLS_13 = __VLS_12({
    ...{ class: "mt-10 pb-14" },
}, ...__VLS_functionalComponentArgsRest(__VLS_12));
__VLS_14.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "flex gap-[100px]" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "w-[250px]" },
});
/** @type {[typeof Filters, ]} */ ;
// @ts-ignore
const __VLS_15 = __VLS_asFunctionalComponent(Filters, new Filters({}));
const __VLS_16 = __VLS_15({}, ...__VLS_functionalComponentArgsRest(__VLS_15));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "flex-1" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ref: "containerRef",
    ...{ class: "flex flex-wrap gap-16" },
});
/** @type {typeof __VLS_ctx.containerRef} */ ;
/** @type {[typeof ProductsGroupList, ]} */ ;
// @ts-ignore
const __VLS_18 = __VLS_asFunctionalComponent(ProductsGroupList, new ProductsGroupList({
    title: "",
    categoryId: "0",
    items: ([]),
}));
const __VLS_19 = __VLS_18({
    title: "",
    categoryId: "0",
    items: ([]),
}, ...__VLS_functionalComponentArgsRest(__VLS_18));
/** @type {[typeof ProductsGroupList, ]} */ ;
// @ts-ignore
const __VLS_21 = __VLS_asFunctionalComponent(ProductsGroupList, new ProductsGroupList({
    title: "Пиццы",
    categoryId: "1",
    items: ([
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
    ]),
}));
const __VLS_22 = __VLS_21({
    title: "Пиццы",
    categoryId: "1",
    items: ([
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
    ]),
}, ...__VLS_functionalComponentArgsRest(__VLS_21));
/** @type {[typeof ProductsGroupList, ]} */ ;
// @ts-ignore
const __VLS_24 = __VLS_asFunctionalComponent(ProductsGroupList, new ProductsGroupList({
    title: "Салаты",
    categoryId: "2",
    items: ([
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
    ]),
}));
const __VLS_25 = __VLS_24({
    title: "Салаты",
    categoryId: "2",
    items: ([
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
    ]),
}, ...__VLS_functionalComponentArgsRest(__VLS_24));
/** @type {[typeof ProductsGroupList, ]} */ ;
// @ts-ignore
const __VLS_27 = __VLS_asFunctionalComponent(ProductsGroupList, new ProductsGroupList({
    title: "Напитки",
    categoryId: "3",
    items: ([
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
    ]),
}));
const __VLS_28 = __VLS_27({
    title: "Напитки",
    categoryId: "3",
    items: ([
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
    ]),
}, ...__VLS_functionalComponentArgsRest(__VLS_27));
var __VLS_14;
var __VLS_30 = {};
/** @type {__VLS_StyleScopedClasses['mt-5']} */ ;
/** @type {__VLS_StyleScopedClasses['font-extrabold']} */ ;
/** @type {__VLS_StyleScopedClasses['min-h-screen']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-10']} */ ;
/** @type {__VLS_StyleScopedClasses['pb-14']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-[100px]']} */ ;
/** @type {__VLS_StyleScopedClasses['w-[250px]']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-1']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-wrap']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-16']} */ ;
// @ts-ignore
var __VLS_31 = __VLS_30;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            Header: Header,
            Title: Title,
            Container: Container,
            TopBar: TopBar,
            Filters: Filters,
            ProductsGroupList: ProductsGroupList,
            fontClass: fontClass,
        };
    },
});
const __VLS_component = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
export default {};
; /* PartiallyEnd: #4569/main.vue */
