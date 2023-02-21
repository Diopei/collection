import { defineStore, _ActionsTree, _GettersTree } from "pinia";
// 將其命名為useXXXStore，就像vue3的composable一樣
export const useStore = defineStore("main", {
    state : () => {
        return {
            msg:'Hello Word!'
        }
    },
    actions: {},
    getters: {},
});