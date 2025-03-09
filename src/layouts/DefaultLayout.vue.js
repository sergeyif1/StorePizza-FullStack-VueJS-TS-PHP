import { ref, onMounted } from "vue";
import Header from "@/components/shared/Header.vue";
import Title from "../components/Title.vue";
import Categories from "../components/shared/Categories.vue";
import Container from "../components/shared/Container.vue";
export default await (async () => {
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
    debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: (__VLS_ctx.fontClass) },
    });
    /** @type {[typeof Header, ]} */ ;
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(Header, new Header({}));
    const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
    /** @type {[typeof Container, typeof Container, ]} */ ;
    // @ts-ignore
    const __VLS_3 = __VLS_asFunctionalComponent(Container, new Container({
        className: "mt-5",
    }));
    const __VLS_4 = __VLS_3({
        className: "mt-5",
    }, ...__VLS_functionalComponentArgsRest(__VLS_3));
    __VLS_5.slots.default;
    /** @type {[typeof Title, ]} */ ;
    // @ts-ignore
    const __VLS_6 = __VLS_asFunctionalComponent(Title, new Title({
        text: "Все пиццы",
        size: "lg",
        className: "font-extrabold",
    }));
    const __VLS_7 = __VLS_6({
        text: "Все пиццы",
        size: "lg",
        className: "font-extrabold",
    }, ...__VLS_functionalComponentArgsRest(__VLS_6));
    var __VLS_5;
    /** @type {[typeof Categories, ]} */ ;
    // @ts-ignore
    const __VLS_9 = __VLS_asFunctionalComponent(Categories, new Categories({}));
    const __VLS_10 = __VLS_9({}, ...__VLS_functionalComponentArgsRest(__VLS_9));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({
        ...{ class: "min-h-screen" },
    });
    var __VLS_12 = {};
    /** @type {__VLS_StyleScopedClasses['min-h-screen']} */ ;
    // @ts-ignore
    var __VLS_13 = __VLS_12;
    var __VLS_dollars;
    const __VLS_self = (await import('vue')).defineComponent({
        setup() {
            return {
                Header: Header,
                Title: Title,
                Categories: Categories,
                Container: Container,
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
    });
    return {};
})();
; /* PartiallyEnd: #4569/main.vue */
