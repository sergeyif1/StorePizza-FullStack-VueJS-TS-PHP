import { defineProps } from "vue";
import { cn } from "@/lib/utils";
import Container from "./Container.vue";
import Categories from "./Categories.vue";
import SortPopup from "./Sort-popup.vue";
const props = defineProps({
    className: String,
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: (__VLS_ctx.cn('sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10', props.className)) },
});
/** @type {[typeof Container, typeof Container, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(Container, new Container({
    ...{ class: "flex items-center justify-between" },
}));
const __VLS_1 = __VLS_0({
    ...{ class: "flex items-center justify-between" },
}, ...__VLS_functionalComponentArgsRest(__VLS_0));
__VLS_2.slots.default;
/** @type {[typeof Categories, ]} */ ;
// @ts-ignore
const __VLS_3 = __VLS_asFunctionalComponent(Categories, new Categories({}));
const __VLS_4 = __VLS_3({}, ...__VLS_functionalComponentArgsRest(__VLS_3));
/** @type {[typeof SortPopup, ]} */ ;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent(SortPopup, new SortPopup({}));
const __VLS_7 = __VLS_6({}, ...__VLS_functionalComponentArgsRest(__VLS_6));
var __VLS_2;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            $props: __VLS_makeOptional(props),
            ...props,
            cn: cn,
            Container: Container,
            Categories: Categories,
            SortPopup: SortPopup,
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
