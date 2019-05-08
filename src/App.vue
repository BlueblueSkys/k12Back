<template>
  <div id="app">
    <operatCenter></operatCenter>
  </div>
</template>

<script>
import operatCenter from './components/operat-center/operatCenter'
export default {
  name: 'App',
  components: {
    operatCenter
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
