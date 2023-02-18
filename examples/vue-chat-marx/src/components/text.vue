<template>
  <div class="text">
    <textarea
      placeholder="按 Ctrl + Enter 发送"
      :value="context.application.sessionText.getContext()"
      @input="(event) => context.application.sessionText.inputContext(event.target.value)"
      @keyup="(event) => context.application.sessionText.sendMessage(event)"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  context: {type: Object, default: null}
})
</script>

<style lang="scss" scoped>
.text {
  height: 160px;
  border-top: solid 1px #ddd;

  textarea {
    padding: 10px;
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
    font-family: "Micrsofot Yahei";
    resize: none;
  }
}
</style>
