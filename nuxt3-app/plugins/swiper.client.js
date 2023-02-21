// pligins/swiper.js
import { defineNuxtPlugin } from "#app";
import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'swiper/css'
import 'swiper/css/pagination'

// 文档
// https://github.surmon.me/vue-awesome-swiper
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueAwesomeSwiper);
});