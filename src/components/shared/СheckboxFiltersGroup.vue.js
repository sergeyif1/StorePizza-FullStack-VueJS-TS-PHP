import { defineProps, withDefaults } from "vue";
import FiltersCheckbox from "./FiltersCheckbox.vue";
import Input from "@/components/ui/Input.vue";
const props = withDefaults(defineProps(), {
    limit: 5,
    searchInputPlaceholder: "Поиск...",
    className: "",
});
// Функция для обработки количества кликов (удалить потом)
const handleCheckedChange = (count) => {
    console.log(count);
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_withDefaultsArg = (function (t) { return t; })({
    limit: 5,
    searchInputPlaceholder: "Поиск...",
    className: "",
});
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: (props.className) },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "font-bold mb-3" },
});
(props.title);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "mb-5" },
});
/** @type {[typeof Input, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(Input, new Input({
    placeholder: (props.searchInputPlaceholder),
    ...{ class: "bg-gray-50 border-none" },
}));
const __VLS_1 = __VLS_0({
    placeholder: (props.searchInputPlaceholder),
    ...{ class: "bg-gray-50 border-none" },
}, ...__VLS_functionalComponentArgsRest(__VLS_0));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "flex flex-col gap-4 max-h-96 mt-5 pr-2 overflow-auto scrollbar" },
});
for (const [item, index] of __VLS_getVForSourceType((props.items))) {
    /** @type {[typeof FiltersCheckbox, ]} */ ;
    // @ts-ignore
    const __VLS_3 = __VLS_asFunctionalComponent(FiltersCheckbox, new FiltersCheckbox({
        key: (index),
        text: (item.text),
        value: (item.value),
        endAdornment: (item.endAdornment),
        checked: (false),
    }));
    const __VLS_4 = __VLS_3({
        key: (index),
        text: (item.text),
        value: (item.value),
        endAdornment: (item.endAdornment),
        checked: (false),
    }, ...__VLS_functionalComponentArgsRest(__VLS_3));
}
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-5']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gray-50']} */ ;
/** @type {__VLS_StyleScopedClasses['border-none']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-4']} */ ;
/** @type {__VLS_StyleScopedClasses['max-h-96']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-5']} */ ;
/** @type {__VLS_StyleScopedClasses['pr-2']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['scrollbar']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            FiltersCheckbox: FiltersCheckbox,
            Input: Input,
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
