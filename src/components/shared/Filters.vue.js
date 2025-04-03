import { ref, defineProps } from "vue";
import Title from "../Title.vue";
import FilterCheckbox from "./FiltersCheckbox.vue";
import Input from "../ui/Input.vue";
import RangeSlider from "../ui/Slider.vue";
import CheckboxFiltersGroup from "./Сheckbox-Filters-Group.vue";
// Типизация пропсов
const props = defineProps({
    className: String,
});
// Значения для слайдера
const sliderValue = ref([0, 5000]);
const defaultItemsIngreedients = [
    { text: "Сырный соус", value: "1", checked: false },
    { text: "Моцарелла", value: "2", checked: false },
    { text: "Чеснок", value: "3", checked: false },
    { text: "Соленые огурчики", value: "4", checked: false },
    { text: "Сырный соус", value: "5", checked: false },
    { text: "Моцарелла", value: "6", checked: false },
    { text: "Чеснок", value: "7", checked: false },
    { text: "Соленые огурчики", value: "8", checked: false },
];
const itemsIngreedients = [
    { text: "Сырный соус", value: "1", checked: false },
    { text: "Моцарелла", value: "2", checked: false },
    { text: "Чеснок", value: "3", checked: false },
    { text: "Соленые огурчики", value: "4", checked: false },
    { text: "Сырный соус", value: "5", checked: false },
    { text: "Моцарелла", value: "6", checked: false },
    { text: "Чеснок", value: "7", checked: false },
    { text: "Соленые огурчики", value: "8", checked: false },
    { text: "Сырный соус", value: "1", checked: false },
    { text: "Моцарелла", value: "2", checked: false },
    { text: "Чеснок", value: "3", checked: false },
    { text: "Соленые огурчики", value: "4", checked: false },
    { text: "Сырный соус", value: "5", checked: false },
    { text: "Моцарелла", value: "6", checked: false },
    { text: "Чеснок", value: "7", checked: false },
    { text: "Соленые огурчики", value: "8", checked: false },
];
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: (props.className) },
});
/** @type {[typeof Title, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(Title, new Title({
    text: "Фильтрация",
    size: "sm",
    ...{ class: "mb-5 font-bold" },
}));
const __VLS_1 = __VLS_0({
    text: "Фильтрация",
    size: "sm",
    ...{ class: "mb-5 font-bold" },
}, ...__VLS_functionalComponentArgsRest(__VLS_0));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "flex flex-col gap-4" },
});
/** @type {[typeof FilterCheckbox, ]} */ ;
// @ts-ignore
const __VLS_3 = __VLS_asFunctionalComponent(FilterCheckbox, new FilterCheckbox({
    text: "Можно собирать",
    value: "1",
}));
const __VLS_4 = __VLS_3({
    text: "Можно собирать",
    value: "1",
}, ...__VLS_functionalComponentArgsRest(__VLS_3));
/** @type {[typeof FilterCheckbox, ]} */ ;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent(FilterCheckbox, new FilterCheckbox({
    text: "Новинки",
    value: "2",
}));
const __VLS_7 = __VLS_6({
    text: "Новинки",
    value: "2",
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "mt-5 border-y border-y-neutral-100 py-6 pb-7" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "font-bold m-3" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "flex gap-3 mb-5" },
});
/** @type {[typeof Input, ]} */ ;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent(Input, new Input({
    type: "number",
    placeholder: "0",
    min: (0),
    max: (1000),
    modelValue: (__VLS_ctx.sliderValue[0]),
}));
const __VLS_10 = __VLS_9({
    type: "number",
    placeholder: "0",
    min: (0),
    max: (1000),
    modelValue: (__VLS_ctx.sliderValue[0]),
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
/** @type {[typeof Input, ]} */ ;
// @ts-ignore
const __VLS_12 = __VLS_asFunctionalComponent(Input, new Input({
    type: "number",
    min: (100),
    max: (1000),
    placeholder: "1000",
    modelValue: (__VLS_ctx.sliderValue[1]),
}));
const __VLS_13 = __VLS_12({
    type: "number",
    min: (100),
    max: (1000),
    placeholder: "1000",
    modelValue: (__VLS_ctx.sliderValue[1]),
}, ...__VLS_functionalComponentArgsRest(__VLS_12));
/** @type {[typeof RangeSlider, ]} */ ;
// @ts-ignore
const __VLS_15 = __VLS_asFunctionalComponent(RangeSlider, new RangeSlider({
    min: (0),
    max: (500),
    step: (10),
    modelValue: (__VLS_ctx.sliderValue),
}));
const __VLS_16 = __VLS_15({
    min: (0),
    max: (500),
    step: (10),
    modelValue: (__VLS_ctx.sliderValue),
}, ...__VLS_functionalComponentArgsRest(__VLS_15));
/** @type {[typeof CheckboxFiltersGroup, ]} */ ;
// @ts-ignore
const __VLS_18 = __VLS_asFunctionalComponent(CheckboxFiltersGroup, new CheckboxFiltersGroup({
    title: "Ингридиенты",
    ...{ class: ('mt-5') },
    limit: (5),
    defaultItems: (__VLS_ctx.defaultItemsIngreedients),
    items: (__VLS_ctx.itemsIngreedients),
}));
const __VLS_19 = __VLS_18({
    title: "Ингридиенты",
    ...{ class: ('mt-5') },
    limit: (5),
    defaultItems: (__VLS_ctx.defaultItemsIngreedients),
    items: (__VLS_ctx.itemsIngreedients),
}, ...__VLS_functionalComponentArgsRest(__VLS_18));
/** @type {__VLS_StyleScopedClasses['mb-5']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-4']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-5']} */ ;
/** @type {__VLS_StyleScopedClasses['border-y']} */ ;
/** @type {__VLS_StyleScopedClasses['border-y-neutral-100']} */ ;
/** @type {__VLS_StyleScopedClasses['py-6']} */ ;
/** @type {__VLS_StyleScopedClasses['pb-7']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['m-3']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-3']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-5']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-5']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            Title: Title,
            FilterCheckbox: FilterCheckbox,
            Input: Input,
            RangeSlider: RangeSlider,
            CheckboxFiltersGroup: CheckboxFiltersGroup,
            sliderValue: sliderValue,
            defaultItemsIngreedients: defaultItemsIngreedients,
            itemsIngreedients: itemsIngreedients,
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
