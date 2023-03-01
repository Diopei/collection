<template>
<div class="homePage">
  <LineBackground />
  <h1>{{store.welcome}}</h1>
  <h3>use Nuxt3 by {{store.name}}</h3>
</div>
<GlitchArtBackground></GlitchArtBackground>
<ProfileCard></ProfileCard>
<Portfolio></Portfolio>
<div class="footer">
  © 2023 Diopei All Rights Reserved.　
</div>
</template>

<script>
export default {
  name: "index"
}
</script>
<script setup>
import { useStore } from '~/store/index'
const store = useStore()
</script>

<style scoped>

</style>