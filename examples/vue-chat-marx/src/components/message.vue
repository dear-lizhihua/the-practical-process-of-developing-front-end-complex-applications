<template>
  <div class="message" v-scroll-bottom="context.application.sessionCurrent.getCurrentSession().messages">
    <ul v-if="context.application.sessionCurrent.getCurrentSession()">
      <li v-for="item in context.application.sessionCurrent.getCurrentSession().messages">
        <p class="time">
          <span>{{ context.application.sessionCurrent.formatTime(item.date) }}</span>
        </p>
        <div class="main" :class="{ self: item.self }">
          <img class="avatar" width="30" height="30" :src="item.self ? context.application.user.inner.values.img : context.application.sessionCurrent.getCurrentSession().user.img" />
          <div class="text">{{ item.content }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  context: {type: Object, default: null}
})
</script>

<style lang="scss" scoped>
.message {
  padding: 10px 15px;
  overflow-y: scroll;

  li {
    margin-bottom: 15px;
  }
  .time {
    margin: 7px 0;
    text-align: center;

    > span {
      display: inline-block;
      padding: 0 18px;
      font-size: 12px;
      color: #fff;
      border-radius: 2px;
      background-color: #dcdcdc;
    }
  }
  .avatar {
    float: left;
    margin: 0 10px 0 0;
    border-radius: 3px;
  }
  .text {
    display: inline-block;
    position: relative;
    padding: 0 10px;
    max-width: calc(100% - 40px);
    min-height: 30px;
    line-height: 2.5;
    font-size: 12px;
    text-align: left;
    word-break: break-all;
    background-color: #fafafa;
    border-radius: 4px;

    &:before {
      content: " ";
      position: absolute;
      top: 9px;
      right: 100%;
      border: 6px solid transparent;
      border-right-color: #fafafa;
    }
  }

  .self {
    text-align: right;

    .avatar {
      float: right;
      margin: 0 0 0 10px;
    }
    .text {
      background-color: #b2e281;

      &:before {
        right: inherit;
        left: 100%;
        border-right-color: transparent;
        border-left-color: #b2e281;
      }
    }
  }
}
</style>
