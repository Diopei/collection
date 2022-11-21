<template>
  <div class="layout">
    <TheHeader />
    <LineBackground />
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