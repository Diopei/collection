import { defineStore } from "pinia";
export const useStore = defineStore("main", {
    //資料
    state : () => {
        return {
            msg:'Hello Word!',
            num:0,
        }
    },
    //函式
    actions: {
        addNum(){
            this.num++
        }
    },
    //暫存機制綁定資料的函式
    getters: {},
});

