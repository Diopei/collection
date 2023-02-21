<template>
<div class="homePage">
  <LineBackground />
  <h1>{{store.welcome}}</h1>
  <h3>use Nuxt3 by {{store.name}}</h3>
</div>
<GlitchArtBackground></GlitchArtBackground>
<ProfileCard></ProfileCard>
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