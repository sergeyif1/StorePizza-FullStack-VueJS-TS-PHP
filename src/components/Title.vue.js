import { computed, defineProps } from "vue";
export default await (async () => {
    const props = defineProps({
        size: {
            type: String,
            default: "sm",
            validator: (value) => ["xs", "sm", "md", "lg", "xl", "2xl"].includes(value),
        },
        className: {
            type: String,
            default: "",
        },
        text: {
            type: String,
            required: true,
        },
    });
    const mapTagBySize = {
        xs: "h5",
        sm: "h4",
        md: "h3",
        lg: "h2",
        xl: "h1",
        "2xl": "h1",
    };
    const mapClassNameBySize = {
        xs: "text-[16px]",
        sm: "text-[22px]",
        md: "text-[26px]",
        lg: "text-[32px]",
        xl: "text-[40px]",
        "2xl": "text-[48px]",
    };
    const tag = computed(() => mapTagBySize[props.size]);
    const computedClass = computed(() => `${mapClassNameBySize[props.size]} ${props.className}`.trim());
    debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    const __VLS_0 = ((__VLS_ctx.tag));
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        ...{ class: (__VLS_ctx.computedClass) },
    }));
    const __VLS_2 = __VLS_1({
        ...{ class: (__VLS_ctx.computedClass) },
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    var __VLS_4 = {};
    __VLS_3.slots.default;
    (__VLS_ctx.text);
    var __VLS_3;
    var __VLS_dollars;
    const __VLS_self = (await import('vue')).defineComponent({
        setup() {
            return {
                $props: __VLS_makeOptional(props),
                ...props,
                tag: tag,
                computedClass: computedClass,
            };
        },
        name: "Title",
    });
    return (await import('vue')).defineComponent({
        setup() {
            return {
                $props: __VLS_makeOptional(props),
                ...props,
            };
        },
        name: "Title",
    });
})();
; /* PartiallyEnd: #4569/main.vue */
