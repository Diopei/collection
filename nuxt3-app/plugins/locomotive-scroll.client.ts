// pligins/swiper.js
import { defineNuxtPlugin } from "#app";
import LocomotiveScroll from 'locomotive-scroll';
import '~/assets/css/locomotive.css'

// @ts-ignore
const scroll = new LocomotiveScroll({
    el: document.querySelector("#scroll-zone"),
    smooth: true,
    lerp: 0.2,
    repeat: true,
    tablet:{
        smooth:true,
        breakpoint:750
    },
});

// 文档
// https://github.surmon.me/vue-awesome-swiper
export default defineNuxtPlugin((nuxtApp) => {
    return nuxtApp.vueApp.use(scroll);
});