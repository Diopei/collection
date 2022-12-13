import { defineStore, _ActionsTree, _GettersTree } from "pinia";

// 將其命名為useXXXStore，就像vue3的composable一樣
const useStore = defineStore("main", {
    state : () => ({}),
    actions: {},
    getters: {},
});

export default useStore;
