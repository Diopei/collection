<template>
  <div class="layout">
    <TheHeader />
    <TheBackGround />
    我是layoutDefault
    <slot />
  </div>
</template>

<script>
export default {
  name: "default"
}
</script>

<style scoped>

</style>