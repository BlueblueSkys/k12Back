<template>
  <div>
    <infoClassifyControl></infoClassifyControl>
    <infoList></infoList>
  </div>
</template>

<script>
  import infoClassifyControl from './infoClassifyControl'
  import infoList from './infoList'
    export default {
        name: "infoControl",
        components:{
          infoList,
          infoClassifyControl
        }
    }
</script>

<style scoped>

</style>
