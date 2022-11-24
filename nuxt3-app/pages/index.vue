<template>
  <div class="homePage">
    <div class="container">
      <section class="wellcome" data-bgcolor="#bcb8ad" data-textcolor="#032f35">
        <LineBackground />
        <h1 data-scroll data-scroll-speed="1"><span>Welcome</span> <span>to my</span> <span>Personal Website</span></h1>
        <p data-scroll data-scroll-speed="2" data-scroll-delay="0.2">using by Nuxt3</p>
      </section>

      <section id="sectionPin">
        <div class="pin-wrap">
          <h2>Like most front-end engineers, I have experienced generations without RWD, starting from traditional development, experiencing the separation of front and back ends, and still learning new technologies</h2>
          <img src="https://images.pexels.com/photos/5207262/pexels-photo-5207262.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=900" alt="">
          <img src="https://images.pexels.com/photos/3371358/pexels-photo-3371358.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=900" alt="">
          <img src="https://images.pexels.com/photos/3618545/pexels-photo-3618545.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=900" alt="">

        </div>
      </section>
      <section>
        <GlitchArtBackground />
        <profile-card />
      </section>
    </div>

  </div>
</template>

<script>
export default {
  name: "index"
}
</script>

<style lang="scss" scoped>

</style>