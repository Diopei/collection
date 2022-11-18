<template>
  <NuxtLayout name="default">
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>
<script setup>
useHead({
  // 设置网页的标题模板，基于原有的网页标题进行更改
  titleTemplate: 'My App - %s', // or, title => `My App - ${title}`
  // 设置 <meta name="viewport" ...> 标签
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  // 设置 <meta charset="UTF-8"> 标签
  charset: 'utf-8',
  // 添加 <meta> 标签
  meta: [
    { name: 'description', content: 'My amazing site.?????' }
  ],
  // 为 <body> 添加类名
  bodyAttrs: {
    class: 'test'
  }
})
</script>