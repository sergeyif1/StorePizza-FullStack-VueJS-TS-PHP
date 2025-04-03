import { ref, defineProps, defineExpose, watch } from "vue";
import { SliderRoot, SliderTrack, SliderRange, SliderThumb } from "radix-vue";
export default await (async () => {
    const props = defineProps();
    // Локальное значение слайдера
    const sliderValue = ref([...props.modelValue]);
    // Следим за изменением пропса и обновляем локальное состояние
    watch(() => props.modelValue, (newValue) => {
        sliderValue.value = [...newValue];
    });
    // Экспортируем ref (аналог forwardRef в React)
    const __VLS_exposed = { sliderValue };
    defineExpose(__VLS_exposed);
    debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    const __VLS_0 = {}.SliderRoot;
    /** @type {[typeof __VLS_components.SliderRoot, typeof __VLS_components.SliderRoot, ]} */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        modelValue: (__VLS_ctx.sliderValue),
        min: (__VLS_ctx.min),
        max: (__VLS_ctx.max),
        step: (__VLS_ctx.step),
        ...{ class: ([
                'relative flex w-full touch-none select-none items-center',
                __VLS_ctx.className,
            ]) },
    }));
    const __VLS_2 = __VLS_1({
        modelValue: (__VLS_ctx.sliderValue),
        min: (__VLS_ctx.min),
        max: (__VLS_ctx.max),
        step: (__VLS_ctx.step),
        ...{ class: ([
                'relative flex w-full touch-none select-none items-center',
                __VLS_ctx.className,
            ]) },
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_3.slots.default;
    const __VLS_4 = {}.SliderTrack;
    /** @type {[typeof __VLS_components.SliderTrack, typeof __VLS_components.SliderTrack, ]} */ ;
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
        ...{ class: "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary" },
    }));
    const __VLS_6 = __VLS_5({
        ...{ class: "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_5));
    __VLS_7.slots.default;
    const __VLS_8 = {}.SliderRange;
    /** @type {[typeof __VLS_components.SliderRange, ]} */ ;
    // @ts-ignore
    const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
        ...{ class: "absolute h-full bg-primary" },
    }));
    const __VLS_10 = __VLS_9({
        ...{ class: "absolute h-full bg-primary" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    var __VLS_7;
    for (const [value, index] of __VLS_getVForSourceType((__VLS_ctx.sliderValue))) {
        const __VLS_12 = {}.SliderThumb;
        /** @type {[typeof __VLS_components.SliderThumb, ]} */ ;
        // @ts-ignore
        const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
            key: (index),
            ...{ class: "block w-5 h-5 bg-white shadow-[0_2px_10px] shadow-blackA7 rounded-[10px] hover:bg-violet-300 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-blackA8" },
            'aria-label': "Volume",
        }));
        const __VLS_14 = __VLS_13({
            key: (index),
            ...{ class: "block w-5 h-5 bg-white shadow-[0_2px_10px] shadow-blackA7 rounded-[10px] hover:bg-violet-300 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-blackA8" },
            'aria-label': "Volume",
        }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    }
    var __VLS_3;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "flex justify-between mt-2 text-sm text-gray-700" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (__VLS_ctx.sliderValue[0]);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (__VLS_ctx.sliderValue[1]);
    /** @type {__VLS_StyleScopedClasses['relative']} */ ;
    /** @type {__VLS_StyleScopedClasses['flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['w-full']} */ ;
    /** @type {__VLS_StyleScopedClasses['touch-none']} */ ;
    /** @type {__VLS_StyleScopedClasses['select-none']} */ ;
    /** @type {__VLS_StyleScopedClasses['items-center']} */ ;
    /** @type {__VLS_StyleScopedClasses['relative']} */ ;
    /** @type {__VLS_StyleScopedClasses['h-2']} */ ;
    /** @type {__VLS_StyleScopedClasses['w-full']} */ ;
    /** @type {__VLS_StyleScopedClasses['grow']} */ ;
    /** @type {__VLS_StyleScopedClasses['overflow-hidden']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-full']} */ ;
    /** @type {__VLS_StyleScopedClasses['bg-secondary']} */ ;
    /** @type {__VLS_StyleScopedClasses['absolute']} */ ;
    /** @type {__VLS_StyleScopedClasses['h-full']} */ ;
    /** @type {__VLS_StyleScopedClasses['bg-primary']} */ ;
    /** @type {__VLS_StyleScopedClasses['block']} */ ;
    /** @type {__VLS_StyleScopedClasses['w-5']} */ ;
    /** @type {__VLS_StyleScopedClasses['h-5']} */ ;
    /** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
    /** @type {__VLS_StyleScopedClasses['shadow-[0_2px_10px]']} */ ;
    /** @type {__VLS_StyleScopedClasses['shadow-blackA7']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-[10px]']} */ ;
    /** @type {__VLS_StyleScopedClasses['hover:bg-violet-300']} */ ;
    /** @type {__VLS_StyleScopedClasses['focus:outline-none']} */ ;
    /** @type {__VLS_StyleScopedClasses['focus:shadow-[0_0_0_5px]']} */ ;
    /** @type {__VLS_StyleScopedClasses['focus:shadow-blackA8']} */ ;
    /** @type {__VLS_StyleScopedClasses['flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
    /** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-gray-700']} */ ;
    var __VLS_dollars;
    const __VLS_self = (await import('vue')).defineComponent({
        setup() {
            return {
                SliderRoot: SliderRoot,
                SliderTrack: SliderTrack,
                SliderRange: SliderRange,
                SliderThumb: SliderThumb,
                sliderValue: sliderValue,
            };
        },
        __typeProps: {},
    });
    return (await import('vue')).defineComponent({
        setup() {
            return {
                ...__VLS_exposed,
            };
        },
        __typeProps: {},
    });
})();
; /* PartiallyEnd: #4569/main.vue */
