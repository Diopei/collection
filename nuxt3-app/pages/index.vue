<template>
  <div class="homePage">
    <div class="container">
      <section class="wellcome" data-bgcolor="#bcb8ad" data-textcolor="#032f35">
        <LineBackground />
        <h1 data-scroll data-scroll-speed="1"><span>Welcome</span> <span>to my</span> <span>Website</span></h1>
        <p data-scroll data-scroll-speed="2" data-scroll-delay="0.2">using Nuxt3 {{store.msg}}</p>
      </section>
      <section>
          <h3>Like most front-end engineers, I have experienced generations without RWD, starting from traditional development, experiencing the separation of front and back ends, and still learning new technologies</h3>
          <img src="https://images.pexels.com/photos/5207262/pexels-photo-5207262.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=900" alt="">
          <img src="https://images.pexels.com/photos/3371358/pexels-photo-3371358.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=900" alt="">
          <img src="https://images.pexels.com/photos/3618545/pexels-photo-3618545.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=900" alt="">
      </section>
      <section>
        <GlitchArtBackground />
        <profile-card />
      </section>
    </div>

  </div>
</template>

<script setup lang="ts">
  import { useStore } from '~/store/index'
  const store = useStore()
</script>

<style lang="scss" scoped>

</style>