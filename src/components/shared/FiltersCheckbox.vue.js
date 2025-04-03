import { defineProps, defineEmits } from "vue";
import Checkbox from "@/components/ui/Checkbox.vue";
export default await (async () => {
    // const props = defineProps<FilterCheckboxProps>();
    const props = defineProps({
        text: String,
        value: String,
        endAdornment: Object,
        checked: Boolean,
    });
    const emit = defineEmits();
    debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "flex items-center space-x-2" },
    });
    /** @type {[typeof Checkbox, ]} */ ;
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(Checkbox, new Checkbox({
        ...{ 'onUpdate:checked': {} },
        checked: (__VLS_ctx.checked),
        value: (__VLS_ctx.value),
        ...{ class: "rounded-[8px] w-6 h-6" },
        id: (`checkbox-${String(__VLS_ctx.value)}`),
    }));
    const __VLS_1 = __VLS_0({
        ...{ 'onUpdate:checked': {} },
        checked: (__VLS_ctx.checked),
        value: (__VLS_ctx.value),
        ...{ class: "rounded-[8px] w-6 h-6" },
        id: (`checkbox-${String(__VLS_ctx.value)}`),
    }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    let __VLS_3;
    let __VLS_4;
    let __VLS_5;
    const __VLS_6 = {
        'onUpdate:checked': (...[$event]) => {
            __VLS_ctx.emit('update:checked', $event);
        }
    };
    var __VLS_2;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        for: (`checkbox-${String(__VLS_ctx.value)}`),
        ...{ class: "leading-none cursor-pointer flex-1" },
    });
    (__VLS_ctx.text);
    var __VLS_7 = {};
    (__VLS_ctx.endAdornment);
    /** @type {__VLS_StyleScopedClasses['flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['items-center']} */ ;
    /** @type {__VLS_StyleScopedClasses['space-x-2']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-[8px]']} */ ;
    /** @type {__VLS_StyleScopedClasses['w-6']} */ ;
    /** @type {__VLS_StyleScopedClasses['h-6']} */ ;
    /** @type {__VLS_StyleScopedClasses['leading-none']} */ ;
    /** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
    /** @type {__VLS_StyleScopedClasses['flex-1']} */ ;
    // @ts-ignore
    var __VLS_8 = __VLS_7;
    var __VLS_dollars;
    const __VLS_self = (await import('vue')).defineComponent({
        setup() {
            return {
                Checkbox: Checkbox,
                emit: emit,
            };
        },
        __typeEmits: {},
        props: {
            text: String,
            value: String,
            endAdornment: Object,
            checked: Boolean,
        },
    });
    const __VLS_component = (await import('vue')).defineComponent({
        setup() {
            return {};
        },
        __typeEmits: {},
        props: {
            text: String,
            value: String,
            endAdornment: Object,
            checked: Boolean,
        },
    });
    return {};
})();
; /* PartiallyEnd: #4569/main.vue */
