<template>
  <div id="app">
<!--    <img src="./assets/logo.png">-->
    <!--<HelloWorld/>-->
    <saleCenter></saleCenter>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
// 引入销售中心
import saleCenter from './components/sale-center/sale_center'

export default {
  name: 'App',
  components: {
    saleCenter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
