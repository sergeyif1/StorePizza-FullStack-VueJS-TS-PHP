import { cn } from "@/lib/utils";
import { buttonVariants } from "./buttonVariants";
import { Loader } from "lucide-vue-next";
import { ref } from "vue";
export default await (async () => {
    const props = withDefaults(defineProps(), {
        variant: "default",
        size: "default",
        asChild: false,
        loading: false,
        disabled: false,
    });
    // Определяем ссылку на DOM-элемент
    const buttonRef = ref(null);
    // Делаем ссылку доступной для родительских компонентов
    const __VLS_exposed = { buttonRef };
    defineExpose(__VLS_exposed);
    // Выбираем компонент: либо слот, либо кнопка
    const Comp = props.asChild ? "slot" : "button";
    debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
    const __VLS_withDefaultsArg = (function (t) { return t; })({
        variant: "default",
        size: "default",
        asChild: false,
        loading: false,
        disabled: false,
    });
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    const __VLS_0 = {}.Comp;
    /** @type {[typeof __VLS_components.Comp, typeof __VLS_components.Comp, ]} */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        ref: "buttonRef",
        ...{ class: (__VLS_ctx.cn(__VLS_ctx.buttonVariants({ variant: props.variant, size: props.size }), props.class)) },
        disabled: (props.disabled || props.loading),
    }));
    const __VLS_2 = __VLS_1({
        ref: "buttonRef",
        ...{ class: (__VLS_ctx.cn(__VLS_ctx.buttonVariants({ variant: props.variant, size: props.size }), props.class)) },
        disabled: (props.disabled || props.loading),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    /** @type {typeof __VLS_ctx.buttonRef} */ ;
    var __VLS_4 = {};
    __VLS_3.slots.default;
    if (props.loading) {
        const __VLS_6 = {}.Loader;
        /** @type {[typeof __VLS_components.Loader, ]} */ ;
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({
            ...{ class: "w-5 h-5 animate-spin" },
        }));
        const __VLS_8 = __VLS_7({
            ...{ class: "w-5 h-5 animate-spin" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    }
    else {
        var __VLS_10 = {};
    }
    var __VLS_3;
    /** @type {__VLS_StyleScopedClasses['w-5']} */ ;
    /** @type {__VLS_StyleScopedClasses['h-5']} */ ;
    /** @type {__VLS_StyleScopedClasses['animate-spin']} */ ;
    // @ts-ignore
    var __VLS_5 = __VLS_4, __VLS_11 = __VLS_10;
    [__VLS_dollars.$attrs,];
    var __VLS_dollars;
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
        name: "Button",
    });
    const __VLS_component = (await import('vue')).defineComponent({
        setup() {
            return {
                ...__VLS_exposed,
            };
        },
        __typeProps: {},
        props: {},
        name: "Button",
    });
    return {};
})();
; /* PartiallyEnd: #4569/main.vue */
