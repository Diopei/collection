<template>
<div class="homePage">
  <h1>我是首頁{{store.msg}}</h1>
  <img src="~/assets/images/dd.jpg" />
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