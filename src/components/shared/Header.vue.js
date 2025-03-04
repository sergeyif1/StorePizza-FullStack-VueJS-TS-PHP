import { computed } from 'vue';
import Container from '@/components/shared/Container.vue';
import Button from '../ui/button/Button.vue';
import UserIcon from '@/components/icons/UserIcon.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps();
const computedClass = computed(() => `border border-b ${props.className || ''}`);
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
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.header, __VLS_intrinsicElements.header)({ ...{ class: ((__VLS_ctx.computedClass)) }, });
    // @ts-ignore
    [Container, Container,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(Container, new Container({ ...{ class: ("flex item-container justify-between py-8") }, }));
    const __VLS_1 = __VLS_0({ ...{ class: ("flex item-container justify-between py-8") }, }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    const __VLS_5 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ] } */
    // @ts-ignore
    const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ to: ("vue-router "), }));
    const __VLS_7 = __VLS_6({ to: ("vue-router "), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center gap-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("text-2xl uppercase font-black") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-sm text-gray-400 leading-3") }, });
    __VLS_nonNullable(__VLS_10.slots).default;
    var __VLS_10;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center gap-3") }, });
    // @ts-ignore
    [Button, Button,];
    // @ts-ignore
    const __VLS_11 = __VLS_asFunctionalComponent(Button, new Button({ variant: ("outline"), ...{ class: ("flex items-center gap-1") }, }));
    const __VLS_12 = __VLS_11({ variant: ("outline"), ...{ class: ("flex items-center gap-1") }, }, ...__VLS_functionalComponentArgsRest(__VLS_11));
    // @ts-ignore
    [UserIcon,];
    // @ts-ignore
    const __VLS_16 = __VLS_asFunctionalComponent(UserIcon, new UserIcon({ size: ("16"), }));
    const __VLS_17 = __VLS_16({ size: ("16"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
    __VLS_nonNullable(__VLS_15.slots).default;
    var __VLS_15;
    __VLS_nonNullable(__VLS_4.slots).default;
    var __VLS_4;
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['item-container'];
    __VLS_styleScopedClasses['justify-between'];
    __VLS_styleScopedClasses['py-8'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['gap-4'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['uppercase'];
    __VLS_styleScopedClasses['font-black'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-gray-400'];
    __VLS_styleScopedClasses['leading-3'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['gap-3'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['gap-1'];
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
            Container: Container,
            Button: Button,
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
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
