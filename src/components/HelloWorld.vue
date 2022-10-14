<template>
  <div class="hello">
    <h1>寵物線上看</h1>
    <div class="ui four doubling stackable cards container">
      <div class="ui card" v-for="i in [1,2,3,4,5,6,7,8]" :key="i">
        <img :src="'https://loremflickr.com/320/240/pet?random='+ i"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
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
