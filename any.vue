<template>
  <div class="header">
    {{title}}
  </div>
</template>

<script setup>
import { ref } from 'vue'
// 同步状态
const title = ref('')

// DOM实例创建后
import { onMounted } from 'vue'
onMounted(() => {

})

// 异步状态
http.request('/').then((result) => { // 可能等待 3000ms 后，返回 result
  title.value = result
})
</script>
