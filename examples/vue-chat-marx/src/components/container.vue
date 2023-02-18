<template>
  <div class="chat__container">
    <div class="chat__sidebar">
      <ChatCard :context="context"/>
      <ChatList :context="context"/>
    </div>
    <div class="chat__main">
      <ChatMessage :context="context"/>
      <ChatText :context="context"/>
    </div>
  </div>
</template>

<script setup>
import ChatCard from './card.vue'
import ChatList from './list.vue'
import ChatMessage from './message.vue'
import ChatText from './text.vue'

import { createContext } from 'great-marx'
import { createApplicationUserContext } from '@/context/application/user/create-context'
import { createApplicationSessionListContext } from '@/context/application/session-list/create-context'
import { createApplicationSessionCurrentContext } from '@/context/application/session-current/create-context'
import { createApplicationSessionTextContext } from '@/context/application/session-text/create-context'
import { applicationUserConfig, applicationSessionConfig } from '@/context/config'
import { onMounted, watch } from 'vue'

const context = createContext({
  option: {},
  applications: [
    {name: 'user', fn: createApplicationUserContext, config: applicationUserConfig},
    {name: 'sessionList', fn: createApplicationSessionListContext, config: applicationSessionConfig},
    {name: 'sessionCurrent', fn: createApplicationSessionCurrentContext},
    {name: 'sessionText', fn: createApplicationSessionTextContext},
  ],
  lifecycles: {
    defineService ({application, service}) {
      service.define('chat:init', async () => {
        console.log('chat:init\n', context)
        await context.application.sessionList.getSessionList()
        watch(context.application.sessionList.getList(), (newValue) => {
          console.log('CHANGE: ', newValue);
          localStorage.setItem('vue-chat-session', JSON.stringify(newValue))
        }, {deep: true})
      })
    }
  }
})

onMounted(() => {
  context.service.methods['chat:init']()
})
</script>

<style lang="scss" scoped>
.chat__container {
  margin: 20px auto;
  width: 800px;
  height: 600px;

  overflow: hidden;
  border-radius: 3px;
}

.chat__sidebar, .chat__main {
  height: 100%;
}

.chat__sidebar {
  float: left;
  width: 200px;
  color: #f4f4f4;
  background-color: #2e3238;
}

.chat__main {
  position: relative;
  overflow: hidden;
  background-color: #eee;
}

.text {
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
}

.message {
  height: calc(100% - 160px);
}
</style>
