import { cn } from '@/lib/utils';
import { buttonVariants } from './buttonVariants';
import { Loader } from 'lucide-vue-next';
import { ref } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = withDefaults(defineProps(), {
    variant: 'default',
    size: 'default',
    asChild: false,
    loading: false,
    disabled: false,
});
// Определяем ссылку на DOM-элемент
const buttonRef = ref(null);
// Делаем ссылку доступной для родительских компонентов
const __VLS_exposed = { buttonRef };
defineExpose({ buttonRef });
// Выбираем компонент: либо слот, либо кнопка
const Comp = props.asChild ? 'slot' : 'button';
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_withDefaultsArg = (function (t) { return t; })({
    variant: 'default',
    size: 'default',
    asChild: false,
    loading: false,
    disabled: false,
});
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    let __VLS_resolvedLocalAndGlobalComponents;
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.Comp;
    /** @type { [typeof __VLS_components.Comp, typeof __VLS_components.Comp, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ref: ("buttonRef"), ...{ class: ((__VLS_ctx.cn(__VLS_ctx.buttonVariants({ variant: props.variant, size: props.size }), props.class))) }, disabled: ((props.disabled || props.loading)), ...(__VLS_ctx.$attrs), }));
    const __VLS_2 = __VLS_1({ ref: ("buttonRef"), ...{ class: ((__VLS_ctx.cn(__VLS_ctx.buttonVariants({ variant: props.variant, size: props.size }), props.class))) }, disabled: ((props.disabled || props.loading)), ...(__VLS_ctx.$attrs), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    // @ts-ignore navigation for `const buttonRef = ref()`
    __VLS_ctx.buttonRef;
    var __VLS_6 = {};
    if (props.loading) {
        const __VLS_7 = __VLS_resolvedLocalAndGlobalComponents.Loader;
        /** @type { [typeof __VLS_components.Loader, ] } */
        // @ts-ignore
        const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({ ...{ class: ("w-5 h-5 animate-spin") }, }));
        const __VLS_9 = __VLS_8({ ...{ class: ("w-5 h-5 animate-spin") }, }, ...__VLS_functionalComponentArgsRest(__VLS_8));
    }
    else {
        var __VLS_13 = {};
    }
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    __VLS_styleScopedClasses['w-5'];
    __VLS_styleScopedClasses['h-5'];
    __VLS_styleScopedClasses['animate-spin'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {
        "buttonRef": __VLS_6,
    };
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            cn: cn,
            buttonVariants: buttonVariants,
            Loader: Loader,
            buttonRef: buttonRef,
            Comp: Comp,
        };
    },
    __typeProps: {},
    props: {},
});
const __VLS_component = (await import('vue')).defineComponent({
    setup() {
        return {
            ...__VLS_exposed,
        };
    },
    __typeProps: {},
    props: {},
});
export default {};
; /* PartiallyEnd: #4569/main.vue */
