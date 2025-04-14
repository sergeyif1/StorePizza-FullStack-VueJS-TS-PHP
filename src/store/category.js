import { defineStore } from "pinia";
export const useCategoryStore = defineStore("category", {
    state: () => ({
        activeId: 1,
    }),
    actions: {
        setActiveId(id) {
            this.activeId = id;
        },
    },
});
