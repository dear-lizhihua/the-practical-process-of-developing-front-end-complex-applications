<template>
  <Root>
    <Header />
    <Main>
      <Article />
      <Article />
    </Main>
    <Aside>
      <Item />
      <Item />
      <Item />
    </Aside>
  </Root>
</template>
<script setup>
import Root from './root.vue'
import Header from './header.vue'
import Main from './main.vue'
import Article from './article.vue'
import Aside from './aside.vue'
import Item from './item.vue'
</script>
