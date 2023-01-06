<template>
  <div class="header">
    {{title}}
  </div>
</template>

<script setup>
import { ref } from 'vue'
// 同步状态
const title = ref('')

// 组件实例创建后
import { onCreated } from 'vue'
onCreated(() => {
  title.value = 'onCreated'
})

// DOM实例创建后
import { onMounted } from 'vue'
onMounted(() => {
  title.value = 'onMounted'
})

// 异步状态
// 不确定的返回时机。可能等待 3000ms 后，也可能在 onCreated 和 onMounted 之间
http.request('/').then((result) => {
  title.value = result
})
</script>
