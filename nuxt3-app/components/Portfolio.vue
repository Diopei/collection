<template>
  <div class="portfolio">
    <swiper class="swiper"
            :style="{
              '--swiper-navigation-color': '#fff',
              '--swiper-pagination-color': '#fff'
            }"
            :mousewheel="false"
            :effect="'fade'"
            :modules="modules"
            direction="vertical"
            :speed="600"
            :parallax="true"
            :pagination="{ clickable: true }"
    >
      <swiper-slide class="slide slide1">
        <div class="info">簡介1 <NuxtLink class="link" target="_blank" to="https://google.com.tw/">look it!</NuxtLink></div>
      </swiper-slide>
      <swiper-slide class="slide slide2">
        <div class="info">簡介2</div>
      </swiper-slide>
      <swiper-slide class="slide slide3">
        <div class="info">簡介3</div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Parallax, Pagination, EffectFade, Mousewheel } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

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
      modules: [Parallax, Pagination, EffectFade, Mousewheel]
    }
  }
})
</script>

<style scoped>

</style>