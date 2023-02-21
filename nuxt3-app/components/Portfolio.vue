<template>
  <div class="portfolio">
    <swiper class="swiper">
      <swiper-slide class="slide">Slide 1</swiper-slide>
      <swiper-slide class="slide">Slide 2</swiper-slide>
      <swiper-slide class="slide">Slide 3</swiper-slide>
      <swiper-slide class="slide">Slide 4</swiper-slide>
      <swiper-slide class="slide">Slide 5</swiper-slide>
      <swiper-slide class="slide">Slide 6</swiper-slide>
      <swiper-slide class="slide">Slide 7</swiper-slide>
      <swiper-slide class="slide">Slide 8</swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

export default defineComponent({
  name: 'Portfolio',
  title: 'Default',
  url: import.meta.url,
  components: {
    Swiper,
    SwiperSlide
  }
})
</script>

<style scoped>

</style>