<template>
<div class="homePage">
  <h1>我是首頁</h1>
  <img src="~/assets/images/dd.jpg" />
  <div id="scroll-zone">
    <header data-scroll data-scroll-sticky data-scroll-target="#scroll-zone">
      簡單的滾動效果。
    </header>
    <img class="hero-image" src="https://it-monk.com/wp-content/uploads/2021/02/1614099723447.png"/>
    <div class="title-container" data-scroll-container>
      <header data-scroll data-scroll-sticky data-scroll-target=".title-container" class="header-titles" data-scroll-offset="-60">
        然後要有點「 微妙」
      </header>
      <h1 data-scroll data-scroll-speed="-2">蝦咪!</h1>
      <h2 data-scroll data-scroll-speed="1">微妙!</h2>
      <div data-scroll data-scroll-speed="1.5"  data-scroll-direction="horizontal">
        <h3 data-scroll data-scroll-speed="2">google 關鍵字:微妙 </h3>
      </div>
      <div data-scroll data-scroll-speed="1.5">
        <h3 data-scroll data-scroll-speed="-1" data-scroll-direction="horizontal">《老子．第一五章》</h3>
        <p>古之善為士者，<strong>微妙</strong>元通，深不可識。</p>
      </div>
      <h1 data-scroll data-scroll-speed="-1"  data-scroll-direction="horizontal">哩西勒</h1>
      <h1 data-scroll data-scroll-speed="1" data-scroll-direction="horizontal">公三小</h1>
      <img width=200 src="https://images.unsplash.com/photo-1635231701198-214ad1b687c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3087&q=80"
           data-scroll data-scroll-speed="3"/>
    </div>

    <img class="hero-image" src="https://it-monk.com/wp-content/uploads/2021/02/1614015294135.png"/>
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