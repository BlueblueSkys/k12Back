<template>
  <div>
    <activeControl></activeControl>
    <answerControl></answerControl>
    <opinionControl></opinionControl>
  </div>
</template>

<script>
  import activeControl from './active-control/activeControl'
  import answerControl from './answerControl/answerControl'
  import opinionControl from './opinionControl/opinionControl'

    export default {
        name: "appInfoControl",
        components:{
          activeControl,
          answerControl,
          opinionControl
        }
    }
</script>

<style scoped>

</style>
