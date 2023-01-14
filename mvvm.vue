<template>
  <div class="header" :style="titleStyle">
    {{title}}
  </div>
</template>

<script>
import {defineComponent, ref, reactive} from 'vue'
export default defineComponent({
  setup() {
    const title = ref('')
    const titleStyle = reactive({
      fontSize: '14px'
    })

    return {
      title,
      titleStyle,
    }
  }
})
</script>
