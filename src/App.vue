<template>
  <metainfo>
    <template v-slot:title ="{ content }">{{ content ? `${content} | 寵物線上看` : `寵物線上看`}} </template>
  </metainfo>
  <nav class="ui inverted menu">
    <router-link class="item" to="/"><i class="home icon"/></router-link>
    <router-link class="item" to="/about">我的收藏</router-link>
  </nav>
  <router-view/>
</template>
<script>
  import { useMeta } from 'vue-meta'
  export default {
    name: 'Pet-App',
    metaInfo: {
      title: '歡迎',
      titleTemplate: '%s | 寵物線上看'
    },
    setup () {
      useMeta(
          {
            title: '寵物線上看',
            meta: [
              { name: 'description', content: '寵物線上看的一個demo網頁' },
            ]
          },
      )
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983 !important;
}
</style>
