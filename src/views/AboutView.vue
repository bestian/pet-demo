<template>
  <div class="about">
    <h1>我的收藏</h1>
    <div class="ui four doubling stackable cards container">
      <div class="ui attached card" v-for="p in mypets" :key="p.n">
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
  name: 'AbOut',
  metaInfo: {
    title: '我的收藏'
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
      this.mypets = JSON.parse(localStorage.getItem('mypets') || '[]')
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
      mypets: []
    }
  },
  mounted () {
    if (localStorage.mypets) {
      this.mypets = JSON.parse(localStorage.getItem('mypets') || '[]')
    }
  }
}
</script>