import { defineProps, defineEmits } from "vue";
import { Check } from "lucide-vue-next";
export default await (async () => {
    const props = defineProps({
        modelValue: Boolean,
        className: String,
    });
    const emit = defineEmits(["update:modelValue"]);
    const toggle = () => {
        emit("update:modelValue", !props.modelValue);
    };
    debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ onClick: (__VLS_ctx.toggle) },
        ...{ class: "h-4 w-4 shrink-0 bg-gray-100 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-md flex items-center justify-center cursor-pointer transition-all" },
        ...{ class: (__VLS_ctx.modelValue ? 'bg-primary text-primary-foreground' : '') },
    });
    if (__VLS_ctx.modelValue) {
        const __VLS_0 = {}.Check;
        /** @type {[typeof __VLS_components.Check, ]} */ ;
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
            ...{ class: "h-4 w-4" },
            strokeWidth: "3",
        }));
        const __VLS_2 = __VLS_1({
            ...{ class: "h-4 w-4" },
            strokeWidth: "3",
        }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    }
    /** @type {__VLS_StyleScopedClasses['h-4']} */ ;
    /** @type {__VLS_StyleScopedClasses['w-4']} */ ;
    /** @type {__VLS_StyleScopedClasses['shrink-0']} */ ;
    /** @type {__VLS_StyleScopedClasses['bg-gray-100']} */ ;
    /** @type {__VLS_StyleScopedClasses['ring-offset-background']} */ ;
    /** @type {__VLS_StyleScopedClasses['focus-visible:outline-none']} */ ;
    /** @type {__VLS_StyleScopedClasses['focus-visible:ring-2']} */ ;
    /** @type {__VLS_StyleScopedClasses['focus-visible:ring-ring']} */ ;
    /** @type {__VLS_StyleScopedClasses['focus-visible:ring-offset-2']} */ ;
    /** @type {__VLS_StyleScopedClasses['disabled:cursor-not-allowed']} */ ;
    /** @type {__VLS_StyleScopedClasses['disabled:opacity-50']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-md']} */ ;
    /** @type {__VLS_StyleScopedClasses['flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['items-center']} */ ;
    /** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
    /** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
    /** @type {__VLS_StyleScopedClasses['transition-all']} */ ;
    /** @type {__VLS_StyleScopedClasses['h-4']} */ ;
    /** @type {__VLS_StyleScopedClasses['w-4']} */ ;
    var __VLS_dollars;
    const __VLS_self = (await import('vue')).defineComponent({
        setup() {
            return {
                Check: Check,
                toggle: toggle,
            };
        },
        emits: {},
        props: {
            modelValue: Boolean,
            className: String,
        },
    });
    return (await import('vue')).defineComponent({
        setup() {
            return {};
        },
        emits: {},
        props: {
            modelValue: Boolean,
            className: String,
        },
    });
})();
; /* PartiallyEnd: #4569/main.vue */
