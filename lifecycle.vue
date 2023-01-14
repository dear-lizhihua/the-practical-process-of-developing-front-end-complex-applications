<template>
  <div class="header">{{title}}</div>
</template>

<script setup>
import { ref } from 'vue'
const title = ref('')// 状态

// 模块创建后
title.value = 'sync: es module'

// 组件实例创建后
import { onCreated } from 'vue'
onCreated(() => {
  title.value = 'onCreated'
  ajax()
})

// DOM实例创建后
import { onMounted } from 'vue'
onMounted(() => {
  title.value = 'onMounted'
  ajax()
})

// 回调方式。不确定的返回时机，可能等待 3000ms 后，也可能在 onCreated 和 onMounted 之间
const ajax = () => {
  http.request('/').then((result) => {
    title.value = result
  })
}
</script>
