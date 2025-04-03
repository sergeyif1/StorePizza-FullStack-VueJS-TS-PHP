import { defineProps, defineEmits } from "vue";
export default await (async () => {
    const props = defineProps({
        modelValue: [String, Number],
        type: {
            type: String,
            default: "text",
        },
        className: String,
        placeholder: String,
        disabled: Boolean,
    });
    const emit = defineEmits(["update:modelValue"]);
    // Функция для безопасного обновления modelValue
    const updateValue = (event) => {
        const target = event.target; // Явно указываем, что target — это <input>
        if (target) {
            emit("update:modelValue", target.value);
        }
    };
    debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
        ...{ onInput: (__VLS_ctx.updateValue) },
        type: (__VLS_ctx.type),
        ...{ class: (`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm 
            ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none 
            focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 
            disabled:cursor-not-allowed disabled:opacity-50 ${__VLS_ctx.className}`) },
        placeholder: (__VLS_ctx.placeholder),
        disabled: (__VLS_ctx.disabled),
        value: (__VLS_ctx.modelValue),
    });
    var __VLS_dollars;
    const __VLS_self = (await import('vue')).defineComponent({
        setup() {
            return {
                updateValue: updateValue,
            };
        },
        emits: {},
        props: {
            modelValue: [String, Number],
            type: {
                type: String,
                default: "text",
            },
            className: String,
            placeholder: String,
            disabled: Boolean,
        },
    });
    return (await import('vue')).defineComponent({
        setup() {
            return {};
        },
        emits: {},
        props: {
            modelValue: [String, Number],
            type: {
                type: String,
                default: "text",
            },
            className: String,
            placeholder: String,
            disabled: Boolean,
        },
    });
})();
; /* PartiallyEnd: #4569/main.vue */
