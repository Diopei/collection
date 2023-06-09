<template>
  <div class="portfolio">
    <!--
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
        <div class="info">Food Map ＿ 捷運美食地圖 <NuxtLink class="link" target="_blank" to="https://diopei.github.io/FooMap-Beta/">look it!</NuxtLink></div>
      </swiper-slide>
      <swiper-slide class="slide slide2">
        <div class="info">博弈官方宣傳網站 ＿ 一頁式形象網站 <NuxtLink class="link" target="_blank" to="https://wudiofficalweb.web.app/">look it!</NuxtLink></div>
      </swiper-slide>
      <swiper-slide class="slide slide3">
        <div class="info">簡介3</div>
      </swiper-slide>
    </swiper>-->
    <div class="card-section">
      <div class="card">
        <img src="@/assets/images/01.png" alt="">
        <div class="info"><NuxtLink class="link" target="_blank" to="https://diopei.github.io/FooMap-Beta/">Food Map ＿ 捷運美食地圖 </NuxtLink></div>
      </div>
      <div class="card">
        <img src="@/assets/images/p1.png" alt="">
        <div class="info"><NuxtLink class="link" target="_blank" to="https://greetings5427.com.tw/html/Work/Paragon_classic/">寶慶營造 ＿ 官方網站 </NuxtLink></div>
      </div>
      <div class="card">
        <img src="@/assets/images/p2.png" alt="">
        <div class="info"><NuxtLink class="link" target="_blank" to="https://greetings5427.com.tw/html/Work/little_blush_nail/">little_blush_nail ＿ 個人網站 </NuxtLink></div>
      </div>
      <div class="card">
        <img src="@/assets/images/p3.png" alt="">
        <div class="info"><NuxtLink class="link" target="_blank" to="https://greetings5427.com.tw/html/Work/greeting/">初見•寓所 ＿ 一頁式形象網站 </NuxtLink></div>
      </div>
      <div class="card">
        <img src="@/assets/images/p4.png" alt="">
        <div class="info"><NuxtLink class="link" target="_blank" to="https://greetings5427.com.tw/html/Work/20220109/">詠達生物科技 ＿ 一頁式形象網站 </NuxtLink></div>
      </div>
      <div class="card">
        <img src="@/assets/images/p5.png" alt="">
        <div class="info"><NuxtLink class="link" target="_blank" to="https://greetings5427.com.tw/html/Work/202102cm/">汝安診所 ＿ 預約網站 </NuxtLink></div>
      </div>
      <div class="card">
        <img src="@/assets/images/p6.png" alt="">
        <div class="info"><NuxtLink class="link" target="_blank" to="https://greetings5427.com.tw/html/Work/202101kds/">哈緹瑜珈生活館 ＿ 購物網站 </NuxtLink></div>
      </div>
      <div class="card">
        <img src="@/assets/images/02.png" alt="">
        <div class="info"><NuxtLink class="link" target="_blank" to="https://wudiofficalweb.web.app/">博弈官方宣傳網站 ＿ 一頁式形象網站 </NuxtLink></div>
      </div>
    </div>
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