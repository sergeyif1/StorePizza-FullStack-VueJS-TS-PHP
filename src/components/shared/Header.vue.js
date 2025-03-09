import { computed } from "vue";
import Container from "@/components/shared/Container.vue";
import Button from "../ui/button/Button.vue";
import { ShoppingCart, ArrowRight, UserIcon } from "lucide-vue-next";
const props = defineProps();
const computedClass = computed(() => `border border-b ${props.className || ""}`);
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.header, __VLS_intrinsicElements.header)({
    ...{ class: (__VLS_ctx.computedClass) },
});
/** @type {[typeof Container, typeof Container, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(Container, new Container({
    ...{ class: "flex item-container justify-between py-8" },
}));
const __VLS_1 = __VLS_0({
    ...{ class: "flex item-container justify-between py-8" },
}, ...__VLS_functionalComponentArgsRest(__VLS_0));
__VLS_2.slots.default;
const __VLS_3 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
// @ts-ignore
const __VLS_4 = __VLS_asFunctionalComponent(__VLS_3, new __VLS_3({
    to: "/vue-router",
}));
const __VLS_5 = __VLS_4({
    to: "/vue-router",
}, ...__VLS_functionalComponentArgsRest(__VLS_4));
__VLS_6.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "flex items-center gap-4" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    src: "@/logo.png",
    alt: "Logo",
    width: "35",
    height: "35",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({
    ...{ class: "text-2xl uppercase font-black" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "text-sm text-gray-400 leading-3" },
});
var __VLS_6;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "flex items-center gap-3" },
});
/** @type {[typeof Button, typeof Button, ]} */ ;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent(Button, new Button({
    variant: "outline",
    ...{ class: "flex items-center gap-1" },
}));
const __VLS_8 = __VLS_7({
    variant: "outline",
    ...{ class: "flex items-center gap-1" },
}, ...__VLS_functionalComponentArgsRest(__VLS_7));
__VLS_9.slots.default;
const __VLS_10 = {}.UserIcon;
/** @type {[typeof __VLS_components.UserIcon, ]} */ ;
// @ts-ignore
const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({
    size: (16),
}));
const __VLS_12 = __VLS_11({
    size: (16),
}, ...__VLS_functionalComponentArgsRest(__VLS_11));
var __VLS_9;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
/** @type {[typeof Button, typeof Button, ]} */ ;
// @ts-ignore
const __VLS_14 = __VLS_asFunctionalComponent(Button, new Button({
    ...{ class: "group relative" },
}));
const __VLS_15 = __VLS_14({
    ...{ class: "group relative" },
}, ...__VLS_functionalComponentArgsRest(__VLS_14));
__VLS_16.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.b, __VLS_intrinsicElements.b)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span)({
    ...{ class: ('h-full w-[1px] bg-gray-300 mx-3') },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "flex items-center gap-1 transition duration-300 group-hover:opacity-0" },
});
const __VLS_17 = {}.ShoppingCart;
/** @type {[typeof __VLS_components.ShoppingCart, ]} */ ;
// @ts-ignore
const __VLS_18 = __VLS_asFunctionalComponent(__VLS_17, new __VLS_17({
    ...{ class: "h-4 w-4 relative" },
    strokeWidth: (2),
}));
const __VLS_19 = __VLS_18({
    ...{ class: "h-4 w-4 relative" },
    strokeWidth: (2),
}, ...__VLS_functionalComponentArgsRest(__VLS_18));
__VLS_asFunctionalElement(__VLS_intrinsicElements.b, __VLS_intrinsicElements.b)({});
const __VLS_21 = {}.ArrowRight;
/** @type {[typeof __VLS_components.ArrowRight, ]} */ ;
// @ts-ignore
const __VLS_22 = __VLS_asFunctionalComponent(__VLS_21, new __VLS_21({
    ...{ class: "w-5 absolute right-5 transition duration-300 transform -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" },
}));
const __VLS_23 = __VLS_22({
    ...{ class: "w-5 absolute right-5 transition duration-300 transform -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" },
}, ...__VLS_functionalComponentArgsRest(__VLS_22));
var __VLS_16;
var __VLS_2;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['item-container']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
/** @type {__VLS_StyleScopedClasses['py-8']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-2xl']} */ ;
/** @type {__VLS_StyleScopedClasses['uppercase']} */ ;
/** @type {__VLS_StyleScopedClasses['font-black']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-400']} */ ;
/** @type {__VLS_StyleScopedClasses['leading-3']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-3']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-1']} */ ;
/** @type {__VLS_StyleScopedClasses['group']} */ ;
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['h-full']} */ ;
/** @type {__VLS_StyleScopedClasses['w-[1px]']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gray-300']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-3']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-1']} */ ;
/** @type {__VLS_StyleScopedClasses['transition']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-300']} */ ;
/** @type {__VLS_StyleScopedClasses['group-hover:opacity-0']} */ ;
/** @type {__VLS_StyleScopedClasses['h-4']} */ ;
/** @type {__VLS_StyleScopedClasses['w-4']} */ ;
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['w-5']} */ ;
/** @type {__VLS_StyleScopedClasses['absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['right-5']} */ ;
/** @type {__VLS_StyleScopedClasses['transition']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-300']} */ ;
/** @type {__VLS_StyleScopedClasses['transform']} */ ;
/** @type {__VLS_StyleScopedClasses['-translate-x-2']} */ ;
/** @type {__VLS_StyleScopedClasses['opacity-0']} */ ;
/** @type {__VLS_StyleScopedClasses['group-hover:opacity-100']} */ ;
/** @type {__VLS_StyleScopedClasses['group-hover:translate-x-0']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            Container: Container,
            Button: Button,
            ShoppingCart: ShoppingCart,
            ArrowRight: ArrowRight,
            UserIcon: UserIcon,
            computedClass: computedClass,
        };
    },
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeProps: {},
});
; /* PartiallyEnd: #4569/main.vue */
