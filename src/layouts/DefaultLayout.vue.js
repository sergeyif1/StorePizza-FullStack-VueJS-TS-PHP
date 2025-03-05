import { ref, onMounted } from "vue";
import Header from "@/components/shared/Header.vue";
export default await (async () => {
    const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
    const fontClass = ref("");
    onMounted(() => {
        // Загрузка шрифта Nunito с нужными параметрами
        const link = document.createElement("link");
        link.href =
            "https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap";
        link.rel = "stylesheet";
        document.head.appendChild(link);
        // Установка класса для применения шрифта
        fontClass.value = "font-nunito antialiased";
    });
    ; /* PartiallyEnd: #3632/scriptSetup.vue */
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
        // CSS variable injection 
        // CSS variable injection end 
        let __VLS_resolvedLocalAndGlobalComponents;
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ((__VLS_ctx.fontClass)) }, });
        // @ts-ignore
        [Header,];
        // @ts-ignore
        const __VLS_0 = __VLS_asFunctionalComponent(Header, new Header({}));
        const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
        __VLS_elementAsFunction(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({ ...{ class: ("min-h-screen") }, });
        var __VLS_5 = {};
        const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.Footer;
        /** @type { [typeof __VLS_components.Footer, ] } */
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({}));
        const __VLS_8 = __VLS_7({}, ...__VLS_functionalComponentArgsRest(__VLS_7));
        __VLS_styleScopedClasses['min-h-screen'];
        var __VLS_slots;
        var __VLS_inheritedAttrs;
        const __VLS_refs = {};
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
                Header: Header,
                fontClass: fontClass,
            };
        },
        name: "DefaultLayout",
    });
    const __VLS_component = (await import('vue')).defineComponent({
        setup() {
            return {};
        },
        name: "DefaultLayout",
        __typeEl: {},
    });
    return {};
})();
; /* PartiallyEnd: #3632/script.vue */
; /* PartiallyEnd: #4569/main.vue */
