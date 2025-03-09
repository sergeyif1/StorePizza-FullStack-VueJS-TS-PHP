import { ref } from "vue";
const props = defineProps({
    className: String,
});
const cats = ref([
    { id: 1, name: "Пиццы" },
    { id: 2, name: "Комбо" },
    { id: 3, name: "Закуски" },
    { id: 4, name: "Коктейли" },
    { id: 5, name: "Кофе" },
    { id: 6, name: "Напитки" },
    { id: 7, name: "Десерты" },
]);
const activeIndex = ref(0);
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
for (const [cat, index] of __VLS_getVForSourceType((__VLS_ctx.cats))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
        key: (cat.id),
        ...{ class: (__VLS_ctx.cn('flex items-center font-bold h-11 rounded-2xl px-5', {
                'bg-white shadow-md shadow-gray-200 text-primary': __VLS_ctx.activeIndex === index,
            })) },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({});
    (cat.name);
}
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            $props: __VLS_makeOptional(props),
            ...props,
            cats: cats,
            activeIndex: activeIndex,
            cn: cn,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {
            $props: __VLS_makeOptional(props),
            ...props,
        };
    },
});
; /* PartiallyEnd: #4569/main.vue */
