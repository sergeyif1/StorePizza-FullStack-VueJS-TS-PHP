import { ref, computed, defineProps, withDefaults } from "vue";
import FiltersCheckbox from "./FiltersCheckbox.vue";
import Input from "@/components/ui/Input.vue";
export default await (async () => {
    const props = withDefaults(defineProps(), {
        limit: undefined,
        searchInputPlaceholder: "Поиск...",
        className: "",
    });
    // Реактивное состояние для показа всех элементов
    const showAll = ref(false);
    // Вычисляемый список элементов (либо все, либо ограниченное количество)
    const list = computed(() => showAll.value ? props.items : props.defaultItems.slice(0, props.limit));
    // Проверяем, нужно ли показывать кнопку "Показать все"
    const shouldShowButton = computed(() => props.items.length > (props.limit || 0));
    // Функция переключения состояния
    const toggleShowAll = () => {
        showAll.value = !showAll.value;
    };
    debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
    const __VLS_withDefaultsArg = (function (t) { return t; })({
        limit: undefined,
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
    if (__VLS_ctx.showAll) {
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
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "flex flex-col gap-4 max-h-96 mt-5 pr-2 overflow-auto scrollbar" },
    });
    for (const [item, index] of __VLS_getVForSourceType((__VLS_ctx.list))) {
        /** @type {[typeof FiltersCheckbox, ]} */ ;
        // @ts-ignore
        const __VLS_3 = __VLS_asFunctionalComponent(FiltersCheckbox, new FiltersCheckbox({
            key: (index),
            text: (item.text),
            value: (item.value),
            endAdornment: (item.endAdornment),
            checked: (item.checked),
        }));
        const __VLS_4 = __VLS_3({
            key: (index),
            text: (item.text),
            value: (item.value),
            endAdornment: (item.endAdornment),
            checked: (item.checked),
        }, ...__VLS_functionalComponentArgsRest(__VLS_3));
    }
    if (__VLS_ctx.shouldShowButton) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: "border-t border-t-neutral-400 pt-4" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
            ...{ onClick: (__VLS_ctx.toggleShowAll) },
            ...{ class: "mt-3 text-primary" },
        });
        (__VLS_ctx.showAll ? "Скрыть" : "+Показать все");
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
    /** @type {__VLS_StyleScopedClasses['border-t']} */ ;
    /** @type {__VLS_StyleScopedClasses['border-t-neutral-400']} */ ;
    /** @type {__VLS_StyleScopedClasses['pt-4']} */ ;
    /** @type {__VLS_StyleScopedClasses['mt-3']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-primary']} */ ;
    var __VLS_dollars;
    const __VLS_self = (await import('vue')).defineComponent({
        setup() {
            return {
                FiltersCheckbox: FiltersCheckbox,
                Input: Input,
                showAll: showAll,
                list: list,
                shouldShowButton: shouldShowButton,
                toggleShowAll: toggleShowAll,
            };
        },
        __typeProps: {},
        props: {},
        name: "CheckboxFiltersGroup",
    });
    return (await import('vue')).defineComponent({
        setup() {
            return {};
        },
        __typeProps: {},
        props: {},
        name: "CheckboxFiltersGroup",
    });
})();
; /* PartiallyEnd: #4569/main.vue */
