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
    ...{ class: "flex flex-wrap gap-16" },
});
var __VLS_14;
var __VLS_18 = {};
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
var __VLS_19 = __VLS_18;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            Header: Header,
            Title: Title,
            Container: Container,
            TopBar: TopBar,
            Filters: Filters,
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
