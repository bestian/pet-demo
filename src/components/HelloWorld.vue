<template>
  <div class="hello">
    <h1>寵物線上看</h1>
    <div class="ui four doubling stackable cards container">
      <div class="ui attached card" v-for="p in pets" :key="p.n">
        <div class="ui image">
          <img :src="'https://loremflickr.com/320/240/pet?random='+ p.i + '&lock=' + p.i"/>
        </div>
        <div class="description">
          <h3>{{p.n}}</h3>
          價格：$NTD{{p.price}}
        </div>
        <a class="ui bottom attached button" :class = "{pink: !isMine(p), purple: isMine(p)}" tabindex="0" @click="toggle(p)">
          {{ !isMine(p) ? '加入收藏' : '從收藏中移除' }} <i class="heart icon"/>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  metaInfo: {
    title: '歡迎'
  },
  methods: {
    toggle (p) {
      var mypets = JSON.parse(localStorage.getItem('mypets') || '[]')
      if ((mypets || []).filter(function (o) {
        return o.n === p.n
      }).length > 0) {
        const ans = (mypets || []).filter(function (o) {
          return o.n !== p.n
        })
        mypets = [ ...ans]
        localStorage.setItem('mypets', JSON.stringify(mypets));
      } else {
        mypets.push(p)
        localStorage.setItem('mypets', JSON.stringify(mypets));
      }
      this.$forceUpdate()
    },
    isMine (p) {
      const mypets = JSON.parse(localStorage.getItem('mypets') || '[]')
      if ((mypets || []).filter(function (o) {
        return o.n === p.n
      }).length > 0) {
        return true
      } else {
        return false
      }
    }
  },
  data () {
    return {
      pets: [
        { i: 1, n: '小咪', price: 300 },
        { i: 2, n: '阿肥', price: 500 },
        { i: 3, n: '大頭', price: 200 },
        { i: 4, n: '珠珠', price: 1000 },
        { i: 5, n: '比爾', price: 400 },
        { i: 6, n: '邱吉', price: 300 },
        { i: 7, n: '嘟嘟', price: 200 },
        { i: 8, n: '阿胖', price: 2300 }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
