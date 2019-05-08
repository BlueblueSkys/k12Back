<template>
  <div>
    <div>
      <router-link to="sIncome">收入统计</router-link>
    </div>
    <div>
      <router-link to="sRegister">注册统计</router-link>
    </div>
  </div>
</template>

<script>
  import sIncome from './s_statistics/s-income'
  import sRegister from './s_statistics/s-register'

  export default {
    name: "statistics",
    components: {
      sIncome,
      sRegister
    }
  }
</script>

<style scoped>

</style>
