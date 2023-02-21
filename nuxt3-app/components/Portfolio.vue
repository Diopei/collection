<template>
  <div class="portfolio">
    <swiper class="swiper"
            :style="{
              '--swiper-navigation-color': '#fff',
              '--swiper-pagination-color': '#fff'
            }"
            :modules="modules"
            direction="vertical"
            :speed="600"
            :parallax="true"
            :pagination="{ clickable: true }"
    >
      <swiper-slide class="slide">
        <img src="https://images.pexels.com/photos/5207262/pexels-photo-5207262.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=900" alt="">
        <div class="info">簡介1 <NuxtLink class="link" target="_blank" to="https://google.com.tw/">look it!</NuxtLink></div>
      </swiper-slide>
      <swiper-slide class="slide">
        <img src="https://images.pexels.com/photos/3371358/pexels-photo-3371358.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=900" alt="">
        <div class="info">簡介2</div>
      </swiper-slide>
      <swiper-slide class="slide">
        <img src="https://images.pexels.com/photos/3618545/pexels-photo-3618545.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=900" alt="">
        <div class="info">簡介3</div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Parallax, Pagination, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

export default defineComponent({
  name: 'Portfolio',
  title: 'Default',
  url: import.meta.url,
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      modules: [Parallax, Pagination]
    }
  }
})
</script>

<style scoped>

</style>