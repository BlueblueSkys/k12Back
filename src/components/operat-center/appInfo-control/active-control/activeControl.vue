<template>
  <div>
    <activeClassifyControl></activeClassifyControl>
    <activeList></activeList>
  </div>
</template>

<script>
  import activeClassifyControl from './activeClassifyControl'
  import activeList from './activeList'

    export default {
        name: "activeControl",
        components:{
          activeClassifyControl,
          activeList
        }
    }
</script>

<style scoped>

</style>
