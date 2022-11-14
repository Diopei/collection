<template>
  <div class="layout">
    <TheHeader />
    我是layout
    <slot />
  </div>
</template>

<script>
export default {
  layout: 'dark'
}
</script>

<style scoped>

</style>