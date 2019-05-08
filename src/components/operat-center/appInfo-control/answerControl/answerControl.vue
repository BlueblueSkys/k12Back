<template>
  <div>
    <typeControl></typeControl>
    <answerList></answerList>
  </div>
</template>

<script>
  import typeControl from './typeControl'
  import answerList from './answerList'
    export default {
        name: "answerControl",
        components:{
          typeControl,
          answerList
        }
    }
</script>

<style scoped>

</style>
