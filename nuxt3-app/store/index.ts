import { defineStore, _ActionsTree, _GettersTree } from "pinia";
// 將其命名為useXXXStore，就像vue3的composable一樣
export const useStore = defineStore("main", {
    state : () => {
        return {
            welcome:'Welcome to my Website',
            msg:'Like most front-end engineers, I have experienced generations without RWD, starting from traditional development, experiencing the separation of front and back ends, and still learning new technologies',
            name:'Dio Pei'
        }
    },
    actions: {},
    getters: {},
});